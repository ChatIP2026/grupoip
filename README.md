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
| **Noticias diarias + Dato del día** | Lunes a viernes, 8:40 AM (Lima) → la edición se publica esa misma mañana, sin aprobación previa | Tarea programada `noticiero-ipartner-diario` en Claude Code (app de escritorio). ⚠️ Requiere que la app Claude esté abierta en la computadora a esa hora |
| **Diseño, categorías, reglas** | Solo cuando se pide | Por chat en Claude Code: se revisa en el chat y se sube solo con aprobación |
| **Argumentos de venta** | No rotan: son permanentes | Los cura a mano el equipo comercial (vía Claude + token). La tarea nocturna tiene prohibido tocarlos |
| **Diseño** | Solo cuando se pide un cambio | Manualmente vía Claude + token |

## 💬 Argumentos de venta (panel derecho)

Seis argumentos permanentes en `SILVER`, agrupados en dos páginas de 3 que se deslizan de arriba a abajo. El panel avanza a la página siguiente cada vez que las noticias completan una vuelta entera (rotan todas y vuelven a la primera), no con un reloj propio. Formato de cada uno: objeción real del cliente entre comillas → argumento que **abre con la cifra en negrita** → frase de cierre que el vendedor dice en voz alta. Se cambian solo cuando el equipo comercial lo pide.

## 🏢 Noticias internas (pestaña iPartner)

Viven en `IPARTNER` dentro de `data.js` y las cura el equipo, no la tarea nocturna. Formato: titular emotivo + una frase + foto grupal (si no hay foto, sale un marco con siluetas). Cada item se publica con el campo `pub` y **dura 2 días**: el de publicación y el siguiente. Después desaparece solo. Nunca se deja una tarjeta vacía ni un relleno.

El mensaje motivacional de los lunes sigue pendiente de aprobación, y sin métricas de ventas.

## 📋 Categorías de noticias

Seis categorías (redefinidas el 30/09/2026). El valor de `cat` se escribe exactamente así:

| `cat` | Color | Frecuencia | Qué entra |
|---|---|---|---|
| **ECONOMÍA** | `#FF953A` | diaria | Economía peruana con foco en los 17 rubros donde iPartner tiene clientes |
| **RRHH** | `#E6299C` | diaria | El corazón: SUNAFIL, empleo, talento, normas laborales |
| **LEGAL** | `#F52055` | solo si hay algo nuevo | Normas, fallos o proyectos de ley que afecten a empresas |
| **IA** | color de la marca | diaria | Últimas noticias de las IA importantes. **Máximo una nota de Claude/Anthropic cada dos ediciones**; los otros días, ChatGPT, Gemini, Grok, etc. o IA aplicada a RRHH y ventas. Icono = isotipo de la IA |
| **CONSUMO** | `#FF953A` | cuando haya | Antes RETAIL: retail, consumo masivo, campañas, ventas por canal. Solo con impacto en empleo o ventas |
| **MUNDO** | `#07F3F4` | opcional | Absorbe a LIBRE: solo lo que afecta al Perú. Si no hay nada verificable, no sale |

## 🔁 Frescura y no repetición

- **Búsqueda por feeds**: se leen primero los feeds RSS o las portadas de sección de cada medio (listan las notas con fecha y hora), no un buscador genérico.
- **Ventana**: prioridad a notas de las últimas **48 h**. Hasta 7 días solo como respaldo, marcadas `week:true`.
- **`historial.json`**: registro de todo lo publicado (fecha de edición, categoría, título, tema, URL). La tarea lo lee antes de elegir y agrega las notas nuevas al publicar.
- **Descarte**: una nota no entra si su URL ya salió, o si cuenta el **mismo hecho** que otra publicada en los últimos **14 días**, en cualquier categoría y de cualquier medio. Excepción: que traiga un dato nuevo real (otra cifra, otra decisión).
- **Temas que más se repitieron** hasta el 30/09 (vigilar): sueldo mínimo, empleo formal, SUNAFIL y multas, exportaciones, BCR y tasa, Fiestas Patrias, Anthropic/Pentágono.

## ✍️ Reglas editoriales esenciales

- Fecha de publicación VERIFICADA abriendo cada artículo. Sin fecha → no entra.
- Lo más reciente gana siempre. Fallback semanal etiquetado "de esta semana".
- Titulares de 5-8 palabras + un visual simbólico + UNA cifra grande (reglas de digital signage).
- **Sin emojis en las noticias**: ni en el titular, ni en el subtexto de la cifra, ni marcas decorativas en la esquina de la tarjeta.
- El visual (`viz`) se rige por dos reglas: **(1) se elige por lo que cuenta la noticia** —el icono debe tener que ver con el tema, no ponerse al azar— y **(2) debe variar: ningún icono se repite dos días seguidos**. Cuando varios iconos calzan con el tema, se prefiere el que no salió ayer; el significado manda sobre la variedad. La biblioteca es de **30 iconos** y está listada con su uso en la cabecera de `data.js`.
- La edición puede tener 4 o 5 noticias en vez de 5: si una categoría no tiene nada verificable, no se rellena.
- Enlaces del botón a fuentes de acceso libre: Infobae, RPP, Andina, BBC, DW, Forbes Perú y Approlog, más (desde el 30/09/2026) gob.pe (SUNAFIL, MTPE, MEF), El Peruano, La República, Gestión y Perú Retail, solo notas sin muro de pago.
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

