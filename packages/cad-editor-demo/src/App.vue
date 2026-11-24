<template>
  <div id="app-root">
    <!-- Upload screen when no drawing is open -->
    <div v-if="!showViewer" class="upload-screen">
      <header class="portal-header">
        <div class="portal-header-inner">
          <span class="portal-name">{{ viewerName }}</span>
        </div>
      </header>
      <main class="portal-content">
        <p v-if="viewerLoadFailed" class="startup-status" role="alert">
          {{ t('example.startup.error') }}
        </p>
        <p
          v-else-if="!MlCadViewer || openingViewer"
          class="startup-status"
          role="status"
        >
          {{ t('example.startup.loading') }}
        </p>
        <FileUpload
          :inert="openingViewer || viewerLoadFailed"
          :landing-manager="landingDataSources"
          @file-select="handleFileSelect"
          @new-drawing="handleNewDrawing"
          @url-select="handleUrlSelect"
        />
      </main>
    </div>

    <!-- CAD viewer when a file is selected or a new drawing is created -->
    <div v-else-if="MlCadViewer">
      <MlCadViewer
        locale="default"
        :url="store.selectedUrl ?? undefined"
        :local-file="store.selectedFile ?? undefined"
        :mode="selectedMode"
        :use-main-thread-draw="useMainThreadDraw"
        :draw-no-plot-layers="drawNoPlotLayers"
        :progressive-rendering="progressiveRendering"
        :open-view-mode="openViewMode"
        :circle-sides="circleSides"
        :paper-space-background="paperSpaceBackground"
        :disable-export="disableExport"
        @create="onViewerCreate"
        :base-url="BASE_URL"
        :default-text-fonts="defaultTextFonts"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  AcApDataSourceManager,
  AcApOpenViewMode,
  AcEdOpenMode,
  acuiAttachDataSources
} from '@mlightcad/cad-simple-viewer/file-open-panel'
import {
  ACDB_DRAW_CIRCLE_SIDES_DRAFT,
  ACGI_PAPER_SPACE_BACKGROUND,
  log
} from '@mlightcad/data-model'
import { computed, nextTick, ref, shallowRef } from 'vue'
import { useI18n } from 'vue-i18n'

import FileUpload from './components/FileUpload.vue'
import {
  getGoogleDriveEnvConfig,
  registerGoogleDriveFromEnv
} from './googleDriveEnv'
import { initializeLocale } from './locale'
import { getOneDriveEnvConfig, registerOneDriveFromEnv } from './onedriveEnv'
import { registerLibreDwgConverter } from './registerLibreDwg'
import { store } from './store'

initializeLocale()
const { t } = useI18n({ useScope: 'global' })

const oneDriveEnv = getOneDriveEnvConfig()
const googleDriveEnv = getGoogleDriveEnvConfig()

/**
 * Landing-page registry used before DocManager exists.
 * Outlives the upload screen so the same cloud source instances can be
 * attached to DocManager after the viewer mounts.
 */
const landingDataSources = new AcApDataSourceManager()

const setupLandingCloudSources = async () => {
  if (oneDriveEnv) {
    try {
      const { AcApOneDriveDataSource } =
        await import('@mlightcad/cad-onedrive-plugin')
      if (!landingDataSources.get('onedrive')) {
        const source = new AcApOneDriveDataSource(
          oneDriveEnv,
          landingDataSources
        )
        landingDataSources.register(source)
        await source.restoreSession()
      }
    } catch (error) {
      log.warn('Landing OneDrive data source unavailable:', error)
    }
  }

  if (googleDriveEnv) {
    try {
      const { AcApGoogleDriveDataSource } =
        await import('@mlightcad/cad-google-drive-plugin')
      if (!landingDataSources.get('googledrive')) {
        const source = new AcApGoogleDriveDataSource(
          googleDriveEnv,
          landingDataSources
        )
        landingDataSources.register(source)
        await source.restoreSession()
      }
    } catch (error) {
      log.warn('Landing Google Drive data source unavailable:', error)
    }
  }
}

void setupLandingCloudSources()

let oneDriveRegistered = false
let googleDriveRegistered = false
const MlCadViewer =
  shallowRef<typeof import('@mlightcad/cad-editor').MlCadViewer>()
const openingViewer = ref(false)
const viewerLoadFailed = ref(false)

