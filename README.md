# lovelyn-li
just a little gift

# LOVELYN · Capítulo Dos

Regalo digital romántico interactivo para Jocelyn — mapa ilustrado tipo "isla del tesoro" con intro cinematográfica.

## Estructura

```
lovelyn-proyecto/
├── index.html        # Estructura de la página (intro + mapa + panel)
├── css/
│   └── styles.css    # Todos los estilos, animaciones y paleta de colores
├── js/
│   └── main.js        # Lógica: intro animada, estrellas/partículas, panel de cada isla, reproductor
└── assets/            # Aquí puedes ir agregando fotos, música, videos reales
```

## Cómo verlo

Simplemente abre `index.html` en tu navegador (doble clic). No necesita instalación ni servidor.

## Personalizar contenido

- **Galería de "Tú Eres Mi One Piece"**: agrega tus fotos reales dentro de `assets/photos/` nombrándolas `foto1.jpg`, `foto2.jpg`, `foto3.jpg`... (así como están en `js/main.js`). En cuanto el archivo exista con ese nombre, aparece automáticamente en la isla — no necesitas tocar código. Para cambiar el texto debajo de cada foto, o agregar más fotos (foto7, foto8...), edita el arreglo `memories` al inicio de `js/main.js`.
- **La carta en PDF de "Nuestra Historia"**: convierte tu carta a PDF (desde Word, Google Docs, Canva, o incluso "Imprimir → Guardar como PDF" desde cualquier programa) y ponla en `assets/documents/` con el nombre exacto `lovelyn.pdf`. En cuanto el archivo exista con ese nombre, el botón "✉️ Abrir la carta" ya funciona — no necesitas tocar código. Si quieres otro nombre de archivo, cámbialo en el campo `pdf:` dentro del objeto `il2` en `js/main.js`.
- **101 Razones**: busca el arreglo `reasons` en `js/main.js` (son 101 líneas generadas automáticamente). Reemplaza el texto de cada una por tu razón real, manteniendo el orden. El texto de presentación (por qué escribiste las 101 razones) está en `content.il4.intro`, en el mismo archivo.
- **Lovelyn II**: el texto de la cartita (por qué escribiste la segunda parte) está en `content.il3.letter` dentro de `js/main.js` — edítalo con lo que quieras decirle. El libro en sí va como PDF: ponlo en `assets/documents/` con el nombre exacto `libro2.pdf` y el botón "📖 Abrir el libro" funciona solo.
- **Textos de las demás islas**: edita el objeto `content` en `js/main.js`.
- **Colores / paleta**: variables CSS al inicio de `css/styles.css` (`:root { --gold, --ocean, ... }`).
- **Posición y tamaño de cada isla**: busca los selectores `#il-hero`, `#il2`, `#il3`, `#il4`, `#il5`, `#il6` en `css/styles.css` (propiedades `top/left/right/width/height`).
- **Canción real**: si quieres que el reproductor suene de verdad, agrega el archivo de audio a `assets/` y conecta un `<audio>` en `index.html` (por temas de derechos de autor no se incluye el audio de Coldplay).

## Próximos pasos sugeridos

- Rellenar "Nuestra Historia" con la cronología real.
- Llenar "101 Razones" con tarjetas individuales.
- Agregar mensajes desbloqueables en "Sorpresas".


