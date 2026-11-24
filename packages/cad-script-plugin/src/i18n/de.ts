/**
 * German UI strings for the CAD script console.
 *
 * Flat keys under `main.toolPalette.script`.
 */
export const scriptDe = {
  scriptTab: 'Skript',
  scriptTitle: 'CAD Skript',
  scriptRun: 'Lauf',
  scriptRunning: 'Laufen…',
  scriptHelp: 'Skripthilfe',
  scriptResize: 'Größe des Ergebnisbereichs ändern',
  scriptPlaceholder:
    'Schreiben Sie einen Funktionskörper. Das einzige Argument ist Cad.',
  scriptHint:
    'Ctrl+Fahrten eingeben. "." oder Ctrl+Leertaste vervollständigt CAD.',
  scriptSuccess: 'Erfolgreich',
  scriptFailed: 'Fehlgeschlagen',
  scriptReturnValue: 'Rückgabewert',
  scriptNoReturn: 'Das Skript hat keinen Wert zurückgegeben.',
  scriptLog: 'Protokoll',
  scriptImages: 'Vorschau',
  scriptImageAlt: 'Skriptvorschau',
  scriptImageDownload: 'Herunterladen',
  scriptImageCopy: 'Kopieren',
  scriptImageCopied: 'Kopiert',
  scriptImageCopyFailed: 'Der Kopiervorgang ist fehlgeschlagen',
  scriptHighlighted: 'Hervorgehoben',
  scriptCreated: 'Erstellt',
  scriptEmptyResult:
    'Führen Sie das Skript aus, um den Rückgabewert, das Protokoll, Vorschauen und Fehler anzuzeigen.',
  scriptNoDocument: 'Öffnen oder erstellen Sie zunächst eine Zeichnung.',
  scriptReadOnly: 'Die Zeichnung ist im schreibgeschützten Modus geöffnet.',
  scriptNoView: 'Die Zeichnungsansicht ist nicht verfügbar.',
  scriptTimeout:
    'Das Skript hat sein Zeit- oder Schrittlimit überschritten und wurde gestoppt.',
  scriptNotJson: 'Der Rückgabewert ist nicht JSON.',
  scriptEmptyCode: 'Das Skript ist leer.',
  scriptTooLarge: 'Das Skript ist zu lang.',
  scriptDynamicAccess: 'Der berechnete Zugriff auf CAD ist nicht gestattet.',
  scriptForbiddenSyntax: 'Verbotene Syntax',
  scriptForbiddenIdentifier: 'Unzulässige Kennung',
  scriptForbiddenMember: 'Verbotenes Mitglied',
  scriptUnknownApi: 'Unbekannte CAD-Nummer API',
  scriptExamples: 'Beispiele',
  scriptExamplesSearch: 'Suchbeispiele',
  scriptExamplesEmpty: 'Zu dieser Suche passen keine Beispiele.',
  scriptExamplesUse: 'Verwenden Sie dieses Skript',
  scriptExamplesClose: 'Nahe Beispiele'
} as const
