# 📺 Noticiero iPartner

Pantalla táctil de noticias para el equipo de iPartner: noticias diarias verificadas del Perú y el mundo (economía, RRHH, SUNAFIL, retail), con panel fijo de "Argumentos de Cierre" para el equipo de ventas.

**Sitio en vivo:** https://chatip2026.github.io/grupoip/

Proyecto de Ingeniería Comercial · Elaborado por **Hilary S. y Carlos D.**

---

## 🖥️ Dos pantallas

La pizarra tiene dos pestañas y el robot viaja de una a otra: salta de su mesa, cruza a la otra "habitación", aterriza en el centro y saluda señalando la pantalla.

| Pestaña | Qué muestra | Cómo se llega |
|---|---|---|
| **Noticias** | Carrusel de noticias + panel de Argumentos de Venta a la derecha | Es la pantalla por defecto |
| **iPartner** | Noticias internas del equipo, tarjeta ancha y centrada (sin panel de argumentos: la pantalla se centra y crece) | Flechas cian a los lados de la mesa del robot |

Además alterna sola: **5 minutos en cada pestaña**. Si no hay ninguna noticia interna vigente, la pestaña iPartner no existe y las flechas se ocultan.

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

Seis argumentos permanentes en `SILVER`, agrupados en dos páginas de 3 que se deslizan de arriba a abajo. El panel avanza a la página siguiente cada vez que las noticias completan una vuelta entera (rotan todas y vuelven a la primera), no con un reloj propio. Formato de cada uno: objeción real del cliente entre comillas → argumento que **abre con la cifra en negrita** → frase de cierre que el vendedor dice en voz alta. Se cambian solo cuando el equipo comercial lo pide.

## 🏢 Noticias internas (pestaña iPartner)

Viven en `IPARTNER` dentro de `data.js` y las cura el equipo, no la tarea nocturna. Formato: titular emotivo + una frase + foto grupal (si no hay foto, sale un marco con siluetas). Cada item se publica con el campo `pub` y **dura 2 días**: el de publicación y el siguiente. Después desaparece solo. Nunca se deja una tarjeta vacía ni un relleno.

El mensaje motivacional de los lunes sigue pendiente de aprobación, y sin métricas de ventas.

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
- Enlaces del botón a fuentes de acceso libre (Infobae, RPP, Andina, BBC, DW, Forbes Perú, Approlog).
- EXCLUSIÓN ABSOLUTA: Adecco, Manpower y Tawa (clientes actuales).
- Prohibidos: sensacionalistas, espectáculos, deportivos, blogs de proveedores RRHH.
- Toda noticia debe permitir una acción comercial o de empresa.
- **Estilo de marca — spanglish:** iPartner gusta de usar términos en inglés ya comunes en el mundo comercial/RRHH (funnel, mindset, lead, pipeline, insight, target, coaching, feedback, deal, follow-up, performance…). Úsalos en AMBAS pestañas cuando fluya natural y aporte, sin forzar ni sonar postizo. Si el término en español es el que se usa de verdad, se deja en español. El criterio: que suene a como habla el equipo, no a traducción.

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

## 🗒️ Bitácora de cambios

Registro de las decisiones de diseño y contenido, para no perder el porqué.

**22/07/2026 — cierre de la remodelación (antes de la tarea nocturna)**
- Repo y sitio migrados a `ChatIP2026/grupoip` → https://chatip2026.github.io/grupoip/
- Pantalla de NOTICIAS: chip **EN VIVO** (parpadeo lento), sin emojis ni marcas en las tarjetas, biblioteca de 15 visuales que rotan sin repetir dos días seguidos, tarjeta de MUNDO ya no sale vacía. Cada noticia dura **15 s**.
- Panel **ARGUMENTOS DE VENTA** (antes "de cierre"): 6 permanentes, 2 páginas de 3, deslizamiento vertical; **avanza cuando las noticias completan una vuelta**, no con reloj propio. La tarea nocturna no lo toca.
- Segunda pantalla **iPARTNER** con robot que viaja entre pestañas; alterna sola cada 5 min. Apartados: **Cumpleaños** (aviso 4 días antes con reloj de arena + fecha en naranja; saludo el día; se va al día siguiente), **Extraordinarios del mes** (los 4, todo el mes siguiente), **Nuestro ADN comercial** (foco + 3 hitos, todo el mes), **Eventos** (hasta el día del evento). Rotan cada 15 s.
- Fuentes de noticias ampliadas con **Forbes Perú** y **Approlog**.
- **Estilo spanglish** adoptado como norma de marca (ver Reglas editoriales).
- Caché: `data.js` se refresca en cada recarga de 30 min.
