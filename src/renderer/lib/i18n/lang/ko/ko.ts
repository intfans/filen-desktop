const ko: {
    [key: string]: string
} = {
    loginEmailPlaceholder: "이메일 주소",
    loginPasswordPlaceholder: "비밀번호",
    loginTwoFactorCodePlaceholder: "2단계 인증 코드",
    loginBtn: "로그인",
    titlebarLogin: "로그인",
    loginInvalidFields: "잘못된 입력란",
    loginInvalidEmail: "잘못된 이메일 주소",
    loginInvalidEmailOrPassword: "잘못된 이메일 주소나 비밀번호",
    loginAccountNotYetActivated: "계정이 아직 활성화되지 않았습니다.",
    loginWrongEmailOrPassword: "이메일 주소 또는 비밀번호가 잘못되었습니다.",
    invalidTwoFactorKey: "잘못된 2단계 인증 코드",
    titlebarMain: "Filen",
    titlebarSettings: "설정",
    titlebarSelectFolderRemote: "클라우드 폴더 선택",
    titlebarDownload: "다운로드",
    titlebarCloud: "클라우드",
    titlebarUpload: "업로드",
    titlebarSelectiveSync: "선택적 동기화",
    close: "닫기",
    save: "저장하기",
    syncingItemsFooterSingular: "__COUNT__개 항목 동기화 중",
    syncingItemsFooterPlural: "__COUNT__개 항목 동기화 중",
    syncingFooterEverythingSynced: "모든 항목이 동기화 되었습니다.",
    aboutRemaining: "약 __TIME__ 남음",
    noSyncActivityYet: "아직 활동이 없습니다.",
    createOne: "만들기",
    noSyncLocationsSetupYet: "아직 동기화 위치가 설정되지 않았습니다.",
    storageUsed: "__MAX__ 중__USED__ 사용됨",
    quitFilen: "Filen 종료",
    openWebsite: "웹사이트 열기",
    settings: "설정",
    actions: "작업",
    youAreOffline: "오프라인 상태",
    forgotPasswordBtn: "비밀번호를 잊으셨나요?",
    createAccountBtn: "계정 만들기",
    select: "선택",
    thisFolderIsEmpty: "이 폴더는 비어있습니다.",
    createFolder: "폴더 만들기",
    create: "만들기",
    downloadDone: "다운로드 완료",
    openFolder: "폴더 열기",
    download: "다운로드",
    change: "변경",
    open: "열기",
    noFilesOrFoldersUploadedYet: "아직 업로드된 파일 또는 폴더가 없습니다.",
    uploadDone: "업로드 완료",
    preparingUpload: "준비 중...",
    preparingUploadFolders: "폴더 구조를 만드는 중...",
    launchAtSystemStartup: "시스템 시작 시 자동으로 Filen 실행",
    darkMode: "다크 모드",
    excludeDot: "마침표로 시작하는 파일 및 폴더 제외(권장)",
    excludeDotTooltip: "마침표로 시작하는 파일 및 폴더(예: \".gitignore, .DS_Store\)는 제외합니다."",
    language: "언어",
    saveLogs: "로그 저장",
    cannotCreateSyncLocation: "동기화 위치를 만들 수 없습니다.",
    cannotCreateSyncLocationSubdir: "하나 이상의 하위 디렉토리를 선택해야 합니다.",
    cannotCreateSyncLocationLoop: "선택한 로컬 경로는 이미 구성된 동기화 위치입니다. 이로 인해 끝없는 동기화 반복이 발생할 수 있습니다.",
    cannotCreateSyncLocationAccess: "해당 로컬 디렉터리에 액세스할 수 없습니다. 권한이 없을 가능성이 있습니다.",
    selectRemoteLocation: "클라우드 위치 선택",
    syncMode: "동기화 모드",
    syncModeTwoWay: "양방향",
    syncModeLocalToCloud: "로컬에서 클라우드로",
    syncModeCloudToLocal: "클라우드에서 로컬로",
    syncModeLocalBackup: "로컬 백업",
    syncModeCloudBackup: "클라우드 백업",
    selectiveSync: "선택적 동기화",
    selectiveSyncTooltip: "로컬로 동기화할 폴더와 파일을 구성하세요.",
    configure: "구성",
    filenignoreTooltip: "동기화에서 경로와 패턴을 제외합니다. '.gitignore' 파일처럼 작동합니다.",
    edit: "편집",
    paused: "일시 중지됨",
    deleteSyncLocation: "동기화 위치 삭제",
    confirmDeleteSyncLocation: "정말로 이 동기화 위치를 삭제하시겠습니까?",
    delete: "삭제",
    filenignoreHeader: "무시되는 패턴 (새 줄로 구분됨)",
    accountStorageUsed: "__MAX__ 중에 __PERCENT__% 사용됨",
    logout: "로그아웃",
    accountCurrentPlan: "현재 이용권",
    accountUpgrade: "업그레이드",
    accountStorageInUse: "__PERCENT__% 사용 중",
    confirmLogout: "정말로 로그아웃 하시겠습니까?",
    resumeSyncing: "동기화 계속하기",
    noSyncIssues: "동기화 문제 없음",
    clearSyncIssues: "문제 지우기",
    clearSyncIssuesInfo: "표시된 문제를 지우면 클라이언트가 다시 동기화를 시도합니다. 문제를 지우기 전에 모든 문제를 해결해야 합니다.",
    clear: "지우기",
    uploadBandwidthThrottling: "업로드 대역폭 제한",
    unlimited: "제한 없음",
    downloadBandwidthThrottling: "다운로드 대역폭 제한",
    networkThrottling: "네트워크 제한",
    maximumUploadBandwidth: "최대 업로드 대역폭(Kbps)",
    maximumDownloadBandwidth: "최대 다운로드 대역폭(Kbps)",
    disableThrottlingInfo: "값을 0으로 설정하면 제한이 꺼집니다.",
    resetToDefaults: "기본 값으로 재설정",
    changeKeybind: "단축키 변경",
    pressKeyOrCombo: "아무 단일 키나 키 조합을 누르세요.",
    settingsGeneral: "일반",
    settingsSyncs: "동기화",
    settingsAccount: "계정",
    settingsIssues: "문제",
    settingsNetworking: "네트워킹",
    settingsKeybinds: "단축키",
    createFolderPlaceholder: "폴더 이름",
    invalidFolderName: "잘못된 폴더 이름",
    titlebarCloudWindow: "클라우드",
    updateAvailable: "사용 가능한 업데이트가 있습니다. 버그 수정 및 성능 개선을 위해 최신 버전을 다운로드하는 것이 좋습니다.",
    downloadUpdateBtn: "업데이트 다운로드",
    pause: "일시 정지",
    resume: "계속하기",
    keybinds_uploadFolders: "폴더 업로드",
    keybinds_uploadFiles: "파일 업로드",
    keybinds_openSettings: "설정 열기",
    keybinds_pauseSync: "동기화 일시 정지",
    keybinds_resumeSync: "동기화 계속하기",
    keybinds_openWebsite: "웹사이트 열기",
    keybindNotBound: "설정되지 않음",
    syncing: "동기화 중...",
    maxStorageReached: "계정의 최대 저장 용량에 도달했습니다. 동기화를 계속하려면 업그레이드하는 것이 좋습니다.",
    syncTaskDownloadFromRemote: "클라우드에서 다운로드됨",
    syncTaskUploadToRemote: "클라우드로 업로드됨",
    syncTaskRenameInRemote: "클라우드에서 이름이 변경됨",
    syncTaskRenameInLocal: "로컬에서 이름이 변경됨",
    syncTaskMoveInRemote: "클라우드로 이동됨",
    syncTaskMoveInLocal: "로컬로 이동됨",
    syncTaskDeleteInRemote: "클라우드에서 삭제됨",
    syncTaskDeleteInLocal: "로컬에서 삭제됨",
    queued: "대기열",
    acquiringSyncLock: "동기화 잠금을 얻는 중...",
    syncLocationCreated: "동기화 위치가 생성되었습니다. 동기화를 시작하려면 일시 정지를 해제해야 합니다.",
    checkingChanges: "변경 사항 확인 중...",
    syncModeTwoWayInfo: "모든 작업을 양방향으로 반영",
    syncModeLocalToCloudInfo: "로컬의 모든 작업을 클라우드에 반영하되, 클라우드의 변경 사항에 대해서는 절대 작업하지 않습니다.",
    syncModeCloudToLocalInfo: "클라우드의 모든 작업을 반영하되, 로컬의 변경 사항에 대해서는 절대 작업하지 않습니다.",
    syncModeLocalBackupInfo: "클라우드로 데이터를 업로드만 하지만, 그 무엇도 삭제하거나 클라우드 변경 작업을 하지 않습니다.",
    syncModeCloudBackupInfo: "클라우드에서 데이터를 다운로드만 하지만, 그 무엇도 삭제하거나 로컬 변경 작업을 하지 않습니다.",
    cancel: "취소",
    cannotCreateSyncLocationLoop2: "선택한 클라우드 경로는 이미 구성된 동기화 위치입니다. 이로 인해 끝없는 동기화 반복이 발생할 수 있습니다.",
    titlebarUpdateAvailable: "업데이트 가능",
    updateWindowInfo: "새 버전이 다운로드되어 설치할 준비가 되었습니다. 버그를 수정하고 새로운 기능을 활용하려면 가능한 한 빨리 설치하시기 바랍니다.",
    updateWindowButton: "설치",
    updateWindowInfo2: "앱이 종료되고 업데이트 과정이 시작됩니다. 이 과정을 중단하지 마세요.",
    titlebarUpdateInstalled: "업데이트 설치됨",
    clearLocalEventLog: "로컬 이벤트 로그 지우기",
    clearLocalEventLogInfo: "표시된 로컬 이벤트 로그가 지워집니다. 정말 삭제하시겠습니까? 이 작업은 실행 취소할 수 없습니다!",
    copied: "복사됨",
    publicLinkCopied: "공개 링크가 클립보드에 복사되었습니다.",
    clearLocalTrashDirs: "로컬 휴지통 비우기",
    clearLocalTrashDirsInfo: "로컬 휴지통을 비우면 되돌릴 수 없습니다! 정말 비우시겠습니까?",
    updateWindowInfo3: "클라이언트가 종료되고 백그라운드에서 업데이트 과정이 시작됩니다. 완료되면 앱이 자동으로 다시 시작됩니다. 이 프로세스를 중단하지 마세요."
}

export default ko
