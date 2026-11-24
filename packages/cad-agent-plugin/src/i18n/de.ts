/**
 * German UI strings for the CAD Agent panel.
 *
 * Flat keys under `main.toolPalette.agent` (merged into {@link AcApI18n}).
 * Keys must stay in sync with {@link agentZh}.
 */
export const agentDe = {
  tab: 'Agent',
  title: 'CAD-Agent',
  settings: 'Einstellungen',
  clear: 'Neuer Chat',
  close: 'Schließen',
  model: 'Modell',
  emptyHint:
    'Beschreiben Sie, was Sie zeichnen möchten, oder fügen Sie ein Referenzbild (Skizze, Screenshot, Grundriss) bei.',
  toolPrefix: 'Werkzeug',
  copyTool: 'Werkzeugaufruf kopieren (Eingabe & Ausgabe)',
  toolCopied: 'Kopiert',
  copyMessage: 'Nachricht kopieren',
  messageCopied: 'Kopiert',
  editMessage: 'Nachricht bearbeiten',
  cancelEdit: 'Abbrechen',
  resendMessage: 'Senden',
  relativeTimeJustNow: 'gerade jetzt',
  relativeTimeSeconds: 'Vor {n} Jahren',
  relativeTimeMinutes: 'Vor {n}m',
  relativeTimeHours: 'Vor {n}h',
  relativeTimeDays: 'Vor {n} Tagen',
  queuedSendNow: 'Jetzt senden',
  queuedEdit: 'Bearbeiten',
  queuedDelete: 'Löschen',
  inputPlaceholder: 'Beschreiben Sie Ihr Anliegen…',
  attachImage: 'Bild anhängen',
  showContextUsage: 'Kontextverwendung anzeigen',
  contextUsage: 'Kontextverwendung',
  contextUsageDetail: '{percent}% · {used} / {limit}',
  contextUsageFull: '{percent} % voll',
  contextUsageTokens: '~{used} / {limit} Token',
  contextUsageEstimated: 'Geschätztes Fenster',
  contextUsageEstimateNote:
    'Relativ zu einer lokalen Schätzung des Modellkontextfensters, kein fester Anbietergrenzwert.',
  contextUsageSystemPrompt: 'Systemaufforderung',
  contextUsageToolDefinitions: 'Werkzeugdefinitionen',
  contextUsageImages: 'Bilder',
  contextUsageConversation: 'Gespräch',
  removeAttachment: 'Entfernen',
  imageAlt: 'Angehängtes Bild',
  imageOnlyRequest:
    'Bitte analysieren Sie die beigefügten Referenzbilder und helfen Sie mir, dieses in CAD zu zeichnen.',
  prepareImageFailed:
    'Das angehängte Bild konnte nicht vorbereitet werden. Versuchen Sie es mit einer kleineren PNG oder JPEG.',
  errorTitle: 'Etwas ist schief gelaufen',
  dismissError: 'Entlassen',
  send: 'Senden',
  stop: 'Stopp',
  working: 'Arbeiten…',
  thinking: 'Denken',
  agentMode: 'Agentenmodus',
  agentModeSimple: 'Einfach',
  agentModeHighInference: 'Hohe Schlussfolgerung',
  agentModeSimpleHint:
    'Standard. Schnell – lieber Measure-API Selbsttest; optionale Screenshots OK. Keine automatische Sichtprüfung.',
  agentModeHighInferenceHint:
    'Melden Sie sich für komplexe Aufgaben an. Nach dem Zeichnen erfolgt eine Überprüfung mit Screenshot + Vision-Modell (bis zu 5 Runden). Erfordert ein Vision-Modell.',
  highInferenceRequiresVision:
    'Der Modus „Hohe Inferenz“ erfordert ein visionsfähiges Modell.',
  verificationTitle: 'Überprüfung der Zeichnung',
  verifying:
    'Vergleichen Sie den Zeichnungs-Screenshot mit Ihren Anfrage- und Referenzbildern…',
  verificationPassed:
    'Überprüfung bestanden – die Zeichnung entspricht der Anfrage.',
  verificationFailed: 'Überprüfung fehlgeschlagen – Probleme gefunden:',
  verificationSkipped: 'Überprüfung übersprungen',
  verificationError: 'Verifizierungsfehler',
  verificationContinuing: 'Die Zeichnung wird weiter optimiert…',
  verificationMaxAttempts:
    'Die Überprüfung wurde innerhalb der maximalen Anzahl von Versuchen nicht erfolgreich durchgeführt.',
  referenceImages: 'Referenzbild(er)',
  drawingScreenshot: 'Aktueller Zeichnungs-Screenshot',
  missingApiKey:
    'Konfigurieren Sie in den Einstellungen einen API-Schlüssel, bevor Sie Nachrichten senden.',
  toolsSummary: 'Werkzeugaufrufe: {count}',
  toolsRunning: 'Laufwerkzeuge ({count})…',
  toolsFailed: '{count} fehlgeschlagen',
  taskPrompts: 'Vorgeschlagene Aufgaben',
  taskPromptsTitle: 'Gemeinsame Aufgaben',
  taskCategoryExtract: 'Extrahieren',
  taskCategoryStats: 'Statistiken',
  taskCategoryModify: 'Ändern',
  taskCategoryCreate: 'Erstellen',
  taskCategoryReview: 'Prüfung',
  taskDrawingOverviewTitle: 'Zeichnungsübersicht',
  taskDrawingOverviewPrompt:
    'Fassen Sie die geöffnete Zeichnung zusammen: Ausmaße, Einheitensystem (falls erkennbar), Layerliste und eine kurze Beschreibung dessen, was die Zeichnung zu enthalten scheint. Fragen Sie die Zeichnung ab – zeichnen Sie sie nicht neu.',
  taskExtractTextTitle: 'Extrahieren Sie Text und Titelblock',
  taskExtractTextPrompt:
    'Extrahieren Sie den gesamten lesbaren Text aus der geöffneten Zeichnung, einschließlich der Schriftfeldfelder, falls vorhanden. Gruppieren Sie ggf. nach Ebene oder Bereich und listen Sie die Werte klar auf.',
  taskListDimensionsTitle: 'Dimensionen auflisten',
  taskListDimensionsPrompt:
    'Suchen Sie in der geöffneten Zeichnung nach Bemaßungselementen und listen Sie deren Messwerte, zugehörigen Text und ungefähre Positionen auf. Fassen Sie alle offensichtlich fehlenden oder inkonsistenten Dimensionen zusammen.',
  taskEntityStatsTitle: 'Objekt zählt',
  taskEntityStatsPrompt:
    'Zählen Sie Elemente in der geöffneten Zeichnung nach Typ und Layer. Ziehen Sie zusammenfassende Abfragen (Anzahl/Blockstatistiken) dem Dumping jeder Objekt vor. Präsentieren Sie eine kompakte Tabellen- oder Bullet-Zusammenfassung.',
  taskLayerReportTitle: 'Layer-Nutzungsbericht',
  taskLayerReportPrompt:
    'Berichten Sie über Layer in der geöffneten Zeichnung: Name, Ein/Aus, Einfrieren, Farbe, Linientyp und ungefähre Elementanzahl pro Layer. Markieren Sie leere, unbenutzte oder seltsam benannte Ebenen.',
  taskOrganizeLayersTitle: 'Nach Ebenen organisieren',
  taskOrganizeLayersPrompt:
    'Schlagen Sie eine sinnvolle Ebenenorganisation für die offene Zeichnung vor und wenden Sie diese an (z. B. Wände, Türen, Text, Abmessungen, Möbel). Verschieben Sie falsch platzierte Elemente auf entsprechende Ebenen und erstellen Sie bei Bedarf fehlende Ebenen. Erklären Sie, was Sie geändert haben.',
  taskCleanupDrawingTitle: 'Zeichnung bereinigen',
  taskCleanupDrawingPrompt:
    'Überprüfen Sie die geöffnete Zeichnung auf häufige Bereinigungsprobleme (Geometrie mit der Länge Null, doppelte überlappende Elemente, wo erkennbar, leerer Text, nicht verwendete Ebenen) und beheben Sie die sicher zu behebenden Probleme. Fassen Sie die ergriffenen Maßnahmen und alles, was noch zur manuellen Überprüfung übrig bleibt, zusammen.',
  taskDrawDimensionedRectTitle: 'Zeichnen Sie ein bemaßtes Rechteck',
  taskDrawDimensionedRectPrompt:
    'Zeichnen Sie ein geschlossenes Rechteck 1000 × 600 (Zeicheneinheiten) mit der unteren linken Ecke bei (0, 0). Fügen Sie horizontale und vertikale Abmessungen für Breite und Höhe hinzu. Verwenden Sie klare Ebenen für Geometrie und Abmessungen.',
  taskCreateTitleBlockTitle: 'Erstellen Sie einen Titelblock',
  taskCreateTitleBlockPrompt:
    'Erstellen Sie im Modellbereich (oder im Papierbereich, falls bereits eingerichtet) einen einfachen Titelblock im A3-Stil: äußerer Rahmen, Titel, Zeichnungsnummer, Maßstab, Datum und gezeichnete Felder mit Platzhaltertext. Behalten Sie die Geometrie auf einer eigenen Ebene.',
  taskFromReferenceTitle: 'Zeichnen Sie aus dem Referenzbild',
  taskFromReferencePrompt:
    'Ich füge ein Referenzbild (Skizze, Screenshot oder Plan) bei. Analysieren Sie es sorgfältig und rekonstruieren Sie dann die beabsichtigte 2D-Geometrie CAD mit den richtigen Proportionen, Layer und Abmessungen, sofern sichtbar. Fragen Sie nur, wenn eine kritische Größe nicht eindeutig ist.',
  taskRedrawFromImageTitle: 'Bild als bearbeitbar neu zeichnen CAD',
  taskRedrawFromImagePrompt:
    'Ich werde ein Bild einer Zeichnung anhängen (Scan, Foto oder Screenshot). Zeichnen Sie es mit cad.redraw als bearbeitbar CAD neu: Wählen Sie ein Profil (allgemein, es sei denn, dem Bild fehlen Einheiten oder Maßstab), kalibrieren Sie jede Ansicht anhand lesbarer Abmessungen (jede Spezifikation erfordert eine Pixel↔CAD-Kalibrierung, damit der Vergleich ausgeführt werden kann) und kennzeichnen Sie jeden Wert als bekannt, skaliert, abgeleitet oder nicht lesbar. Reproduzieren Sie Geometrie, Bemaßungen, Text, Hinweislinien und Tabellen auf Standardebenen. Wenn das Bild einen Titelblock oder einen Blattrand aufweist, fragen Sie mich einmal in einer Nur-Text-Antwort, ob ich diesen einfügen soll, und warten Sie auf meine Antwort, bevor Sie „execute_cad_script“ / „cad.redraw.draw“ ausführen. Gehen Sie nicht von Millimetern aus. Führen Sie anschließend „Validieren → Zeichnen → Inspizieren → cad.redraw.compare“ aus und beenden Sie den Vorgang mit dem Status (bestanden / bestanden_mit_Warnungen / Bedarfsüberprüfung / blockiert / fehlgeschlagen), dem Vergleichsurteil, der verwendeten Kalibrierung und allen ungelösten Annahmen.',
  taskDraftingReviewTitle: 'Erstellung einer Qualitätsprüfung',
  taskDraftingReviewPrompt:
    'Überprüfen Sie die geöffnete Zeichnung auf Probleme mit der Entwurfsqualität: inkonsistente Texthöhen, Bemaßungen, die möglicherweise nicht mit der Geometrie übereinstimmen, überlappende Anmerkungen, Elemente auf Layer 0, die sich woanders befinden sollten, und unvollständige Ansichten. Befunde nach Schweregrad auflisten; Beheben Sie nur klare und sichere Probleme, sofern ich nicht anders verlange.',
  taskLayerStandardsTitle: 'Überprüfung der Ebenenbenennung',
  taskLayerStandardsPrompt:
    'Überprüfen Sie Layernamen, Farben und Verwendung anhand allgemeiner CAD-Konventionen. Schlagen Sie ein klareres Benennungsschema vor und benennen Sie die Ebenen optional um bzw. färben Sie sie neu, nachdem Sie die vorgeschlagenen Änderungen zusammengefasst haben.'
} as const
