/**
 * German strings for the AI model settings dialog and the model picker.
 *
 * Flat keys under `main.llm` (merged into {@link AcApI18n}). Every other
 * locale file must define the same keys.
 */
export const llmDe = {
  title: 'KI-Modelleinstellungen',
  activeModel: 'Modell im Einsatz',
  activeModelHint:
    'Wird vom Agenten-Chat CAD verwendet. Die Texterkennung (OCR) verwendet dieses Modell, wenn sie Bilder akzeptiert, andernfalls das erste bildfähige Modell, das Sie konfiguriert haben.',
  activeModelNone: 'Noch kein Anbieter konfiguriert',
  providerSettings: 'Anbieter',
  saved: 'Einstellungen gespeichert.',
  discardChangesConfirm: 'Nicht gespeicherte Anbieteränderungen verwerfen?',
  visionMissing:
    'Keines der konfigurierten Modelle akzeptiert Bilder, daher ist die Texterkennung (OCR) nicht verfügbar.',
  provider: 'Anbieter',
  providerDeepseek: 'DeepSeek',
  providerDeepseekVl: 'DeepSeek VL (Vision)',
  providerDeepseekVlHint:
    'Verwendet einen OpenAI-kompatiblen Vision-Endpunkt (Standard: SiliconFlow). Stellen Sie für selbst gehostetes vLLM die Basis URL auf Ihren Server ein, z. B. http://127.0.0.1:8000/v1.',
  providerOpenai: 'OpenAI',
  providerAnthropic: 'Anthropic',
  baseUrl: 'Basis URL',
  baseUrlHint:
    'Muss für die meisten Gateways /v1 enthalten, z. B. https://ai-api.example.com/v1. Nur-Host-URLs werden automatisch korrigiert.',
  apiKey: 'API Schlüssel',
  tabBuiltin: 'Drittanbieter',
  tabCustom: 'Sondermodell API',
  builtinIntro:
    'Wählen Sie einen integrierten Anbieter wie DeepSeek, OpenAI oder Anthropic und geben Sie seinen Schlüssel API ein.',
  customIntro:
    'Verbinden Sie ein Relay, einen selbst gehosteten Dienst oder einen anderen OpenAI-/Anthropic-kompatiblen Endpunkt. Geben Sie API URL, Protokoll und Modelle ein.',
  providerConfigured: 'konfiguriert',
  apiKeyPlaceholder: 'Geben Sie den Schlüssel API ein',
  apiKeyRequired:
    'Noch kein Schlüssel API. Geben Sie eine ein, um Nachrichten mit diesem Anbieter zu senden.',
  advancedSettings: 'Benutzerdefinierte Einstellungen',
  baseUrlDefault:
    'Lassen Sie das Feld leer, um den Standardwert {url} zu verwenden',
  baseUrlInvalid: 'Die API URL muss mit http:// oder https://. beginnen',
  customProvider: 'Benutzerdefinierter Anbieter',
  newCustomProvider: '+ Neue Sonderanfertigung API',
  providerId: 'Anbieter-ID',
  providerIdHint:
    'Eine kleingeschriebene Kennung, die mit einem Buchstaben beginnt (Buchstaben, Ziffern und Bindestriche). Es kann nach der Erstellung nicht mehr geändert werden.',
  providerIdInvalid:
    'Die Anbieter-ID muss mit einem Kleinbuchstaben beginnen und darf nur Kleinbuchstaben, Ziffern und Bindestriche enthalten.',
  providerIdTaken: 'Diese Anbieter-ID wird bereits verwendet.',
  displayName: 'Anzeigename',
  protocol: 'API Protokoll',
  protocolOpenaiChat: 'OpenAI Chat Completions',
  protocolOpenaiResponses: 'OpenAI Responses',
  protocolAnthropicMessages: 'Anthropic Messages',
  models: 'Modellkatalog',
  modelsDefault: 'Verwendung integrierter Standardmodelle',
  modelsCustomized: 'Maßgeschneidert',
  resetModels: 'Standardeinstellungen wiederherstellen',
  modelsEmpty:
    'Noch keine Modelle. Klicken Sie auf „Verfügbare Modelle abrufen“ oder fügen Sie manuell eine Modell-ID hinzu.',
  modelId: 'Modell-ID',
  modelVision: 'Bild',
  modelVisionHint: 'Akzeptiert Bildeingaben',
  removeModel: 'Modell entfernen',
  addModel: 'Modell hinzufügen',
  fetchModels: 'Verfügbare Modelle abrufen',
  fetching: 'Abrufen…',
  fetchNeedsKey: 'Geben Sie zunächst einen API-Schlüssel ein',
  fetchNeedsBaseUrl: 'Geben Sie zunächst eine API URL ein',
  fetchTitle: 'Wählen Sie Modelle',
  fetchSearch: 'Modelle suchen',
  fetchSelectAll: 'Alles auswählen',
  fetchDeselectAll: 'Alle abwählen',
  fetchNoMatches: 'Keine passenden Modelle',
  fetchAdopt: 'Anwenden',
  fetchKeepOne: 'Behalten Sie mindestens ein Modell',
  fetchEmpty:
    'Der Endpunkt hat keine Modelle zurückgegeben. Fügen Sie sie manuell hinzu.',
  fetchFailedNetwork:
    '{url} konnte nicht erreicht werden. Möglicherweise ist das Netzwerk ausgefallen oder der Endpunkt lässt keine Browser-Anfragen (CORS) zu. Fügen Sie Modelle manuell hinzu.',
  fetchFailedHttp:
    'Modelle konnten nicht abgerufen werden: Der Endpunkt hat HTTP {status} zurückgegeben. Überprüfen Sie den Schlüssel API und URL.',
  fetchFailedFormat:
    'Die vom Endpunkt zurückgegebene Modellliste wird nicht erkannt. Fügen Sie Modelle manuell hinzu.',
  needsProviderId: 'Geben Sie eine Anbieter-ID ein.',
  needsBaseUrl: 'Geben Sie API URL ein.',
  needsModels: 'Fügen Sie mindestens ein Modell hinzu.',
  cancel: 'Abbrechen',
  save: 'Speichern',
  createProvider: 'Anbieter erstellen',
  deleteProvider: 'Anbieter löschen',
  deleteProviderConfirm: 'Anbieter „{id}“ und seinen Schlüssel API löschen?',
  recognitionTimeout:
    'Das KI-Modell antwortete nicht innerhalb von {seconds} Sekunden',
  /** Label of this OCR provider in the PDF import dialog. */
  ocrLabel: 'LLM mit Bilderkennung',
  ocrKeywordDisplay: 'LLM mit Bilderkennung(L)',
  ocrKeywordLocal: 'LLM mit Bilderkennung',
  ocrKeywordGlobal: 'Llm',
  close: 'Schließen'
} as const