**30/09/2026 — migración a Claude Code y reglas de frescura**
- La tarea diaria pasa a Claude Code (`noticiero-ipartner-diario`); la del chat anterior se desactiva.
- Análisis del historial (20/07–28/09, 148 notas): la misma nota casi nunca se repite, pero **sí el tema** (sueldo mínimo 13 notas, empleo formal 15, SUNAFIL 14). IA fue casi solo Claude (14 de 15). MUNDO salió 3 veces y LIBRE nunca. Se publicó una nota de febrero y se usó una fuente fuera de la lista.
- Cambios: RETAIL → **CONSUMO**; LIBRE se fusiona en **MUNDO**; IA con tope de Claude; nuevo `historial.json` y regla de 14 días; búsqueda por feeds con prioridad de 48 h; fuentes peruanas ampliadas.

---

## ⚙️ Estado actual de la configuración (19/08/2026)

Fotografía de cómo está todo hoy. Si algo se comporta distinto a lo que dice aquí, es un bug.

| Qué | Valor |
|---|---|
| Rotación de cada noticia | 15 s |
| Panel de argumentos | avanza al completar una vuelta de noticias (no tiene reloj propio) |
| Apartados de iPartner | 15 s cada uno |
| Alternancia entre pestañas | 5 min |
| Recarga de la pantalla | 30 min (y `data.js` se refresca en cada recarga) |
| Parpadeo del chip EN VIVO | 3.2 s |
| Tarea automática | lun-vie 8:40 AM (Lima), publica sola |
| Biblioteca de iconos | 30 |
| Cumpleaños cargados | 26 personas (con avatar: Oscar Montes, Romano Alfaro, Alonso Inga) |
| Extraordinarios vigentes | Julio 2026 |
| ADN comercial | **apagado** (`hasta:"2026-07-31"` vencido; el bloque existe, solo falta renovar la fecha o el contenido) |

## 🚨 Errores ya cometidos — NO repetir

Cada punto corresponde a un fallo real que costó tiempo. Léelos antes de editar.

**1. Nunca reemplazar rangos de `data.js` que abarquen otros bloques.**
El 07/08 se actualizó `EXTRA` reemplazando todo el texto entre `EXTRA: {` y `EVENTOS:`, y en medio vivía `ADN`: se borró sin que nadie lo notara durante 12 días. Editar siempre de forma quirúrgica (buscar y reemplazar el fragmento exacto) y, al terminar, comprobar que `IPARTNER` conserva sus **cinco** bloques: `DEDICATORIA`, `CUMPLES`, `EXTRA`, `ADN`, `EVENTOS`. La tarea automática ya valida esto y aborta si falta alguno.

**2. Capas: todo lo que flota sobre la pantalla debe llevar `pointer-events:none`.**
`.wall` (la pantalla, con sus botones y flechas) está en `z-index:2`. Por encima flotan `.floor` (3), `.platform` (3), `.front-stage` (4) y `.ticker` (7). Sus cajas son rectángulos invisibles mucho más grandes que el dibujo que se ve, y si reciben clics **se los roban al botón "Ver noticia" y a las flechas**. Todos deben tener `pointer-events:none`; solo `.tabarrow` (las flechas de cambio de pestaña) lleva `pointer-events:auto`.

**3. El contenido de la tarjeta no puede desbordarse sobre el botón.**
Al agrandar la tipografía del subtexto (`.bigfig small`), el bloque de la cifra se desbordó y tapó "Ver noticia": solo respondía una esquina y aparecía el cursor de arrastre. `.visual-row` lleva `overflow:hidden` para impedirlo. Si en el futuro se agranda cualquier texto de la tarjeta, verificar que el botón siga siendo clicable **en toda su superficie**.

**4. Los controles se detectan por coordenadas, no por `e.target`.**
`controlBajoPuntero()` comprueba si el puntero cae dentro del rectángulo del botón o de las flechas. Así responden en toda su área aunque algo quede pintado encima, y sobre ellos **nunca** se activa el arrastre ni el cursor de "agarrar". No sustituir esta lógica por `e.target.closest()`, que fue justo lo que falló.

**5. Ortografía: la tarea automática tiende a escribir sin tildes.**
El 18/08 publicó la edición entera sin tildes ni eñes ("anos", "economia", "gestion"). El prompt de la tarea incluye ahora una lista de palabras críticas y una validación que **aborta la publicación** si detecta alguna sin tilde.

**6. Longitud de los textos: es digital signage, no un artículo.**
La tarea llegó a escribir subtextos de más de 400 caracteres. Límites obligatorios, verificados por código antes de publicar: `title` ≤ 48 caracteres, `fig` ≤ 12, `figsub` ≤ 90, `DATO` ≤ 200.

**7. Recencia: nunca rellenar con noticias viejas.**
Se llegaron a publicar notas de hasta un mes de antigüedad para completar el cupo. Ahora hay límite duro de **7 días**; si no hay 4 noticias frescas, se publican 3.

**8. "Ejecutar ahora" no cancela la corrida programada.**
Si se dispara la tarea a mano por la mañana, la corrida automática de las 8:40 igual se ejecutará y **sobrescribirá** la edición manual.

**9. La tarea necesita la app de Claude abierta.**
Corre sola si la app está abierta a las 8:40. Si estaba cerrada, no siempre se pone al día al abrirla: puede hacer falta "Ejecutar ahora".

