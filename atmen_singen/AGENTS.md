# AGENTS.md — Singen & Sprechen / Atmen & Klavier Website

## Projekt Übersicht

**Repo:** `Kwerki/singen_atmen`
**Pfad:** `/data/.openclaw/workspace/singen_atmen/atmen_singen/`
**Tech Stack:** Vue 3 + Vuetify 3 + Vite + Vue Router

## Zwei Hauptbereiche (PROBLEM)

Die Website vermischt aktuell zwei komplett verschiedene Geschäftsbereiche ohne klare Trennung:

### 1. 🎵 Musik & Kunst
- **Singen** — Gesangschule
- **Klavier** — Klavierunterricht
- **Atmen** — Atemübungen (vermutlich Ergänzung zur Musik)

### 2. 🗣️ Sprache & Therapie
- **Sprechen** — Sprachschule / Logopädie

**Problem:** Es gibt KEINE Landing Page die Besucher klar auf einen der beiden Bereiche lenkt. Alle Bereiche werden gleichgewichtig in der Navigation angezeigt.

## Gewünschte Lösung

Eine **Landing Page** die Besucher sofort erkennt:
- "Ich will Musik lernen (Singen/Klavier)"
- "Ich will meine Sprache verbessern (Logopädie/Sprechen)"

Dann gezielt weiterleiten.

## Seitenstruktur (Aktuell)

```
/home          → HomeView (evtl. Dashboard/Übersicht)
/atmen         → AtmenView
/klavier       → KlavierView
/singen        → SingenView  
/sprechen      → SprechenView
/termin        → TerminView
/aboutme       → AboutMeView
/youtube       → YoutubeView
```

## Technische Notes

- **Vue Router** mit Hash History (funktioniert auf GitHub Pages ohne Server)
- **Vuetify 3** als UI Framework
- **MDI Icons** + custom SVG Logos in `/src/assets/logos/`
- Vite Dev Server: `npm run dev` → `http://localhost:5173/`

## Entwicklung mit OpenCode

Bei Entwicklung über OpenCode:
- Dateien im VPS unter `/data/.openclaw/workspace/singen_atmen/atmen_singen/`
- OpenCode soll ~ als VPS-Pfad interpretieren (NICHT lokal)
- Commit/Push über `gh` CLI (bereits authentifiziert)

## Commands

```bash
cd /data/.openclaw/workspace/singen_atmen/atmen_singen

npm install          # Abhängigkeiten installieren
npm run dev          # Dev Server starten
npm run build        # Production Build
npm run preview      # Build Preview
```

## GitHub Pages Deploy

```bash
npm run deploy      # baut dist/ und deployed auf gh-pages branch
```

**Wichtig:** Router muss Hash Mode nutzen für GitHub Pages (bereits konfiguriert).