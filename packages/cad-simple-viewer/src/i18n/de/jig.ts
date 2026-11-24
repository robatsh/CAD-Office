export default {
  arc: {
    startPointOrCenter: 'Geben Sie den Startpunkt des Bogens an oder',
    secondPointOrOptions: 'Geben Sie den zweiten Punkt des Bogens an oder',
    secondPoint: 'Geben Sie den zweiten Punkt des Bogens an',
    startPoint: 'Geben Sie den Startpunkt des Bogens an',
    centerPoint: 'Geben Sie den Mittelpunkt des Bogens an',
    endPoint: 'Geben Sie den Endpunkt des Bogens an',
    endPointOrOptions: 'Geben Sie den Endpunkt des Bogens an oder',
    centerPointOrOptions: 'Geben Sie den Mittelpunkt des Bogens an',
    includedAngle: 'Geben Sie den eingeschlossenen Winkel an',
    chordLength: 'Geben Sie die Sehnenlänge an',
    tangentDirection:
      'Geben Sie die Tangentenrichtung für den Startpunkt des Bogens an',
    radius: 'Geben Sie den Bogenradius an',
    keywords: {
      center: {
        display: 'Mittelpunkt(C)',
        local: 'Mittelpunkt',
        global: 'Center'
      },
      end: {
        display: 'Ende(E)',
        local: 'Ende',
        global: 'End'
      },
      angle: {
        display: 'Winkel(A)',
        local: 'Winkel',
        global: 'Angle'
      },
      chordLength: {
        display: 'Sehnenlänge(L)',
        local: 'Sehnenlänge',
        global: 'ChordLength'
      },
      direction: {
        display: 'Richtung(D)',
        local: 'Richtung',
        global: 'Direction'
      },
      radius: {
        display: 'Radius(R)',
        local: 'Radius',
        global: 'Radius'
      }
    },
    invalid: {
      threePoint:
        'Ungültiger 3-Punkt-Bogen: Punkte sind kollinear oder können keinen Bogen definieren.',
      center:
        'Ungültige Mittelpunkteingabe: Start- und Endpunkt müssen auf demselben Kreis liegen.',
      angle:
        'Ungültige Winkeleingabe: Der eingeschlossene Winkel muss größer als 0 und kleiner als 360 Grad sein.',
      chordLength:
        'Ungültige Sehnenlänge: Wert liegt außerhalb des gültigen Bereichs für den aktuellen Radius.',
      direction:
        'Ungültige Richtung: Aus dieser Tangentenrichtung kann kein Bogen erstellt werden.',
      radius:
        'Ungültiger Radius: Der angegebene Radius kann Start- und Endpunkte nicht verbinden.'
    }
  },
  circle: {
    center: 'Geben Sie den Mittelpunkt des Kreises an',
    centerOrOptions: 'Mittelpunkt des Kreises angeben bzw',
    radius: 'Geben Sie den Radius des Kreises an',
    radiusOrDiameter: 'Geben Sie den Kreisradius an bzw',
    diameter: 'Geben Sie den Durchmesser des Kreises an',
    twoPointFirst: 'Geben Sie den ersten Endpunkt des Kreisdurchmessers an',
    twoPointSecond: 'Geben Sie den zweiten Endpunkt des Kreisdurchmessers an',
    threePointFirst: 'Geben Sie den ersten Punkt auf dem Kreis an',
    threePointSecond: 'Geben Sie den zweiten Punkt auf dem Kreis an',
    threePointThird: 'Geben Sie den dritten Punkt auf dem Kreis an',
    keywords: {
      threeP: {
        display: '3P(3P)',
        local: '3P',
        global: '3P'
      },
      twoP: {
        display: '2P(2P)',
        local: '2P',
        global: '2P'
      },
      diameter: {
        display: 'Durchmesser(D)',
        local: 'Durchmesser',
        global: 'Diameter'
      }
    }
  },
  copy: {
    basePointOrOptions: 'Basispunkt angeben bzw',
    displacementOrArray: 'Verschiebung angeben bzw',
    secondPointOrArray: 'Geben Sie den zweiten Punkt an oder',
    modePrompt: 'Rufen Sie die Kopiermodusoption auf',
    arrayItemCount:
      'Geben Sie die Anzahl der Elemente im Array einschließlich des Originals ein',
    arraySecondPointOrFit: 'Geben Sie den zweiten Punkt an oder',
    arrayFitSecondPoint: 'Geben Sie den zweiten Punkt an',
    keywords: {
      displacement: {
        display: 'Verschiebung(D)',
        local: 'Verschiebung',
        global: 'Displacement'
      },
      mode: {
        display: 'Modus(O)',
        local: 'Modus',
        global: 'Mode'
      },
      multiple: {
        display: 'Mehrere(M)',
        local: 'Mehrere',
        global: 'Multiple'
      },
      single: {
        display: 'Einzeln(S)',
        local: 'Einzeln',
        global: 'Single'
      },
      array: {
        display: 'Anordnung(A)',
        local: 'Anordnung',
        global: 'Array'
      },
      fit: {
        display: 'Einpassen(F)',
        local: 'Einpassen',
        global: 'Fit'
      }
    }
  },
  copybase: {
    basePoint: 'Basispunkt angeben'
  },
  pasteclip: {
    insertionPoint: 'Geben Sie den Einfügepunkt an',
    empty: 'Die Zwischenablage enthält keine Zeichenobjekte'
  },
  pasteorig: {
    sameDrawing:
      'PASTEORIG kann die Objekte, aus denen die Objekte kopiert wurden, nicht in die Zeichnung einfügen'
  },
  pasteblock: {
    insertionPoint: 'Geben Sie den Einfügepunkt an'
  },
  dimlinear: {
    xLine1Point:
      'Geben Sie den Ursprung der ersten Hilfslinie oder <select object> an',
    xLine2Point: 'Geben Sie den Ursprung der zweiten Hilfslinie an',
    dimLinePoint: 'Geben Sie die Position der Maßlinie an',
    selectObject: 'Wählen Sie das zu bemaßende Objekt aus',
    rejectObject: 'Objekt kann nicht mit DIMLINEAR bemaßt werden.',
    dimensionText: 'Geben Sie den Bemaßungstext ein',
    textAngle: 'Geben Sie den Winkel des Bemaßungstextes an',
    rotationAngle: 'Geben Sie den Winkel der Maßlinie an',
    keywords: {
      mtext: { display: 'MText(M)', local: 'MText', global: 'Mtext' },
      text: { display: 'Text(T)', local: 'Text', global: 'Text' },
      angle: { display: 'Winkel(A)', local: 'Winkel', global: 'Angle' },
      horizontal: {
        display: 'Horizontal(H)',
        local: 'Horizontal',
        global: 'Horizontal'
      },
      vertical: {
        display: 'Vertikal(V)',
        local: 'Vertikal',
        global: 'Vertical'
      },
      rotated: {
        display: 'Gedreht(R)',
        local: 'Gedreht',
        global: 'Rotated'
      }
    }
  },
  dimaligned: {
    xLine1Point:
      'Geben Sie den Ursprung der ersten Hilfslinie oder <select object> an',
    xLine2Point: 'Geben Sie den Ursprung der zweiten Hilfslinie an',
    dimLinePoint: 'Geben Sie die Position der Maßlinie an',
    selectObject: 'Wählen Sie das zu bemaßende Objekt aus',
    rejectObject: 'Objekt kann nicht mit DIMALIGNED bemaßt werden.',
    dimensionText: 'Geben Sie den Bemaßungstext ein',
    textAngle: 'Geben Sie den Winkel des Bemaßungstextes an',
    keywords: {
      mtext: { display: 'MText(M)', local: 'MText', global: 'Mtext' },
      text: { display: 'Text(T)', local: 'Text', global: 'Text' },
      angle: { display: 'Winkel(A)', local: 'Winkel', global: 'Angle' }
    }
  },
  dimradius: {
    selectObject: 'Wählen Sie Bogen oder Kreis',
    rejectObject: 'Es muss ein Bogen oder Kreis ausgewählt werden.',
    dimLinePoint: 'Geben Sie die Position der Maßlinie an',
    dimensionText: 'Geben Sie den Bemaßungstext ein',
    textAngle: 'Geben Sie den Winkel des Bemaßungstextes an',
    keywords: {
      mtext: { display: 'MText(M)', local: 'MText', global: 'Mtext' },
      text: { display: 'Text(T)', local: 'Text', global: 'Text' },
      angle: { display: 'Winkel(A)', local: 'Winkel', global: 'Angle' }
    }
  },
  dimdiameter: {
    selectObject: 'Wählen Sie Bogen oder Kreis',
    rejectObject: 'Es muss ein Bogen oder Kreis ausgewählt werden.',
    dimLinePoint: 'Geben Sie die Position der Maßlinie an',
    dimensionText: 'Geben Sie den Bemaßungstext ein',
    textAngle: 'Geben Sie den Winkel des Bemaßungstextes an',
    keywords: {
      mtext: { display: 'MText(M)', local: 'MText', global: 'Mtext' },
      text: { display: 'Text(T)', local: 'Text', global: 'Text' },
      angle: { display: 'Winkel(A)', local: 'Winkel', global: 'Angle' }
    }
  },
  dimangular: {
    vertexOrSelect: 'Geben Sie den Winkelscheitelpunkt oder <select line> an',
    xLine1Point: 'Geben Sie den ersten Winkelendpunkt an',
    xLine2Point: 'Geben Sie den zweiten Winkelendpunkt an',
    arcPoint: 'Geben Sie die Position der Bemaßungsbogenlinie an',
    selectFirstLine: 'Wählen Sie die erste Zeile aus',
    selectSecondLine: 'Zweite Zeile auswählen',
    rejectObject: 'Es muss eine Zeile ausgewählt werden.',
    linesParallel: 'Linien sind parallel – kein Winkelschnittpunkt.',
    dimensionText: 'Geben Sie den Bemaßungstext ein',
    textAngle: 'Geben Sie den Winkel des Bemaßungstextes an',
    keywords: {
      mtext: { display: 'MText(M)', local: 'MText', global: 'Mtext' },
      text: { display: 'Text(T)', local: 'Text', global: 'Text' },
      angle: { display: 'Winkel(A)', local: 'Winkel', global: 'Angle' }
    }
  },
  dimarc: {
    selectArc: 'Bogen auswählen',
    rejectObject: 'Es muss ein Bogen ausgewählt werden.',
    arcPoint: 'Geben Sie die Position der Bogenlängenbemaßung an',
    dimensionText: 'Geben Sie den Bemaßungstext ein',
    textAngle: 'Geben Sie den Winkel des Bemaßungstextes an',
    keywords: {
      mtext: { display: 'MText(M)', local: 'MText', global: 'Mtext' },
      text: { display: 'Text(T)', local: 'Text', global: 'Text' },
      angle: { display: 'Winkel(A)', local: 'Winkel', global: 'Angle' }
    }
  },
  dimordinate: {
    featurePoint: 'Geben Sie den Feature-Standort an',
    leaderEndpoint: 'Geben Sie den Leader-Endpunkt an',
    dimensionText: 'Geben Sie den Bemaßungstext ein',
    textAngle: 'Geben Sie den Winkel des Bemaßungstextes an',
    keywords: {
      mtext: { display: 'MText(M)', local: 'MText', global: 'Mtext' },
      text: { display: 'Text(T)', local: 'Text', global: 'Text' },
      angle: { display: 'Winkel(A)', local: 'Winkel', global: 'Angle' },
      xdatum: {
        display: 'X-Bezugspunkt(X)',
        local: 'X-Bezugspunkt',
        global: 'Xdatum'
      },
      ydatum: {
        display: 'Y-Bezugspunkt(Y)',
        local: 'Y-Bezugspunkt',
        global: 'Ydatum'
      }
    }
  },
  dimcontinue: {
    nextPoint: 'Geben Sie einen zweiten Hilfslinienursprung an oder',
    selectDimension: 'Wählen Sie die Fortsetzungsbemaßung aus',
    rejectObject: 'Es muss eine lineare oder Winkelbemaßung ausgewählt werden.',
    keywords: {
      select: { display: 'Auswählen(S)', local: 'Auswählen', global: 'Select' }
    }
  },
  dimbaseline: {
    nextPoint: 'Geben Sie einen zweiten Hilfslinienursprung an oder',
    selectDimension: 'Basismaß auswählen',
    rejectObject: 'Es muss eine lineare oder Winkelbemaßung ausgewählt werden.',
    keywords: {
      select: { display: 'Auswählen(S)', local: 'Auswählen', global: 'Select' }
    }
  },
  ellipse: {
    axisEndpointOrOptions: 'Geben Sie den Achsendpunkt der Ellipse oder an',
    arcAxisEndpointOrCenter:
      'Geben Sie den Endpunkt der Achse des elliptischen Bogens an oder',
    center: 'Geben Sie den Mittelpunkt der Ellipse an',
    firstAxisEndpoint: 'Endpunkt der Achse angeben',
    secondAxisEndpoint: 'Geben Sie einen anderen Endpunkt der Achse an',
    otherAxisOrRotation: 'Abstand zur anderen Achse angeben bzw',
    rotationAngle: 'Geben Sie den Drehwinkel um die Hauptachse an',
    arcStartAngle: 'Geben Sie den Startwinkel des elliptischen Bogens an',
    arcEndAngle: 'Geben Sie den Endwinkel des elliptischen Bogens an',
    keywords: {
      arc: {
        display: 'Bogen(A)',
        local: 'Bogen',
        global: 'Arc'
      },
      center: {
        display: 'Mittelpunkt(C)',
        local: 'Mittelpunkt',
        global: 'Center'
      },
      rotation: {
        display: 'Rotation(R)',
        local: 'Rotation',
        global: 'Rotation'
      }
    },
    invalid: {
      axis: 'Ungültige Achseneingabe: Achsenlänge muss größer als 0 sein.',
      otherAxis:
        'Ungültige Eingabe für die andere Achse: Der Abstand muss größer als 0 sein.',
      rotation:
        'Ungültige Rotationseingabe: Die resultierende Nebenachse muss größer als 0 sein.'
    }
  },
  explode: {
    notExplodable: '{count} Objekte konnten nicht aufgelöst werden',
    minsert:
      '{count} Blöcke, die mit MINSERT eingefügt wurden, können nicht aufgelöst werden'
  },
  trim: {
    selectObject:
      'Wählen Sie das zu trimmende Objekt aus oder drücken Sie die Umschalttaste, um es zu verlängern oder',
    selectEdges: 'Wählen Sie Schneiden oder <select all>',
    modePrompt: 'Geben Sie eine Trimmmodusoption ein'
  },
  extend: {
    selectObject:
      'Wählen Sie das zu verlängernde Objekt aus oder drücken Sie die Umschalttaste, um es zu kürzen oder',
    selectEdges: 'Wählen Sie Begrenzungskanten oder <select all>',
    modePrompt: 'Geben Sie eine Option für den Erweiterungsmodus ein'
  },
  trimExtend: {
    currentSettings:
      'Aktuelle Einstellungen: Projektion={projection}, Kante={edge}, Modus={mode}',
    settingValue: {
      none: 'Keine',
      ucs: 'UCS',
      view: 'Ansicht',
      extend: 'Dehnen',
      noExtend: 'Keine',
      quick: 'Schnell',
      standard: 'Standard'
    },
    projectPrompt: 'Geben Sie eine Projektionsoption ein',
    edgePrompt: 'Geben Sie einen impliziten Kantenerweiterungsmodus ein',
    fenceFirst: 'Geben Sie den ersten Zaunpunkt an',
    fenceNext: 'Geben Sie den nächsten Zaunpunkt an',
    crossingFirst: 'Geben Sie die erste Ecke an',
    crossingSecond: 'Geben Sie die gegenüberliegende Ecke an',
    erasePrompt: 'Wählen Sie Objekte zum Löschen aus oder <exit>',
    noObject: 'Kein Objekt gefunden.',
    noIntersection: 'Objekt schneidet keine Kante.',
    noEdgeInDirection: 'Kein Vorteil in dieser Richtung.',
    cannotTrim: 'Dieses Objekt kann nicht getrimmt werden.',
    cannotExtend: 'Dieses Objekt kann nicht erweitert werden.',
    lockedLayer: 'Das Objekt befindet sich auf einer gesperrten Ebene.',
    nothingToUndo: 'Alle Vorgänge wurden rückgängig gemacht.',
    keywords: {
      cuttingEdges: {
        display: 'Schnittkanten(T)',
        local: 'SCHNEIDEN',
        global: 'cuTting'
      },
      boundaryEdges: {
        display: 'Grenzkanten(B)',
        local: 'Grenze',
        global: 'Boundary'
      },
      fence: {
        display: 'Zaun(F)',
        local: 'Zaun',
        global: 'Fence'
      },
      crossing: {
        display: 'Kreuzung(C)',
        local: 'Kreuzung',
        global: 'Crossing'
      },
      mode: {
        display: 'Modus(O)',
        local: 'Modus',
        global: 'mOde'
      },
      project: {
        display: 'Projekt(P)',
        local: 'Projekt',
        global: 'Project'
      },
      edge: {
        display: 'Kante(E)',
        local: 'Kante',
        global: 'Edge'
      },
      erase: {
        display: 'Löschen(R)',
        local: 'Löschen',
        global: 'eRase'
      },
      undo: {
        display: 'Rückgängig(U)',
        local: 'Rückgängig',
        global: 'Undo'
      },
      quick: {
        display: 'Schnell(Q)',
        local: 'Schnell',
        global: 'Quick'
      },
      standard: {
        display: 'Standard(S)',
        local: 'Standard',
        global: 'Standard'
      },
      projectNone: {
        display: 'Keine(N)',
        local: 'Keine',
        global: 'None'
      },
      projectUcs: {
        display: 'BKS(U)',
        local: 'BKS',
        global: 'Ucs'
      },
      projectView: {
        display: 'Ansicht(V)',
        local: 'Ansicht',
        global: 'View'
      },
      edgeExtend: {
        display: 'Dehnen(E)',
        local: 'Dehnen',
        global: 'Extend'
      },
      edgeNoExtend: {
        display: 'Keine Verlängerung(N)',
        local: 'Nein',
        global: 'No'
      }
    }
  },
  join: {
    needTwo:
      'Wählen Sie mindestens zwei Linien, Bögen oder Polylinien zum Verbinden aus.',
    noneJoined: 'Es konnten keine Objekte verbunden werden.',
    eraseFailed:
      'Es konnten nicht alle Quellobjekte gelöscht werden. Der Beitritt wurde abgebrochen.',
    joined: 'Verbunden mit {count} Objekten.'
  },
  hatch: {
    prompt: 'Grenzobjekt auswählen oder',
    pickPoint:
      'Geben Sie den internen Punkt an (oder drücken Sie die Eingabetaste, um den Vorgang abzuschließen)',
    select: 'Wählen Sie Objekte zum Schraffieren aus',
    patternName: 'Geben Sie den Namen des Schraffurmusters ein',
    scale: 'Geben Sie den Maßstab des Schraffurmusters an',
    angle: 'Geben Sie den Winkel des Schraffurmusters an',
    style: 'Geben Sie den Schraffurstil ein',
    associative: 'Geben Sie die Assoziativität an',
    invalidBoundary: 'Ausgewählte Objekte bilden keine geschlossene Grenze.',
    keywords: {
      pick: {
        display: 'Punkte auswählen(P)',
        local: 'Punkte auswählen',
        global: 'PickPoints'
      },
      select: {
        display: 'Objekte wählen(S)',
        local: 'Objekte wählen',
        global: 'SelectObjects'
      },
      cancel: {
        display: 'Abbrechen(C)',
        local: 'Abbrechen',
        global: 'Cancel'
      },
      pattern: {
        display: 'Muster(P)',
        local: 'Muster',
        global: 'Pattern'
      },
      scale: {
        display: 'Skalieren(S)',
        local: 'Skalieren',
        global: 'Scale'
      },
      angle: {
        display: 'Winkel(A)',
        local: 'Winkel',
        global: 'Angle'
      },
      style: {
        display: 'Stil(T)',
        local: 'Stil',
        global: 'HatchStyle'
      },
      associative: {
        display: 'Assoziativ(AS)',
        local: 'Assoziativ',
        global: 'AssociativeMode'
      },
      normal: {
        display: 'Normal(N)',
        local: 'Normal',
        global: 'Normal'
      },
      outer: {
        display: 'Äußerlich(O)',
        local: 'Äußerlich',
        global: 'Outer'
      },
      ignore: {
        display: 'Ignorieren(I)',
        local: 'Ignorieren',
        global: 'Ignore'
      },
      yes: {
        display: 'Ja(Y)',
        local: 'Ja',
        global: 'Yes'
      },
      no: {
        display: 'Nein(N)',
        local: 'Nein',
        global: 'No'
      }
    }
  },
  hideobjects: {
    hidden: 'Objekt(e) ausgeblendet',
    restored: 'Objekt(e) wiederhergestellt',
    nothingToRestore: 'Keine versteckten Objekte zum Wiederherstellen'
  },
  entout: {
    longSidePrompt: 'Geben Sie die Größe der Vorschau-Längsseite in Pixel ein',
    exported: 'Objektvorschau(n) exportiert',
    skipped: 'Objekt(e) übersprungen',
    failed: {
      'no-preview-root':
        'Für die Auswahl kann keine Vorschaugeometrie erstellt werden',
      'no-bounds':
        'Die Vorschaugrenzen für die Auswahl können nicht berechnet werden',
      'capture-failed': 'Das Entitätsvorschaubild kann nicht gerendert werden',
      'download-failed':
        'Vorschau gerendert, aber der Download ist PNG fehlgeschlagen'
    }
  },
  layer: {
    main: 'Option eingeben',
    listSummary: 'Die Ebenenliste wurde auf der Browserkonsole gedruckt',
    emptyInput: 'Es wurde kein Layername eingegeben.',
    newPrompt: 'Namen für neue Ebene(n) eingeben',
    makePrompt:
      'Geben Sie den Namen der Ebene ein, die zur aktuellen Ebene gemacht werden soll',
    setPrompt:
      'Geben Sie den Namen der Ebene ein, die als aktuell festgelegt werden soll',
    onPrompt: 'Geben Sie zum Aktivieren die Layernamen ein',
    offPrompt: 'Geben Sie zum Deaktivieren den bzw. die Layernamen ein',
    freezePrompt:
      'Geben Sie den bzw. die Layernamen ein, die eingefroren werden sollen',
    thawPrompt: 'Geben Sie den bzw. die Layernamen zum Auftauen ein',
    lockPrompt: 'Geben Sie die zu sperrenden Layernamen ein',
    unlockPrompt: 'Geben Sie zum Entsperren den bzw. die Layernamen ein',
    colorLayerPrompt: 'Geben Sie Layernamen ein, um die Farbe zu ändern',
    colorValuePrompt:
      'Geben Sie die Farbe ein (ACI 1-255, RGB wie 255,0,0 oder CSS Farbname)',
    invalidColor: 'Ungültige Farbeingabe.',
    descriptionLayerPrompt:
      'Geben Sie den Layernamen ein, um die Beschreibung zu bearbeiten',
    descriptionValuePrompt: 'Geben Sie eine neue Layer-Beschreibung ein',
    created: 'Anzahl der erstellten Ebenen',
    alreadyExists: 'Die Ebene existiert bereits',
    notFound: 'Ebene nicht gefunden',
    cannotChangeCurrent:
      'Die aktuelle Ebene kann nicht deaktiviert oder eingefroren werden.',
    keywords: {
      list: {
        display: '?(?)',
        local: '?',
        global: '?'
      },
      make: {
        display: 'Machen(M)',
        local: 'Machen',
        global: 'Make'
      },
      set: {
        display: 'Setzen(S)',
        local: 'Setzen',
        global: 'Set'
      },
      new: {
        display: 'Neu(N)',
        local: 'Neu',
        global: 'New'
      },
      on: {
        display: 'Ein(ON)',
        local: 'Ein',
        global: 'On'
      },
      off: {
        display: 'Aus(OF)',
        local: 'Aus',
        global: 'Off'
      },
      color: {
        display: 'Farbe(C)',
        local: 'Farbe',
        global: 'Color'
      },
      freeze: {
        display: 'Einfrieren(F)',
        local: 'Einfrieren',
        global: 'Freeze'
      },
      thaw: {
        display: 'Auftauen(T)',
        local: 'Auftauen',
        global: 'Thaw'
      },
      lock: {
        display: 'Sperren(L)',
        local: 'Sperren',
        global: 'Lock'
      },
      unlock: {
        display: 'Entsperren(U)',
        local: 'Entsperren',
        global: 'Unlock'
      },
      description: {
        display: 'Beschreibung(D)',
        local: 'Beschreibung',
        global: 'Description'
      }
    }
  },
  layon: {
    alreadyOn: 'Alle Layer sind bereits angebracht.',
    turnedOn: 'Ebenen aktiviert'
  },
  laycur: {
    prompt:
      'Wählen Sie Objekte aus, die in die aktuelle Ebene geändert werden sollen',
    currentLayerNotFound: 'Aktueller Layer nicht gefunden.',
    noObjects: 'Es wurden keine gültigen Objekte ausgewählt.',
    alreadyCurrent:
      'Ausgewählte Objekte befinden sich bereits auf der aktuellen Ebene.',
    changed: 'Objekte wurden in die aktuelle Ebene geändert'
  },
  layfrz: {
    prompt:
      'Wählen Sie ein Objekt auf der Ebene aus, das eingefroren werden soll, oder',
    invalidSelection: 'Ungültiges Objekt ausgewählt.',
    settingsPrompt: 'Geben Sie die zu ändernde Einstellung LAYFRZ ein',
    viewportPrompt:
      'Geben Sie das Verhalten beim Einfrieren des Ansichtsfensters an',
    blockSelectionPrompt:
      'Geben Sie das Verhalten bei der Auswahl verschachtelter Blöcke an',
    vpfreezeFallback:
      'Der aktuelle Viewer unterstützt das Einfrieren einzelner Ebenen pro Ansichtsfenster nicht. Verwenden Sie stattdessen das Freeze-Verhalten.',
    nestedSelectionLimited:
      'Die Auswahleinstellungen für verschachtelte Blöcke werden gespeichert, die aktuelle Auswahl löst jedoch immer noch die Entitätsebene der obersten Ebene auf.',
    layerNotFound: 'Ebene nicht gefunden',
    cannotFreezeCurrent: 'Die aktuelle Ebene kann nicht eingefroren werden.',
    alreadyFrozen: 'Die Ebene ist bereits eingefroren',
    frozen: 'Gefrorene Layer',
    restored: 'Wiederhergestellte Ebene',
    nothingToUndo:
      'Es gibt keine LAYFRZ Aktion, die rückgängig gemacht werden kann.',
    keywords: {
      settings: {
        display: 'Einstellungen(S)',
        local: 'Einstellungen',
        global: 'Settings'
      },
      undo: {
        display: 'Rückgängig(U)',
        local: 'Rückgängig',
        global: 'Undo'
      },
      viewports: {
        display: 'Ansichtsfenster(V)',
        local: 'Ansichtsfenster',
        global: 'Viewports'
      },
      blockSelection: {
        display: 'Blockauswahl(B)',
        local: 'Blockauswahl',
        global: 'BlockSelection'
      },
      freeze: {
        display: 'Einfrieren(F)',
        local: 'Einfrieren',
        global: 'Freeze'
      },
      vpfreeze: {
        display: 'AF frieren(V)',
        local: 'AF frieren',
        global: 'Vpfreeze'
      },
      block: {
        display: 'Block(B)',
        local: 'Block',
        global: 'Block'
      },
      entity: {
        display: 'Objekt(E)',
        local: 'Objekt',
        global: 'Entity'
      },
      none: {
        display: 'Keine(N)',
        local: 'Keine',
        global: 'None'
      }
    }
  },
  layiso: {
    prompt:
      'Wählen Sie Objekte auf der/den Ebene(n) aus, die isoliert werden sollen, oder',
    settingsPrompt: 'Geben Sie die Einstellung für nicht isolierte Ebenen ein',
    offModePrompt: 'Geben Sie das Aus-Verhalten für nicht isolierte Ebenen ein',
    noLayers: 'Es wurden keine gültigen Layer ausgewählt.',
    layerNotFound: 'Ebene nicht gefunden',
    isolated: 'Isolierte Layer(en)',
    affectedLayers: 'betroffenen Layer',
    vpfreezeFallback:
      'Der aktuelle Viewer unterstützt das Einfrieren einzelner Ebenen pro Ansichtsfenster nicht. Verwenden Sie stattdessen das Aus-Verhalten.',
    lockFadeFallback:
      'Der aktuelle Viewer unterstützt die Anzeige von Ebenenausblendungen nicht; Nicht isolierte Ebenen werden ohne Ausblenden gesperrt.',
    keywords: {
      settings: {
        display: 'Einstellungen(S)',
        local: 'Einstellungen',
        global: 'Settings'
      },
      off: {
        display: 'Aus(O)',
        local: 'Aus',
        global: 'Off'
      },
      lockAndFade: {
        display: 'Sperren und verblassen(L)',
        local: 'Sperren und verblassen',
        global: 'LockAndFade'
      },
      vpfreeze: {
        display: 'AF frieren(V)',
        local: 'AF frieren',
        global: 'Vpfreeze'
      }
    }
  },
  layuniso: {
    noPrevious: 'Kein vorheriger Layer-Status LAYISO zum Wiederherstellen.',
    layerNotFound: 'Ebene nicht gefunden',
    nothingRestored:
      'Es wurden keine LAYISO Ebenenänderungen wiederhergestellt.',
    restored: 'Wiederhergestellte Layer'
  },
  laythw: {
    alreadyThawed: 'Alle Layer sind bereits aufgetaut.',
    thawed: 'Aufgetaute Layer'
  },
  laylck: {
    prompt: 'Wählen Sie ein Objekt auf der Ebene aus, das gesperrt werden soll',
    invalidSelection: 'Ungültiges Objekt ausgewählt.',
    layerNotFound: 'Ebene nicht gefunden',
    alreadyLocked: 'Die Ebene ist bereits gesperrt',
    locked: 'Gesperrte Ebene'
  },
  layulk: {
    prompt:
      'Wählen Sie ein Objekt auf der Ebene aus, das entsperrt werden soll',
    invalidSelection: 'Ungültiges Objekt ausgewählt.',
    layerNotFound: 'Ebene nicht gefunden',
    alreadyUnlocked: 'Die Ebene ist bereits entsperrt',
    unlocked: 'Entsperrte Ebene'
  },
  layoff: {
    prompt: 'Wählen Sie das Objekt auf der Ebene aus, um es auszuschalten oder',
    invalidSelection: 'Ungültiges Objekt ausgewählt.',
    settingsPrompt: 'Geben Sie die zu ändernde Einstellung LAYOFF ein',
    viewportPrompt: 'Geben Sie das Verhalten des Ansichtsfensters an',
    blockSelectionPrompt:
      'Geben Sie das Verhalten bei der Auswahl verschachtelter Blöcke an',
    vpfreezeFallback:
      'Der aktuelle Viewer unterstützt das Ausschalten der Ebene pro Ansichtsfenster nicht. Verwenden Sie stattdessen das Aus-Verhalten.',
    nestedSelectionLimited:
      'Die Auswahleinstellungen für verschachtelte Blöcke werden gespeichert, die aktuelle Auswahl löst jedoch immer noch die Entitätsebene der obersten Ebene auf.',
    layerNotFound: 'Ebene nicht gefunden',
    cannotTurnOffCurrent: 'Die aktuelle Ebene kann nicht deaktiviert werden.',
    alreadyOff: 'Die Ebene ist bereits deaktiviert',
    turnedOff: 'Ebene deaktiviert',
    restored: 'Wiederhergestellte Ebene',
    nothingToUndo:
      'Es gibt keine LAYOFF Aktion, die rückgängig gemacht werden kann.',
    keywords: {
      settings: {
        display: 'Einstellungen(S)',
        local: 'Einstellungen',
        global: 'Settings'
      },
      undo: {
        display: 'Rückgängig(U)',
        local: 'Rückgängig',
        global: 'Undo'
      },
      viewports: {
        display: 'Ansichtsfenster(V)',
        local: 'Ansichtsfenster',
        global: 'Viewports'
      },
      blockSelection: {
        display: 'Blockauswahl(B)',
        local: 'Blockauswahl',
        global: 'BlockSelection'
      },
      off: {
        display: 'Aus(O)',
        local: 'Aus',
        global: 'Off'
      },
      vpfreeze: {
        display: 'AF frieren(V)',
        local: 'AF frieren',
        global: 'Vpfreeze'
      },
      block: {
        display: 'Block(B)',
        local: 'Block',
        global: 'Block'
      },
      entity: {
        display: 'Objekt(E)',
        local: 'Objekt',
        global: 'Entity'
      },
      none: {
        display: 'Keine(N)',
        local: 'Keine',
        global: 'None'
      }
    }
  },
  layerp: {
    restored: 'Vorheriger Ebenenstatus wiederhergestellt.',
    noPreviousState:
      'Es gibt keinen vorherigen Layer-Status zum Wiederherstellen.'
  },
  line: {
    firstPoint: 'Geben Sie den ersten Punkt an',
    firstPointOrContinue: 'Geben Sie den ersten Punkt an oder',
    nextPoint: 'Geben Sie den nächsten Punkt an',
    nextPointWithOptions: 'Nächsten Punkt angeben bzw',
    keywords: {
      continue: {
        display: 'Weiter(C)',
        local: 'Weiter',
        global: 'Continue'
      },
      undo: {
        display: 'Rückgängig(U)',
        local: 'Rückgängig',
        global: 'Undo'
      },
      close: {
        display: 'Schließen(C)',
        local: 'Schließen',
        global: 'Close'
      }
    }
  },
  xline: {
    firstPointOrOptions: 'Geben Sie einen Punkt an oder',
    secondPoint: 'Geben Sie den zweiten Punkt an',
    throughPoint: 'Geben Sie den Durchgangspunkt an',
    angle: 'Geben Sie den Winkel der X-Linie ein',
    invalidDirection: 'Ungültige Richtung für XLINE.',
    keywords: {
      hor: {
        display: 'Horizontal(H)',
        local: 'Horizontal',
        global: 'Hor'
      },
      ver: {
        display: 'Vertikal(V)',
        local: 'Vertikal',
        global: 'Ver'
      },
      ang: {
        display: 'Winkel(A)',
        local: 'Winkel',
        global: 'Ang'
      }
    }
  },
  ray: {
    startPoint: 'Startpunkt angeben',
    throughPoint: 'Geben Sie den Durchgangspunkt an'
  },
  mline: {
    startPointWithOptions: 'Startpunkt angeben bzw',
    nextPointWithOptions: 'Nächsten Punkt angeben bzw',
    justificationPrompt: 'Geben Sie den Begründungstyp ein',
    scalePrompt: 'Geben Sie den mline-Maßstab an',
    stylePrompt:
      'Geben Sie den Namen des Mline-Stils oder [?] für die Liste ein',
    styleNotFound: 'Mline-Stil nicht gefunden',
    styleListHeader: 'Geladene Mline-Stile',
    styleListEmpty: 'In der aktuellen Zeichnung ist kein Mline-Stil geladen.',
    keywords: {
      justification: {
        display: 'Begründung(J)',
        local: 'Begründung',
        global: 'Justification'
      },
      scale: {
        display: 'Skalieren(S)',
        local: 'Skalieren',
        global: 'Scale'
      },
      style: {
        display: 'Stil(ST)',
        local: 'Stil',
        global: 'Style'
      },
      undo: {
        display: 'Rückgängig(U)',
        local: 'Rückgängig',
        global: 'Undo'
      },
      close: {
        display: 'Schließen(C)',
        local: 'Schließen',
        global: 'Close'
      },
      top: {
        display: 'Oben(T)',
        local: 'Oben',
        global: 'Top'
      },
      zero: {
        display: 'Null(Z)',
        local: 'Null',
        global: 'Zero'
      },
      bottom: {
        display: 'Unten(B)',
        local: 'Unten',
        global: 'Bottom'
      }
    }
  },
  measureAngle: {
    vertex: 'Geben Sie den Scheitelpunkt an',
    arm1: 'Geben Sie den Punkt am ersten Arm an',
    arm2: 'Geben Sie den Punkt am zweiten Arm an'
  },
  measureArc: {
    startPoint: 'Geben Sie den Startpunkt des Bogens an',
    throughPoint: 'Geben Sie einen Punkt auf dem Bogen an',
    endPoint: 'Geben Sie den Endpunkt des Bogens an',
    lockedEndPoint:
      'Geben Sie den Endpunkt des Bogens an (Ctrl, um den Haupt-/Nebenbogen zu wechseln).',
    invalidPoints:
      'Die drei Punkte sind kollinear und definieren keinen Bogen.',
    pickArc: 'Wählen Sie einen Kreis, Bogen oder Polylinienbogen aus',
    noArc:
      'Hier gibt es keinen Kreis oder Bogen. Klicken Sie auf eine Kurve oder wählen Sie ThreePoint.',
    keywords: {
      threePoint: {
        display: 'DreiPunkte(T)',
        local: 'DreiPunkte',
        global: 'ThreePoint'
      }
    }
  },
  measureArea: {
    firstPoint: 'Geben Sie den ersten Punkt an',
    nextPoint:
      'Geben Sie den nächsten Punkt an (oder drücken Sie die Eingabetaste, um den Vorgang abzuschließen)'
  },
  measureDistance: {
    firstPoint: 'Geben Sie den ersten Punkt an',
    secondPoint: 'Geben Sie den zweiten Punkt an'
  },
  measureContinuous: {
    firstPoint: 'Geben Sie den ersten Punkt an',
    nextPoint:
      'Geben Sie den nächsten Punkt an (oder drücken Sie die Eingabetaste, um den Vorgang abzuschließen)'
  },
  measurePoint: {
    point: 'Punkt angeben'
  },
  measurement: {
    import: {
      chooseFile: 'Wählen Sie eine Mess-Sidecar-JSON-Datei'
    }
  },
  markup: {
    author: 'Geben Sie den Autor der Prüfung an (für später gespeichert)',
    text: {
      point: 'Geben Sie den Textmarkierungspunkt an',
      content: 'Geben Sie Markup-Text ein'
    },
    line: {
      firstPoint: 'Geben Sie den ersten Punkt der Linienmarkierung an',
      secondPoint: 'Geben Sie den zweiten Punkt der Linienmarkierung an'
    },
    arrow: {
      firstPoint: 'Geben Sie den Startpunkt des Pfeils an',
      secondPoint: 'Pfeilspitze angeben'
    },
    cloud: {
      firstCorner: 'Geben Sie die erste Ecke der Wolke an',
      secondCorner: 'Geben Sie die gegenüberliegende Ecke der Wolke an'
    },
    rect: {
      firstCorner: 'Geben Sie die erste Ecke des Rechtecks an',
      secondCorner: 'Geben Sie die gegenüberliegende Ecke des Rechtecks an'
    },
    circle: {
      center: 'Geben Sie den Mittelpunkt des Kreises an',
      radius: 'Geben Sie den Kreisradius an'
    },
    shape: {
      calloutOn: '[Hinweis zu]',
      calloutOff: '[Callout aus]',
      calloutAnchor: 'Geben Sie die Position des Beschriftungstexts an',
      keywords: {
        callout: {
          display: 'Hinweis(C)',
          local: 'Hinweis',
          global: 'Callout'
        },
        noCallout: {
          display: 'OhneHinweis(N)',
          local: 'OhneHinweis',
          global: 'NoCallout'
        }
      }
    },
    highlight: {
      firstCorner: 'Geben Sie die erste Ecke der Hervorhebung an',
      secondCorner: 'Geben Sie die gegenüberliegende Ecke der Hervorhebung an'
    },
    callout: {
      tip: 'Geben Sie die Führungsspitze oder einen Wolken-/Rechteck-/Kreisumriss ohne Beschriftung an',
      anchor: 'Geben Sie die Position des Beschriftungstexts an',
      content: 'Geben Sie den Callout-Text ein'
    },
    stamp: {
      kind: 'Geben Sie die Stempel-ID ein [genehmigt/abgelehnt/überarbeitet/zur Überprüfung/benutzerdefiniert]',
      imageUrl:
        'Geben Sie das benutzerdefinierte Stempelbild URL ein (optional)',
      caption: 'Stempelbeschriftung eingeben (optional)',
      point: 'Geben Sie den Einfügepunkt für den Stempel an'
    },
    import: {
      chooseFile: 'Wählen Sie eine Markup-Sidecar-JSON-Datei'
    }
  },
  move: {
    basePointOrDisplacement: 'Basispunkt angeben bzw',
    secondPointOrDisplacement: 'Geben Sie den zweiten Punkt an oder',
    displacement: 'Verschiebung angeben',
    keywords: {
      displacement: {
        display: 'Verschiebung(D)',
        local: 'Verschiebung',
        global: 'Displacement'
      }
    }
  },
  offset: {
    distance: 'Geben Sie den Versatzabstand an',
    selectObject:
      'Wählen Sie das zu versetzende Objekt aus oder drücken Sie die Eingabetaste, um den Vorgang abzuschließen',
    sidePoint: 'Geben Sie den Punkt auf der Seite an, der versetzt werden soll',
    invalidDistance: 'Der Versatzabstand muss größer als 0 sein.',
    invalidSelection: 'Das ausgewählte Objekt kann nicht versetzt werden.',
    offsetFailed:
      'Für die angegebene Seite kann keine Versatzkurve erstellt werden.'
  },
  fillet: {
    currentSettings:
      'Aktuelle Einstellungen: Modus = {mode}, Radius = {radius}',
    modeTrim: 'TRIM',
    modeNoTrim: 'NO TRIM',
    selectFirst:
      'Erstes Objekt auswählen oder [Rückgängig/Polylinie/Radius/Trimmen/Mehrfach]',
    selectSecond:
      'Wählen Sie das zweite Objekt aus oder halten Sie die Umschalttaste gedrückt, um eine Ecke oder [Radius] anzuwenden.',
    selectPolyline: 'Wählen Sie eine 2D-Polylinie aus',
    specifyRadius: 'Geben Sie den Verrundungsradius an',
    trimPrompt: 'Rufen Sie die Option „Trimmen/Kein Trimmen“ auf.',
    rejectObject: 'Das Objekt kann nicht abgerundet werden.',
    rejectPolyline: 'Das ausgewählte Objekt ist keine 2D-Polylinie.',
    invalidRadius: 'Der Verrundungsradius muss Null oder größer sein.',
    eraseFailed:
      'Es konnten nicht alle konvertierten Objekte gelöscht werden. Das Filet wurde abgesagt.',
    nothingToUndo: 'Der Befehl wurde vollständig rückgängig gemacht.',
    polylineResult:
      'Filetiert {filleted} Scheitelpunkt/Scheitelpunkte; übersprungen {skipped}.',
    keywords: {
      undo: {
        display: 'Rückgängig(U)',
        local: 'Rückgängig',
        global: 'Undo'
      },
      polyline: {
        display: 'Polylinie(P)',
        local: 'Polylinie',
        global: 'Polyline'
      },
      radius: {
        display: 'Radius(R)',
        local: 'Radius',
        global: 'Radius'
      },
      trim: {
        display: 'Stutzen(T)',
        local: 'Stutzen',
        global: 'Trim'
      },
      multiple: {
        display: 'Mehrere(M)',
        local: 'Mehrere',
        global: 'Multiple'
      },
      trimMode: {
        display: 'Stutzen(T)',
        local: 'Stutzen',
        global: 'Trim'
      },
      noTrim: {
        display: 'Kein Besatz(N)',
        local: 'Kein Besatz',
        global: 'NoTrim'
      }
    },
    error: {
      invalidRadius: 'Ungültiger Verrundungsradius.',
      parallel: 'Linien sind parallel und können keine Eckverrundung bilden.',
      noIntersection: 'Objekte überschneiden sich nicht.',
      radiusTooLarge:
        'Der Verrundungsradius ist für die ausgewählten Objekte zu groß.',
      noSolution:
        'Für die ausgewählten Objekte konnte keine Verrundung erstellt werden.',
      unsupported:
        'Der ausgewählte Objekttyp wird für Verrundungen nicht unterstützt.'
    }
  },
  chamfer: {
    currentSettings:
      '(Modus {mode}) Aktuelle Fase Dist1 = {dist1}, Dist2 = {dist2}',
    currentSettingsAngle:
      '({mode}-Modus) Aktuelle Fasenlänge = {length}, Winkel = {angle}',
    modeTrim: 'TRIM',
    modeNoTrim: 'NO TRIM',
    selectFirst:
      'Wählen Sie die erste Linie oder [Rückgängig/Polylinie/Abstand/Winkel/Trimmen/Methode/Mehrfach]',
    selectSecond:
      'Wählen Sie die zweite Linie aus oder drücken Sie die Umschalttaste, um die Ecke anzuwenden, oder [Abstand/Winkel/Methode]',
    selectPolyline: 'Wählen Sie eine 2D-Polylinie aus',
    specifyDist1: 'Geben Sie den ersten Fasenabstand an',
    specifyDist2: 'Geben Sie den zweiten Fasenabstand an',
    specifyLength: 'Geben Sie die Fasenlänge in der ersten Zeile an',
    specifyAngle: 'Geben Sie den Fasenwinkel ab der ersten Zeile an',
    trimPrompt: 'Rufen Sie die Option „Trimmen/Kein Trimmen“ auf.',
    methodPrompt: 'Fasenmethode eingeben [Abstand/Winkel]',
    rejectObject: 'Objekt kann nicht abgeschrägt werden.',
    rejectPolyline: 'Das ausgewählte Objekt ist keine 2D-Polylinie.',
    eraseFailed:
      'Es konnten nicht alle konvertierten Objekte gelöscht werden. Die Fase wurde aufgehoben.',
    nothingToUndo: 'Der Befehl wurde vollständig rückgängig gemacht.',
    polylineResult:
      'Abgeschrägter {chamfered} Scheitelpunkt/Eckpunkte; übersprungen {skipped}.',
    keywords: {
      undo: {
        display: 'Rückgängig(U)',
        local: 'Rückgängig',
        global: 'Undo'
      },
      polyline: {
        display: 'Polylinie(P)',
        local: 'Polylinie',
        global: 'Polyline'
      },
      distance: {
        display: 'Abstand(D)',
        local: 'Abstand',
        global: 'Distance'
      },
      angle: {
        display: 'Winkel(A)',
        local: 'Winkel',
        global: 'Angle'
      },
      trim: {
        display: 'Stutzen(T)',
        local: 'Stutzen',
        global: 'Trim'
      },
      method: {
        display: 'Methode(E)',
        local: 'Methode',
        global: 'Method'
      },
      multiple: {
        display: 'Mehrere(M)',
        local: 'Mehrere',
        global: 'Multiple'
      },
      trimMode: {
        display: 'Stutzen(T)',
        local: 'Stutzen',
        global: 'Trim'
      },
      noTrim: {
        display: 'Kein Besatz(N)',
        local: 'Kein Besatz',
        global: 'NoTrim'
      },
      distanceMethod: {
        display: 'Abstand(D)',
        local: 'Abstand',
        global: 'Distance'
      },
      angleMethod: {
        display: 'Winkel(A)',
        local: 'Winkel',
        global: 'Angle'
      }
    },
    error: {
      invalidDistance: 'Ungültiger Fasenabstand oder -winkel.',
      parallel: 'Linien sind parallel und können nicht abgeschrägt werden.',
      noIntersection: 'Objekte überschneiden sich nicht.',
      distanceTooLarge:
        'Der Fasenabstand ist für die ausgewählten Objekte zu groß.',
      noSolution:
        'Für die ausgewählten Objekte kann keine Fase erstellt werden.',
      unsupported: 'Der ausgewählte Objekttyp wird für Fasen nicht unterstützt.'
    }
  },
  leader: {
    startPoint: 'Geben Sie den Startpunkt der Führungslinie an',
    nextPoint: 'Geben Sie den nächsten Punkt an',
    nextPointOrOptions:
      'Nächsten Punkt angeben oder [Anmerkung/Format/Rückgängig]',
    formatPrompt:
      'Geben Sie die Formatoption für die Führungslinie ein [Spline/Gerade/Pfeil/Keine]',
    annotationText:
      'Geben Sie die erste Zeile des Anmerkungstextes oder <options> ein',
    nextAnnotationLine: 'Geben Sie die nächste Zeile mit Anmerkungstext ein',
    annotationOptions:
      'Geben Sie eine Anmerkungsoption ein [Toleranz/Kopieren/Blockieren/Keine/MText]',
    selectAnnotation: 'Wählen Sie ein Anmerkungsobjekt zum Kopieren aus',
    rejectAnnotation:
      'Das Objekt kann nicht als Hinweislinienanmerkung verwendet werden.',
    toleranceUnavailable:
      'Das Dialogfeld „Geometrische Toleranz“ ist in diesem Build nicht verfügbar.',
    keywords: {
      annotation: {
        display: 'Anmerkung(A)',
        local: 'Anmerkung',
        global: 'Annotation'
      },
      format: {
        display: 'Formatieren(F)',
        local: 'Formatieren',
        global: 'Format'
      },
      undo: { display: 'Rückgängig(U)', local: 'Rückgängig', global: 'Undo' },
      spline: {
        display: 'Spline(S)',
        local: 'Spline',
        global: 'Spline'
      },
      straight: {
        display: 'Gerade(T)',
        local: 'Gerade',
        global: 'STraight'
      },
      arrow: { display: 'Pfeil(A)', local: 'Pfeil', global: 'Arrow' },
      none: { display: 'Keine(N)', local: 'Keine', global: 'None' },
      tolerance: {
        display: 'Toleranz',
        local: 'Toleranz',
        global: 'Tolerance'
      },
      copy: { display: 'Kopieren(C)', local: 'Kopieren', global: 'Copy' },
      block: { display: 'Block(B)', local: 'Block', global: 'Block' },
      mtext: { display: 'MText(M)', local: 'MText', global: 'Mtext' }
    }
  },
  mleader: {
    arrowheadOrOptions:
      'Geben Sie die Position der Pfeilspitze der Führungslinie an oder [Führungslinie Landung zuerst/Inhalt zuerst/Optionen]',
    landingLocation: 'Geben Sie den Landeort des Anführers an',
    landingFirstPoint: 'Geben Sie den Landeort des Anführers an',
    arrowheadLocation: 'Geben Sie die Position der Führungspfeilspitze an',
    contentLocation: 'Geben Sie den Speicherort des Inhalts an',
    nextPoint: 'Geben Sie den nächsten Punkt an',
    optionsPrompt:
      'Geben Sie eine Option ein [Führungstyp/Landung/Inhaltstyp/Maxpoints/Erster Winkel/Zweiter Winkel/Ausstiegsoptionen]',
    leaderTypePrompt:
      'Wählen Sie einen Führungslinientyp [Gerade/Spline/Keine]',
    landingPrompt: 'Landung nutzen [Ja/Nein]',
    landingLength: 'Landestrecke angeben',
    contentTypePrompt: 'Wählen Sie einen Inhaltstyp aus [Block/MText/Keine]',
    maxPoints: 'Geben Sie die maximale Punktzahl für die Führungslinie ein',
    firstAngle: 'Geben Sie die erste Winkelbeschränkung ein',
    secondAngle: 'Geben Sie die zweite Winkelbeschränkung ein',
    keywords: {
      landingFirst: {
        display: 'Zuerst landen(L)',
        local: 'Zuerst landen',
        global: 'Landing first'
      },
      contentFirst: {
        display: 'Inhalt zuerst(C)',
        local: 'Inhalt zuerst',
        global: 'Content first'
      },
      options: {
        display: 'Optionen(O)',
        local: 'Optionen',
        global: 'Options'
      },
      leaderType: {
        display: 'Führungstyp(T)',
        local: 'Führungstyp',
        global: 'Leader type'
      },
      landing: {
        display: 'Landung(A)',
        local: 'Landung',
        global: 'lAnding'
      },
      contentType: {
        display: 'Inhaltstyp(C)',
        local: 'Inhaltstyp',
        global: 'Content type'
      },
      maxpoints: {
        display: 'Maximalpunkte(M)',
        local: 'Maximalpunkte',
        global: 'Maxpoints'
      },
      firstAngle: {
        display: 'Erster Winkel(F)',
        local: 'Erster Winkel',
        global: 'First angle'
      },
      secondAngle: {
        display: 'Zweiter Blickwinkel(S)',
        local: 'Zweiter Blickwinkel',
        global: 'Second angle'
      },
      exitOptions: {
        display: 'Exit-Optionen(X)',
        local: 'Exit-Optionen',
        global: 'eXit options'
      },
      straight: {
        display: 'Gerade(S)',
        local: 'Gerade',
        global: 'Straight'
      },
      spline: {
        display: 'spline(P)',
        local: 'spline',
        global: 'sPline'
      },
      noneLeader: {
        display: 'Keine(N)',
        local: 'Keine',
        global: 'None'
      },
      yes: { display: 'Ja(Y)', local: 'Ja', global: 'Yes' },
      no: { display: 'Nein(N)', local: 'Nein', global: 'No' },
      block: { display: 'Block(B)', local: 'Block', global: 'Block' },
      mtext: { display: 'MText(M)', local: 'MText', global: 'Mtext' },
      none: { display: 'Keine(N)', local: 'Keine', global: 'None' }
    }
  },
  mleaderedit: {
    selectMLeader: 'Wählen Sie eine Multi-Führungslinie aus',
    rejectMLeader: 'Es muss eine Multiführungslinie ausgewählt werden.',
    arrowheadOrRemove:
      'Geben Sie die Position der Pfeilspitze der Führungslinie an oder [Führungslinien entfernen]',
    selectLeaderToRemove:
      'Geben Sie eine Führungslinie an, die entfernt werden soll, oder drücken Sie die Eingabetaste, um den Vorgang abzuschließen',
    cannotRemoveLast:
      'Die letzte Führungslinie aus dieser Multi-Führungslinie kann nicht entfernt werden.',
    noLeaderAtPoint: 'Zu diesem Zeitpunkt wurde kein Anführer gefunden.',
    keywords: {
      remove: {
        display: 'Anführer entfernen(R)',
        local: 'Entfernen',
        global: 'Remove'
      }
    }
  },
  mtext: {
    point: 'Geben Sie den MText-Einfügepunkt an'
  },
  bmpout: {
    boundsFirstCorner: 'Geben Sie die erste Ecke der Begrenzungen an',
    boundsSecondCorner: 'Geben Sie die gegenüberliegende Ecke an',
    longSidePrompt: 'Geben Sie die Größe der langen Seite in Pixel ein'
  },
  jpgout: {
    boundsFirstCorner: 'Geben Sie die erste Ecke der Begrenzungen an',
    boundsSecondCorner: 'Geben Sie die gegenüberliegende Ecke an',
    longSidePrompt: 'Geben Sie die Größe der langen Seite in Pixel ein'
  },
  pngout: {
    boundsFirstCorner: 'Geben Sie die erste Ecke der Begrenzungen an',
    boundsSecondCorner: 'Geben Sie die gegenüberliegende Ecke an',
    longSidePrompt: 'Geben Sie die Größe der langen Seite in Pixel ein'
  },
  imageattach: {
    insertionPoint: 'Einfügepunkt angeben:',
    scale: 'Skalierungsfaktor angeben:',
    rotation: 'Drehwinkel angeben:',
    invalidScale: 'Der Skalierungsfaktor muss größer als 0 sein.',
    decodeFailed: 'Die ausgewählte Bilddatei konnte nicht gelesen werden.'
  },
  insert: {
    blockName: 'Geben Sie den Blocknamen ein:',
    insertionPoint: 'Einfügepunkt angeben:',
    scale: 'Skalierungsfaktor angeben:',
    rotation: 'Drehwinkel angeben:',
    invalidScale: 'Der Skalierungsfaktor muss größer als 0 sein.',
    invalidBlockName: 'Ungültiger Blockname.',
    blockNotFound: 'Block nicht gefunden',
    xrefNotAllowed:
      'Es kann keine externe Referenz mit -INSERT eingefügt werden.'
  },
  xattach: {
    insertionPoint: 'Einfügepunkt angeben:',
    scale: 'Skalierungsfaktor angeben:',
    rotation: 'Drehwinkel angeben:',
    invalidScale: 'Der Skalierungsfaktor muss größer als 0 sein.',
    unsupportedFile: 'Bitte wählen Sie eine DWG-Datei oder DXF aus.',
    loading: 'Externe Referenz wird geladen...',
    loadFailed: 'Die ausgewählte Zeichnungsdatei konnte nicht gelesen werden.'
  },
  point: {
    point: 'Geben Sie einen Punkt an'
  },
  polygon: {
    numberOfSides: 'Geben Sie die Anzahl der Seiten ein',
    centerOrEdge: 'Geben Sie den Mittelpunkt des Polygons an oder',
    radiusOrType: 'Geben Sie Optionen ein',
    edgeStart: 'Geben Sie den ersten Endpunkt der Kante an',
    edgeEnd: 'Geben Sie den zweiten Endpunkt der Kante an',
    keywords: {
      edge: {
        display: 'Kante(E)',
        local: 'Kante',
        global: 'Edge'
      },
      inscribed: {
        display: 'Im Kreis beschriftet(I)',
        local: 'Im Kreis beschriftet',
        global: 'Inscribed'
      },
      circumscribed: {
        display: 'Umschrieben im Kreis(C)',
        local: 'Umschrieben im Kreis',
        global: 'Circumscribed'
      }
    },
    invalid: {
      sides:
        'Ungültige Seitenanzahl. Geben Sie eine Ganzzahl zwischen 3 und 1024 ein.',
      radius: 'Ungültiger Radius. Der Radius muss größer als 0 sein.',
      edge: 'Ungültige Kante. Die Kantenlänge muss größer als 0 sein.'
    }
  },
  polyline: {
    firstPoint: 'Geben Sie den ersten Punkt an',
    nextPoint:
      'Geben Sie den nächsten Punkt an (oder drücken Sie die Eingabetaste, um den Vorgang abzuschließen).',
    nextPointWithOptions: 'Nächsten Punkt angeben bzw',
    nextPointWithArcOptions: 'Nächsten Punkt angeben bzw',
    keywords: {
      arc: {
        display: 'Bogen(A)',
        local: 'Bogen',
        global: 'Arc'
      },
      undo: {
        display: 'Rückgängig(U)',
        local: 'Rückgängig',
        global: 'Undo'
      },
      close: {
        display: 'Schließen(C)',
        local: 'Schließen',
        global: 'Close'
      },
      line: {
        display: 'Linie(L)',
        local: 'Linie',
        global: 'Line'
      },
      angle: {
        display: 'Winkel(A)',
        local: 'Winkel',
        global: 'Angle'
      },
      center: {
        display: 'Mittelpunkt(C)',
        local: 'Mittelpunkt',
        global: 'Center'
      },
      secondPoint: {
        display: 'Zweiter Punkt(P)',
        local: 'Zweiter Punkt',
        global: 'SecondPoint'
      },
      radius: {
        display: 'Radius(R)',
        local: 'Radius',
        global: 'Radius'
      }
    },
    arcAngle: 'Bogenwinkel angeben',
    arcCenter: 'Mittelpunkt angeben',
    arcSecondPoint: 'Geben Sie den zweiten Punkt auf dem Bogen an',
    arcEndPoint: 'Geben Sie den Endpunkt des Bogens an',
    arcRadius: 'Geben Sie den Bogenradius an'
  },
  rect: {
    firstPoint: 'Geben Sie den ersten Eckpunkt an',
    nextPoint: 'Geben Sie einen anderen Eckpunkt an',
    firstPointWithOptions: 'Geben Sie den ersten Eckpunkt an oder',
    otherCornerWithOptions: 'Geben Sie einen anderen Eckpunkt an oder',
    chamferFirst: 'Geben Sie den ersten Fasenabstand an',
    chamferSecond: 'Geben Sie den zweiten Fasenabstand an',
    filletRadius: 'Geben Sie den Verrundungsradius an',
    segmentWidth: 'Geben Sie die Linienbreite des Rechtecks an',
    elevationValue: 'Geben Sie die Höhe an',
    thicknessValue: 'Dicke angeben',
    rotationAngle: 'Geben Sie den Drehwinkel des Rechtecks an',
    dimensionLength: 'Geben Sie die Länge des Rechtecks an',
    dimensionWidth: 'Geben Sie die Breite des Rechtecks an',
    areaValue: 'Geben Sie den Rechteckbereich an',
    areaLengthOrWidth: 'Geben Sie die Länge des Rechtecks an',
    areaSpecifyWidth: 'Geben Sie die Breite des Rechtecks an',
    invalidPositive:
      'Ungültige Eingabe. Bitte geben Sie einen Wert größer als 0 ein.',
    invalidRect:
      'Rechteck kann nicht erstellt werden. Bitte geben Sie gültige Ecken oder Maße an.',
    thicknessNotSupported:
      'Die Rechteckdicke wird derzeit nicht in die Entitätsdaten geschrieben. Die Dickeneinstellung wird ignoriert.',
    keywords: {
      chamfer: {
        display: 'Fase(C)',
        local: 'Fase',
        global: 'Chamfer'
      },
      elevation: {
        display: 'Erhebung(E)',
        local: 'Erhebung',
        global: 'Elevation'
      },
      fillet: {
        display: 'Abrunden(F)',
        local: 'Abrunden',
        global: 'Fillet'
      },
      thickness: {
        display: 'Dicke(T)',
        local: 'Dicke',
        global: 'Thickness'
      },
      width: {
        display: 'Breite(W)',
        local: 'Breite',
        global: 'Width'
      },
      area: {
        display: 'Bereich(A)',
        local: 'Bereich',
        global: 'Area'
      },
      dimensions: {
        display: 'Bemaßungen(D)',
        local: 'Bemaßungen',
        global: 'Dimensions'
      },
      rotation: {
        display: 'Rotation(R)',
        local: 'Rotation',
        global: 'Rotation'
      },
      length: {
        display: 'Länge(L)',
        local: 'Länge',
        global: 'Length'
      },
      rectWidth: {
        display: 'Breite(W)',
        local: 'Breite',
        global: 'Width'
      }
    }
  },
  mirror: {
    firstPoint: 'Geben Sie den ersten Punkt der Spiegellinie an',
    secondPoint: 'Geben Sie den zweiten Punkt der Spiegellinie an',
    eraseSource: 'Quellobjekte löschen?',
    keywords: {
      yes: {
        display: 'Ja(Y)',
        local: 'Ja',
        global: 'Yes'
      },
      no: {
        display: 'Nein(N)',
        local: 'Nein',
        global: 'No'
      }
    },
    invalid: {
      mirrorLine: 'Ungültige Spiegellinie: Punkte müssen unterschiedlich sein.'
    }
  },
  rotate: {
    basePoint: 'Basispunkt angeben',
    rotationAngleOrOptions: 'Drehwinkel angeben bzw',
    firstReferencePoint: 'Geben Sie den ersten Bezugspunktwinkel an',
    secondReferencePoint: 'Geben Sie den zweiten Punkt an',
    referenceAngleOrPoints: 'Referenzwinkel angeben bzw',
    newAngle: 'Geben Sie einen neuen Winkel an',
    keywords: {
      copy: {
        display: 'Kopieren(C)',
        local: 'Kopieren',
        global: 'Copy'
      },
      reference: {
        display: 'Referenz(R)',
        local: 'Referenz',
        global: 'Reference'
      },
      points: {
        display: 'Punkte(P)',
        local: 'Punkte',
        global: 'Points'
      }
    },
    invalid: {
      referencePoints:
        'Ungültige Referenzpunkte: Punkte müssen unterschiedlich sein.'
    }
  },
  scale: {
    basePoint: 'Basispunkt angeben',
    scaleFactorOrOptions: 'Skalierungsfaktor angeben bzw',
    referenceLength: 'Referenzlänge angeben',
    newLengthOrPoints: 'Neue Länge angeben bzw',
    newLengthFirstPoint: 'Geben Sie den ersten Punkt an',
    copyMessage: 'Skalieren einer Kopie der ausgewählten Objekte.',
    keywords: {
      copy: {
        display: 'Kopieren(C)',
        local: 'Kopieren',
        global: 'Copy'
      },
      reference: {
        display: 'Referenz(R)',
        local: 'Referenz',
        global: 'Reference'
      },
      points: {
        display: 'Punkte(P)',
        local: 'Punkte',
        global: 'Points'
      }
    },
    invalid: {
      factor: 'Der Wert muss positiv und ungleich Null sein.',
      length: 'Der Wert muss positiv und ungleich Null sein.'
    }
  },
  revcloud: {
    firstCornerOrOptions: 'Geben Sie den ersten Eckpunkt an oder',
    firstCorner: 'Geben Sie den ersten Eckpunkt an',
    oppositeCorner: 'Geben Sie die gegenüberliegende Ecke an',
    startPoint: 'Startpunkt angeben',
    nextPoint: 'Geben Sie den nächsten Punkt an',
    nextPointOrUndo: 'Nächsten Punkt angeben bzw',
    firstPoint: 'Geben Sie den ersten Punkt an',
    guideCursor:
      'Führen Sie den Cursor entlang des Wolkenpfads (drücken Sie zum Beenden die Eingabetaste).',
    arcLength: 'Geben Sie die Bogenlänge an',
    selectObject: 'Objekt auswählen',
    style: 'Geben Sie den Revisionswolkenbogenstil ein',
    reverseDirection: 'Richtung umkehren',
    invalidArcLength: 'Die Bogenlänge muss größer als 0 sein.',
    invalidObject:
      'Das ausgewählte Objekt kann nicht in eine Revisionswolke konvertiert werden.',
    keywords: {
      arcLength: {
        display: 'Bogenlänge(A)',
        local: 'Bogenlänge',
        global: 'ArcLength'
      },
      object: {
        display: 'Objekt(O)',
        local: 'Objekt',
        global: 'Object'
      },
      rectangular: {
        display: 'Rechteckig(R)',
        local: 'Rechteckig',
        global: 'Rectangular'
      },
      polygonal: {
        display: 'Polygonal(P)',
        local: 'Polygonal',
        global: 'Polygonal'
      },
      freehand: {
        display: 'Freihand(F)',
        local: 'Freihand',
        global: 'Freehand'
      },
      style: {
        display: 'Stil(S)',
        local: 'Stil',
        global: 'Style'
      },
      normal: {
        display: 'Normal(N)',
        local: 'Normal',
        global: 'Normal'
      },
      calligraphy: {
        display: 'Kalligraphie(C)',
        local: 'Kalligraphie',
        global: 'Calligraphy'
      },
      undo: {
        display: 'Rückgängig(U)',
        local: 'Rückgängig',
        global: 'Undo'
      },
      yes: {
        display: 'Ja(Y)',
        local: 'Ja',
        global: 'Yes'
      },
      no: {
        display: 'Nein(N)',
        local: 'Nein',
        global: 'No'
      }
    }
  },
  sketch: {
    specifySketch: 'Skizze bzw. angeben',
    sketching:
      'Bewegen Sie den Zeiger auf die Skizze (klicken Sie oder drücken Sie die Eingabetaste, um anzuhalten).',
    type: 'Geben Sie den Skizzentyp ein',
    increment: 'Geben Sie das Skizzeninkrement an',
    tolerance: 'Geben Sie die Spline-Toleranz an',
    firstPoint: 'Geben Sie den ersten Punkt an',
    nextPoint: 'Geben Sie den Endpunkt an',
    keywords: {
      type: {
        display: 'Typ(T)',
        local: 'Typ',
        global: 'Type'
      },
      increment: {
        display: 'Inkrement(I)',
        local: 'Inkrement',
        global: 'Increment'
      },
      tolerance: {
        display: 'Toleranz(L)',
        local: 'Toleranz',
        global: 'Tolerance'
      },
      line: {
        display: 'Linien(L)',
        local: 'Linien',
        global: 'Lines'
      },
      polyline: {
        display: 'Polylinie(P)',
        local: 'Polylinie',
        global: 'Polyline'
      },
      spline: {
        display: 'Spline(S)',
        local: 'Spline',
        global: 'Spline'
      }
    }
  },
  spline: {
    firstPoint: 'Geben Sie den ersten Punkt an',
    nextPoint:
      'Geben Sie den nächsten Punkt an (oder drücken Sie die Eingabetaste, um den Vorgang abzuschließen).',
    firstPointWithOptions: 'Geben Sie den ersten Punkt an oder',
    nextPointWithFitOptions: 'Nächsten Punkt angeben bzw',
    nextPointWithCvOptions:
      'Geben Sie den nächsten Kontrollscheitelpunkt an oder',
    methodPrompt: 'Geben Sie die Methode zur Spline-Erstellung ein',
    knotsPrompt: 'Geben Sie die Knotenparametrisierung ein',
    degreePrompt: 'Geben Sie den Spline-Grad an',
    keywords: {
      method: {
        display: 'Methode(M)',
        local: 'Methode',
        global: 'Method'
      },
      fit: {
        display: 'Einpassen(F)',
        local: 'Einpassen',
        global: 'Fit'
      },
      cv: {
        display: 'CV(C)',
        local: 'CV',
        global: 'CV'
      },
      knots: {
        display: 'Knoten(K)',
        local: 'Knoten',
        global: 'Knots'
      },
      degree: {
        display: 'Abschluss(D)',
        local: 'Abschluss',
        global: 'Degree'
      },
      undo: {
        display: 'Rückgängig(U)',
        local: 'Rückgängig',
        global: 'Undo'
      },
      close: {
        display: 'Schließen(C)',
        local: 'Schließen',
        global: 'Close'
      },
      chord: {
        display: 'Sehne(C)',
        local: 'Sehne',
        global: 'Chord'
      },
      sqrtChord: {
        display: 'Wurzel aus Sehnenlänge(S)',
        local: 'Wurzel aus Sehnenlänge',
        global: 'SqrtChord'
      },
      uniform: {
        display: 'Gleichmäßig(U)',
        local: 'Gleichmäßig',
        global: 'Uniform'
      }
    }
  },
  objectscale: {
    action: 'Geben Sie eine Option ein',
    scaleName: 'Geben Sie den Namen der Anmerkungsskala ein',
    done: 'Aktualisierte Objekte',
    none: '(keine)',
    keywords: {
      add: {
        display: 'Hinzufügen(A)',
        local: 'Hinzufügen',
        global: 'Add'
      },
      delete: {
        display: 'Löschen(D)',
        local: 'Löschen',
        global: 'Delete'
      },
      list: {
        display: 'Liste(L)',
        local: 'Liste',
        global: 'List'
      }
    }
  },
  sysvar: {
    prompt: 'Bitte geben Sie einen neuen Wert ein'
  },
  view: {
    enterName: 'Geben Sie den wiederherzustellenden Ansichtsnamen ein',
    notFound: 'Ansicht „{name}“ wurde nicht gefunden.'
  },
  zoom: {
    mainPrompt: 'Geben Sie die Ecke des Fensters oder an',
    firstCorner: 'Geben Sie die erste Ecke an',
    secondCorner: 'Geben Sie die gegenüberliegende Ecke an',
    centerPoint: 'Mittelpunkt angeben',
    heightOrScale:
      'Geben Sie die Höhe oder den Skalierungsfaktor (nX oder nXP) ein.',
    scaleFactor: 'Skalierungsfaktor eingeben (nX oder nXP)',
    keywords: {
      all: {
        display: 'Alle(A)',
        local: 'Alle',
        global: 'All'
      },
      center: {
        display: 'Mittelpunkt(C)',
        local: 'Mittelpunkt',
        global: 'Center'
      },
      extents: {
        display: 'Grenzen(E)',
        local: 'Grenzen',
        global: 'Extents'
      },
      previous: {
        display: 'Zurück(P)',
        local: 'Zurück',
        global: 'Previous'
      },
      original: {
        display: 'Original(O)',
        local: 'Original',
        global: 'Original'
      },
      saved: {
        display: 'Gespeichert(V)',
        local: 'Gespeichert',
        global: 'Saved'
      },
      smart: {
        display: 'Schlau(I)',
        local: 'Automatisch einpassen',
        global: 'Smart'
      },
      scale: {
        display: 'Skalieren(S)',
        local: 'Skalieren',
        global: 'Scale'
      },
      window: {
        display: 'Fenster(W)',
        local: 'Fenster',
        global: 'Window'
      }
    }
  },
  chtml: {
    exportFormat: 'Exportformat',
    exportInvisibleLayers: 'Exportieren Sie unsichtbare Ebenen',
    exportLayouts: 'Layouts exportieren',
    exportEmptyLayouts: 'Leere Layouts exportieren',
    background: 'Hintergrundfarbe',
    initialView: 'Erstansicht beim Öffnen von HTML',
    viewerMode: 'Offline-Viewer-Modus',
    chunkSizeMiB: 'Chunk-Größe in MiB (Mehrdateipaket)',
    compressChunks: 'Chunks komprimieren (Mehrdateipaket)',
    keywords: {
      single: {
        display: 'Einzeln(S)',
        local: 'Einzeln',
        global: 'Single'
      },
      multi: {
        display: 'Paket mit mehreren Dateien(M)',
        local: 'Paket mit mehreren Dateien',
        global: 'Multi'
      },
      yes: {
        display: 'Ja(Y)',
        local: 'Ja',
        global: 'Yes'
      },
      no: {
        display: 'Nein(N)',
        local: 'Nein',
        global: 'No'
      },
      extents: {
        display: 'Grenzen(E)',
        local: 'Grenzen',
        global: 'Extents'
      },
      current: {
        display: 'Aktuell(C)',
        local: 'Aktuell',
        global: 'Current'
      },
      view: {
        display: 'Ansicht(V)',
        local: 'Ansicht',
        global: 'View'
      },
      measure: {
        display: 'Messen und überprüfen(M)',
        local: 'Messen und überprüfen',
        global: 'Measure'
      },
      black: {
        display: 'Schwarz(B)',
        local: 'Schwarz',
        global: 'Black'
      },
      white: {
        display: 'Weiß(W)',
        local: 'Weiß',
        global: 'White'
      },
      space: {
        display: 'Raum(S)',
        local: 'Raum',
        global: 'Space'
      }
    }
  },
  cpdf: {
    modelSpaceFit: 'Modell-Space-Frame',
    exportLayouts: 'Layouts exportieren',
    exportEmptyLayouts: 'Leere Layouts exportieren',
    textMode: 'Textwiedergabe',
    colorMode: 'Farbmodus',
    keywords: {
      extents: {
        display: 'Grenzen(E)',
        local: 'Grenzen',
        global: 'Extents'
      },
      display: {
        display: 'Anzeige(D)',
        local: 'Anzeige',
        global: 'Display'
      },
      text: {
        display: 'Text(T)',
        local: 'Text',
        global: 'Text'
      },
      vector: {
        display: 'Vektor(V)',
        local: 'Vektor',
        global: 'Vector'
      },
      yes: {
        display: 'Ja(Y)',
        local: 'Ja',
        global: 'Yes'
      },
      no: {
        display: 'Nein(N)',
        local: 'Nein',
        global: 'No'
      },
      color: {
        display: 'Farbe(C)',
        local: 'Farbe',
        global: 'Color'
      },
      monochrome: {
        display: 'Monochrom(M)',
        local: 'Monochrom',
        global: 'Monochrome'
      }
    }
  },
  ucs: {
    originOrOptions: 'Geben Sie den Ursprung von UCS an oder',
    pointOnXAxis: 'Geben Sie den Punkt auf der X-Achse an oder',
    pointOnXyPlane: 'Geben Sie einen Punkt auf der XY-Ebene an oder',
    rotationAngle: 'Geben Sie den Drehwinkel um die {axis}-Achse an',
    zAxisOrigin: 'Geben Sie einen neuen Ursprungspunkt an',
    pointOnZAxis: 'Geben Sie den Punkt auf dem positiven Teil der Z-Achse an',
    selectObject: 'Wählen Sie das auszurichtende Objekt UCS aus',
    namedOption: 'Geben Sie eine Option ein',
    enterName: 'Geben Sie den Namen UCS zum Wiederherstellen ein oder [?]',
    saveName:
      'Geben Sie den Namen ein, um die aktuelle Nummer UCS zu speichern',
    deleteName: 'Geben Sie UCS Namen ein, die gelöscht werden sollen',
    noPrevious: 'Kein vorheriger UCS in dieser Sitzung.',
    noNamed: 'Keine benannten UCS-Definitionen.',
    notFound: 'UCS „{name}“ nicht gefunden.',
    invalidName: 'Ungültiger Name UCS.',
    invalidObject: 'UCS kann nicht am ausgewählten Objekt ausgerichtet werden.',
    keywords: {
      named: {
        display: 'Benannt(A)',
        local: 'Benannt',
        global: 'Named'
      },
      object: {
        display: 'Objekt(B)',
        local: 'Objekt',
        global: 'Object'
      },
      previous: {
        display: 'Zurück(P)',
        local: 'Zurück',
        global: 'Previous'
      },
      view: {
        display: 'Ansicht(V)',
        local: 'Ansicht',
        global: 'View'
      },
      world: {
        display: 'Welt(W)',
        local: 'Welt',
        global: 'World'
      },
      x: {
        display: 'X',
        local: 'X',
        global: 'X'
      },
      y: {
        display: 'Y',
        local: 'Y',
        global: 'Y'
      },
      z: {
        display: 'Z',
        local: 'Z',
        global: 'Z'
      },
      zAxis: {
        display: 'ZAchse(N)',
        local: 'ZAchse',
        global: 'ZAxis'
      },
      apply: {
        display: 'Anwenden(L)',
        local: 'Anwenden',
        global: 'Apply'
      },
      restore: {
        display: 'Wiederherstellen(R)',
        local: 'Wiederherstellen',
        global: 'Restore'
      },
      save: {
        display: 'Speichern(S)',
        local: 'Speichern',
        global: 'Save'
      },
      delete: {
        display: 'Löschen(D)',
        local: 'Löschen',
        global: 'Delete'
      },
      list: {
        display: '?(?)',
        local: '?',
        global: '?'
      }
    }
  },
  group: {
    selectOrOption: 'Objekte auswählen bzw',
    createOrOption: 'Gruppe erstellen bzw',
    selectObjects: 'Wählen Sie Objekte für die Gruppe aus',
    enterName: 'Geben Sie den Gruppennamen ein',
    enterDescription: 'Geben Sie eine Gruppenbeschreibung ein',
    invalidName: 'Ungültiger Gruppenname',
    nameExists: 'Der Gruppenname existiert bereits',
    created: 'Gruppe {name} erstellt',
    keywords: {
      name: {
        display: 'Name(N)',
        local: 'Name',
        global: 'Name'
      },
      description: {
        display: 'Beschreibung(D)',
        local: 'Beschreibung',
        global: 'Description'
      }
    }
  },
  ungroup: {
    selectOrOption: 'Gruppe auswählen bzw',
    selectGroup: 'Gruppe auswählen',
    enterName: 'Geben Sie den Gruppennamen ein',
    notFound: 'Gruppe nicht gefunden',
    notInGroup: 'Das Objekt ist kein Mitglied einer Gruppe',
    multiGroup: 'Objekt ist Mitglied von mehr als einer Gruppe [{name}]',
    exploded: 'Gruppe {name} explodiert',
    explodedCount: 'Aufgelöste {count} Gruppe(n)',
    keywords: {
      name: {
        display: 'Name(N)',
        local: 'Name',
        global: 'Name'
      },
      all: {
        display: 'Alle(A)',
        local: 'Alle',
        global: 'All'
      },
      accept: {
        display: 'Akzeptiere(A)',
        local: 'Akzeptiere',
        global: 'Accept'
      },
      next: {
        display: 'Als nächstes(N)',
        local: 'Als nächstes',
        global: 'Next'
      }
    }
  },
  groupedit: {
    selectGroup: 'Wählen Sie eine Gruppe aus',
    enterName: 'Geben Sie den Gruppennamen ein',
    notFound: 'Gruppe nicht gefunden',
    multiGroup: 'Objekt ist Mitglied von mehr als einer Gruppe [{name}]',
    action: 'Geben Sie eine Option für die Gruppe {name} ein',
    selectToAdd:
      'Wählen Sie Objekte aus, die Sie der Gruppe hinzufügen möchten',
    selectToRemove:
      'Wählen Sie Objekte aus, die aus der Gruppe entfernt werden sollen',
    newName: 'Geben Sie einen neuen Gruppennamen ein',
    keywords: {
      add: {
        display: 'Objekte hinzufügen(A)',
        local: 'Hinzufügen',
        global: 'Add'
      },
      remove: {
        display: 'Objekte entfernen(R)',
        local: 'Entfernen',
        global: 'Remove'
      },
      rename: {
        display: 'Umbenennen(N)',
        local: 'Umbenennen',
        global: 'Rename'
      },
      accept: {
        display: 'Akzeptiere(A)',
        local: 'Akzeptiere',
        global: 'Accept'
      },
      next: {
        display: 'Als nächstes(N)',
        local: 'Als nächstes',
        global: 'Next'
      }
    }
  },
  dashgroup: {
    option: 'Geben Sie eine Option ein',
    empty: 'Keine Gruppen definiert',
    listEntry: '{name} {description} [{selectable}] ({count})',
    yes: 'Ja',
    no: 'Nein',
    enterNameOrBlank:
      'Geben Sie den Gruppennamen ein oder drücken Sie die Eingabetaste für „Unbenannt“.',
    enterGroupName: 'Geben Sie den Gruppennamen ein',
    selectableSet: 'Gruppe {name} wählbar = {value}',
    orderOption: 'Bestelloption eingeben',
    fromPosition:
      'Geben Sie die Positionsnummer des neu anzuordnenden Objekts ein (0-basiert)',
    toPosition: 'Neue Positionsnummer für Objekt eingeben (0-basiert)',
    keywords: {
      list: {
        display: '?(?)',
        local: '?',
        global: '?'
      },
      create: {
        display: 'Erstellen(C)',
        local: 'Erstellen',
        global: 'Create'
      },
      add: {
        display: 'Hinzufügen(A)',
        local: 'Hinzufügen',
        global: 'Add'
      },
      remove: {
        display: 'Entfernen(R)',
        local: 'Entfernen',
        global: 'Remove'
      },
      explode: {
        display: 'Explodieren(X)',
        local: 'Ursprung',
        global: 'Explode'
      },
      rename: {
        display: 'Umbenennen(N)',
        local: 'Umbenennen',
        global: 'Rename'
      },
      selectable: {
        display: 'Wählbar(S)',
        local: 'Wählbar',
        global: 'Selectable'
      },
      order: {
        display: 'Bestellen(O)',
        local: 'Bestellen',
        global: 'Order'
      },
      reverse: {
        display: 'Umgekehrt(R)',
        local: 'Umgekehrt',
        global: 'Reverse'
      },
      position: {
        display: 'Position(P)',
        local: 'Position',
        global: 'Position'
      }
    }
  },
  pdfimport: {
    pageNumber: 'Seitenzahl eingeben (1-{count})',
    insertionPoint:
      'Einfügepunkt angeben (Maßstab {scale}, Modus {mode}, Text {text}) oder',
    modePrompt: 'Wählen Sie den Importmodus',
    modeRecover: 'Zeichnung wiederherstellen',
    modeVisual: 'PDF Aussehen behalten',
    scaleFactor: 'Skalierungsfaktor eingeben',
    textPrompt: 'Wählen Sie die Explosionstexterkennung aus',
    textOff: 'aus',
    textLocal: 'lokales Wörterbuch',
    textOcr: 'OCR-Service',
    keywords: {
      scale: {
        display: 'Skalieren(S)',
        local: 'Skalieren',
        global: 'Scale'
      },
      mode: {
        display: 'Modus(M)',
        local: 'Modus',
        global: 'Mode'
      },
      text: {
        display: 'Text(T)',
        local: 'Text',
        global: 'Text'
      },
      recover: {
        display: 'Erholen(R)',
        local: 'Erholen',
        global: 'Recover'
      },
      visual: {
        display: 'Visuell(V)',
        local: 'Visuell',
        global: 'Visual'
      },
      off: {
        display: 'Aus(O)',
        local: 'Aus',
        global: 'Off'
      },
      local: {
        display: 'Lokal(L)',
        local: 'Lokal',
        global: 'Local'
      },
      ocr: {
        display: 'Okr(C)',
        local: 'Okr',
        global: 'Ocr'
      }
    },
    pickInsertionPoint: 'Geben Sie den Einfügepunkt an',
    dialog: {
      title: 'Importieren Sie PDF',
      close: 'Schließen',
      fileName: 'Dateiname:',
      browse: 'Durchsuchen …',
      pagesGroup: 'Seite zum Importieren',
      page: 'Seite:',
      total: 'Gesamt: {count}',
      singleView: 'Seitenvorschau anzeigen',
      gridView: 'Miniaturansichten der Seite anzeigen',
      pageLabel: 'Seite {page}',
      pageSize:
        'Seitengröße: {width} × {height} mm ({widthIn} × {heightIn} Zoll)',
      previewError: 'Vorschau nicht verfügbar',
      positionGroup: 'Standort',
      onScreen: 'Geben Sie den Einfügepunkt auf dem Bildschirm an',
      x: 'X:',
      y: 'Y:',
      scale: 'Maßstab:',
      modeGroup: 'Importmodus',
      modeRecover: 'Zeichnung wiederherstellen',
      recoverHint:
        'Erstellen Sie Kreise, Bögen, Kurven, Text, Schraffuren und Blöcke neu',
      modeVisual: 'Behalten Sie das Aussehen von PDF bei',
      visualHint:
        'Importieren Sie Pfade und Text genau so, wie sie im PDF gezeichnet sind',
      recognizeDimensions: 'Dimensionen erkennen',
      recognizeDimensionsHint:
        'Verwandeln Sie explodierte Bemaßungen in Bemaßungsobjekte',
      recognizeExplodedText: 'Erkennen Sie explodierten Text',
      recognizeExplodedTextHint:
        'Wandeln Sie SHX / Umriss-Strichtext in Textobjekte um (lokales Wörterbuch oder ein verfügbarer OCR-Anbieter)',
      recognizeExplodedTextOff: 'Aus',
      recognizeExplodedTextLocal: 'Lokales Wörterbuch',
      recognizeExplodedTextOcr: 'OCR',
      ok: 'OK',
      cancel: 'Abbrechen'
    }
  },
  pdfdim: {
    cancelled:
      'Dimensionen wiederherstellen abgebrochen; nichts wurde geändert.',
    noDimensions:
      'In der Auswahl wurden keine Bemaßungen gefunden (Pfeilspitzen oder Häkchen, Bemaßungslinien und Wertetexte werden benötigt).',
    summary:
      'Konvertierte {count} Dimension(en); Der Stil {style} verwendet einen linearen Skalierungsfaktor von {scale}.',
    panel: {
      title: 'Dimensionen wiederherstellen',
      style: 'Bemaßungsstil',
      dimStyle: 'Stil',
      newStyle: 'Neuer Dim-Stil…',
      newStyleName: 'Name des neuen Dim-Stils',
      createStyle: 'Erstellen',
      nameEmpty: 'Geben Sie einen Namen ein.',
      nameInvalid: 'Der Name enthält Zeichen, die nicht erlaubt sind.',
      nameExists: 'Ein Dim-Stil mit diesem Namen ist bereits vorhanden.',
      scale: 'Zeichnungsmaßstab',
      stylePreview:
        'Vorschau des ausgewählten Dim-Stils mit wiederhergestellten Größen',
      dimensions: 'Bemaßungen',
      selectHint:
        'Wählen Sie eine Dimension aus, um darauf zu zoomen. Bearbeiten Sie den Wert vor „Anwenden“.',
      empty: 'In der Auswahl wurden keine Abmessungen gefunden.',
      include: 'Konvertieren Sie diese Dimension',
      kindLinear: 'Linear',
      kindRadius: 'Radius',
      kindDiameter: 'Durchmesser',
      kindAngular: 'Eckig',
      kindAligned: 'Ausgerichtet',
      kindArcLength: 'Bogenlänge',
      kindOrdinate: 'Ordinieren',
      textTip: 'Bemaßungstext (überschreiben)',
      measured: 'Gemessen {value}',
      hideStrokes: 'Originalstriche ausblenden',
      ready: '{ready} von {count} Abmessungen fertig',
      cancel: 'Abbrechen',
      apply: 'Anwenden'
    }
  },
  pdfhatch: {
    cancelled:
      'Schraffurwiederherstellung abgebrochen. Es wurden keine Änderungen vorgenommen.',
    pickPoint:
      'Wählen Sie einen Punkt innerhalb des zu schraffierenden Bereichs aus',
    panel: {
      title: 'Schraffuren wiederherstellen',
      hatches: 'Schraffuren',
      addArea: 'Bereich hinzufügen',
      addAreaTip:
        'Wählen Sie einen Punkt innerhalb eines Bereichs aus, der bei der Erkennung übersehen wurde. Das am besten passende Muster wird auf seine Striche abgestimmt.',
      picking:
        'Wählen Sie einen Punkt innerhalb des Bereichs in der Zeichnung ...',
      noBoundary:
        'Rund um diesen Punkt wurde kein geschlossenes Gebiet gefunden.',
      noStrokes: 'In diesem Bereich wurde kein regelmäßiges Muster gefunden.',
      empty:
        'Keine Schraffur gefunden. Wählen Sie „Bereich hinzufügen“, um einen Bereich auszuwählen.',
      include: 'Diese Schraffur konvertieren',
      addedTag: 'hinzugefügt',
      entities: '{count} Objekte',
      selectHint:
        'Wählen Sie eine Schraffur aus, um deren Muster, Maßstab oder Winkel zu ändern.',
      ownGroup: 'Gemessen/benutzerdefiniert',
      libraryGroup: 'Vordefiniert',
      pattern: 'Muster',
      scale: 'Skalieren',
      spacing: 'Abstand',
      angle: 'Winkel',
      autoFit: 'Automatische Anpassung',
      autoFitTip:
        'Messen Sie anhand der Striche erneut den Maßstab, den Winkel und den Ursprung dieses Musters.',
      match:
        'Muster auf Strichen: {precision} · neu gezeichnete Striche: {recall}',
      noEntities:
        'Dieses Muster zeichnet kein Objekt vollständig neu; nichts würde ersetzt werden.',
      guessed:
        'Die Striche zeigen keine Spur dieses Musters; sein Maßstab und Winkel sind eine Vermutung.',
      poorMatch:
        'Schlechte Übereinstimmung: Striche, die die Schraffur nicht neu zeichnet, werden beibehalten.',
      userSingle: 'Benutzerdefiniert',
      userDouble: 'Benutzerdefiniert, doppelt',
      measured: 'Gemessenes Muster',
      hideStrokes: 'Originalstriche ausblenden',
      ready: '{ready} von {count} Schraffuren bereit',
      cancel: 'Abbrechen',
      apply: 'Anwenden'
    },
    noHatches:
      'In der Auswahl wurde keine Schraffur gefunden (normale parallele Striche und die sie begrenzenden Linien sind erforderlich).',
    summary:
      'Konvertierte {count} Schraffuren ({patterns}) und ersetzte {strokes} Objekte.'
  },
  bsearch: {
    unsupported:
      'Keines der ausgewählten Objekte kann abgeglichen werden (Linien, Bögen, Kreise, Polylinien, Ellipsen, Splines, Text, MText und Blockreferenzen werden unterstützt).',
    skipped:
      '{count} Ausgewählte Objekte können nicht zugeordnet werden und werden ignoriert.',
    found:
      '{count} passende Instanz(en) gefunden, {included} zum Konvertieren. Wählen Sie',
    noMatches: 'Keine weiteren Instanzen gefunden.',
    reviewOne: 'Instanz {index}/{count} ({state})',
    included: 'enthalten',
    excluded: 'ausgeschlossen',
    options:
      'Rotation {rotation}, Spiegel {mirror}, Maßstab {scale}, gleiche Ebene {layer}, vorhandene Blöcke {blocks}, Textvariationen {text}. Umschalten',
    on: 'auf',
    off: 'aus',
    target: 'Konvertieren zu',
    name: 'Geben Sie einen neuen Blocknamen ein',
    nameExists: 'Ein Block mit dem Namen „{name}“ existiert bereits.',
    nameInvalid: '„{name}“ ist kein gültiger Blockname.',
    basePoint: 'Geben Sie den Einfügepunkt an',
    attributeTag: 'Geben Sie ein Attribut-Tag für den Text „{text}“ ein.',
    existingName: 'Geben Sie den Namen des vorhandenen Blocks ein',
    blockNotFound: 'Block „{name}“ nicht gefunden.',
    rotation: 'Geben Sie den Drehwinkel des Blocks an',
    scale: 'Geben Sie den Skalierungsfaktor des Blocks an',
    scope:
      'Konvertieren Sie auch die {count} gefundenen Instanzen oder nur die Quellobjekte?',
    summary: 'Konvertiert in Block „{name}“: {count} Referenz(en).',
    keywords: {
      convert: {
        display: 'Konvertieren(C)',
        local: 'Konvertieren',
        global: 'Convert'
      },
      review: {
        display: 'Prüfung(R)',
        local: 'Prüfung',
        global: 'Review'
      },
      options: {
        display: 'Optionen(O)',
        local: 'Optionen',
        global: 'Options'
      },
      exit: {
        display: 'Ausstieg(X)',
        local: 'Ausstieg',
        global: 'eXit'
      },
      include: {
        display: 'Einbeziehen(I)',
        local: 'Einbeziehen',
        global: 'Include'
      },
      exclude: {
        display: 'Ausschließen(E)',
        local: 'Ausschließen',
        global: 'Exclude'
      },
      next: {
        display: 'Als nächstes(N)',
        local: 'Als nächstes',
        global: 'Next'
      },
      previous: {
        display: 'Zurück(P)',
        local: 'Zurück',
        global: 'Previous'
      },
      done: {
        display: 'Fertig(D)',
        local: 'Fertig',
        global: 'Done'
      },
      rotation: {
        display: 'Rotation(R)',
        local: 'Rotation',
        global: 'Rotation'
      },
      mirror: {
        display: 'Spiegeln(M)',
        local: 'Spiegeln',
        global: 'Mirror'
      },
      scale: {
        display: 'Skalieren(S)',
        local: 'Skalieren',
        global: 'Scale'
      },
      layer: {
        display: 'Layer(L)',
        local: 'Layer',
        global: 'Layer'
      },
      blocks: {
        display: 'Blöcke(B)',
        local: 'Blöcke',
        global: 'Blocks'
      },
      text: {
        display: 'Text(T)',
        local: 'Text',
        global: 'Text'
      },
      new: {
        display: 'Neu(N)',
        local: 'Neu',
        global: 'New'
      },
      existing: {
        display: 'Vorhanden(E)',
        local: 'Vorhanden',
        global: 'Existing'
      },
      instances: {
        display: 'Instanzen(I)',
        local: 'Instanzen',
        global: 'Instances'
      },
      source: {
        display: 'Quelle(S)',
        local: 'Quelle',
        global: 'Source'
      }
    }
  },
  pdftext: {
    panel: {
      title: 'Text wiederherstellen',
      shxGroup: 'SHX Text (Linienschriften)',
      meshGroup: 'TrueType-Text (Umrissschriftarten)',
      style: 'Textstil',
      newStyle: 'Neuer Textstil…',
      newTag: 'neu',
      newStyleName: 'Name des neuen Textstils',
      create: 'Erstellen',
      cancel: 'Abbrechen',
      apply: 'Anwenden',
      nameError: {
        empty: 'Geben Sie einen Namen ein.',
        invalid: 'Der Name enthält Zeichen, die nicht erlaubt sind.',
        exists: 'Ein Textstil mit diesem Namen existiert bereits.'
      },
      font: 'Schriftart',
      bigFont: 'Große Schriftart',
      noBigFont: '(Keine)',
      shxFonts: 'SHX Schriftarten',
      ttfFonts: 'TrueType-Schriftarten',
      fontsUsed: 'Verwendung: {fonts}',
      fontMissing:
        'Schriftart „{font}“ ist nicht verfügbar; es wird mit „{fallback}“ gezeichnet.',
      fontNotShx:
        'Dies ist eine TrueType-Schriftart: Der Text sieht nicht wie SHX Zeilentext aus.',
      fontNotTtf:
        'Dies ist eine Schriftart SHX: Der Text sieht nicht wie TrueType-Umrisstext aus.',
      styleChanges:
        'Ändert die Schriftarten des Textstils „{style}“: Texte, die ihn bereits verwenden, ändern sich ebenfalls.',
      heightScale: 'Höhenskala',
      widthFactor: 'Breitenfaktor',
      autoWidth: 'Originalbreite anpassen',
      lines: 'Textzeilen',
      include: 'Konvertieren Sie diese Zeile',
      textPlaceholder:
        'Geben Sie den Text ein oder lassen Sie das Feld leer, um ihn zu überspringen',
      switchKind: 'Wechseln Sie zwischen SHX und TrueType-Text',
      kind: {
        shx: 'SHX',
        mesh: 'TrueType'
      },
      source: {
        dictionary: 'Gelernt',
        ocr: 'OCR',
        typed: 'Bearbeitet',
        unread: 'Ungelesen'
      },
      hideStrokes: 'Originalstriche ausblenden',
      ready: '{ready} von {count} Zeilen bereit',
      merge: 'In MText einbinden',
      mergeTip:
        'Füge die ausgewählten Zeilen zu einem mehrzeiligen Text zusammen (MTEXT)',
      split: 'Geteilt',
      splitTip:
        'Teilen Sie den ausgewählten zusammengeführten Text wieder in seine Zeilen auf',
      mergeAdjacent: 'Angrenzend zusammenführen',
      mergeAdjacentTip:
        'Fügen Sie Zeichen und Wörter, die auf einer Grundlinie nebeneinander stehen, zu mehrzeiligem Text zusammen',
      mergedCount: 'Zusammengeführt in {count} mehrzeilige Texte.',
      selectHint:
        'Ctrl+Klick oder Shift+Klick auf Linien, um mehrere auszuwählen.',
      mtextTag: 'MTEXT'
    },
    cancelled: 'Text wiederherstellen abgebrochen; nichts wurde geändert.',
    ocrNotConfigured:
      'Die Texterkennung (OCR) ist deaktiviert: Es ist kein bildfähiges KI-Modell konfiguriert. Führen Sie LLMSETTINGS aus, um eines einzurichten.',
    recognizing: '{count} Textzeile(n) werden erkannt…',
    ocrFailed:
      'Texterkennung (OCR) fehlgeschlagen: {message}. Geben Sie den Text selbst ein oder führen Sie LLMSETTINGS aus, um das KI-Modell zu überprüfen.',
    noCandidates: 'In der Auswahl wurden keine textähnlichen Striche gefunden.',
    summary:
      '{converted} Textzeile(n) konvertiert, {automatic} automatisch erkannt; übersprungen {skipped}.'
  },
  pdfscale: {
    firstPoint: 'Geben Sie den ersten Punkt mit bekannter Entfernung an',
    secondPoint: 'Geben Sie den zweiten Punkt an',
    realLength: 'Geben Sie die tatsächliche Länge ein (gemessen {measured})',
    realLengthFromDimensions:
      'Geben Sie die tatsächliche Länge ein (gemessen {measured}; Maßtexte schlagen 1:{scale} vor)',
    zeroDistance: 'Die beiden Punkte sind identisch.',
    applied: '{count} Objekte um den Faktor {factor} skaliert.'
  },
  txt2mtxt: {
    needTwo:
      'Wählen Sie mindestens zwei Text- oder MText-Objekte zum Kombinieren aus.',
    mergeFailed:
      'Die ausgewählten Textelemente konnten nicht kombiniert werden.',
    eraseFailed:
      'Es konnten nicht alle Quelltextelemente gelöscht werden. Der Mähdrescher wurde abgebrochen.'
  }
}
