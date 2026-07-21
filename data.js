/* DATOS DEL NOTICIERO iPARTNER — la tarea nocturna regenera NEWS y DATO.
   El diseño vive en index.html; aquí solo cambia el contenido.

   ⚠️ SILVER (Argumentos de Venta) es PERMANENTE: lo cura a mano el equipo
   comercial. La tarea nocturna NO debe tocarlo, reordenarlo ni reemplazarlo.

   ⚠️ MUNDO solo aparece cuando hay una noticia real y verificable. Ya no se
   publican tarjetas "honestas" vacías: si no hay nada, la categoría no existe
   ese día (la edición puede tener 4 o 5 noticias, y eso es correcto).

   ⚠️ iPARTNER es la segunda pantalla (noticias internas del equipo). Cada item
   vive 2 días: el de publicación (`pub`) y el siguiente; después desaparece
   solo. Si no queda ninguno vigente, la pestaña no se muestra y las flechas
   junto a la mesa del robot se ocultan: nunca hay tarjetas vacías.
   Campos: pub (YYYY-MM-DD, cuándo se publica) · fecha (texto visible del
   evento) · title (titular emotivo) · frase (una línea) · foto (ruta o URL de
   la foto grupal; si va vacía sale un marco con siluetas).
   Lo cura el equipo: la tarea nocturna NO lo toca.

   ⚠️ SIN EMOJIS. Ninguna noticia lleva emojis: ni en el titular (`title`), ni
   en `figsub`, ni en `cat`, ni marcas en la esquina de la tarjeta. La tarjeta
   es titular + visual + cifra + fuente, nada más.

   ⚠️ VISUALES (campo "viz"): deben VARIAR. Se elige el que mejor cuente la
   noticia, no siempre el mismo. Regla: ningún visual puede repetirse dos días
   seguidos — antes de reescribir este archivo, mira qué "viz" tiene la edición
   anterior y elige otros.
   Biblioteca disponible en index.html:
     chart-up  línea que sube (crecimiento, proyecciones)
     bars-up   barras que crecen (comparativos, series)
     pie       gráfico circular (porcentajes, participación)
     money     monedas + S/ (dinero, sueldos, caja)
     layoff    persona con una X roja (despidos, ceses, rotación)
     hire      persona con un check (contratación, empleo formal)
     people    grupo de personas (talento, planilla, equipos)
     legal     balanza (normas, sentencias, derechos)
     shield    escudo con check (cumplimiento, prevención, seguridad)
     doc       documento validado (decretos, requisitos, trámites)
     alert     triángulo de alerta (multas, riesgos, sanciones)
     calendar  calendario (plazos, fechas límite, cronogramas)
     cart      carrito + barras (retail, consumo, ventas)
     globe     globo terráqueo (MUNDO)
     clock     reloj (tiempo, jornada, demoras) */
window.NOTICIERO = {
  generado: "2026-07-20 22:06 (Lima)",
  NEWS: [
  { color:"#E6299C", viz:"layoff",  week:true,
    title:"Despidos golpean a 7 de cada 10 empresas",
    fig:"68%", figsub:"de empresas despidió personal en el 2026",
    cat:"RRHH", source:"Infobae · 18/07/2026",
    url:"https://www.infobae.com/peru/2026/07/18/crisis-laboral-en-peru-siete-de-cada-diez-entidades-despidieron-trabajadores-por-estas-dos-razones/" },
  { color:"#F52055", viz:"legal",  week:true,
    title:"Grati vencida: multa de hasta S/143 mil",
    fig:"S/ 143,660", figsub:"multa SUNAFIL por no pagar la gratificación",
    cat:"LEGAL", source:"RPP · 03/07/2026",
    url:"https://rpp.pe/economia/economia/gratificacion-julio-2026-peru-cuando-se-paga-y-como-calcular-dinero-a-recibir-en-fiestas-patrias-noticia-1695772" },
  { color:"#FF953A", viz:"pie",  week:true,
    title:"BCR ancla la tasa: crédito estable",
    fig:"4.25%", figsub:"tasa de referencia, 11 meses sin cambios",
    cat:"ECONOMÍA", source:"Andina · 09/07/2026",
    url:"https://andina.pe/agencia/noticia-bcr-mantiene-tasa-interes-referencia-425-undecimo-mes-consecutivo-1082982.aspx" },
  { color:"#FF953A", viz:"cart",  week:true,
    title:"Retail crece hasta 5% por Fiestas Patrias",
    fig:"+5%", figsub:"crecerían las ventas del retail en julio",
    cat:"RETAIL", source:"Perú Retail · 13/07/2026",
    url:"https://www.peru-retail.com/sector-retail-proyecta-un-crecimiento-de-las-ventas-de-hasta-5-durante-las-fiestas-patrias/" }
],
  /* ═══ iPARTNER — noticias internas (permanente, curado por el equipo) ═══ */
  IPARTNER: [
  { pub:"2026-07-21", fecha:"20 de julio de 2026",
    title:"El equipo comercial cerró julio antes de tiempo",
    frase:"Una tarde de trabajo en la que nadie miró el reloj. Gracias por eso.",
    foto:"" }
],
  DATO: "Este julio se inyectaron cerca de <b>S/ 10,000 millones</b> en gratificaciones a más de 4 millones de trabajadores formales: hay caja en el mercado para mover soluciones de talento",
  /* ═══ ARGUMENTOS DE VENTA — PERMANENTES (no los toca la tarea nocturna) ═══
     Curados por el equipo comercial · última curaduría: 21/07/2026 */
  SILVER: [
  { obj:"“El mercado está frío”",
    arg:"<b>US$ 45,128 M</b> exportados este año (+36.7%): tus clientes sí tienen caja.",
    say:"“El dinero está, muévete ya”" },
  { obj:"“Retener sale muy caro”",
    arg:"<b>S/ 2,344</b> paga hoy Lima y sube 7.9%: reponer a alguien cuesta el triple.",
    say:"“Retener es más barato que reponer”" },
  { obj:"“SUNAFIL no me tocará”",
    arg:"<b>S/ 143,660</b> de multa por no pagar bien la gratificación: el riesgo es real.",
    say:"“Prevenir cuesta una fracción”" },
  { obj:"“Nadie está contratando ahora”",
    arg:"<b>251,000</b> nuevos puestos formales solo en mayo: 26 meses seguidos de alza.",
    say:"“Tu competencia ya está contratando”" },
  { obj:"“Yo consigo mi propia gente”",
    arg:"<b>70.2%</b> del empleo en el Perú es informal: 12.3 de 17.6 millones de ocupados.",
    say:"“Conseguir es fácil, formalizar no”" },
  { obj:"“Mi planilla está en orden”",
    arg:"<b>23,971</b> empleadores recibieron carta inductiva de SUNAFIL solo por la CTS.",
    say:"“Estar en orden hay que poder probarlo”" }
]
};
