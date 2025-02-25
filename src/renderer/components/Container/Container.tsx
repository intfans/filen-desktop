import React, { memo } from "react"
import { Box } from "@chakra-ui/react"
import colors from "../../styles/colors"

interface Props {
	darkMode: boolean
	lang: string
	platform: string
	children: React.ReactNode
}

const Container = memo(({ darkMode, lang, platform, children }: Props) => {
	return (
		<Box
			backgroundColor={colors(platform, darkMode, "backgroundPrimary")}
			width={window.innerWidth}
			height={window.innerHeight}
			color={colors(platform, darkMode, "textPrimary")}
			borderBottomLeftRadius="10px"
			borderBottomRightRadius="10px"
			borderTopLeftRadius="10px"
			borderTopRightRadius="10px"
			border={"1px solid " + colors(platform, darkMode, "borderPrimary")}
			overflow="hidden"
		>
			{children}
		</Box>
	)
})

export default Container
