# Imágenes de la pestaña iPartner

Las rutas se escriben en `data.js`. Formatos y tamaños recomendados:

| Carpeta | Qué va | Formato | Tamaño | Nombre sugerido |
|---|---|---|---|---|
| `img/avatars/` | Avatar de cada colaborador para los cumpleaños | PNG o JPG, **cuadrado 1:1** | 600 × 600 px | `nombre-apellido.png` |
| `img/extraordinarios/` | Las 4 piezas de los trabajadores del mes | JPG, **vertical A4 (1:1.41)** | 1000 × 1414 px | `2026-06-lender-sayago.jpg` |
| `img/eventos/` | El arte del evento | JPG, **panorámico 2.3 : 1** | **1902 × 827 px** | `2026-09-ipartner-awards.jpg` |

Peso: máximo ~400 KB por imagen (la pantalla se recarga sola cada 30 minutos).
Si un campo `img` o `foto` va vacío, la pantalla muestra un marco con el nombre
en vez de romperse.

## Por qué 2.3 : 1 en los eventos

El recuadro del evento es más panorámico que un 16:9. Si subes una imagen 16:9
(1.78 : 1) se ajusta por altura y quedan unos **143 px de vacío a cada lado**.
La proporción de la caja útil es 2.3 : 1 en una pantalla 16:9, así que ese es el
formato que la llena por completo. Sirve cualquier medida entre 2.2 y 2.4 : 1.

Ojo: los generadores de imágenes suelen ofrecer solo 16:9, 4:3, 1:1, 3:4 y 9:16.
Ninguno llega a 2.3 : 1 — hay que usar un lienzo personalizado (por ejemplo en
Canva) poniendo 1902 × 827 px a mano.

