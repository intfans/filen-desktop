import React, { memo, useState, useEffect, useRef, useCallback } from "react"
import { Flex, Text, Progress, Spinner, Image } from "@chakra-ui/react"
import { bpsToReadable, timeSince } from "../../lib/helpers"
import colors from "../../styles/colors"
import { BsFileEarmark, BsFillFolderFill } from "react-icons/bs"
import { IoSearchOutline } from "react-icons/io5"
import { AiOutlinePauseCircle } from "react-icons/ai"
import ipc from "../../lib/ipc"
import memoryCache from "../../lib/memoryCache"

const pathModule = window.require("path")
const { shell } = window.require("electron")
const log = window.require("electron-log")

const Item = memo(({ itemKey, task, style, userId, platform, darkMode, paused }) => {
    const itemName = useRef(pathModule.basename(task.task.path)).current
    const timeSinceInterval = useRef(undefined)
    const itemAbsolutePath = useRef(pathModule.normalize(task.location.local + "/" + task.task.path)).current
    const itemIconCacheKey = useRef("fileIcon:" + itemAbsolutePath).current
    const [hovering, setHovering] = useState(false)
    const [itemTimeSince, setItemTimeSince] = useState(timeSince(typeof task.timestamp == "number" ? task.timestamp : new Date().getTime()))
    const [itemIcon, setItemIcon] = useState(task.task.type == "folder" ? "folder" : (memoryCache.has(itemIconCacheKey) ? memoryCache.get(itemIconCacheKey) : undefined))

    const getFileIcon = useCallback(() => {
        if(task.task.type == "file" && typeof task.location !== "undefined" && typeof task.location.local !== "undefined"){
            if(memoryCache.has(itemIconCacheKey)){
                setItemIcon(memoryCache.get(itemIconCacheKey))
            }
            else{
                ipc.getFileIcon(itemAbsolutePath).then((icon) => {
                    if(typeof icon == "string" && icon.indexOf("data:") !== -1){
                        setItemIcon(icon)

                        memoryCache.set(itemIconCacheKey, icon)
                    }
                    else{
                        setItemIcon(null)
                    }
                }).catch(log.error)
            }
        }
    }, [task])

    const startTimeSinceInterval = useCallback(() => {
        clearInterval(timeSinceInterval.current)

        setItemTimeSince(timeSince(typeof task.timestamp == "number" ? task.timestamp : new Date().getTime()))

        timeSinceInterval.current = setInterval(() => {
            setItemTimeSince(timeSince(typeof task.timestamp == "number" ? task.timestamp : new Date().getTime()))
        }, 1000)
    })

    useEffect(() => {
        startTimeSinceInterval()
        getFileIcon()

        return () => {
            clearInterval(timeSinceInterval.current)
        }
    }, [])

    return (
        <Flex
            style={style}
            width={window.innerWidth}
            justifyContent="space-between"
            alignItems="center"
            borderBottom={"0px solid " + colors(platform, darkMode, "borderPrimary")}
            paddingLeft="10px"
            paddingRight="10px"
            paddingTop="5px"
            paddingBottom="5px"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <Flex
                width="75%"
                height="100%"
                justifyContent="flex-start"
                alignItems="center"
                flexDirection="row"
            >
                <Flex width="14%">
                    {
                        typeof itemIcon == "string" ? itemIcon == "folder" ? (
                            <Flex>
                                <BsFillFolderFill
                                    size={25}
                                    color={platform == "mac" ? "#3ea0d5" : "#ffd04c"}
                                />
                            </Flex>
                        ) : (
                            <Flex>
                                <Image 
                                    src={itemIcon}
                                    width="24px"
                                    height="24px" 
                                />
                            </Flex>
                        ) : itemIcon == null ? (
                            <Flex>
                                {
                                    task.task.type == "folder" ? (
                                        <BsFillFolderFill
                                            size={25}
                                            color={platform == "mac" ? "#3ea0d5" : "#ffd04c"}
                                        />
                                    ) : (
                                        <BsFileEarmark 
                                            size={25}
                                            color={colors(platform, darkMode, "textPrimary")}
                                        />
                                    )
                                }
                            </Flex>
                        ) : (
                            <Flex>
                                <Spinner
                                    size={24}
                                    color={colors(platform, darkMode, "textPrimary")}
                                />
                            </Flex>
                        )
                    }
                </Flex>
                <Flex
                    flexDirection="column"
                    width="86%"
                >
                    <Text
                        noOfLines={1}
                        wordBreak="break-word"
                        color={colors(platform, darkMode, "textPrimary")}
                        fontSize={12}
                        fontWeight="bold"
                        maxWidth="100%"
                    >
                        {itemName}
                    </Text>
                    {
                        typeof task.realtime !== "undefined" ? (
                            <>
                                {
                                    paused || task.task.percent <= 0 ? (
                                        <Progress
                                            isIndeterminate={true}
                                            height="5px"
                                            borderRadius="10px"
                                            colorScheme="blue"
                                            marginTop="5px"
                                            width="100%"
                                        />
                                    ) : (
                                        <Progress
                                            value={task.task.percent > 100 ? 100 : task.task.percent.toFixed(2)}
                                            height="5px"
                                            borderRadius="10px"
                                            colorScheme="blue"
                                            min={0}
                                            max={100}
                                            marginTop="5px"
                                            width="100%"
                                        />
                                    )
                                }
                            </>
                        ) : (
                            <Text
                                noOfLines={1}
                                wordBreak="break-word"
                                color={colors(platform, darkMode, "textPrimary")}
                                marginTop="1px"
                                fontSize={11}
                                width="100%"
                            >
                                {
                                    task.type == "downloadFromRemote" && "Downloaded from the cloud "
                                }
                                {
                                    task.type == "uploadToRemote" && "Uploaded to the cloud"
                                }
                                {
                                    task.type == "renameInRemote" && "Renamed locally"
                                }
                                {
                                    task.type == "renameInLocal" && "Renamed in the cloud"
                                }
                                {
                                    task.type == "moveInRemote" && "Moved in the cloud"
                                }
                                {
                                    task.type == "moveInLocal" && "Moved locally"
                                }
                                {
                                    task.type == "deleteInRemote" && "Deleted in the cloud"
                                }
                                {
                                    task.type == "deleteInLocal" && "Deleted locally"
                                }
                                &nbsp;
                                &#8226;
                                &nbsp;
                                {itemTimeSince}
                            </Text>
                        )
                    }
                </Flex>
            </Flex>
            <Flex
                width="25%"
                justifyContent="flex-end" 
                flexDirection="row"
            >
                <Flex 
                    flexDirection="column" 
                    justifyContent="center"
                >
                    {
                        typeof task.realtime !== "undefined" ? (
                            <Flex 
                                alignItems="center"
                                justifyContent="flex-end" 
                                flexDirection="row"
                            >
                                <Text 
                                    noOfLines={1}
                                    color={colors(platform, darkMode, "textPrimary")}
                                    fontSize={12}
                                >
                                    {
                                        paused ? (
                                            <AiOutlinePauseCircle
                                                color={colors(platform, darkMode, "textPrimary")}
                                                fontSize={18} 
                                            />
                                        ) : (
                                            <>
                                                {
                                                    task.task.percent <= 0 ? (
                                                        <>Queued</>
                                                    ) : (
                                                        <>{bpsToReadable(task.task.lastBps)}</>
                                                    )
                                                }
                                            </>
                                        )
                                    }
                                </Text>
                            </Flex>
                        ) : (
                            <>
                                {
                                    hovering && ["renameInLocal", "downloadFromRemote", "moveInLocal", "uploadToRemote", "renameInRemote", "moveInRemote"].includes(task.type) ? (
                                        <Flex 
                                            alignItems="center" 
                                            justifyContent="flex-end" 
                                            flexDirection="row"
                                        >
                                            <IoSearchOutline 
                                                size={18} 
                                                color={colors(platform, darkMode, "textPrimary")} 
                                                cursor="pointer" 
                                                onClick={() => {
                                                    try{
                                                        shell.showItemInFolder(pathModule.normalize(task.location.local + "/" + task.task.path))
                                                    }
                                                    catch(e){
                                                        log.error(e)
                                                    }
                                                }} 
                                            />
                                        </Flex>
                                    ) : (
                                        <></>
                                    )
                                }
                            </>
                        )
                    }
                </Flex>
            </Flex>
        </Flex>
    )
})

export default Item