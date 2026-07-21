# 📺 Noticiero iPartner

Pantalla táctil de noticias para el equipo de iPartner: noticias diarias verificadas del Perú y el mundo (economía, RRHH, SUNAFIL, retail), con panel fijo de "Argumentos de Cierre" para el equipo de ventas.

**Sitio en vivo:** https://chatip2026.github.io/grupoip/

Proyecto de Ingeniería Comercial · Elaborado por **Hilary S. y Carlos D.**

---

## 🗂️ Arquitectura (2 archivos)

| Archivo | Qué es | ¿Quién lo toca? |
|---|---|---|
| `index.html` | TODO el diseño: set de TV, robot, carrusel, panel de ventas, colores de marca, versión móvil | Solo humanos/Claude para cambios visuales |
| `data.js` | El contenido del día: noticias y dato del día (`NEWS`, `DATO`) + los argumentos de venta (`SILVER`) | ⚠️ `NEWS` y `DATO` los reescribe la tarea nocturna: no editarlos a mano. `SILVER` es lo contrario: permanente y curado a mano por el equipo comercial, la tarea nunca lo toca |

La página se recarga sola cada 30 minutos, así toma la edición nueva sin tocar la pantalla.

## ⏰ Calendario de actualizaciones

| Qué | Cuándo | Cómo |
|---|---|---|
| **Noticias diarias + Dato del día** | Domingo a jueves, 10:00 PM (Lima) → la edición amanece lista de lunes a viernes | Tarea programada en Claude (busca, verifica fechas abriendo cada artículo, publica) |
| **Argumentos de venta** | No rotan: son permanentes | Los cura a mano el equipo comercial (vía Claude + token). La tarea nocturna tiene prohibido tocarlos |
| **Diseño** | Solo cuando se pide un cambio | Manualmente vía Claude + token |

## 💬 Argumentos de venta (panel derecho)

Seis argumentos permanentes en `SILVER`, agrupados en dos páginas de 3 que se deslizan de arriba a abajo cada 19 segundos (7 s más que las noticias). Formato de cada uno: objeción real del cliente entre comillas → argumento que **abre con la cifra en negrita** → frase de cierre que el vendedor dice en voz alta. Se cambian solo cuando el equipo comercial lo pide.

## 📋 Categorías de noticias

**Activas:** 🇵🇪 PERÚ·ECONOMÍA (con foco en los 17 rubros donde iPartner tiene clientes, incluido RETAIL) · 💼 RRHH (el corazón: SUNAFIL, normas, talento) · ⚖️ LEGAL · 🌎 MUNDO (solo lo que toca al Perú; **si no hay nada verificable, la categoría simplemente no sale ese día** — ya no se publican tarjetas vacías) · 🌟 LIBRE (excepcional: solo hitos mundiales de altísimo impacto, puede pasar semanas sin aparecer y eso es correcto).

**Pendientes de aprobación (no implementadas):** 🏢 iPARTNER — noticias internas de eventos del equipo (headline emotivo + frase + foto grupal), publicadas al día siguiente del evento, duran 2 días y luego desaparecen por completo (nunca tarjetas vacías); y el mensaje motivacional de los lunes (sin métricas de ventas — eso fue rechazado explícitamente).

## ✍️ Reglas editoriales esenciales

- Fecha de publicación VERIFICADA abriendo cada artículo. Sin fecha → no entra.
- Lo más reciente gana siempre. Fallback semanal etiquetado "de esta semana".
- Titulares de 5-8 palabras + un visual simbólico + UNA cifra grande (reglas de digital signage).
- **Sin emojis en las noticias**: ni en el titular, ni en el subtexto de la cifra, ni marcas decorativas en la esquina de la tarjeta.
- El visual (`viz`) se elige por lo que cuenta la noticia y **debe variar: ningún icono se repite dos días seguidos**. La biblioteca completa está listada en la cabecera de `data.js`.
- La edición puede tener 4 o 5 noticias en vez de 5: si una categoría no tiene nada verificable, no se rellena.
- Enlaces del botón a fuentes de acceso libre (Infobae, RPP, Andina, BBC, DW).
- EXCLUSIÓN ABSOLUTA: Adecco, Manpower y Tawa (clientes actuales).
- Prohibidos: sensacionalistas, espectáculos, deportivos, blogs de proveedores RRHH.
- Toda noticia debe permitir una acción comercial o de empresa.

## 🔧 Cómo hacer una modificación (para el equipo de iPartner)

1. Abrir Claude (Cowork) y pegarle:
   > "Trabaja sobre el repositorio GitHub `ChatIP2026/grupoip` (clónalo con el token que te doy). `index.html` es el diseño y `data.js` el contenido diario que NO debes tocar. Quiero este cambio: [describirlo]. Al terminar, commit y push a main."
2. El token de escritura lo administra el dueño del repo (fine-grained, solo este repo). Pedírselo por canal privado.
3. El cambio aparece en el sitio en 1-2 minutos. El link NUNCA cambia.

## 🚪 Plan de contingencia (independizarse de esta cuenta)

1. Crear cuenta GitHub propia → repositorio nuevo.
2. Este repo es público: clonarlo completo y subirlo al repositorio nuevo (Claude lo hace con un token de la cuenta nueva).
3. Activar Pages: Settings → Pages → Deploy from a branch → main → / (root) → Save.
4. Nuevo link: `usuario.github.io/nombre-repo` → actualizarlo en la pantalla.
5. Recrear la tarea nocturna en el Claude propio con el PROMPT MAESTRO (documento de traspaso) apuntando al repo nuevo.
