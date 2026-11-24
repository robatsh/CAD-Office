# CAD-Office lokal entwickeln

CAD-Office ist ein browserbasierter DWG-/DXF-Viewer und Editor. Der Quellcode liegt in einem TypeScript-Monorepo mit pnpm und Nx. Für die Editor-Demo genügt der lokale Vite-Server.

## Voraussetzungen und Installation

- Git und Node.js ab Version 24
- pnpm in der Version aus [package.json](package.json), aktuell **10.33.4**
- Zugriff auf die npm-Registry für die Installation

Alle Befehle laufen im Stammverzeichnis des CAD-Office-Repositories.

In PowerShell:

```powershell
Set-Location 'D:\Workspace\codeSpace\CAD-Office'
node --version
npx.cmd --yes pnpm@10.33.4 install --frozen-lockfile
npx.cmd --yes pnpm@10.33.4 dev --host 127.0.0.1
```

Mit installiertem pnpm 10.33.4 funktioniert auch `pnpm install --frozen-lockfile` bzw. `pnpm dev --host 127.0.0.1`. `npx.cmd` lädt die passende pnpm-Version bei Bedarf. Auf macOS und Linux lautet der Befehl `npx`.

Öffne [http://127.0.0.1:5173/](http://127.0.0.1:5173/) oder die von Vite ausgegebene Adresse, falls der Port bereits belegt ist. Über die Dateiauswahl kannst du [minimal-line.dxf](packages/cad-editor-demo/e2e/fixtures/minimal-line.dxf) öffnen. Zum Beenden des Servers drückst du **Strg+C**. Beim ersten Start baut Nx die benötigten Workspace-Pakete. Vite kann die Seite neu laden, während es Abhängigkeiten für den Browser optimiert.

## Befehle für den Alltag

Die Beispiele verwenden `pnpm`. Unter Windows kannst du es jeweils durch `npx.cmd --yes pnpm@10.33.4` ersetzen.

| Befehl | Zweck |
| --- | --- |
| `pnpm dev` | Vue-Editor-Demo starten |
| `pnpm dev:simple` | Viewer-Demo ohne UI-Framework starten |
| `pnpm dev:diff` | Demo zum Vergleich von Zeichnungen starten |
| `pnpm build` | Alle Nx-Projekte mit Build-Ziel bauen |
| `pnpm preview` | Produktions-Build der Editor-Demo lokal ansehen |
| `pnpm nx build @mlightcad/cad-editor` | Editor-Paket und seine Abhängigkeiten bauen |
| `pnpm nx lint @mlightcad/cad-editor` | ESLint für das Editor-Paket ausführen |
| `pnpm test --runInBand` | Jest-Suite im Hauptprozess ausführen |
| `pnpm exec jest --runInBand --runTestsByPath PFAD_ZUR_SPEC` | Eine konkrete Jest-Datei ausführen |
| `pnpm test:e2e` | Playwright-Tests der Editor-Demo ausführen |

Playwright startet seinen eigenen Vite-Server auf Port 4173 und verwendet unter Windows standardmäßig Microsoft Edge. Die Einstellungen stehen in der [Playwright-Konfiguration](packages/cad-editor-demo/playwright.config.ts).

## Wo Änderungen hingehören

| Bereich | Verzeichnis |
| --- | --- |
| Demo-Seite, Dateiauswahl und App-Integration | [packages/cad-editor-demo](packages/cad-editor-demo) |
| Vue-Oberfläche, Ribbon, Statusleiste und Dialoge | [packages/cad-editor](packages/cad-editor) |
| Dokumente, CAD-Befehle, Eingabe und Viewer-Kern | [packages/cad-simple-viewer](packages/cad-simple-viewer) |
| Zeichnung im Browser rendern | [packages/three-renderer](packages/three-renderer) |
| Optionale Funktionen wie PDF- oder SVG-Export | Die passenden `cad-*-plugin`-Pakete unter [packages](packages) |

## Arbeitsablauf für Menschen und Agents

1. Prüfe den Git-Status mit `git status --short --branch` und lies [AGENTS.md](AGENTS.md) sowie die Regeln im betroffenen Unterverzeichnis. Für CAD-Befehle gelten zusätzlich die [Anweisungen für Commands](packages/cad-simple-viewer/src/command/AGENTS.md).
2. Ändere den Quellcode im zuständigen Paket. `dist/`, `lib/` und generierte Dateien unter `public/` entstehen aus dem Build. Neue oder geänderte UI-Texte laufen über i18n und werden in allen unterstützten Sprachen gepflegt.
3. Prüfe das betroffene Paket mit Lint und gezielten Tests. Bei Änderungen am Editor oder an Interaktionen prüfe den Ablauf zusätzlich in der Demo. Der [Entwicklungsindex](docs/development/index.md) verlinkt die Architektur- und Integrationsanleitungen.

## Docker

GitHub Actions baut das Image bei Pushes auf `main`, prüft den HTTP-Start
und veröffentlicht es als `ghcr.io/robatsh/cad-office:latest` sowie mit der
vollständigen Commit-SHA als Tag. Der Workflow kann auf `main` auch manuell
gestartet werden.

Mit der [Compose-Datei](compose.yaml) lässt sich das veröffentlichte Image
auf einem Docker-Host starten oder aktualisieren:

```sh
docker compose pull
docker compose up -d
```

Für ein privates Paket zuerst mit einem GitHub-Zugang mit Leserechten für das
Paket bei `ghcr.io` anmelden.

### Lokal bauen

Diese Befehle im Repository-Stamm mit einer Docker-Engine im Linux-Container-Modus ausführen.

```powershell
docker build -t cad-office .
docker run --rm -p 8080:80 cad-office
```

Der Viewer ist unter <http://localhost:8080> erreichbar. Nginx liefert den statischen Produktionsbuild inklusive Web-Workern, WebAssembly, CAD-Schriften und einer leeren metrischen DXF-Vorlage aus.

### Logo, Favicon und Akzentfarben

Lege auf dem Docker-Host einen Ordner `branding` mit einer `branding.json`
und den darin referenzierten Bilddateien an:

```json
{
  "logo": "logo.svg",
  "favicon": "favicon.png",
  "lightAccent": "#086781",
  "darkAccent": "#63d7e2"
}
```

Das Logo erscheint auf der Startseite, das Favicon im Browser-Tab. Die
Akzentfarben gelten für das jeweilige Editor-Design. Die Startseite verwendet
`lightAccent`. Alle Felder sind optional. Für Farben gilt das Format
`#RRGGBB`, für Bilder ein Dateiname im Branding-Ordner.

```powershell
docker run --rm -p 8080:80 --mount "type=bind,source=$(Join-Path (Get-Location) branding),target=/usr/share/nginx/html/branding,readonly" cad-office
```

In Portainer kommt der Mount unter den Dienst `cad-office`. Verwende einen
absoluten Pfad zu einem bereits vorhandenen Verzeichnis auf dem Docker-Host:

```yaml
volumes:
  - type: bind
    source: /opt/cad-office/branding
    target: /usr/share/nginx/html/branding
    read_only: true
    bind:
      create_host_path: false
```

Bei einem lokalen Compose-Aufruf kannst du `./branding` als Quelle verwenden,
wenn der Ordner neben der Compose-Datei liegt.

Nach Änderungen im eingebundenen Ordner genügt es, die Seite neu zu laden.
Ohne `branding.json` verwendet die App ihr Standarddesign.

### CAD-Schriften

Der Schriftkatalog liegt unter [fonts.json](packages/cad-editor-demo/static/cad-data/fonts/fonts.json). Die mitgelieferten Liberation-Schriften ersetzen gängige Schriftfamilien wie Arial, Times New Roman und Courier New. Für Zeichnungen mit eigenen SHX- oder TrueType-Schriften die vor Ort verfügbaren Schriftdateien in denselben Ordner legen, im Katalog eintragen und das Image neu bauen.