const loadViewer = async () => {
  const [
    { AcApSettingManager, LIBREDWG_PARSER_WORKER_FILE },
    { MlCadViewer: viewer }
  ] = await Promise.all([
    import('@mlightcad/cad-simple-viewer'),
    import('@mlightcad/cad-editor')
  ])
  // Isolate this example's prefs from cad-simple-viewer-demo on localhost.
  AcApSettingManager.configure({
    storageKey: 'mlightcad.settings.cad-viewer'
  })
  registerLibreDwgConverter(`./assets/${LIBREDWG_PARSER_WORKER_FILE}`)
  MlCadViewer.value = viewer
}

const viewerStartup = loadViewer().catch(error => {
  log.error('CAD editor failed to load:', error)
  viewerLoadFailed.value = true
})

const registerOneDriveIfConfigured = async (
  pluginManager: import('@mlightcad/cad-simple-viewer').AcApPluginManager
) => {
  if (oneDriveRegistered || !oneDriveEnv) return
  try {
    const registered = await registerOneDriveFromEnv(pluginManager)
    oneDriveRegistered = registered
    if (registered) {
      log.info('[example] OneDrive data source registered')
    }
  } catch (error) {
    log.warn('OneDrive plugin not available:', error)
  }
}

const registerGoogleDriveIfConfigured = async (
  pluginManager: import('@mlightcad/cad-simple-viewer').AcApPluginManager
) => {
  if (googleDriveRegistered || !googleDriveEnv) return
  try {
    const registered = await registerGoogleDriveFromEnv(pluginManager)
    googleDriveRegistered = registered
    if (registered) {
      log.info('[example] Google Drive data source registered')
    }
  } catch (error) {
    log.warn('Google Drive plugin not available:', error)
  }
}

const initialize = async () => {
  const { AcApDocManager, AcEdCommandStack } =
    await import('@mlightcad/cad-simple-viewer')
  const { AcApQuitCmd } = await import('./commands')
  if (import.meta.env.DEV) {
    ;(
      window as Window & { AcApDocManager?: typeof AcApDocManager }
    ).AcApDocManager = AcApDocManager
  }
  const register = AcApDocManager.instance.commandManager
  register.addCommand(
    AcEdCommandStack.SYSTEMT_COMMAND_GROUP_NAME,
    'quit',
    'quit',
    new AcApQuitCmd()
  )
  register.addCommand(
    AcEdCommandStack.SYSTEMT_COMMAND_GROUP_NAME,
    'exit',
    'exit',
    new AcApQuitCmd()
  )
}

const viewerName = 'CAD-Office'
// Font requests also originate from workers, where relative URLs resolve
// against the worker script instead of the document.
const BASE_URL = new URL(
  `${import.meta.env.BASE_URL}cad-data/`,
  document.baseURI
).href
const defaultTextFonts = ['Liberation Sans']

const showViewer = computed(
  () =>
    store.selectedFile != null ||
    store.selectedUrl != null ||
    store.isNewDrawing
)

const selectedMode = ref<AcEdOpenMode>(AcEdOpenMode.Write)
const useMainThreadDraw = ref(true)
const drawNoPlotLayers = ref(false)
const progressiveRendering = ref(false)
const openViewMode = ref<AcApOpenViewMode | undefined>(undefined)
const circleSides = ref(ACDB_DRAW_CIRCLE_SIDES_DRAFT)
const paperSpaceBackground = ref(ACGI_PAPER_SPACE_BACKGROUND)
const disableExport = ref(false)

const createNewDrawing = async () => {
  const { AcApDocManager, layoutBackgroundColorFromRgb } =
    await import('@mlightcad/cad-simple-viewer')
  const success = await AcApDocManager.instance.newDocument({
    mode: selectedMode.value,
    drawNoPlotLayers: drawNoPlotLayers.value,
    progressiveRendering: progressiveRendering.value,
    circleSides: circleSides.value,
    sysVars: {
      paperbkcolor: layoutBackgroundColorFromRgb(paperSpaceBackground.value)
    },
    ...(openViewMode.value != null ? { openViewMode: openViewMode.value } : {})
  })
  if (!success) {
    log.error('Failed to create new drawing')
  }
}

const onViewerCreate = async () => {
  await initialize()
  const { AcApDocManager } = await import('@mlightcad/cad-simple-viewer')
  // Reuse landing MSAL / GIS clients — a second client for the same app id
  // splits the cache and can block interactive login.
  acuiAttachDataSources(
    landingDataSources,
    AcApDocManager.instance.dataSourceManager
  )
  if (landingDataSources.get('onedrive')) oneDriveRegistered = true
  if (landingDataSources.get('googledrive')) googleDriveRegistered = true
  const { pluginManager } = AcApDocManager.instance
  void registerOneDriveIfConfigured(pluginManager)
  void registerGoogleDriveIfConfigured(pluginManager)
  if (store.isNewDrawing) {
    await nextTick()
    await createNewDrawing()
  }
}

