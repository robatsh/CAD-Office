export default {
  document: {
    untitled: 'Ohne Titel'
  },
  commandLine: {
    noLast: '(kein letzter Befehl)',
    unknownCommand: 'Unbekannter Befehl',
    executed: 'Befehl ausgeführt',
    showHistory: 'Befehlsverlauf anzeigen',
    placeholder: 'Geben Sie den Befehl ein',
    showMessages: 'Nachrichtenverlauf anzeigen',
    canceled: '*Abgesagt*',
    noHistory: '(keine Geschichte)',
    invalidInput: 'Ungültige Eingabe.',
    close: 'Befehlszeile schließen'
  },
  mobileCommand: {
    length: 'Länge',
    angle: 'Winkel',
    dx: 'ΔX',
    dy: 'ΔY',
    x: 'X',
    y: 'Y',
    confirm: 'Bestätigen',
    cancel: 'Abbrechen',
    help: 'Hilfe',
    back: 'Zurück',
    collapse: 'Einklappen',
    expand: 'Erweitern'
  },
  inputManager: {
    firstCorner: 'Geben Sie die erste Ecke an bzw',
    secondCorner: 'Geben Sie die zweite Ecke an oder'
  },
  message: {
    onLockedLayer: 'auf einem gesperrten Layer.',
    fetchingDrawingFile: 'Datei wird abgerufen ...',
    exportingDxf: 'Exportieren DXF ...',
    exportingPdf: 'Exportieren PDF ...',
    exportingSvg: 'Exportieren SVG ...',
    calculatingSmartExtents: 'Berechnung intelligenter Extents ...',
    copyingToClipboard: 'In die Zwischenablage kopieren ...',
    cuttingToClipboard: 'Schneiden ...',
    pastingFromClipboard: 'Einfügen ...',
    importingPdf: 'PDF wird importiert ...',
    exportingEntityPreview: 'Bild exportieren ...',
    collectingMemoryProfile: 'Gedächtnis analysieren ...',
    fontCached: 'Schriftart erfolgreich zwischengespeichert',
    fontCacheFailed: 'Schriftart konnte nicht zwischengespeichert werden',
    fontsNotFound:
      'Schriftarten nicht im Schriftarten-Repository gefunden: {fonts}.',
    fontsNotLoaded: 'Schriftarten konnten nicht geladen werden: {fonts}.',
    fontMissedInDrawing:
      'Die Schriftart „{font}“ ist für {count}-Textobjekte erforderlich, aber nicht verfügbar. Anzeige mit „{replacementFont}“.',
    fontMissedReplacement: '„{font}“ (Anzeige mit „{replacement}“)',
    failedToGetAvaiableFonts:
      'Verfügbare Schriftarten von „{url}“ konnten nicht abgerufen werden!',
    failedToOpenFile: 'Datei „{fileName}“ konnte nicht geöffnet werden!',
    failedToOpenFileToast:
      '„{fileName}“ konnte nicht geöffnet werden. Weitere Informationen finden Sie im Benachrichtigungscenter.',
    failedToOpenFileWorkerOom:
      '„{fileName}“ konnte nicht geöffnet werden. Das Parsen ist fehlgeschlagen, weil der verfügbare Speicher nicht ausreicht (LibreDWG-Parser). Sie können auf {dwgParserLink} klicken, um den kommerziellen DWG-Parser zu erwerben und große Zeichnungen ohne diesen Absturz zu öffnen.',
    failedToOpenFileWorkerOomLink: 'diese Seite',
    failedToOpenFileWorkerTimeout:
      '„{fileName}“ konnte nicht geöffnet werden. Beim Parsen der Zeichnung ist eine Zeitüberschreitung aufgetreten.',
    failedToOpenFileFontLoadFailed:
      '„{fileName}“ konnte nicht geöffnet werden. Erforderliche Schriftarten konnten nicht geladen werden.',
    failedToOpenFileLicenseExpired:
      '„{fileName}“ konnte nicht geöffnet werden. Die Konverterlizenz DWG ist abgelaufen.',
    failedToOpenFileLicenseInvalid:
      '„{fileName}“ konnte nicht geöffnet werden. Die Konverterlizenz DWG fehlt oder ist ungültig.',
    unknownEntities:
      'Diese Zeichnung enthält {count} unbekannte oder nicht unterstützte Objekte! Diese Objekte werden nicht angezeigt.',
    tianzhengEntities:
      'Diese Zeichnung enthält benutzerdefinierte Objekte von TArch/Tianzheng (oder ähnlichen Drittanbietern) (ca. {count}). Sie können in dieser Umgebung nicht vollständig analysiert werden, sodass einige Inhalte möglicherweise nicht angezeigt werden.',
    emptyProxyEntities:
      'Diese Zeichnung enthält {count} benutzerdefinierte Elemente ohne Proxy-Grafiken! Diese Objekte werden nicht angezeigt.'
  },
  notification: {
    center: {
      title: 'Benachrichtigungen',
      clearAll: 'Alles löschen',
      noNotifications: 'Keine Benachrichtigungen'
    },
    group: {
      fontMissed: 'Fehlende Schriftarten',
      fontMissedSummary:
        '{count} schriftartbezogene Nachrichten. Klicken Sie, um die Details zu erweitern.',
      unsupportedEntities: 'Nicht unterstützte Objekte',
      unsupportedEntitiesSummary:
        '{count} Parsing-bezogene Nachrichten. Klicken Sie, um die Details zu erweitern.',
      genericSummary:
        '{count} Nachrichten. Klicken Sie, um die Details zu erweitern.'
    },
    title: {
      failedToOpenFile: 'Datei konnte nicht geöffnet werden',
      failedToOpenFileWorkerOom: 'Unzureichender Speicher',
      failedToOpenFileWorkerTimeout: 'Zeitüberschreitung beim Öffnen',
      failedToOpenFileFontLoadFailed: 'Laden der Schriftart fehlgeschlagen',
      failedToOpenFileLicenseExpired: 'Lizenz abgelaufen',
      failedToOpenFileLicenseInvalid: 'Ungültige Lizenz',
      fontNotFound: 'Schriftart nicht gefunden',
      fontNotLoaded: 'Schriftart nicht geladen',
      parsingWarning: 'Probleme beim Parsen von Zeichnungen',
      systemMessage: 'Systemmeldung',
      systemWarning: 'Systemwarnung',
      systemError: 'Systemfehler',
      systemInfo: 'Systeminformationen'
    }
  },
  progress: {
    start: 'Parsen der Datei starten ...',
    parse: 'Parsing-Datei ...',
    font: 'Für diese Zeichnung benötigte Schriftarten werden heruntergeladen ...',
    ltype: 'Zeilentypen analysieren ...',
    style: 'Textstile werden analysiert ...',
    dimstyle: 'Bemaßungsstile werden analysiert ...',
    layer: 'Ebenen analysieren ...',
    vport: 'Ansichtsfenster werden analysiert ...',
    blockrecord: 'Blockdatensatz wird analysiert ...',
    header: 'Header wird analysiert ...',
    block: 'Parsing-Blöcke ...',
    entity: 'Objekte analysieren ...',
    object: 'Benannte Wörterbücher werden analysiert ...',
    rendering: 'Zeichnung rendern ...',
    end: 'Fertig!'
  },
  about: {
    title: 'Über',
    close: 'Schließen',
    product: 'CAD Zuschauer',
    tagline: 'Leistungsstarker Web-Viewer CAD für Zeichnungen DWG und DXF.',
    website: 'Webseite',
    docs: 'Dokumentation',
    repository: 'GitHub',
    copyright: '© {year} mlightcad. Alle Rechte vorbehalten.',
    ok: 'OK'
  },
  drawStyle: {
    color: 'Farbe',
    fontSize: 'Texthöhe'
  },
  shortCutToolbar: {
    more: 'Mehr',
    undo: 'Rückgängig',
    redo: 'Wiederherstellen',
    erase: 'Löschen',
    copy: 'Kopieren',
    cut: 'Schneiden',
    paste: 'Einfügen',
    collapse: 'Symbolleiste ausblenden',
    expand: 'Symbolleiste erweitern'
  },
  textHeight: {
    title: 'Texthöhe',
    close: 'Schließen',
    ok: 'OK',
    cancel: 'Abbrechen',
    adaptive: 'An Bildschirm anpassen',
    custom: 'Benutzerdefinierte Texthöhe',
    customPlaceholder: 'Höhe in Zeichnungseinheiten',
    fromScreen: 'Von der Bildschirmgröße',
    fromScreenHint:
      'Geben Sie ein, wie groß der Text beim aktuellen Zoom auf dem Bildschirm erscheinen soll. Es wird in eine feste Texthöhe in Zeichnungseinheiten umgewandelt, die beim späteren Zoomen konstant bleibt.',
    screenPxPlaceholder: 'Schriftgröße',
    screenUnit: 'px',
    convert: 'Konvertieren'
  },
  entityPick: {
    cancel: 'Auswahl abbrechen'
  },
  colorPicker: {
    title: 'Wählen Sie Farbe',
    close: 'Schließen',
    ok: 'OK',
    cancel: 'Abbrechen',
    index: 'Farbindex: ',
    rgb: 'RGB: ',
    input: 'Farbe',
    inputPlaceholder: '1-255 oder #RRGGBB'
  },
  touchPointTutorial: {
    title: 'Wie wählt man Punkte genau aus?',
    description:
      'Halten Sie den Bildschirm etwa 0,5 Sekunden lang gedrückt. Ein Kreuz erscheint über Ihrem Finger und folgt Ihrer Bewegung. Es rastet an der Geometrie ein, um eine genauere Auswahl zu ermöglichen.',
    snoozeToday: 'Erinnere mich heute nicht daran',
    hideForever: 'Erinnere mich nicht noch einmal daran',
    ok: 'Verstanden'
  },
  dataSource: {
    open: 'Öffnen',
    local: 'Lokale Datei',
    url: 'Von URL',
    openFrom: 'Geöffnet von {name}',
    signInTo: 'Melden Sie sich unter {name} an',
    signOutOf: 'Melden Sie sich von {name} ab',
    signOutOfAccount: 'Abmelden von {name} ({account})',
    urlDialogTitle: 'Geöffnet von URL',
    urlDialogHint: 'Geben Sie URL in eine .dwg- oder .dxf-Datei ein.',
    urlPlaceholder: 'https://example.com/drawing.dwg',
    cancel: 'Abbrechen',
    onedrive: 'OneDrive',
    googledrive: 'Google Drive',
    or: 'oder',
    dropFile: 'Legen Sie eine Datei hier ab oder',
    browse: 'durchsuchen',
    dropOrBrowse: 'DWG- oder DXF-Datei hier ablegen oder auswählen',
    newDrawing: 'Neue Zeichnung',
    source: 'Quelle',
    unavailable: 'Diese Quelle ist noch nicht verfügbar.',
    selectFile: 'Datei auswählen',
    signInRequired: 'Melden Sie sich zuerst an, um eine Datei auszuwählen.',
    downloading: 'Datei wird heruntergeladen ...'
  },
  dockPanel: {
    close: 'Panel schließen',
    dockSide: 'Dockseite',
    dockTop: 'Nach oben andocken',
    dockBottom: 'Nach unten andocken',
    dockLeft: 'Docken Sie nach links an',
    dockRight: 'Nach rechts andocken',
    moreTabs: 'Weitere Registerkarten',
    resize: 'Panelgröße ändern',
    tab: {
      layers: 'Layer',
      review: 'Prüfung',
      find: 'Suchen',
      measurements: 'Messungen'
    }
  }
}
