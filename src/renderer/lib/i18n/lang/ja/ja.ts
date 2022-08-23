const ja: {
    [key: string]: string
} = {
    loginEmailPlaceholder: "メールアドレス",
    loginPasswordPlaceholder: "パスワード",
    loginTwoFactorCodePlaceholder: "二段階認証トークン",
    loginBtn: "ログイン",
    titlebarLogin: "ログイン",
    loginInvalidFields: "入力内容に間違いがないかをご確認ください",
    loginInvalidEmail: "メールアドレスが違います",
    loginInvalidEmailOrPassword: "メールアドレスまたはパスワードが違います",
    loginAccountNotYetActivated: "アカウントの認証が未完了です",
    loginWrongEmailOrPassword: "メールアドレスまたはパスワードが違います",
    invalidTwoFactorKey: "二段階認証トークンが違います",
    titlebarMain: "Filen",
    titlebarSettings: "設定",
    titlebarSelectFolderRemote: "クラウド上のフォルダを選択",
    titlebarDownload: "ダウンロード",
    titlebarCloud: "クラウド",
    titlebarUpload: "アップロード",
    titlebarSelectiveSync: "選択同期",
    close: "閉じる",
    save: "保存",
    syncingItemsFooterSingular: "__COUNT__件のファイルを同期中",
    syncingItemsFooterPlural: "__COUNT__件のファイルを同期中",
    syncingFooterEverythingSynced: "同期完了",
    aboutRemaining: "残り時間:__TIME__",
    noSyncActivityYet: "表示するものはありません",
    createOne: "新規作成",
    noSyncLocationsSetupYet: "同期するフォルダは設定されていません",
    storageUsed: "__MAX__のうち__USED__を使用中",
    quitFilen: "閉じる",
    openWebsite: "Filen公式サイトを開く",
    settings: "設定",
    actions: "活動",
    youAreOffline: "インターネットに接続されていません",
    forgotPasswordBtn: "パスワードを忘れた",
    createAccountBtn: "アカウント作成",
    select: "選択",
    thisFolderIsEmpty: "このフォルダは空です",
    createFolder: "フォルダの新規作成",
    create: "作成",
    downloadDone: "ダウンロード完了",
    openFolder: "フォルダを開く",
    download: "ダウンロード",
    change: "変更",
    open: "開く",
    noFilesOrFoldersUploadedYet: "ファイル・フォルダーのアップロードはありません",
    uploadDone: "アップロード完了",
    preparingUpload: "準備中",
    preparingUploadFolders: "アップロード先のフォルダーを作成中",
    launchAtSystemStartup: "スタートアップに登録",
    darkMode: "ダークモード",
    excludeDot: "ドットから始まるファイルを除外（推奨）",
    excludeDotTooltip: ".gitignoreや.DS_Storeなどの、「.」から始まるファイル・フォルダーを除外します。",
    language: "言語",
    saveLogs: "ログを保存",
    cannotCreateSyncLocation: "同期場所の作成に失敗しました",
    cannotCreateSyncLocationSubdir: "ドライブ直下のフォルダーは指定できません",
    cannotCreateSyncLocationLoop: "その場所はすでに同期設定がされているため、競合を招く可能性があります。",
    cannotCreateSyncLocationAccess: "ご指定の場所にアクセスできませんでした。アクセス権限をご確認ください。",
    selectRemoteLocation: "クラウド上のフォルダーを選択",
    syncMode: "同期モード",
    syncModeTwoWay: "完全同期",
    syncModeLocalToCloud: "クラウド側の変更に反応しない",
    syncModeCloudToLocal: "コンピューター側の変更に反応しない",
    syncModeLocalBackup: "アップロードのみ",
    syncModeCloudBackup: "ダウンロードのみ",
    selectiveSync: "一部同期",
    selectiveSyncTooltip: "どのファイル・フォルダーを同期するか設定できます",
    configure: "設定",
    filenignoreTooltip: "同期から除外するパスやパターンを設定します。.gitignoreファイルと同様の機能です。",
    edit: "編集",
    paused: "一時停止中",
    deleteSyncLocation: "同期を解除",
    confirmDeleteSyncLocation: "同期を解除してよろしいですか？",
    delete: "削除",
    filenignoreHeader: "除外しました。線で区切っています。",
    accountStorageUsed: "__MAX__のうち__PERCENT__％を使用中",
    logout: "ログアウト",
    accountCurrentPlan: "プラン",
    accountUpgrade: "アップグレード",
    accountStorageInUse: "__PERCENT__％を使用中",
    confirmLogout: "ログアウトしますか？",
    resumeSyncing: "同期を再開",
    noSyncIssues: "同期に問題はありません",
    clearSyncIssues: "リセット",
    clearSyncIssuesInfo: "リセットすると、同期が再度行われます。原因を特定し、解決した後にリセットを行うようにしてください。",
    clear: "リセット",
    uploadBandwidthThrottling: "アップロード速度制限",
    unlimited: "制限なし",
    downloadBandwidthThrottling: "ダウンロード速度制限",
    networkThrottling: "速度制限",
    maximumUploadBandwidth: "アップロード最大速度（Kbps）",
    maximumDownloadBandwidth: "ダウンロード最大速度（Kbps）",
    disableThrottlingInfo: "０にすると制限なしとなります。",
    resetToDefaults: "すべてリセット",
    changeKeybind: "ショットカットキーの設定",
    pressKeyOrCombo: "キーを押してください",
    settingsGeneral: "一般",
    settingsSyncs: "同期",
    settingsAccount: "アカウント",
    settingsIssues: "同期の問題",
    settingsNetworking: "ネットワーク",
    settingsKeybinds: "ショートカット",
    createFolderPlaceholder: "フォルダ名",
    invalidFolderName: "そのフォルダ名は使えません",
    titlebarCloudWindow: "クラウド",
    updateAvailable: "更新があります。安全性向上のため、更新を行ってください。",
    downloadUpdateBtn: "更新をダウンロード",
    pause: "一時停止",
    resume: "再開",
    keybinds_uploadFolders: "フォルダーのアップロード",
    keybinds_uploadFiles: "ファイルアップロード",
    keybinds_openSettings: "設定",
    keybinds_pauseSync: "一時停止",
    keybinds_resumeSync: "再開",
    keybinds_openWebsite: "Filen公式サイトを開く",
    keybindNotBound: "設定なし",
    syncing: "同期中",
    maxStorageReached: "クラウド上の空き容量がありません。不要なファイルを消すか、アップグレードをしてください。",
    syncTaskDownloadFromRemote: "クラウドからダウンロード",
    syncTaskUploadToRemote: "クラウドへアップロード",
    syncTaskRenameInRemote: "クラウドで改名",
    syncTaskRenameInLocal: "コンピューターで改名",
    syncTaskMoveInRemote: "クラウドに移動",
    syncTaskMoveInLocal: "コンピューターに移動",
    syncTaskDeleteInRemote: "クラウドで削除",
    syncTaskDeleteInLocal: "コンピューターで削除",
    queued: "待機中",
    acquiringSyncLock: "同期ロックを取得中",
    syncLocationCreated: "同期の設定をしました。同期を始めるには、一時停止ボタンを押してください。",
    checkingChanges: "同期中",
    syncModeTwoWayInfo: "双方のファイルの追加や削除などをすべて同期します",
    syncModeLocalToCloudInfo: "コンピューター側の変更はすべてクラウドに適用します。クラウド側の変更には反応しません。",
    syncModeCloudToLocalInfo: "クラウド側の変更はすべて適用します。コンピューター側の変更には反応しません。",
    syncModeLocalBackupInfo: "コンピューターからのアップロードのみを行います。ファイルの削除やクラウド上の変更の検知を行いません。",
    syncModeCloudBackupInfo: "クラウドからのダウンロードのみを行います。ファイルの削除やコンピューター側の変更の検知を行いません。",
    cancel: "キャンセル",
    cannotCreateSyncLocationLoop2: "その場所はすでに同期設定がされているため、競合を招く可能性があります。"
}

export default ja
