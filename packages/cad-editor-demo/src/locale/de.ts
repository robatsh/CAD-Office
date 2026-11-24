export default {
  command: {
    ACAD: {
      quit: {
        description:
          'Beendet die Anwendung und schließt alle geöffneten Zeichnungen'
      },
      exit: {
        description:
          'Beendet die Anwendung und schließt alle geöffneten Zeichnungen'
      }
    }
  },

  example: {
    startup: {
      loading: 'CAD-Editor wird geladen …',
      error:
        'Der CAD-Editor konnte nicht geladen werden. Laden Sie die Seite neu, um es erneut zu versuchen.'
    },
    fileUpload: {
      title: 'CAD-Datei zum Anzeigen auswählen',
      subtitle: 'DWG- oder DXF-Zeichnungen im Viewer öffnen',
      newDrawing: 'Neue Zeichnung',
      or: 'oder',
      dropFile: 'Datei ablegen oder',
      browse: 'durchsuchen',

      openOptions: 'Optionen zum Öffnen',

      initialView: 'Erstansicht',
      auto: 'Automatisch',
      autoHint: 'Basierend auf dem Zugriffsmodus',
      extents: 'Grenzen',
      extentsHint: 'Zeichnung einpassen',
      saved: 'Gespeichert',
      savedHint: 'Gespeicherte AutoCAD-Ansicht',

      accessMode: 'Zugriffsmodus',
      read: 'Lesen',
      readHint: 'Nur ansehen',
      review: 'Prüfen',
      reviewHint: 'Ansehen und prüfen',
      write: 'Bearbeiten',
      writeHint: 'Voller Zugriff',

      textRendering: 'Textwiedergabe',
      worker: 'Web-Worker',
      workerHint: 'Schneller, mehr Speicher',
      mainThread: 'Hauptthread',
      mainThreadHint: 'Langsamer, weniger Speicher',

      progressive: 'Progressiv',
      progressiveRendering: 'Progressives Rendering',
      on: 'Ein',
      progressiveOnHint:
        'Sperren Sie die Benutzeroberfläche, bis die Analyse/Konvertierung abgeschlossen ist. dann schwenken/zoomen, während die Szene geladen wird',
      off: 'Aus',
      progressiveOffHint:
        'Warten Sie, bis Objekte und Text vollständig konvertiert sind',

      nonPlottable: 'Nicht plottbar',
      nonPlottableLayers: 'Nicht plottbare Layer',
      hide: 'Ausblenden',
      hideHint: 'Web Viewer-Standardeinstellung',
      show: 'Anzeigen',
      showHint: 'Semantik des AutoCAD-Editors',

      curveQuality: 'Kurvenqualität',
      curveDraft: 'Entwurf',
      curveDraftHint: 'Weniger Eckpunkte, kleinere Dateien',
      curveStandard: 'Standard',
      curveStandardHint: 'Ausgewogen (100 Seiten pro Kreis)',
      curveHigh: 'Qualität',
      curveHighHint: 'Glattere Kurven, mehr Speicher',

      paperSpaceBackground: 'Papierhintergrund',
      paperSpaceWhite: 'Weiß',
      paperSpaceWhiteHint: 'Desktop CAD / Druckvorschau',
      paperSpaceBlack: 'Schwarz',
      paperSpaceBlackHint: 'Web-Viewer-Präferenz',

      export: 'Exportieren',
      exportEnable: 'Aktivieren',
      exportEnableHint: 'Erlauben Sie den Export DXF/HTML/PDF/SVG/PNG',
      exportDisable: 'Deaktivieren',
      exportDisableHint: 'Exportbefehle und Dateimenüelemente ausblenden',

      invalidFileType:
        'Ungültiger Dateityp. Wählen Sie eine DWG- oder DXF-Datei aus.'
    }
  }
}
