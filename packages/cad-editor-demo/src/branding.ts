const imageFilename = /^[a-z0-9][a-z0-9._-]*\.(svg|png|webp|jpg|jpeg|ico)$/i
const hexColor = /^#[a-f0-9]{6}$/i

export async function loadBranding(base: URL) {
  try {
    const response = await fetch(new URL('branding.json', base), {
      cache: 'no-cache',
      signal: AbortSignal.timeout(2000)
    })
    if (!response.ok) return {}

    const config = (await response.json()) as Record<string, unknown> | null
    const image = (value: unknown) =>
      typeof value === 'string' && imageFilename.test(value)
        ? new URL(value, base).href
        : undefined
    const color = (value: unknown) =>
      typeof value === 'string' && hexColor.test(value) ? value : undefined

    return {
      logo: image(config?.logo),
      favicon: image(config?.favicon),
      lightAccent: color(config?.lightAccent),
      darkAccent: color(config?.darkAccent)
    }
  } catch {
    return {}
  }
}

export function applyBranding(
  branding: Awaited<ReturnType<typeof loadBranding>>
) {
  const rules = (['light', 'dark'] as const).map(theme => {
    const accent = branding[`${theme}Accent`]
    if (!accent) return ''

    const background = theme === 'dark' ? '#141414' : '#ffffff'
    const shades = [3, 5, 7, 8, 9].map(
      shade =>
        `--el-color-primary-light-${shade}: color-mix(in srgb, ${accent}, ${background} ${shade * 10}%);`
    )
    return `
      html:root[data-ml-ui-theme='${theme}'] {
        --el-color-primary: ${accent};
        --el-color-primary-dark-2: color-mix(in srgb, ${accent}, ${theme === 'dark' ? '#ffffff' : '#000000'} 20%);
        --ml-ui-accent: ${accent} !important;
        ${shades.join('\n')}
      }
    `
  })
  if (branding.lightAccent) {
    rules.push(`html { --cad-office-portal-accent: ${branding.lightAccent}; }`)
  }
  if (rules.some(Boolean)) {
    const style = document.createElement('style')
    style.textContent = rules.join('\n')
    document.head.append(style)
  }
  if (branding.favicon) {
    const icon = document.createElement('link')
    icon.rel = 'icon'
    icon.href = branding.favicon
    document.head.append(icon)
  }
}
