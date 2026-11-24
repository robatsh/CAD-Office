# CAD-Office

CAD-Office ist ein browserbasierter DWG-/DXF-Viewer und Editor. Die Anwendung basiert auf MLightCAD und läuft lokal im Browser.

## Entwicklung

Voraussetzungen sind Node.js ab Version 24 und pnpm 10.33.4. Im Repository-Stammverzeichnis ausführen:

```powershell
npx.cmd --yes pnpm@10.33.4 install --frozen-lockfile
npx.cmd --yes pnpm@10.33.4 dev --host 127.0.0.1
```

Weitere Befehle, eine DXF-Testdatei und den Docker-Start findest du in [DEVELOPMENT.md](DEVELOPMENT.md).

## Herkunft und Lizenz

Ausgangspunkt ist [MLightCAD CAD Viewer](https://github.com/mlightcad/cad-viewer) bei Commit `e63a3838812f8b51c8044ebc7b5b03625ccc99bc`, einschließlich der lokalen Änderungen zum Zeitpunkt der Übernahme. Der ursprüngliche Copyright-Hinweis und die MIT-Lizenz stehen in [LICENSE](LICENSE).
