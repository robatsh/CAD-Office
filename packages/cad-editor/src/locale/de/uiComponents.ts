import type { MlLocale } from '@mlightcad/ui-components'

export default {
  toolPalette: {
    moreMenu: 'Andockposition',
    dock: {
      float: 'Als separates Fenster anzeigen',
      left: 'Links andocken',
      top: 'Oben andocken',
      bottom: 'Unten andocken',
      right: 'Rechts andocken'
    }
  },
  overflowTabs: {
    moreTabs: 'Weitere Registerkarten',
    closeTab: 'Registerkarte schließen'
  }
} satisfies Omit<MlLocale, 'name'>