const applyOpenOptions = (
  mode: AcEdOpenMode,
  mainThreadDraw: boolean,
  showNoPlotLayers: boolean,
  enableProgressiveRendering: boolean,
  viewMode: AcApOpenViewMode | undefined,
  sides: number,
  paperBg: number,
  exportDisabled: boolean
) => {
  selectedMode.value = mode
  useMainThreadDraw.value = mainThreadDraw
  drawNoPlotLayers.value = showNoPlotLayers
  progressiveRendering.value = enableProgressiveRendering
  openViewMode.value = viewMode
  circleSides.value = sides
  paperSpaceBackground.value = paperBg
  disableExport.value = exportDisabled
}

const openViewer = async (apply: () => void) => {
  if (openingViewer.value || viewerLoadFailed.value) return
  openingViewer.value = true
  await viewerStartup
  if (MlCadViewer.value) apply()
  openingViewer.value = false
}

const handleFileSelect = (
  file: File,
  mode: AcEdOpenMode,
  mainThreadDraw: boolean,
  showNoPlotLayers: boolean,
  enableProgressiveRendering: boolean,
  viewMode: AcApOpenViewMode | undefined,
  sides: number,
  paperBg: number,
  exportDisabled: boolean
) => {
  void openViewer(() => {
    store.isNewDrawing = false
    store.selectedUrl = null
    store.selectedFile = file
    applyOpenOptions(
      mode,
      mainThreadDraw,
      showNoPlotLayers,
      enableProgressiveRendering,
      viewMode,
      sides,
      paperBg,
      exportDisabled
    )
  })
}

const handleUrlSelect = (
  url: string,
  mode: AcEdOpenMode,
  mainThreadDraw: boolean,
  showNoPlotLayers: boolean,
  enableProgressiveRendering: boolean,
  viewMode: AcApOpenViewMode | undefined,
  sides: number,
  paperBg: number,
  exportDisabled: boolean
) => {
  void openViewer(() => {
    store.isNewDrawing = false
    store.selectedFile = null
    store.selectedUrl = url
    applyOpenOptions(
      mode,
      mainThreadDraw,
      showNoPlotLayers,
      enableProgressiveRendering,
      viewMode,
      sides,
      paperBg,
      exportDisabled
    )
  })
}

const handleNewDrawing = (
  mode: AcEdOpenMode,
  mainThreadDraw: boolean,
  showNoPlotLayers: boolean,
  enableProgressiveRendering: boolean,
  viewMode: AcApOpenViewMode | undefined,
  sides: number,
  paperBg: number,
  exportDisabled: boolean
) => {
  void openViewer(() => {
    store.selectedFile = null
    store.selectedUrl = null
    store.isNewDrawing = true
    applyOpenOptions(
      mode,
      mainThreadDraw,
      showNoPlotLayers,
      enableProgressiveRendering,
      viewMode,
      sides,
      paperBg,
      exportDisabled
    )
  })
}
</script>

<style scoped>
#app-root {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: var(--ml-ui-bg-page, #141414);
}

.upload-screen {
  --ml-ui-text: #163343;
  --ml-ui-text-muted: #425c69;
  --ml-ui-bg: #fff;
  --ml-ui-bg-page: #edf3f5;
  --ml-ui-bg-fill: #f5f8f9;
  --ml-ui-border: #c7d7de;
  --ml-ui-accent: #086781;
  --ml-ui-shadow: 0 8px 24px rgb(22 51 67 / 9%);

  position: absolute;
  inset: 0;
  overflow: auto;
  color-scheme: light;
  font-family: system-ui, sans-serif;
  background: var(--ml-ui-bg-page);
  z-index: 1000;
}

.portal-header {
  background: #143b50;
  color: #fff;
  border-bottom: 4px solid #39a4b4;
}

.portal-header-inner {
  max-width: 1080px;
  margin-inline: auto;
  padding: 18px clamp(16px, 4vw, 40px);
}

.portal-name {
  font-size: 1.25rem;
  font-weight: 700;
}

.portal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(24px, 6vw, 72px) clamp(16px, 4vw, 40px);
}

.startup-status {
  margin: 0 0 16px;
  padding: 12px 16px;
  border: 1px solid var(--ml-ui-border);
  border-radius: 8px;
  background: var(--ml-ui-bg);
  color: var(--ml-ui-text);
  text-align: center;
}
</style>
