# CAD-Office

CAD-Office ist ein browserbasierter DWG-/DXF-Viewer und Editor. Die Anwendung
basiert auf MLightCAD und läuft lokal im Browser.

**Deutsche Benutzeroberfläche bereits enthalten.** Im Sprachmenü kannst du
„Deutsch“ auswählen. Menüs, Dialoge und Beschreibungen der CAD-Befehle sind
auf Deutsch verfügbar.

## Warum es CAD-Office gibt

Ich entwickle CAD-Office als eigenständigen Fork, weil ich MLightCAD an meine
eigenen Bedürfnisse und Arbeitsabläufe anpassen möchte. MLightCAD bleibt für
mich die Grundlage und Inspiration. Mit CAD-Office möchte ich eine Version für
meinen Alltag pflegen, ohne mit dem Originalprojekt in Konkurrenz zu treten.

Die Entwicklung, die Dokumentation und der Austausch in diesem Fork laufen
überwiegend auf Deutsch. Beiträge auf Englisch sind ebenfalls willkommen.

## Entwicklung

Voraussetzungen sind Node.js ab Version 24 und pnpm 10.33.4. Im Repository-Stammverzeichnis ausführen:

```powershell
npx.cmd --yes pnpm@10.33.4 install --frozen-lockfile
npx.cmd --yes pnpm@10.33.4 dev --host 127.0.0.1
```

Weitere Befehle, eine DXF-Testdatei und den Docker-Start findest du in [DEVELOPMENT.md](DEVELOPMENT.md).

## Herkunft und Lizenz

Danke an das MLightCAD-Team und alle, die zum Original beigetragen haben.
Ihre Arbeit bildet die Grundlage für CAD-Office.
[MLightCAD CAD Viewer](https://github.com/mlightcad/cad-viewer)

Ausgangspunkt war der Commit `e63a3838812f8b51c8044ebc7b5b03625ccc99bc`
einschließlich der lokalen Änderungen zum Zeitpunkt der Übernahme.
Ich pflege diesen Fork unter dem GitHub-Namen `robatsh`.

Die Lizenzdatei enthält den ursprünglichen Copyright-Hinweis von mlightcad
und den Hinweis für meine eigenen Änderungen an CAD-Office. [MIT-Lizenz](LICENSE)

Du kannst CAD-Office unter den Bedingungen der MIT-Lizenz nutzen, kopieren,
anpassen und weitergeben. Bei der Weitergabe von Kopien oder wesentlichen
Teilen müssen die Copyright- und Lizenzhinweise enthalten sein.

## Mitmachen

Wenn du Lust hast, CAD-Office weiterzuentwickeln, freue ich mich über
Fehlerberichte, Ideen und Pull Requests. Auch Korrekturen an der Dokumentation
und Rückmeldungen aus deinem CAD-Alltag sind willkommen. Du kannst dir
CAD-Office auch für deine eigenen Zwecke forken und in deinem Tempo daran
weiterarbeiten. [Issues](https://github.com/robatsh/CAD-Office/issues) ·
[Pull Requests](https://github.com/robatsh/CAD-Office/pulls)
