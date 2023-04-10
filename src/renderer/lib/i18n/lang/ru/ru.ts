const ru: {
	[key: string]: string
} = {
	loginEmailPlaceholder: "Адрес электронной почты",
	loginPasswordPlaceholder: "Пароль",
	loginTwoFactorCodePlaceholder: "Код двухфакторной аутентификации",
	loginBtn: "Войти",
	titlebarLogin: "Вход",
	loginInvalidFields: "Неверные поля",
	loginInvalidEmail: "Неверный адрес электронной почты",
	loginInvalidEmailOrPassword: "Неверный пароль или адрес электронной почты",
	loginAccountNotYetActivated: "Учётная запись ещё не активирована",
	loginWrongEmailOrPassword: "Неверный адрес электронной почты или пароль",
	invalidTwoFactorKey: "Неверный код двухфакторной аутентификации",
	titlebarMain: "Filen",
	titlebarSettings: "Настройки",
	titlebarSelectFolderRemote: "Выберите облачную папку",
	titlebarDownload: "Скачивание",
	titlebarCloud: "Облако",
	titlebarUpload: "Загрузка",
	titlebarSelectiveSync: "Выборочная синхронизация",
	close: "Закрыть",
	save: "Сохранить",
	syncingItemsFooterSingular: "Синхронизация __COUNT__ объекта",
	syncingItemsFooterPlural: "Синхронизация __COUNT__ объектов",
	syncingFooterEverythingSynced: "Всё синхронизировано",
	aboutRemaining: "Осталось около __TIME__",
	noSyncActivityYet: "Никаких действий не производится",
	createOne: "Создать",
	noSyncLocationsSetupYet: "Место синхронизации ещё не настроено",
	storageUsed: "__USED__ из __MAX__ использовано",
	quitFilen: "Выйти из Filen",
	openWebsite: "Открыть сайт",
	settings: "Настройки",
	actions: "Действия",
	youAreOffline: "Вы находитесь в автономном режиме",
	forgotPasswordBtn: "Забыли пароль",
	createAccountBtn: "Создать учётную запись",
	select: "Выбрать",
	thisFolderIsEmpty: "Эта папка пуста",
	createFolder: "Создать папку",
	create: "Создать",
	downloadDone: "Скачивание завершено",
	openFolder: "Открыть папку",
	download: "Скачать",
	change: "Изменить",
	open: "Открыть",
	noFilesOrFoldersUploadedYet: "Файлы или папки ещё не загружались",
	uploadDone: "Загрузка завершена",
	preparingUpload: "Идёт подготовка..",
	preparingUploadFolders: "Создание структуры папок..",
	launchAtSystemStartup: "Запускать при запуске системы",
	darkMode: "Тёмная тема",
	excludeDot: "Исключить файлы и папки, начинающиеся с точки (рекомендовано)",
	excludeDotTooltip: 'Исключить файлы и папки, начинающиеся с точки, например ".gitignore, .DS_Store"',
	language: "Язык",
	saveLogs: "Сохранить журнал",
	cannotCreateSyncLocation: "Не удалось создать место синхронизации",
	cannotCreateSyncLocationSubdir: "Вам необходимо выбрать хотя бы один подкаталог",
	cannotCreateSyncLocationLoop:
		"Выбранный вами локальный путь уже является настроенным местом синхронизации. Это может привести к бесконечным циклам синхронизации",
	cannotCreateSyncLocationAccess: "Не удалось получить доступ к локальному каталогу. Может быть, у вас нет прав доступа?",
	selectRemoteLocation: "Выберите расположение на облаке",
	syncMode: "Режим синхронизации",
	syncModeTwoWay: "Двусторонний",
	syncModeLocalToCloud: "С устройства на облако",
	syncModeCloudToLocal: "С облака на устройство",
	syncModeLocalBackup: "Облачное резервное копирование",
	syncModeCloudBackup: "Локальное резервное копирование",
	selectiveSync: "Выборочная синхронизация",
	selectiveSyncTooltip: "Настройте, какие папки и файлы вы хотите синхронизировать локально",
	configure: "Настроить",
	filenignoreTooltip: "Исключите пути и шаблоны из синхронизации. Работает так же, как файл .gitignore",
	edit: "Редактировать",
	paused: "Приостановлено",
	deleteSyncLocation: "Удалить место синхронизации",
	confirmDeleteSyncLocation: "Вы уверены, что хотите удалить это место синхронизации?",
	delete: "Удалить",
	filenignoreHeader: "Игнорируемый шаблон, отделённый новой строкой",
	accountStorageUsed: "__PERCENT__% из __MAX__ использовано",
	logout: "Выйти",
	accountCurrentPlan: "Текущий план",
	accountUpgrade: "Улучшить",
	accountStorageInUse: "Используется __PERCENT__%",
	confirmLogout: "Вы уверены, что хотите выйти?",
	resumeSyncing: "Продолжить синхронизацию",
	noSyncIssues: "Проблем с синхронизацией нет",
	clearSyncIssues: "Очистить проблемы",
	clearSyncIssuesInfo:
		"После очистки указанных проблем клиент попытается синхронизироваться снова. Пожалуйста, убедитесь, что все проблемы решены до их очистки.",
	clear: "Очистить",
	uploadBandwidthThrottling: "Ограничение пропускной способности для загрузки",
	unlimited: "Неограниченно",
	downloadBandwidthThrottling: "Ограничение пропускной способности для скачивания",
	networkThrottling: "Сетевые ограничения",
	maximumUploadBandwidth: "Максимальная пропускная способность для загрузки (в Кбит/с)",
	maximumDownloadBandwidth: "Максимальная пропускная способность для скачивания (в Кбит/с)",
	disableThrottlingInfo: "Установка значения 0 отключит ограничения",
	resetToDefaults: "Сбросить к настройкам по умолчанию",
	changeKeybind: "Изменить привязку клавиш",
	pressKeyOrCombo: "Нажмите любую кнопку или сочитание клавиш",
	settingsGeneral: "Общие",
	settingsSyncs: "Синхронизация",
	settingsAccount: "Учётная запись",
	settingsIssues: "Проблемы",
	settingsNetworking: "Сеть",
	settingsKeybinds: "Сочетания клавиш",
	createFolderPlaceholder: "Название папки",
	invalidFolderName: "Недопустимое название папки",
	titlebarCloudWindow: "Облако",
	updateAvailable: "Доступно обновление, пожалуйста, загрузите последнюю версию для исправления ошибок и улучшения производительности.",
	downloadUpdateBtn: "Загрузить обновление",
	pause: "Пауза",
	resume: "Продолжить",
	keybinds_uploadFolders: "Загрузить папки",
	keybinds_uploadFiles: "Загрузить файлы",
	keybinds_openSettings: "Открыть настройки",
	keybinds_pauseSync: "Приостановить синхронизацию",
	keybinds_resumeSync: "Продолжить синхронизацию",
	keybinds_openWebsite: "Открыть сайт",
	keybindNotBound: "Не привязано",
	syncing: "Синхронизация..",
	maxStorageReached:
		"Вы достигли максимального объема хранилища вашей учетной записи. Чтобы продолжить синхронизацию, мы рекомендуем вам улучшить план.",
	syncTaskDownloadFromRemote: "Скачано из облака",
	syncTaskUploadToRemote: "Загружено в облако",
	syncTaskRenameInRemote: "Переименовано в облаке",
	syncTaskRenameInLocal: "Переименовано локально",
	syncTaskMoveInRemote: "Перемещено в облаке",
	syncTaskMoveInLocal: "Перемещено на устройстве",
	syncTaskDeleteInRemote: "Удалено в облаке",
	syncTaskDeleteInLocal: "Удалено локально",
	queued: "В очереди",
	acquiringSyncLock: "Получение блокировки синхронизации..",
	syncLocationCreated: "Место синхронизации создано. Чтобы запустить синхронизацию, необходимо снять её с паузы.",
	checkingChanges: "Проверка изменений..",
	syncModeTwoWayInfo: "Дублировать каждое действие в обоих направлениях",
	syncModeLocalToCloudInfo: "Дублировать каждое действие, совершённое локально, на облако, но не реагировать на изменения на облаке",
	syncModeCloudToLocalInfo: "Дублировать каждое действие, совершённое на облаке, на устройство, но не реагировать на локальные изменения",
	syncModeLocalBackupInfo: "Только загружать данные на облако, никогда ничего не удалять и не реагировать на изменения на облаке",
	syncModeCloudBackupInfo: "Только загружать данные из облака, никогда ничего не удалять и не реагировать на локальные изменения",
	cancel: "Отменить",
	cannotCreateSyncLocationLoop2:
		"Выбранное вами место на облаке уже является настроенным местом синхронизации. Это может привести к бесконечным циклам синхронизации",
	titlebarUpdateAvailable: "Доступно обновление",
	updateWindowInfo:
		"Новая версия загружена и готова к установке. Пожалуйста, установите ее как можно скорее, чтобы воспользоваться исправлениями ошибок и новыми возможностями.",
	updateWindowButton: "Установить",
	updateWindowInfo2: "Приложение закроется, установит обновление и перезапустится. Пожалуйста, не прерывайте этот процесс.",
	titlebarUpdateInstalled: "Обновление установлено",
	clearLocalEventLog: "Очистить локальный журнал событий",
	clearLocalEventLogInfo: "Это очистит отображаемый локальный журнал событий. Вы уверены? Это действие нельзя отменить!",
	copied: "Скопировано",
	publicLinkCopied: "Публичная ссылка скопирована в буфер обмена",
	clearLocalTrashDirs: "Очистить локальные корзины",
	clearLocalTrashDirsInfo: "Очистка локальных корзин не может быть отменена! Вы уверены?",
	updateWindowInfo3:
		"Клиент выйдет и запустит поток обновления в фоновом режиме. Он перезапустится после завершения работы. Пожалуйста, не прерывайте этот процесс.",
	pleaseLogin: "Пожалуйста, войдите",
	traySyncIssues: "__NUM__ проблем синхронизации",
	traySyncing: "Синхронизация __NUM__ объектов",
	everythingSynced: "Всё синхронизировано",
	trayWarnings: "__NUM__ предупреждений",
	trayNoSyncSetup: "Место синхронизации ещё не настроено",
	trayNoSyncRemoteSetup: "Удалённое место синхронизации ещё не настроено",
	timeSinceSeconds: "__TIME__ секунд назад",
	timeSinceMinutes: "__TIME__ минут назад",
	timeSinceHours: "__TIME__ часов назад",
	timeSinceDays: "__TIME__ дней назад",
	timeSinceMonths: "__TIME__ месяцев назад",
	timeSinceYears: "__TIME__ лет назад",
	trayMenuShow: "Открыть",
	trayMenuForceSync: "Принудительная синхронизация",
	trayMenuUploadFolders: "Загрузить папки",
	trayMenuUploadFiles: "Загрузить файлы",
	trayMenuSettings: "Настройки",
	trayMenuQuit: "Выйти из Filen",
	openLocalFolder: "Открыть локальную папку",
	openLocalTrash: "Открыть локальную корзину",
	help: "Помощь",
	possibleSolution: "Возможное решение",
	possibleSolutionEPERM: "Пожалуйста, убедитесь, что клиент имеет все разрешения, необходимые для чтения и записи по указанному выше пути.",
	possibleSolutionENOENT: "Убедитесь, что указанный выше путь существует в вашей системе.",
	possibleSolutionEBUSY:
		"Клиент не смог получить доступ к указанному пути. Пожалуйста, проверьте, не используют ли его активно другие программы и не блокируют ли его.",
	possibleSolutionEMFILE: "Недостаточно дескрипторов файлов или свободного места в системе.",
	possibleSolutionELOOP: "Убедитесь, что локальное расположение синхронизации не содержит символических ссылок, которые приводят к бесконечным циклам.",
	issue: "Проблема",
	path: "Путь"
}

export default ru
