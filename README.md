# CargoOps - Air Waybill Management Portal

A lightweight, static operational dashboard and validation system designed for air freight handlers to create, track, and optimize Air Waybill (AWB) documents according to international logistics standards.

## 🚀 Live Application
The platform is deployed and served live via GitHub Pages:
👉 **[Live Operations Dashboard](https://airsellcargo-01.github.io/airsellcargo-portal/)**

---

## 🛠️ Core Operational Features

### 1. International Air Transport Association (IATA) Validation
*   **Modulo 7 Verification:** The entry form uses a client-side JavaScript Modulo 7 algorithm to mathematically check the validity of the 11-digit AWB serial string before handling data routing.
*   **Strict Registry Geocoding:** Restricts origin and destination fields strictly to 3-letter uppercase IATA airport codes (`JFK`, `DXB`, etc.).

### 2. High-Legibility Printing Pipeline (`style.css`)
*   Fully optimized for A4 physical printing sheets via `@media print` rules.
*   Enforces the logistics-industry standard **Courier New** monospace typeface to protect column alignment on physical freight tags.
*   Suppresses web-only elements (`.no-print`, action buttons, navigation wrappers) during physical paper layout creation.

### 3. Flight Path Telemetry (`map.html`)
*   Renders active cargo manifests visually using the open-source **Leaflet.js** engine.
*   Plots straight-line flight paths (great-circle vector simulations) directly between mapped destination terminals using saved coordinate datasets.

### 4. Zero-Server Data Flow Persistence (`validation.js` & `index.html`)
*   Utilizes browser `localStorage` to cache form drafts and preserve active operational arrays without costly backend server dependencies.
*   Features a real-time, responsive text filter on the dashboard to instantly screen shipments by AWB number or port codes.

---

## 📂 Repository Blueprint

```text
├── .github/workflows/    # Automated CI/CD pipelines for GitHub Pages
├── awb_form.html         # AWB generation grid interface sheet
├── index.html            # Core manifest log and tracking monitor console
├── map.html              # Leaflet geographic flight path tracking display
├── style.css             # Main styling rules and A4 print media queries
├── index-style.css       # Specific visual overrides for the dashboard layout
└── validation.js         # JavaScript core data validation engine
