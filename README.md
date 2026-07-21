# 📺 Noticiero iPartner

Pantalla táctil de noticias para el equipo de iPartner: noticias diarias verificadas del Perú y el mundo (economía, RRHH, SUNAFIL, retail), con panel fijo de "Argumentos de Cierre" para el equipo de ventas.

**Sitio en vivo:** https://chatip2026.github.io/grupoip/

Proyecto de Ingeniería Comercial · Elaborado por **Hilary S. y Carlos D.**

---

## 🗂️ Arquitectura (2 archivos)

| Archivo | Qué es | ¿Quién lo toca? |
|---|---|---|
| `index.html` | TODO el diseño: set de TV, robot, carrusel, panel de ventas, colores de marca, versión móvil | Solo humanos/Claude para cambios visuales |
| `data.js` | El contenido del día: noticias, dato del día, balas de plata | ⚠️ NO editar a mano: lo reescribe una tarea automática cada noche |

La página se recarga sola cada 30 minutos, así toma la edición nueva sin tocar la pantalla.

## ⏰ Calendario de actualizaciones

| Qué | Cuándo | Cómo |
|---|---|---|
| **Noticias diarias + Dato del día** | Domingo a jueves, 10:00 PM (Lima) → la edición amanece lista de lunes a viernes | Tarea programada en Claude (busca, verifica fechas abriendo cada artículo, publica) |
| **Balas de plata (argumentos de cierre)** | 1 vez por semana: domingo 10:00 PM → lunes amanecen renovadas | Misma tarea nocturna, solo los domingos |
| **Diseño** | Solo cuando se pide un cambio | Manualmente vía Claude + token |

## 📋 Categorías de noticias

**Activas:** 🇵🇪 PERÚ·ECONOMÍA (con foco en los 17 rubros donde iPartner tiene clientes, incluido RETAIL) · 💼 RRHH (el corazón: SUNAFIL, normas, talento) · ⚖️ LEGAL · 🌎 MUNDO (solo lo que toca al Perú; si no hay nada verificable, tarjeta honesta) · 🌟 LIBRE (excepcional: solo hitos mundiales de altísimo impacto, puede pasar semanas sin aparecer y eso es correcto).

**Pendientes de aprobación (no implementadas):** 🏢 iPARTNER — noticias internas de eventos del equipo (headline emotivo + frase + foto grupal), publicadas al día siguiente del evento, duran 2 días y luego desaparecen por completo (nunca tarjetas vacías); y el mensaje motivacional de los lunes (sin métricas de ventas — eso fue rechazado explícitamente).

## ✍️ Reglas editoriales esenciales

- Fecha de publicación VERIFICADA abriendo cada artículo. Sin fecha → no entra.
- Lo más reciente gana siempre. Fallback semanal etiquetado "de esta semana".
- Titulares de 5-8 palabras + un visual simbólico + UNA cifra grande (reglas de digital signage).
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
