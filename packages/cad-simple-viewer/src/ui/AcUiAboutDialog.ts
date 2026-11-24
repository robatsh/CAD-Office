import { AcApI18n } from '../i18n/index.js'
import { AcUiDialog } from './AcUiDialog.js'

const projectUrl = 'https://github.com/robatsh/CAD-Office'

/**
 * About dialog showing CAD-Office branding and project links.
 *
 * Extends {@link AcUiDialog}; styles are injected once per document.
 */
export class AcUiAboutDialog extends AcUiDialog {
  /** ID of About-specific style element. */
  public static readonly aboutStyleId = 'ml-ui-about-dialog-styles'

  private static aboutStylesInjected = false
  private static openInstance: AcUiAboutDialog | null = null

  private constructor(host: HTMLElement) {
    super({
      host,
      title: AcApI18n.t('main.about.title'),
      closeLabel: AcApI18n.t('main.about.close'),
      titleId: 'ml-ui-about-title',
      dialogClassName: 'ml-ui-about-dialog'
    })

    AcUiAboutDialog.ensureAboutStyles()
    this.buildContent()
  }

  /**
   * Opens the About dialog (replaces any already-open instance).
   *
   * @param host - Element that receives the dialog backdrop
   * @returns Promise that resolves when the dialog is closed
   */
  static open(host: HTMLElement = document.body): Promise<void> {
    AcUiAboutDialog.openInstance?.close()
    const dialog = new AcUiAboutDialog(host)
    AcUiAboutDialog.openInstance = dialog
    return dialog.show()
  }

  override close(): void {
    if (AcUiAboutDialog.openInstance === this) {
      AcUiAboutDialog.openInstance = null
    }
    super.close()
  }

  private buildContent(): void {
    const brand = document.createElement('div')
    brand.className = 'ml-ui-about-brand'
    brand.textContent = 'CAD-Office'

    const product = document.createElement('div')
    product.className = 'ml-ui-about-product'
    product.textContent = AcApI18n.t('main.about.product')

    const tagline = document.createElement('div')
    tagline.className = 'ml-ui-about-tagline'
    tagline.textContent = AcApI18n.t('main.about.tagline')

    const links = document.createElement('div')
    links.className = 'ml-ui-about-links'
    links.appendChild(
      this.createLink(
        AcApI18n.t('main.about.docs'),
        `${projectUrl}/blob/main/DEVELOPMENT.md`
      )
    )
    links.appendChild(
      this.createLink(AcApI18n.t('main.about.repository'), projectUrl)
    )
    links.appendChild(this.createLink('MIT', `${projectUrl}/blob/main/LICENSE`))

    const attribution = document.createElement('div')
    attribution.className = 'ml-ui-about-attribution'
    attribution.textContent = AcApI18n.t('main.about.attribution')

    this.bodyEl.appendChild(brand)
    this.bodyEl.appendChild(product)
    this.bodyEl.appendChild(tagline)
    this.bodyEl.appendChild(links)
    this.bodyEl.appendChild(attribution)

    const okBtn = document.createElement('button')
    okBtn.type = 'button'
    okBtn.className = 'ml-ui-dialog-btn'
    okBtn.textContent = AcApI18n.t('main.about.ok')
    okBtn.addEventListener('click', () => this.close())
    this.footerEl.appendChild(okBtn)
    this.focusAfterOpen(okBtn)
  }

  private createLink(label: string, href: string): HTMLAnchorElement {
    const link = document.createElement('a')
    link.className = 'ml-ui-about-link'
    link.href = href
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.textContent = label
    return link
  }

  private static ensureAboutStyles(): void {
    if (AcUiAboutDialog.aboutStylesInjected) return
    if (document.getElementById(AcUiAboutDialog.aboutStyleId)) {
      AcUiAboutDialog.aboutStylesInjected = true
      return
    }

    const style = document.createElement('style')
    style.id = AcUiAboutDialog.aboutStyleId
    style.textContent = `
.ml-ui-about-brand {
  margin-bottom: 10px;
  text-align: center;
  color: var(--ml-ui-accent, #0b84ff);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.ml-ui-about-product {
  text-align: center;
  font-size: 15px;
  font-weight: 600;
}

.ml-ui-about-tagline {
  margin-top: 4px;
  text-align: center;
  font-size: 12px;
  color: var(--ml-ui-text-muted, #606266);
  line-height: 1.45;
}

.ml-ui-about-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 14px;
  margin-top: 14px;
}

.ml-ui-about-link {
  color: var(--ml-ui-accent, #0b84ff);
  font-size: 12px;
  text-decoration: none;
}

.ml-ui-about-link:hover {
  text-decoration: underline;
}

.ml-ui-about-attribution {
  margin-top: 14px;
  text-align: center;
  font-size: 11px;
  color: var(--ml-ui-text-muted, #909399);
}
`.trim()
    document.head.appendChild(style)
    AcUiAboutDialog.aboutStylesInjected = true
  }
}
