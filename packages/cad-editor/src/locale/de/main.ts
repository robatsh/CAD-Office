export default {
  mainMenu: {
    new: 'Neue Zeichnung',
    open: 'Zeichnung öffnen',
    drawingUnits: 'Zeichnungseinheiten',
    exportMenu: 'Exportieren',
    export: 'Export nach DXF',
    exportImage: 'Als Bild exportieren',
    about: 'Über'
  },
  ribbon: {
    tab: {
      ai: 'AI',
      home: 'Zuhause',
      insert: 'Einfügen',
      view: 'Ansicht',
      review: 'Prüfung',
      measurement: 'Messung',
      hatchContext: 'Schraffur',
      mtextEditorContext: 'Texteditor'
    },
    hatch: {
      group: {
        boundary: 'Grenzen',
        pattern: 'Muster',
        properties: 'Eigenschaften',
        options: 'Optionen',
        close: 'Schließen'
      },
      command: {
        pickPoints: 'Punkte auswählen',
        selectObjects: 'Wählen Sie Objekte aus',
        close: 'Schließen'
      },
      field: {
        pattern: 'Muster',
        scale: 'Skalieren',
        angle: 'Winkel',
        style: 'Stil',
        associative: 'Assoziativ',
        fillType: 'Fülltyp',
        fillColor: 'Farbe',
        patternColor: 'Musterfarbe',
        gradient1Color: 'Farbverlauf 1',
        backgroundColor: 'Hintergrundfarbe',
        gradient2Color: 'Farbverlauf 2',
        opacity: 'Transparenz',
        imageScale: 'Bildskalierung'
      },
      style: {
        normal: 'Normal',
        outer: 'Äußerlich',
        ignore: 'Ignorieren'
      },
      fillType: {
        solid: 'Solide',
        pattern: 'Muster',
        gradient: 'Farbverlauf'
      },
      associative: {
        on: 'Ein',
        off: 'Aus'
      },
      tooltip: {
        pickPoints:
          'Wählen Sie interne Punkte aus, um Schraffurbereiche zu erstellen.',
        selectObjects:
          'Wählen Sie geschlossene Grenzobjekte zum Schraffieren aus.',
        pattern: 'Wählen Sie den Namen des Schraffurmusters.',
        scale: 'Legen Sie den Maßstab des Schraffurmusters fest.',
        angle: 'Legen Sie den Winkel des Schraffurmusters in Grad fest.',
        style:
          'Steuern Sie den Inselerkennungsstil für die Schraffurerstellung.',
        associative: 'Schalten Sie den assoziativen Schraffurmodus um.',
        fillType: 'Wählen Sie den Fülltyp: Vollton, Muster oder Farbverlauf.',
        fillColor: 'Wählen Sie die Füllfarbe.',
        patternColor: 'Wählen Sie die Farbe der Musterlinie.',
        gradient1Color: 'Wählen Sie die erste Verlaufsfarbe.',
        backgroundColor:
          'Wählen Sie die Hintergrundfarbe für die Musterfüllung.',
        gradient2Color: 'Wählen Sie die zweite Verlaufsfarbe.',
        opacity: 'Stellen Sie die Schraffurtransparenz ein (0-90).',
        imageScale: 'Legen Sie den Maßstab des Füllbilds fest.',
        close:
          'Beenden Sie die Schraffurerstellung und schließen Sie diese kontextbezogene Registerkarte.'
      }
    },
    mtext: {
      group: {
        textStyle: 'Textstil',
        format: 'Formatieren',
        paragraph: 'Absatz',
        insert: 'Einfügen',
        close: 'Schließen'
      },
      field: {
        textStyle: 'Textstil',
        font: 'Schriftart',
        color: 'Farbe',
        height: 'Höhe',
        obliqueAngle: 'Schräger Winkel',
        tracking: 'Verfolgung',
        widthFactor: 'Breitenfaktor'
      },
      characterMap: {
        title: 'Zeichentabelle',
        font: 'Schriftart(F):',
        charsToCopy: 'Zu kopierende Zeichen (A):',
        select: 'Auswählen(S)',
        copy: 'Kopieren (C)',
        noGlyphs: 'Für diese Schriftart sind keine Zeichen verfügbar.',
        copyFailed: 'Kopieren in die Zwischenablage nicht möglich.'
      },
      command: {
        bold: 'Fett',
        underline: 'Unterstreichen',
        superscript: 'Hochgestellt',
        italic: 'Kursiv',
        overline: 'Überstreichen',
        subscript: 'Tiefgestellt',
        strikethrough: 'Durchgestrichen',
        stack: 'Stapel',
        toggleCase: 'Groß-/Kleinschreibung',
        attachment: 'Begründen Sie',
        list: 'Aufzählungszeichen und Nummerierung',
        lineSpacing: 'Zeilenabstand',
        paragraphAlignment: 'Absatzausrichtung',
        symbol: 'Symbol',
        close: 'Schließen'
      },
      tooltip: {
        textStyle: 'Wählen Sie einen Textstil aus der aktuellen Zeichnung.',
        bold: 'Schalten Sie die Fettformatierung um.',
        underline: 'Unterstreichungsformatierung umschalten.',
        superscript: 'Schalten Sie die hochgestellte Formatierung um.',
        italic: 'Kursivformatierung umschalten.',
        overline: 'Schalten Sie die Overline-Formatierung um.',
        subscript: 'Schalten Sie die tiefgestellte Formatierung um.',
        strikethrough: 'Durchgestrichene Formatierung umschalten.',
        stack: 'Ausgewählten Bruchtext stapeln oder entstapeln.',
        toggleCase:
          'Schalten Sie den ausgewählten Text zwischen Groß- und Kleinschreibung um.',
        font: 'Legen Sie die aktuelle Textschriftart fest.',
        color: 'Legen Sie die aktuelle Textfarbe fest.',
        height:
          'Legen Sie die aktuelle Texthöhe fest. Benutzerdefinierte Werte sind zulässig.',
        obliqueAngle:
          'Legen Sie den Neigungswinkel in Grad für ausgewählte Zeichen fest (negative Neigung in die andere Richtung).',
        tracking:
          'Erhöhen oder verringern Sie den Abstand zwischen den ausgewählten Zeichen (1 ist die Standardeinstellung).',
        widthFactor:
          'Ausgewählte Zeichen horizontal strecken oder komprimieren (Standard ist 1).',
        attachment:
          'Legen Sie den Befestigungspunkt für mehrzeiligen Text fest.',
        list: 'Fügen Sie Aufzählungszeichen und Nummerierungen ein oder konfigurieren Sie sie.',
        lineSpacing: 'Zeilenabstand einstellen.',
        paragraphAlignment:
          'Legen Sie die horizontale Ausrichtung des Absatzes fest.',
        symbol: 'Fügen Sie ein gemeinsames Zeichnungssymbol ein.',
        close:
          'Schließen Sie den Texteditor und diese kontextbezogene Registerkarte.'
      },
      attachment: {
        TL: 'Oben links TL',
        TC: 'Mitte oben (TC)',
        TR: 'Oben rechts TR',
        ML: 'Mitte links ML',
        MC: 'Mittelzentrum MC',
        MR: 'Mitte rechts HERR',
        BL: 'Unten links BL',
        BC: 'Unten Mitte BC',
        BR: 'Unten rechts BR'
      },
      list: {
        off: 'Aus',
        number: 'Nummeriert',
        letter: 'Beschriftet',
        bullet: 'Mit Aufzählungszeichen',
        start: 'Starten',
        continue: 'Weiter',
        auto: 'Automatische Aufzählungszeichen und Nummerierung zulassen',
        allowList: 'Aufzählungszeichen und Listen zulassen'
      },
      lineSpacing: {
        more: 'Weitere …',
        clear: 'Klarer Absatzabstand'
      },
      paragraphAlign: {
        default: 'Standard',
        left: 'Links',
        center: 'Mittelpunkt',
        right: 'Richtig',
        justified: 'Begründet',
        distributed: 'Verteilt'
      },
      symbol: {
        degree: 'Grad %%d',
        plusMinus: 'Plus/Minus %%p',
        diameter: 'Durchmesser %%c',
        almostEqual: 'Ungefähr gleich  \\U+2248',
        angle: 'Winkel  \\U+2220',
        boundary: 'Begrenzungslinie  \\U+E100',
        centerLine: 'Mittellinie  \\U+2104',
        delta: 'Delta  \\U+0394',
        electricalPhase: 'Elektrische Phase  \\U+0278',
        flowLine: 'Flusslinie  \\U+E101',
        identical: 'Identisch mit  \\U+2261',
        notEqual: 'Ungleich  \\U+2260',
        ohm: 'Ohm  \\U+2126',
        omega: 'Omega  \\U+03A9',
        propertyLine: 'Grundstücksgrenze  \\U+214A',
        subscriptTwo: 'Tiefgestellte 2  \\U+2082',
        squared: 'Hoch 2  \\U+00B2',
        cubed: 'Hoch 3  \\U+00B3',
        nbsp: 'Geschütztes Leerzeichen Ctrl+Shift+Leerzeichen',
        other: 'Andere …'
      }
    },
    group: {
      smartBlocks: 'Intelligente Blöcke',
      draw: 'Zeichnen',
      dimension: 'Bemaßung',
      modify: 'Ändern',
      clipboard: 'Zwischenablage',
      layer: 'Layer',
      properties: 'Eigenschaften',
      groups: 'Gruppen',
      utilities: 'Dienstprogramme',
      annotation: 'Anmerkung',
      navigate: 'Navigieren',
      namedViews: 'Benannte Ansichten',
      coordinates: 'Koordinaten',
      review: 'Prüfung',
      measurement: 'Messung',
      style: 'Stil',
      lengthUnits: 'Längeneinheiten',
      angleUnits: 'Winkeleinheiten',
      reference: 'Referenz',
      block: 'Block'
    },
    insertBlock: {
      empty: 'Keine Blöcke verfügbar',
      currentDrawing: 'Aktuelle Zeichnung',
      previewMenu: 'Vorschaugalerie blockieren'
    },
    property: {
      color: 'Farbe',
      lineType: 'Linientyp',
      lineWeight: 'Linienstärke'
    },
    layerTools: {
      select: 'Layer',
      off: 'Ebene ausschalten',
      isolate: 'Isolieren',
      freeze: 'Ebene einfrieren',
      lock: 'Ebene sperren',
      current: 'Strom einstellen',
      allOn: 'Layer einschalten',
      unisolate: 'Isolieren',
      thaw: 'Layer auftauen',
      unlock: 'Ebene entsperren',
      restore: 'Ebenenwiederherstellung'
    },
    arc: {
      threePoint: '3-Punkt',
      startCenterEnd: 'Start, Mitte, Ende',
      startCenterAngle: 'Start, Mitte, Winkel',
      startCenterLength: 'Start, Mitte, Länge',
      startEndAngle: 'Start, Ende, Winkel',
      startEndDirection: 'Start, Ende, Richtung',
      startEndRadius: 'Start, Ende, Radius',
      centerStartEnd: 'Mitte, Anfang, Ende',
      centerStartAngle: 'Mitte, Start, Winkel',
      centerStartLength: 'Mitte, Start, Länge'
    },
    circle: {
      centerRadius: 'Zentrum, Radius',
      centerDiameter: 'Mitte, Durchmesser',
      twoPoint: '2-Punkt',
      threePoint: '3-Punkt',
      tanTanRadius: 'Tangente, Tangente, Radius',
      tanTanTan: 'Tangente, Tangente, Tangente'
    },
    ellipse: {
      ellipse: 'Ellipse',
      arc: 'Elliptischer Bogen'
    },
    tooltip: {
      searchConvert:
        'Finden Sie alle Kopien der ausgewählten Objekte und konvertieren Sie sie in Blöcke (BSEARCH).',
      detectConvert:
        'Finden Sie wiederholte Objekte an einer beliebigen Stelle in der Zeichnung und konvertieren Sie sie in Blöcke (BDETECT).',
      line: 'Zeichnen Sie ein einzelnes gerades Liniensegment.',
      polyline:
        'Zeichnen Sie eine verbundene Reihe von Linien- oder Bogensegmenten als ein Objekt.',
      spline:
        'Zeichnen Sie eine glatte Spline-Kurve durch Anpassungs- oder Kontrollpunkte.',
      sketch: 'Erstellen Sie eine Reihe freihändiger Liniensegmente.',
      revcloud:
        'Erstellen Sie eine Revisionswolke, um Zeichenbereiche hervorzuheben.',
      circle: 'Zeichnen Sie einen Kreis mit mehreren Konstruktionsmethoden.',
      arc: 'Zeichnen Sie einen Bogen mit mehreren Konstruktionsmethoden.',
      mline:
        'Zeichnen Sie mehrere parallele Linien als ein einziges mehrzeiliges Objekt.',
      ray: 'Zeichnen Sie einen halbunendlichen Konstruktionsstrahl von einem Startpunkt aus.',
      xline: 'Zeichnen Sie eine unendliche Konstruktionslinie.',
      ellipse: 'Zeichnen Sie eine Ellipse oder einen elliptischen Bogen.',
      rect: 'Zeichnen Sie ein Rechteck oder ein regelmäßiges Vieleck.',
      point: 'Platzieren Sie ein Punktobjekt in der Zeichnung.',
      hatch:
        'Füllen Sie einen geschlossenen Bereich mit einem Schraffurmuster.',
      text: 'Erstellen Sie mehrzeilige Textanmerkungen in der Zeichnung.',
      dimension: 'Erstellen Sie Bemaßungen mit mehreren Konstruktionsmethoden.',
      dimlinear:
        'Erstellen Sie eine horizontale, vertikale oder gedrehte lineare Bemaßung.',
      dimaligned: 'Erstellen Sie eine ausgerichtete lineare Bemaßung.',
      dimradius:
        'Erstellen Sie eine radiale Bemaßung für einen Kreis oder Bogen.',
      dimdiameter:
        'Erstellen Sie eine Durchmesserbemaßung für einen Kreis oder Bogen.',
      dimangular: 'Erstellen Sie eine Winkelbemaßung.',
      dimarc: 'Erstellen Sie eine Bogenlängenbemaßung.',
      dimordinate: 'Erstellen Sie eine Ordinatenbemaßung.',
      dimcontinue:
        'Erstellen Sie eine Fortsetzungsbemaßung aus der vorherigen.',
      dimbaseline: 'Erstellen Sie eine Basisdimension aus der vorherigen.',
      dimstyle: 'Öffnen Sie den Bemaßungsstil-Manager.',
      textStyle: 'Öffnen Sie den Textstil-Manager.',
      mleaderStyle: 'Öffnen Sie den Multileader-Stil-Manager.',
      mleader: 'Erstellen Sie eine Multi-Führungslinien-Anmerkung.',
      mleaderAdd:
        'Fügen Sie einer vorhandenen Multi-Führungslinie eine Führungslinie hinzu.',
      mleaderRemove:
        'Entfernen Sie eine Führungslinie von einer vorhandenen Multiführungslinie.',
      move: 'Ausgewählte Objekte an eine neue Position verschieben.',
      mirror: 'Erstellen Sie eine gespiegelte Kopie der ausgewählten Objekte.',
      trim: 'Schneidet Objekte so zu, dass sie an die Kanten anderer Objekte passen.',
      extend:
        'Verlängert Objekte, um sie an die Kanten anderer Objekte anzupassen.',
      rotate: 'Ausgewählte Objekte um einen Basispunkt drehen.',
      scale:
        'Vergrößern oder verkleinern Sie ausgewählte Objekte, wobei die Proportionen nach der Skalierung erhalten bleiben.',
      erase: 'Ausgewählte Objekte aus der Zeichnung löschen.',
      pasteClip:
        'Fügen Sie Objekte aus der Zwischenablage in die aktuelle Zeichnung ein (PASTECLIP).',
      pasteOrig:
        'Fügen Sie Objekte aus der Zwischenablage mit den Koordinaten aus der Originalzeichnung (PASTEORIG) ein.',
      pasteBlock:
        'Fügen Sie Objekte aus der Zwischenablage als Block in die aktuelle Zeichnung ein (PASTEBLOCK).',
      cutClip:
        'Entfernen Sie die ausgewählten Objekte und kopieren Sie sie in die Zwischenablage (CUTCLIP).',
      copyClip:
        'Kopieren Sie die ausgewählten Objekte in die Zwischenablage (COPYCLIP).',
      copyBase:
        'Kopieren Sie die ausgewählten Objekte mit einem angegebenen Basispunkt (COPYBASE) in die Zwischenablage.',
      explode:
        'Zerlegen Sie ein zusammengesetztes Objekt in seine Komponentenobjekte.',
      join: 'Verbinden Sie die Endpunkte von Linien, Bögen und Polylinien, um ein einzelnes Objekt zu erstellen.',
      fillet: 'Runden und verrunden Sie die Kanten von Objekten.',
      chamfer: 'Fasen Sie die Kanten von Objekten ab.',
      offset:
        'Erstellen Sie eine parallele Kopie eines Objekts in einem bestimmten Abstand.',
      undo: 'Machen Sie den letzten Bearbeitungsvorgang rückgängig.',
      redo: 'Wiederholen Sie den letzten rückgängig gemachten Bearbeitungsvorgang.',
      properties:
        'Öffnen Sie die Eigenschaftenpalette für die aktuelle Auswahl.',
      group: 'Erstellen Sie eine Gruppe aus ausgewählten Objekten (GROUP).',
      ungroup: 'Zerlegen Sie eine Gruppendefinition (UNGROUP).',
      groupEdit:
        'Gruppenmitglieder hinzufügen, entfernen oder umbenennen (GROUPEDIT).',
      groupSelect:
        'Gruppenauswahl ein- oder ausschalten (PICKSTYLE Gruppenbit).',
      classicGroup:
        'Öffnen Sie das Dialogfeld „Objektgruppierung“ (CLASSICGROUP).',
      quickSelect:
        'Öffnen Sie die Schnellauswahl, um Objekte nach Kriterien zu filtern und auszuwählen.',
      find: 'Öffnen Sie die Suchpalette, um Text in der gesamten Zeichnung oder im aktuellen Layout zu suchen.',
      countList:
        'Öffnen Sie die Palette „Anzahl“, um die Blockanzahl anzuzeigen und zu verwalten.',
      missingResources:
        'Öffnen Sie die Palette „Fehlende/Externe Ressourcen“ für Schriftarten, Bilder und XRefs.',
      drawingUnits:
        'Öffnen Sie Zeichnungseinheiten, um Koordinatenformate, Genauigkeit und Einfügemaßstab festzulegen.',
      attachDwg:
        'Hängen Sie eine DWG- oder DXF-Zeichnung als externe Referenz an (XATTACH).',
      attachImage:
        'Hängen Sie ein Rasterbild als externe Referenz an (IMAGEATTACH).',
      insert:
        'Öffnen Sie die Palette „Blöcke“, um Blockdefinitionen zu durchsuchen und einzufügen (INSERT).',
      editAttributes:
        'Öffnen Sie den erweiterten Attributeditor, um Blockattributwerte und Anzeigeeigenschaften zu bearbeiten (ATTEDIT).',
      defineAttribute:
        'Erstellen Sie eine Attributdefinition zur Verwendung in einem Block (ATTDEF).',
      pan: 'Verschiebt die Ansicht der Zeichnung, ohne die Vergrößerung zu ändern.',
      zoom: 'Zoomt die Zeichnungsanzeige.',
      zoomExtents:
        'Zoomt, um die maximale Ausdehnung aller Elemente anzuzeigen.',
      zoomWindow:
        'Zoomt, um einen durch ein Fenster angegebenen Bereich anzuzeigen.',
      zoomPrevious: 'Zoomt, um die vorherige Ansicht anzuzeigen.',
      zoomSaved: 'Zoomt auf die gespeicherte VPORT / Layout-Ansicht.',
      zoomSmart: 'Zoomt auf den dominanten Geometriecluster.',
      newView:
        'Erstellt eine neue benannte Ansicht aus der aktuellen Anzeige oder einem Fenster.',
      viewManager:
        'Öffnet den Ansichtsmanager zum Erstellen, Wiederherstellen und Löschen benannter Ansichten.',
      ucs: 'Legt den Ursprung und die Ausrichtung des aktuellen Benutzerkoordinatensystems fest.',
      namedUcs:
        'Verwaltet benannte UCS-Definitionen und UCS-Symboleinstellungen.',
      ucsWorld: 'Setzt UCS auf das Weltkoordinatensystem.',
      ucsOrigin: 'Definiert einen neuen UCS-Ursprung.',
      ucsX: 'Dreht den UCS um die X-Achse.',
      ucsY: 'Dreht den UCS um die Y-Achse.',
      ucsZ: 'Dreht den UCS um die Z-Achse.',
      ucsZAxis: 'Definiert einen UCS durch Angabe der Z-Achse.',
      ucsView: 'Richtet UCS an der aktuellen Ansicht aus.',
      ucsObject: 'Richtet den UCS an einem ausgewählten Objekt aus.',
      restoreView:
        'Stellt eine in der Zeichnung gespeicherte benannte Ansicht wieder her.',
      propertyColor:
        'Legen Sie die Farbe für neu erstellte Objekte oder ausgewählte Elemente fest.',
      propertyLineType:
        'Legen Sie den Linientyp für neu erstellte Objekte oder ausgewählte Elemente fest.',
      propertyLineWeight:
        'Legen Sie die Linienstärke für neu erstellte Objekte oder ausgewählte Elemente fest.',
      layerAction: {
        off: 'Schaltet die ausgewählte Ebene aus, sodass ihre Objekte ausgeblendet werden, ohne dass die Ebene einfriert.',
        isolate:
          'Zeigt nur die ausgewählte Ebene an und blendet die anderen aus, sodass Sie sich auf verwandte Objekte konzentrieren können.',
        freeze:
          'Friert die ausgewählte Ebene ein, sodass ihre Objekte während der Neugenerierung ausgeblendet und übersprungen werden.',
        lock: 'Sperrt die ausgewählte Ebene, sodass ihre Objekte sichtbar bleiben, aber nicht bearbeitet werden können.',
        current:
          'Macht die ausgewählte Ebene zur aktuellen Ebene, sodass auf dieser Ebene neue Objekte erstellt werden.',
        allOn:
          'Aktiviert jede Ebene, die derzeit deaktiviert ist. Eingefrorene Ebenen bleiben eingefroren.',
        unisolate:
          'Stellt Ebenen wieder her, die durch „Ebenenisolierung“ ausgeblendet oder gesperrt wurden, und behält spätere Ebenenänderungen bei.',
        thaw: 'Taut den ausgewählten Layer einschalten, sodass seine Objekte sichtbar sind und erneut in die Regenerierung einbezogen werden.',
        unlock:
          'Entsperrt die ausgewählte Ebene, sodass ihre Objekte erneut ausgewählt und geändert werden können.',
        restore:
          'Stellt den vorherigen Ebenenstatus aus der letzten Ebenenaktion in diesem Menüband wieder her.'
      },
      circleOption: {
        centerRadius:
          'Erstellen Sie einen Kreis, indem Sie einen Mittelpunkt und einen Radius angeben.',
        centerDiameter:
          'Erstellen Sie einen Kreis, indem Sie einen Mittelpunkt und einen Durchmesser angeben.',
        twoPoint:
          'Erstellen Sie einen Kreis, dessen Durchmesser durch zwei Punkte definiert wird.',
        threePoint:
          'Erstellen Sie einen Kreis, der durch drei Punkte verläuft.',
        tanTanRadius:
          'Erstellen Sie einen Kreis tangential zu zwei Objekten mit einem angegebenen Radius.',
        tanTanTan: 'Erstellen Sie einen Kreis tangential zu drei Objekten.'
      },
      arcOption: {
        threePoint:
          'Erstellen Sie einen Bogen, der durch einen Startpunkt, einen zweiten Punkt und einen Endpunkt verläuft.',
        startCenterEnd:
          'Erstellen Sie einen Bogen, indem Sie einen Startpunkt, einen Mittelpunkt und einen Endpunkt angeben.',
        startCenterAngle:
          'Erstellen Sie einen Bogen mit einem Startpunkt, einem Mittelpunkt und einem eingeschlossenen Winkel.',
        startCenterLength:
          'Erstellen Sie einen Bogen mit einem Startpunkt, einem Mittelpunkt und einer Bogenlänge.',
        startEndAngle:
          'Erstellen Sie einen Bogen aus Start- und Endpunkten mit eingeschlossenem Winkel.',
        startEndDirection:
          'Erstellen Sie einen Bogen aus Start- und Endpunkten mit einer tangentialen Richtung am Startpunkt.',
        startEndRadius:
          'Erstellen Sie einen Bogen aus Start- und Endpunkten mit einem angegebenen Radius.',
        centerStartEnd:
          'Erstellen Sie einen Bogen, indem Sie einen Mittelpunkt, einen Startpunkt und einen Endpunkt angeben.',
        centerStartAngle:
          'Erstellen Sie einen Bogen, indem Sie einen Mittelpunkt, einen Startpunkt und einen eingeschlossenen Winkel angeben.',
        centerStartLength:
          'Erstellen Sie einen Bogen, indem Sie einen Mittelpunkt, einen Startpunkt und eine Bogenlänge angeben.'
      },
      rectOption: {
        rectangle:
          'Erstellen Sie ein Rechteck, indem Sie gegenüberliegende Ecken oder Abmessungen angeben.',
        polygon:
          'Erstellen Sie ein regelmäßiges Polygon, indem Sie die Anzahl der Seiten und die Konstruktionsmethode angeben.'
      },
      ellipseOption: {
        ellipse:
          'Erstellen Sie eine vollständige Ellipse, indem Sie die Haupt- und Nebenachse angeben.',
        arc: 'Erstellen Sie einen elliptischen Bogen, indem Sie Ellipsenachsen und Bogengrenzen angeben.'
      }
    },
    command: {
      searchConvert: 'Suchen und\nKonvertieren',
      detectConvert: 'Erkennen und\nKonvertieren',
      line: 'Linie',
      polyline: 'Polylinie',
      circle: 'Kreis',
      arc: 'Bogen',
      mline: 'Multilinie',
      ray: 'Strahl',
      xline: 'Konstruktionslinie',
      ellipse: 'Ellipse',
      spline: 'Spline',
      sketch: 'Skizze',
      revcloud: 'Revisionswolke',
      rect: 'Rechteck',
      rectangle: 'Rechteck',
      polygon: 'Polygon',
      point: 'Punkt',
      divide: 'Teilen',
      hatch: 'Schraffur',
      text: 'Text',
      gradient: 'Farbverlauf',
      dimension: 'Bemaßung',
      dimlinear: 'Linear',
      dimaligned: 'Ausgerichtet',
      dimradius: 'Radius',
      dimdiameter: 'Durchmesser',
      dimangular: 'Eckig',
      dimarc: 'Bogen\nLänge',
      dimordinate: 'Ordinieren',
      dimcontinue: 'Weiter',
      dimbaseline: 'Grundlinie',
      dimstyle: 'Düsterer Stil',
      textStyle: 'Textstil',
      mleaderStyle: 'Multileader-Stil',
      mleader: 'Multi-Führungslinie',
      mleaderAdd: 'Anführer hinzufügen',
      mleaderRemove: 'Anführer entfernen',
      move: 'Verschieben',
      mirror: 'Spiegeln',
      trim: 'Stutzen',
      extend: 'Dehnen',
      rotate: 'Drehen',
      scale: 'Skalieren',
      erase: 'Löschen',
      pasteClip: 'Einfügen',
      pasteOrig: 'In Originalkoordinaten einfügen',
      pasteBlock: 'Als Block einfügen',
      cutClip: 'Schneiden',
      copyClip: 'Kopieren',
      copyBase: 'Mit Basispunkt kopieren',
      explode: 'Ursprung',
      join: 'Machen Sie mit',
      fillet: 'Abrunden',
      chamfer: 'Fase',
      offset: 'Versetzen',
      undo: 'Rückgängig',
      redo: 'Wiederherstellen',
      properties: 'Eigenschaften',
      group: 'Gruppe',
      ungroup: 'Gruppierung aufheben',
      groupEdit: 'Gruppenbearbeitung',
      groupSelect: 'Gruppenauswahl ein/aus',
      classicGroup: 'Gruppenleiter',
      quickSelect: 'Schnell\nAuswählen',
      find: 'Suchen',
      countList: 'Zählen',
      drawingUnits: 'Zeichnung\nEinheiten',
      attachDwg: 'Anhängen\nDWG',
      attachImage: 'Anhängen\nBild',
      insert: 'Einfügen',
      editAttributes: 'Bearbeiten\nAttribute',
      defineAttribute: 'Definieren\nAttribut',
      pan: 'Verschieben',
      zoom: 'Zoom',
      zoomExtents: 'Grenzen',
      zoomWindow: 'Fenster',
      zoomPrevious: 'Zurück',
      zoomSaved: 'Gespeichert',
      zoomSmart: 'Automatisch einpassen',
      newView: 'Neu\nAnsicht',
      viewManager: 'Ansicht\nManager',
      ucs: 'UCS',
      namedUcs: 'Benannt\nUCS',
      ucsWorld: 'Welt',
      ucsOrigin: 'Herkunft',
      ucsX: 'X',
      ucsY: 'Y',
      ucsZ: 'Z',
      ucsZAxis: 'Z-Achse',
      ucsView: 'Ansicht',
      ucsObject: 'Objekt',
      restoreView: 'Wiederherstellen\nAnsicht'
    }
  },
  bsearch: {
    found: '{count}-Instanzen gefunden, einschließlich {included}',
    previous: 'Vorherige Instanz',
    next: 'Nächste Instanz',
    convert: 'In Block konvertieren…',
    cancel: 'Abbrechen',
    rotation: 'Gedreht',
    mirror: 'Gespiegelt',
    scale: 'Skaliert',
    sameLayer: 'Gleiche Layer',
    existingBlocks: 'Vorhandene Blöcke',
    textVariations: 'Textvariationen',
    pickPrompt:
      'Klicken Sie auf eine Instanz, um sie einzuschließen oder auszuschließen, oder',
    source: 'Ausgewählte Objekte: {count}',
    options: 'Suchoptionen',
    none: 'Es wurden keine weiteren Instanzen gefunden. Ändern Sie die Suchoptionen oder konvertieren Sie die Auswahl allein.',
    includeAll: 'Alle einbeziehen',
    include: 'Schließen Sie diese Instanz ein',
    instance: 'Instanz {index}',
    blockReference: 'Blockreferenz',
    rotatedBy: 'Gedreht {angle}°',
    mirrored: 'Gespiegelt',
    scaledBy: 'Skala {scale}',
    hint: 'Klicken Sie auf eine Zeile, um auf die Instanz zu zoomen. Klicken Sie auf ein Exemplar in der Zeichnung, um es ein- oder auszuschließen.'
  },
  bdetect: {
    detecting: 'Suche in der Zeichnung nach sich wiederholenden Objekten…',
    foundSoFar: 'Bisher gefundene {count}-Gruppen',
    stop: 'Stopp',
    ready: 'Passen Sie die Optionen an und klicken Sie dann auf Erkennen.',
    detect: 'Erkennen',
    detectAgain: 'Erneut erkennen',
    options: 'Erkennungsoptionen',
    explain: 'Details für {option}',
    rotation: 'Gedreht',
    mirror: 'Gespiegelt',
    scale: 'Skaliert',
    sameLayer: 'Gleiche Layer',
    textVariations: 'Textvariationen',
    minInstances: 'Min. Instanzen',
    minSavings: 'Min. Einsparungen',
    maxEntities: 'Max. Objekte',
    help: {
      rotation:
        'Gedrehte Kopien gelten in jedem Winkel immer noch als dasselbe Objekt. Deaktivieren Sie diese Option, um nur Kopien zu gruppieren, die in die gleiche Richtung weisen.',
      mirror:
        'Gespiegelte Kopien gelten immer noch als dasselbe Objekt, beispielsweise eine Tür, die in die andere Richtung schwingt. Schalten Sie diese Option aus, um umgedrehte Kopien wegzulassen.',
      scale:
        'Kopien, die einheitlich größer oder kleiner sind, gelten dennoch als dasselbe Objekt. Deaktivieren Sie diese Option, um nur Kopien derselben Größe zu gruppieren. Gestreckte oder schiefe Formen werden niemals angepasst.',
      sameLayer:
        'Jede Form in einer Kopie muss auf derselben Ebene liegen wie die passende Form. Deaktivieren Sie diese Option, wenn ein Symbol auf mehrere Ebenen aufgeteilt ist, was häufig nach einem PDF-Import vorkommt, bei dem Ebenen nach Farbe zugewiesen werden.',
      textVariations:
        'Kopien können unterschiedliche einzeilige Texte enthalten, beispielsweise Zimmernummern. Diese Texte werden bei der Konvertierung der Gruppe zu Blockattributen. Deaktivieren Sie diese Option, damit der Text genau gleich gelesen werden muss. Mehrzeiliger Text muss immer übereinstimmen und wird nicht zum Attribut.',
      minInstances:
        'Eine Gruppe wird nur dann aufgeführt, wenn mindestens so viele Kopien einschließlich des Originals gefunden werden. Der kleinste Wert ist 2. Erhöhen Sie ihn, um Paare zu ignorieren und nur Objekte zu behalten, die sich häufiger wiederholen.',
      minSavings:
        'Eine Gruppe bleibt nur erhalten, wenn durch die Konvertierung mindestens diese Anzahl an Objekten entfernt werden würde. Die Einsparung entspricht der Anzahl der Kopien, die um eins kleiner ist als die Anzahl der Objekte in einer Kopie: Eine Kopie wird zum Block und jede andere Kopie wird durch eine einzelne Blockreferenz ersetzt. Beispielsweise speichern 5 Kopien eines 3-Objekt-Symbols 10 Objekte. Erhöhen Sie diesen Wert, um kleine Gruppen auszublenden, oder setzen Sie ihn auf 0, um jede Wiederholung aufzulisten.',
      maxEntities:
        'Die meisten Objekte, die eine Kopie enthalten kann. Die Erkennung stoppt das Hinzufügen von Teilen, sobald eine Gruppe diese Größe erreicht, sodass ein Symbol mit mehr Teilen nur teilweise enthalten ist. Senken Sie ihn, um große, komplizierte Wiederholungen zu überspringen, und heben Sie ihn an, wenn ein gewünschtes Symbol mehr Teile hat. Der Standardwert ist 64.'
    },
    groups: '{count} Gruppen wiederholter Objekte',
    none: 'Es wurden keine wiederholten Objekte gefunden.',
    selectAll: 'Alles auswählen',
    instances: '{count}-Instanzen × {objects}-Objekte',
    layers: 'Layer: {layers}',
    attributes: 'Attribute',
    attributesHint:
      'Texte, die sich zwischen Instanzen unterscheiden, werden zu Attributen',
    blockName: 'Blockname',
    review: 'Überprüfen und konvertieren Sie diese Gruppe…',
    convertSelected: 'Ausgewählte konvertieren ({count})',
    close: 'Schließen',
    pickPrompt: 'Klicken Sie auf ein Objekt, um seine Gruppe anzuzeigen, oder',
    summary: 'Konvertierte {groups}-Gruppen in {count}-Blockverweise',
    nameDuplicate:
      'Blockname „{name}“ wird von einer anderen ausgewählten Gruppe verwendet'
  },
  verticalToolbar: {
    measure: {
      text: 'Messen',
      description: 'Messwerkzeuge'
    },
    measureDistance: {
      text: 'Abstand',
      description: 'Misst den Abstand zwischen zwei Punkten'
    },
    measureContinuous: {
      text: 'Durchgezogen',
      description:
        'Misst verkettete Entfernungen durch Auswahl aufeinanderfolgender Punkte bis zur Eingabe oder Abbrechen'
    },
    measureAngle: {
      text: 'Winkel',
      description:
        'Misst den Winkel zwischen zwei Linien mit einem gemeinsamen Scheitelpunkt'
    },
    measureArea: {
      text: 'Bereich',
      description: 'Misst die Fläche eines Polygons'
    },
    measureArc: {
      text: 'Bogen',
      description: 'Misst die Länge eines durch drei Punkte definierten Bogens'
    },
    measurePoint: {
      text: 'Punkt',
      description: 'Misst die X/Y-Koordinaten eines ausgewählten Punkts'
    },
    measurementPanel: {
      text: 'Palette',
      description: 'Öffnen Sie die Maßpalette'
    },
    clearMeasurements: {
      text: 'Löschen',
      description: 'Entfernt alle Maße aus dem aktuellen Layout'
    },
    measurementImport: {
      text: 'Importieren',
      description: 'Importieren Sie Messungen aus einer Sidecar-JSON-Datei'
    },
    measurementExport: {
      text: 'Exportieren',
      description: 'Exportieren Sie Messungen in eine Sidecar-JSON-Datei'
    },
    annotation: {
      text: 'Anmerkung',
      description: 'Überprüfen Sie die Tools'
    },
    layer: {
      text: 'Layer',
      description: 'Verwaltet Ebenen'
    },
    pan: {
      text: 'Verschieben',
      description:
        'Verschiebt die Ansicht, ohne die Blickrichtung oder Vergrößerung zu ändern'
    },
    markupPanel: {
      text: 'Palette',
      description: 'Öffnen Sie die Markup-Palette'
    },
    markupText: {
      text: 'Text',
      description: 'Platzieren Sie ein Textmarkup'
    },
    markupCloud: {
      text: 'Wolke',
      description: 'Erstellen Sie ein Cloud-Markup'
    },
    markupRect: {
      text: 'Rechteck',
      description: 'Erstellen Sie ein Rechteck-Markup'
    },
    markupCircle: {
      text: 'Kreis',
      description: 'Erstellen Sie eine Kreismarkierung'
    },
    markupArrow: {
      text: 'Pfeil',
      description: 'Erstellen Sie eine Pfeilmarkierung'
    },
    markupLine: {
      text: 'Linie',
      description: 'Erstellen Sie eine Linienmarkierung'
    },
    markupCallout: {
      text: 'Hinweis',
      description: 'Erstellen Sie eine Beschriftung'
    },
    markupStamp: {
      text: 'Stempel',
      description: 'Platzieren Sie einen Stempel'
    },
    markupImport: {
      text: 'Importieren',
      description: 'Importieren Sie Markups aus einer Sidecar-JSON-Datei'
    },
    markupExport: {
      text: 'Exportieren',
      description: 'Markups in eine Sidecar-JSON-Datei exportieren'
    },
    markupColor: {
      text: 'Farbe',
      description: 'Legen Sie die Farbe für neue Markup-Zeichnungen fest'
    },
    markupFontSize: {
      text: 'Texthöhe',
      description:
        'Öffnen Sie die Texthöheneinstellungen für Markups (An Bildschirm anpassen oder Höhe in Zeichnungseinheiten).',
      fit: 'Einpassen',
      wcs: 'WCS'
    },
    measurementColor: {
      text: 'Farbe',
      description:
        'Legen Sie die Farbe für die ausgewählte Messung oder für Messungen fest, die Sie als Nächstes hinzufügen'
    },
    measurementFontSize: {
      text: 'Texthöhe',
      description:
        'Öffnen Sie die Texthöheneinstellungen für das ausgewählte Maß oder für Maße, die Sie als Nächstes hinzufügen',
      fit: 'Einpassen',
      wcs: 'WCS'
    },
    showMarkup: {
      text: 'Anzeigen',
      description: 'Zeigt Markups an'
    },
    hideMarkup: {
      text: 'Ausblenden',
      description: 'Versteckt Markups'
    },
    showMeasurements: {
      text: 'Anzeigen',
      description: 'Zeigt Messungen an'
    },
    hideMeasurements: {
      text: 'Ausblenden',
      description: 'Versteckt Messungen'
    },
    clearMarkups: {
      text: 'Löschen',
      description: 'Löscht alle Markups im aktuellen Layout'
    },
    select: {
      text: 'Auswählen',
      description: 'Wählt Objekte aus'
    },
    switchBg: {
      text: 'Wechseln',
      description:
        'Schaltet den Zeichenhintergrund zwischen Weiß und Schwarz um',
      disabledInReadingMode:
        'Nicht verfügbar, wenn der Lesemodus aktiviert ist (weiße Leinwand ist behoben)'
    },
    readingMode: {
      text: 'Lesen',
      description:
        'Schaltet den Lesemodus um: schwarze Linien auf weißer Leinwand zur leichteren Durchsicht'
    },
    zoom: {
      text: 'Zoom',
      description:
        'Zoom-Tools: gespeicherte Ansicht, Grenzen, intelligente Grenzen und Fenster'
    },
    zoomSaved: {
      text: 'Gespeichert',
      description:
        'Stellt die gespeicherte AutoCAD-Ansicht (VPORT / Layoutbeschränkungen) oder die Open-Time-Ansicht wieder her'
    },
    zoomToExtent: {
      text: 'Grenzen',
      description: 'Zoomt, um die maximale Ausdehnung aller Elemente anzuzeigen'
    },
    zoomSmartExtents: {
      text: 'Automatisch einpassen',
      description:
        'Zoomt auf den dominanten Geometriecluster und ignoriert weitaus ausgefallenere Elemente'
    },
    zoomToBox: {
      text: 'Fenster',
      description:
        'Zoomt, um einen durch ein rechteckiges Fenster angegebenen Bereich anzuzeigen'
    }
  },
  statusBar: {
    setting: {
      tooltip: 'Anzeigeeinstellungen',
      commandLine: 'Befehlszeile',
      coordinate: 'Koordinieren',
      entityInfo: 'Entitätsinformationen',
      languageSelector: 'Sprachauswahl',
      ribbon: 'Band',
      toolbar: 'Symbolleiste',
      stats: 'Statistiken'
    },
    cannoscale: {
      tooltip: 'Anmerkungsskala (CANNOSCALE)'
    },
    annoallvisible: {
      on: 'Blenden Sie Beschriftungsobjekte aus, die den aktuellen Maßstab nicht unterstützen',
      off: 'Alle Anmerkungsobjekte anzeigen (ANNOALLVISIBLE)'
    },
    osnap: {
      tooltip: 'Objektfang',
      endpoint: 'Endpunkt',
      midpoint: 'Mittelpunkt',
      center: 'Mittelpunkt',
      node: 'Knoten',
      quadrant: 'Quadrant',
      intersection: 'Kreuzung',
      insertion: 'Einfügen',
      nearest: 'Am nächsten'
    },
    pointStyle: {
      tooltip: 'Punktstil ändern'
    },
    fullScreen: {
      on: 'Schalten Sie den Vollbildmodus aus',
      off: 'Aktivieren Sie den Vollbildmodus'
    },
    dynamicInput: {
      on: 'Deaktivieren Sie die dynamische Eingabe',
      off: 'Aktivieren Sie die dynamische Eingabe'
    },
    lineWidth: {
      on: 'Linienstärken ausblenden',
      off: 'Linienstärken anzeigen'
    },
    orthoMode: {
      on: 'Schalten Sie den Ortho-Modus aus',
      off: 'Schalten Sie den Ortho-Modus ein'
    },
    polarTracking: {
      on: 'Schalten Sie die Polarverfolgung aus',
      off: 'Aktivieren Sie die Polarverfolgung'
    },
    theme: {
      dark: 'Wechseln Sie zum Lichtthema',
      light: 'Wechseln Sie zum dunklen Thema'
    },
    warning: {
      font: 'Die folgenden Schriftarten wurden nicht gefunden!'
    },
    notification: {
      tooltip: 'Benachrichtigungen anzeigen'
    },
    export: {
      tooltip: 'Bild als PNG exportieren'
    },
    moreLayouts: 'Weitere Layouts'
  },
  toolPalette: {
    entityProperties: {
      tab: 'Eigenschaften',
      title: 'Entitätseigenschaften',
      propertyPanel: {
        noEntitySelected: 'Keine Objekt ausgewählt!',
        multipleEntitySelected: '{count}-Objekte ausgewählt',
        propValCopied: 'Eigenschaftswert kopiert',
        failedToCopyPropVal: 'Eigenschaftswert konnte nicht kopiert werden!'
      }
    },
    layerManager: {
      tab: 'Layer',
      title: 'Layer-Manager',
      currentLayerLabel: 'Aktueller Layer: {name}',
      searchPlaceholder: 'Ebenen durchsuchen',
      filters: 'Filter',
      collapseFilters: 'Filter ausblenden',
      expandFilters: 'Filter erweitern',
      filterAll: 'Alle',
      filterAllUsed: 'Alle verwendeten Ebenen',
      toolbar: {
        showFilters: 'Ebenenfilter',
        newFilter: 'Neuer Filter',
        newFilterGroup: 'Neuer Gruppenfilter',
        newLayer: 'Neuer Layer',
        deleteLayer: 'Layer löschen',
        setCurrent: 'Strom einstellen'
      },
      prompts: {
        newFilterTitle: 'Neuer Filter',
        newFilterName: 'Geben Sie den Filternamen ein',
        newFilterGroupTitle: 'Neuer Gruppenfilter',
        newFilterGroupName: 'Geben Sie den Namen des Gruppenfilters ein',
        newLayerTitle: 'Neuer Layer',
        newLayerName: 'Geben Sie den Layernamen ein',
        confirm: 'OK',
        cancel: 'Abbrechen'
      },
      messages: {
        filterCreated: 'Filter „{name}“ erstellt',
        filterExists: 'Ein Filter mit dem Namen „{name}“ ist bereits vorhanden',
        filterCreateFailed: 'Filter konnte nicht erstellt werden',
        layerCreated: 'Layer „{name}“ erstellt',
        layerExists: 'Layer „{name}“ existiert bereits',
        layerCreateFailed: 'Ebene konnte nicht erstellt werden',
        layerDeleted: 'Layer „{name}“ gelöscht',
        layerDeleteFailed: 'Ebene „{name}“ konnte nicht gelöscht werden.',
        cannotDeleteLayer0: 'Layer „0“ kann nicht gelöscht werden',
        cannotDeleteCurrent: 'Die aktuelle Ebene kann nicht gelöscht werden',
        selectLayerFirst: 'Wählen Sie zunächst eine Ebene aus',
        setCurrentSuccess: 'Aktueller Layer einschalten „{name}“ eingestellt',
        setCurrentFailed: 'Aktueller Layer konnte nicht festgelegt werden'
      },
      layerList: {
        name: 'Name',
        on: 'Ein',
        freeze: 'Einfrieren',
        lock: 'Sperren',
        plot: 'Handlung',
        color: 'Farbe',
        linetype: 'Linientyp',
        lineweight: 'Linienstärke',
        transparency: 'Transparenz',
        description: 'Beschreibung',
        currentLayer: 'Aktueller Layer',
        newLayerPlaceholder: 'Ebenenname',
        zoomToLayer: 'Auf die angeklickte Ebene „{layer}“ gezoomt',
        lineWeightDefault: 'Standard'
      }
    },
    find: {
      tab: 'Suchen',
      title: 'Suchen',
      placeholder: 'Text finden',
      input: 'Suchtext',
      find: 'Suchen',
      matchCase: 'Streichholzetui',
      currentLayoutOnly: 'Nur aktuelles Layout',
      hint: 'Drücken Sie die Eingabetaste, um nach Text, mehrzeiligem Text, Attributen und dem Text in Blöcken, Bemaßungen, Hinweislinien und Tabellen in der gesamten Zeichnung (alle Layouts) zu suchen.',
      hintLayout:
        'Drücken Sie die Eingabetaste, um nach Text, mehrzeiligem Text, Attributen und dem Text in Blöcken, Bemaßungen, Führungslinien und Tabellen im aktuellen Layout zu suchen.',
      noResults: 'Kein Text gefunden',
      count: '{count} gefunden',
      countLayouts: '{count} in {layouts}-Layouts gefunden',
      countTruncated:
        'Erste {count}-Ergebnisse werden angezeigt – verfeinern Sie die Suche',
      noDocument: 'Öffnen Sie eine Zeichnung, um zu suchen',
      layoutUnavailable: 'Layout „{layout}“ konnte nicht geöffnet werden',
      unnamedLayout: '(unbenanntes Layout)',
      kind: {
        text: 'Text',
        mtext: 'MText',
        attribute: 'Attribut',
        block: 'Text blockieren',
        dimension: 'Bemaßung',
        leader: 'Führungslinie',
        table: 'Tisch'
      }
    },
    bdetect: {
      tab: 'Erkennung',
      title: 'Erkennen und konvertieren'
    },
    bsearch: {
      tab: 'Suchen',
      title: 'Suchen und konvertieren'
    },
    countList: {
      tab: 'Zählen',
      title: 'Zählen',
      searchPlaceholder: 'Blockname suchen',
      countInArea: 'Zählen Sie in der Fläche',
      areaSet: 'Zählbereich aktualisiert',
      areaCleared: 'Gesamten Modellraum zählen',
      blockName: 'Block',
      count: 'Zählen',
      empty: 'Keine sichtbaren Blöcke gefunden',
      prompt: {
        firstCorner:
          'Geben Sie die erste Ecke des Zählbereichs oder [Gesamt] an: ',
        secondCorner: 'Geben Sie die gegenüberliegende Ecke an: '
      }
    },
    designReview: {
      tab: 'Prüfung',
      title: 'Prüfung',
      searchPlaceholder: 'Markierungen durchsuchen',
      empty: 'Noch keine Markierungen',
      type: 'Typ',
      status: 'Status',
      author: 'Autor',
      summary: 'Zusammenfassung',
      details: 'Details',
      closeDetails: 'Details schließen',
      label: 'Beschriftung',
      comment: 'Kommentar',
      zoomTo: 'Zoomen auf',
      delete: 'Löschen',
      clear: 'Alles löschen',
      statusValues: {
        open: 'Öffnen',
        question: 'Frage',
        answered: 'Beantwortet',
        closed: 'Geschlossen'
      }
    },
    measurements: {
      tab: 'Messen',
      title: 'Messungen',
      empty: 'Noch keine Messungen',
      type: 'Typ',
      value: 'Wert',
      filterAll: 'Alle',
      delete: 'Löschen',
      clear: 'Alles löschen',
      typeValues: {
        distance: 'Abstand',
        angle: 'Winkel',
        area: 'Bereich',
        arc: 'Bogen',
        point: 'XY'
      }
    },
    missingResources: {
      tab: 'Ressourcen',
      title: 'Fehlende/externe Ressourcen',
      fontTab: 'Schriftart',
      imageTab: 'Bild',
      xrefTab: 'Externe Referenzen',
      attach: 'Anhängen',
      attachDwg: 'Befestigen Sie DWG/DXF...',
      attachImage: 'Bild anhängen...',
      attachImageFailed: 'Das Bild „{name}“ konnte nicht angehängt werden.',
      fileReferences: 'Dateiverweise',
      details: 'Details',
      foundAt: 'Gefunden bei',
      selectReference: 'Wählen Sie eine Referenz aus, um Details anzuzeigen',
      expandDetails: 'Details erweitern',
      collapseDetails: 'Details ausblenden',
      apply: 'Anwenden',
      applyDone: 'Es wurden Ersatzlieferungen vorgenommen',
      emptyFonts: 'Keine fehlenden Schriftarten',
      emptyImages: 'Keine fehlenden Bilder',
      matchFontType: 'Schriftart anpassen (SHX / Mesh)',
      missedFont: 'Fehlende Schriftart',
      replacedFont: 'Schriftart ersetzt',
      selectFont: 'Wählen Sie die zu ersetzende Schriftart aus',
      selectLocalFont: 'Wählen Sie die lokale Schriftartdatei aus',
      file: 'Datei',
      replace: 'Ersetzen',
      name: 'Name',
      path: 'Gespeicherter Pfad',
      type: 'Typ',
      typeAttach: 'Anhängen',
      typeOverlay: 'Überlagerung',
      typeImage: 'Bild',
      status: 'Status',
      statusMissing: 'Fehlt',
      statusLoaded: 'Geladen',
      actions: 'Aktionen',
      visible: 'Sichtbar',
      browse: 'Durchsuchen…',
      fromUrl: 'URL…',
      unload: 'Entladen',
      load: 'Laden',
      empty:
        'In dieser Zeichnung sind keine externen Referenzen oder Bilder enthalten',
      urlPrompt: 'Geben Sie einen URL in eine DWG- oder DXF-Datei ein',
      urlRequired: 'Bitte geben Sie einen URL ein',
      loadFailed: 'Referenz „{name}“ konnte nicht geladen werden.'
    },
    memoryProfile: {
      tab: 'Erinnerung',
      title: 'Speicherprofil',
      refresh: 'Aktualisieren',
      collecting: 'Gedächtnis analysieren ...',
      showPie: 'Übersichtsdiagramm anzeigen',
      hidePie: 'Übersichtsdiagramm ausblenden',
      collectedAt: 'Gesammelt bei {time}',
      heapUsed: 'JS-Heap {used} / {total}',
      estimateNote:
        'Geometriegrößen stammen aus dem Puffer byteLength. Andere Kategorien werden geschätzt.',
      estimated: 'ca.',
      pieTotal: 'Abgerechnet',
      pieAriaLabel: 'Speicheraufschlüsselung nach Kategorie',
      empty: 'Keine Daten',
      missedFonts: 'Fehlende Schriftarten',
      fontMemory: 'Schriftart-/MText-Speicher',
      fontMemorySummary:
        'Speicher {live} (Hauptthread {main} · Worker {workers})',
      fontStorage: 'IndexedDB-Speicher (kein Speicher)',
      fontStorageSummary: '{count} zwischengespeicherte Schriftarten · {size}',
      materialPoint: 'Punkt',
      materialLine: 'Linie',
      materialFill: 'Füllen',
      materialTotal: 'Insgesamt',
      dataModelCounts: '{entities}-Objekte · {objects}-Objekte · {total}',
      dataModelCategories: 'Nach Kategorie',
      dataModelEntityTypes: 'Nach Entitätstyp',
      categories: {
        heap: 'JS-Haufen',
        geometry: 'Geometrie',
        mapping: 'Kartierung',
        spatial: 'Raumindex',
        dataModel: 'Datenmodell',
        materials: 'Materialien',
        fonts: 'Schriftarten'
      },
      tabs: {
        geometry: 'Geometrie',
        spatial: 'Räumlich',
        dataModel: 'Datenmodell',
        materials: 'Materialien',
        fonts: 'Schriftarten'
      },
      columns: {
        layout: 'Layout',
        layer: 'Layer',
        geometry: 'Geometrie',
        mapping: 'Kartierung',
        entities: 'Objekte',
        rootItems: 'Wurzel',
        childItems: 'Kinder',
        estimated: 'Schätzung: Größe',
        type: 'Typ',
        count: 'Zählen',
        category: 'Kategorie',
        font: 'Schriftart'
      }
    },
    openFileProfile: {
      tab: 'Öffnen Sie Perf',
      title: 'Offene Leistung',
      refresh: 'Aktualisieren',
      copy: 'Kopieren',
      copied: 'Leistungsdaten kopiert',
      copyFailed: 'Leistungsdaten konnten nicht kopiert werden',
      collectedAt: 'Gesammelt bei {time}',
      hint: 'Wird beim letzten Öffnen der Zeichnung automatisch erfasst. Legen Sie OPENPROF=1 fest, um sich auch an der Konsole anzumelden.',
      noData:
        'Noch kein offenes Profil. Öffnen Sie zuerst eine Zeichnung und führen Sie dann OPENPERF aus.',
      empty: 'Keine Daten',
      timing: 'Wanduhr-Timing',
      progressive: 'Progressiv offen',
      progressiveMode: 'Modus',
      progressiveOn: 'Ein',
      progressiveOff: 'Aus',
      midOpenPaints: 'Mitteloffene Farben',
      yields: 'Erträge',
      cache: 'INSERT Rendering-Cache (oberste Ebene)',
      slowBlocks: 'Langsamste Blockvorlagenfehler',
      total: 'Total offen',
      read: 'db.read',
      parse: 'PARSE',
      entity: 'ENTITY bündig',
      convert: 'Szenenkonvertierung',
      cacheHits: 'Cache-Treffer',
      cacheMisses: 'Cache-Fehler',
      cacheBuild: 'Miss Build',
      cacheCompact: 'Fräulein kompakt',
      cacheHitPath: 'Trefferpfad',
      columns: {
        stage: 'Bühne',
        duration: 'Dauer',
        share: 'Teilen',
        metric: 'Metrisch',
        value: 'Wert',
        block: 'Block',
        build: 'Bauen',
        compact: 'Kompakt'
      }
    },
    blocks: {
      tab: 'Blöcke',
      title: 'Blöcke',
      tabCurrentDrawing: 'Aktuelle Zeichnung',
      tabRecent: 'Neu',
      tabFavorites: 'Favoriten',
      tabLibraries: 'Bibliotheken',
      sectionCurrentDrawing: 'Aktuelle Zeichenblöcke',
      sectionRecent: 'Aktuelle Blöcke',
      sectionFavorites: 'Lieblingsblöcke',
      sectionLibraries: 'Blockbibliotheken',
      filterPlaceholder: 'Filtern …',
      empty: 'Keine Blöcke verfügbar',
      emptyRecent: 'Keine kürzlich eingefügten Blöcke',
      emptyFavorites: 'Keine Lieblingsblöcke',
      emptyLibraries: 'Keine Bibliotheken konfiguriert',
      toggleFavorite: 'Favorit umschalten',
      options: 'Optionen',
      insertionPoint: 'Einfügepunkt',
      scale: 'Skalieren',
      rotation: 'Rotation',
      angle: 'Winkel',
      autoPlacement: 'Automatische Platzierung',
      repeatPlacement: 'Wiederholen Sie die Platzierung',
      explode: 'Ursprung'
    }
  },
  colorDropdown: {
    custom: 'Benutzerdefiniert'
  },
  lineTypeSelect: {
    placeholder: 'Linientyp'
  },
  colorIndexPicker: {
    color: 'Farbe: ',
    colorIndex: 'Farbindex: ',
    inputPlaceholder: '0-256, BYLAYER, BYBLOCK',
    rgb: 'RGB: '
  },
  entityInfo: {
    color: 'Farbe',
    layer: 'Layer',
    lineType: 'Linientyp'
  },
  ribbonProperty: {
    color: 'Farbe',
    lineType: 'Linientyp',
    lineWeight: 'Linienstärke',
    layer: 'Layer'
  },
  layerSelect: {
    searchPlaceholder: 'Layer-Namen suchen',
    noLayerAvailable: 'Keine Ebenen verfügbar',
    noMatchedLayer: 'Keine übereinstimmenden Ebenen',
    tooltip: {
      layer: 'Layer',
      visibility: 'Sichtbarkeit',
      freeze: 'Einfrieren',
      lock: 'Sperren',
      lineType: 'Linientyp',
      color: 'Farbe',
      visible: 'Sichtbar',
      hidden: 'Versteckt',
      frozen: 'Gefroren',
      thawed: 'Aufgetaut',
      locked: 'Gesperrt',
      unlocked: 'Entsperrt'
    }
  },
  message: {
    loadingFonts: 'Schriftarten werden geladen ...',
    loadingDwgConverter: 'Laden des DWG-Konverters...',
    fontsNotFound:
      'Schriftarten {fonts} können nicht im Schriftarten-Repository gefunden werden!',
    fontsNotLoaded: 'Schriftarten {fonts} können nicht geladen werden!',
    fontMissedInDrawing:
      'Die Schriftart „{font}“ ist für {count}-Textobjekte erforderlich, aber nicht verfügbar. Anzeige mit „{replacementFont}“.',
    fontMissedReplacement: '„{font}“ (Anzeige mit „{replacement}“)',
    fontCached: 'Schriftart „{font}“ erfolgreich zwischengespeichert.',
    fontCacheFailed:
      'Schriftart „{fileName}“ konnte nicht zwischengespeichert werden.',
    failedToGetAvaiableFonts:
      'Es konnten keine verfügbaren Schriftarten von „{url}“ abgerufen werden!',
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
    fetchingDrawingFile: 'Datei wird abgerufen ...',
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
    time: {
      justNow: 'Gerade eben',
      minutesAgo: 'Vor {count} Minuten | Vor {count} Minuten',
      hoursAgo: 'Vor {count} Stunden | Vor {count} Stunden',
      daysAgo: 'Vor {count} Tagen | {count} vor Tagen'
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
  }
}
