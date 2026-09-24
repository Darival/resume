# Article illustrations and weekly publishing

Approved with the design on 2026-09-23. Apply this workflow after verifying the production deployment; the saved automation is the source of truth for activation status.

## Activation after design approval

1. Deploy the reviewed design and image support through the existing develop → master workflow. Include the existing removal of the article intro; do not restore the old copy.
2. Verify Netlify has published the matching commit and that the public site renders the five illustrations in both languages and both layouts.
3. Read the latest saved automation `5-art-culos-semanales-de-ia` before updating it. Use the Codex automation tool, preserve its full current prompt, schedule, status, destination and notification settings, and append the instructions below. Do not replace its editorial preferences with an old snapshot or create another automation.

## Prompt addition (Spanish)

Ilustraciones de los artículos:
Después de seleccionar y verificar las cinco lecturas, crea una ilustración original por artículo usando explícitamente la skill $imagegen y la herramienta integrada de generación de imágenes. No necesitas una API adicional. Conserva todas las reglas editoriales, el intervalo semanal, los criterios de duplicados, fechas originales, resúmenes bilingües y el horario existente. No elijas artículos por facilidad de ilustración.

Antes de generar, consulta `docs/article-image-prompts-2026-09-23.md` y las imágenes existentes en `assets/articles/` como referencia de estilo. Si una ilustración ya existe para la misma URL, reutilízala; no regeneres activos por reintentos. Usa pixel art 2D con bloques grandes, bordes escalonados y tramado grueso, legible a 72–160 px de ancho, fondo verde casi negro #071412, teal #0f766e y luces menta #e7f2ef. Composición vertical 2:3, con el motivo ocupando casi toda la altura y poca área vacía, un motivo concreto relacionado con el contenido leído, sin letras, cifras, texto, logotipos ni marcas de agua. Son ilustraciones conceptuales, no fotografías de hechos ni gráficos de resultados. Mantén variedad de motivos y coherencia entre las cinco.

Genera cada imagen por separado. Inspecciona el resultado y copia el original PNG al repositorio en `assets/articles/YYYY-MM-DD/originals/<slug>.png`, usando como carpeta la fecha de la edición. No dejes referencias a archivos de la carpeta personal de Codex. Optimiza con `npm run images:optimize -- YYYY-MM-DD` (requiere cwebp), que conserva el original y produce WebP de 160×240, 320×480 y 640×960. No deformes una imagen que no sea 2:3; corrígela mediante ImageGen. Comprueba el peso y la legibilidad del resultado.

Añade a cada registro de `window.SITE_ARTICLES` el campo opcional `image`, con `src` para la variante de 640 px, `srcset` con las variantes 160w, 320w y 640w, `width: 640`, `height: 960`, y `alt.es` / `alt.en` con una descripción visual breve. Las rutas deben estar dentro de `assets/articles/`. Conserva intactos los campos editoriales existentes. Registra los prompts y la correspondencia entre URL y activo en un documento de la edición dentro de `docs/`.

Si la herramienta no está disponible o una imagen falla, no cambies silenciosamente de proveedor ni uses una API externa: omite `image` en ese artículo y reporta la incidencia. Nunca enlaces archivos inexistentes ni conserves una imagen ajena al artículo nuevo. La calidad y publicación de las lecturas válidas no dependen de la disponibilidad del generador. No borres imágenes históricas como parte de la actualización semanal.

Validación y publicación: ejecuta `node --check articles.js`, `npm run check:articles`, `npm run build` y `git diff --check`; verifica español/inglés, relación imagen-artículo, orden por publishedAt y carga responsiva. Conserva la regla existente de no incluir CSS regenerado accidentalmente en un commit editorial. Incluye en el commit editorial `articles.js`, solo los nuevos activos de la edición y su documento de prompts. Tras el despliegue, comprueba cada nuevo WebP con HTTP 200 y compara su contenido con el archivo local; verifica visualmente la edición publicada y reporta imágenes faltantes o fallidas junto con la evidencia de producción.

## Optional data contract

```js
image: {
  src: "assets/articles/YYYY-MM-DD/topic-640.webp",
  srcset: "assets/articles/YYYY-MM-DD/topic-160.webp 160w, assets/articles/YYYY-MM-DD/topic-320.webp 320w, assets/articles/YYYY-MM-DD/topic-640.webp 640w",
  width: 640,
  height: 960,
  alt: { es: "Descripción visual breve.", en: "Brief visual description." }
}
```

The optional image field must never determine whether an otherwise valid article is included. Each article displays its own small thumbnail on the left, including on mobile and in reduced-motion or animation-library failure modes. Keep this compact layout for future editions. Missing or failed art is hidden without removing the article text.
