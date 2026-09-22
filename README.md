# Isaac Vendryes — portfolio

A static HTML, CSS, and JavaScript portfolio. No framework, package installation, or build step is required.

Run `python3 -m http.server 8000 --bind 127.0.0.1` from this directory, then open http://127.0.0.1:8000.

## Pages

- `index.html`: introduction and four project cards. BRYX and Wabtec One link to case studies; the other two are marked coming soon.
- `bryx_maas_platform.html`: BRYX workflow case study.
- `wabtec_one_ai_integration.html`: Wabtec One AI support case study.
- `styles.css`: shared fonts, responsive layouts, entrance animation, and progressive edge blur.
- `site.js`: gallery controls and accessible image enlargement.

Edit content directly in the HTML pages. Existing project URLs are retained. Images are served from `img/`; the three additional BRYX diagrams and navigation icons were exported directly from the supplied Figma file.

## Typography

Every serif element uses the same New York font stack, including Wabtec One. New York is resolved from the visitor's installed fonts, followed by the platform's `ui-serif` and Georgia. The Apple font is not bundled as a webfont, so visitors without it will see the fallback. Google Sans Flex is hosted locally with its OFL license in `fonts/`.

## Interactions

Scrolling uses the browser's native page scroll. Eight CSS backdrop-filter layers at each viewport edge create progressive blur, matching the reference's layering. The blur becomes apparent when content passes under it; it does not rely on a scrolling timer or scroll interception.

Entrance motion uses an 800ms fade and 24px upward movement, staggered by 200ms. `prefers-reduced-motion` disables motion. HTML remains usable without JavaScript; image links open the originals, and galleries remain horizontally scrollable.

Images open in a native modal dialog. Escape, the close button, and the surrounding background dismiss it. Gallery buttons update at the beginning and end of each track; tracks also support touch and keyboard scrolling.

## Remaining content

The LinkedIn link is configured. The résumé destination has not been provided, so its label is currently noninteractive. Replace the `unavailable-link` span in `index.html` with an anchor when the résumé is ready.

The site has not been deployed.
