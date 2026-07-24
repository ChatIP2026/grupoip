/* DATOS DEL NOTICIERO iPARTNER — la tarea nocturna regenera NEWS y DATO.
   El diseño vive en index.html; aquí solo cambia el contenido.

   ⚠️ SILVER (Argumentos de Venta) es PERMANENTE: lo cura a mano el equipo
   comercial. La tarea nocturna NO debe tocarlo, reordenarlo ni reemplazarlo.

   ⚠️ MUNDO solo aparece cuando hay una noticia real y verificable. Ya no se
   publican tarjetas "honestas" vacías: si no hay nada, la categoría no existe
   ese día (la edición puede tener 4 o 5 noticias, y eso es correcto).

   ⚠️ iPARTNER es la segunda pantalla, con tres apartados que rotan cada 15 s.
   Lo cura el equipo: la tarea nocturna NO lo toca. Cada apartado aparece solo
   mientras está vigente, y si no queda ninguno la pestaña entera desaparece
   junto con las flechas de la mesa del robot.
     CUMPLES   avisa 4 días antes y sigue hasta el día del cumpleaños; ese día
               cambia al saludo con la dedicatoria. Al día siguiente desaparece.
               fecha en formato "MM-DD" (sin año: se repite cada año).
     EXTRA     los 4 trabajadores del mes, los 4 juntos en un solo slide.
               Se mantiene visible todo el mes; se reemplaza cuando llegan los
               nuevos (los de un mes se muestran durante el mes siguiente).
     EVENTOS   se muestran hasta el día del evento y luego desaparecen. Si hay
               varios en el mes, cada uno es su propio slide.

   ⚠️ FUENTES de acceso libre para las noticias: Infobae, RPP, Andina, BBC,
   DW, Forbes Perú (forbes.pe) y Approlog (approlog.org/articulos).
   EXCLUSIÓN ABSOLUTA como fuente o mención: Adecco, Manpower y Tawa.

   ⚠️ ESTILO SPANGLISH (norma de marca): usar términos en inglés ya comunes en
   ventas/RRHH (funnel, mindset, lead, pipeline, insight, target, coaching,
   feedback, deal, follow-up, performance…) en NEWS y en IPARTNER, cuando fluya
   natural. Sin forzar: si el término en español es el que se usa de verdad, se
   deja en español.

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
  generado: "2026-07-24 10:29 (Lima) — tarea nocturna",
  NEWS: [
  { color:"#E6299C", viz:"hire", week:true,
    title:"Pymes dinamizan el empleo temporal por Fiestas Patrias",
    fig:"+12%", figsub:"crecerían las contrataciones temporales en pymes, prevé la CCL",
    cat:"RRHH", source:"Andina · 24/07/2026",
    url:"https://andina.pe/agencia/noticia-pymes-proyectan-crecimiento-hasta-8-fiestas-patrias-dinamizan-empleo-temporal-1084840.aspx" },
  { color:"#FF953A", viz:"people", week:true,
    title:"Empleo formal privado sube 5.4% a mayo",
    fig:"+5.4%", figsub:"creció el empleo formal privado interanual, según el BCRP",
    cat:"ECONOMÍA", source:"Infobae · 19/07/2026",
    url:"https://www.infobae.com/america/agencias/2026/07/19/el-empleo-formal-en-peru-acumula-26-meses-de-crecimiento-a-mayo-pasado/" },
  { color:"#FF953A", viz:"cart", week:true,
    title:"Retail moverá S/ 4,600 millones en Fiestas Patrias",
    fig:"S/ 4,600 M", figsub:"prevé la CCL para la campaña; crecería entre 3% y 5%",
    cat:"RETAIL", source:"Infobae · 14/07/2026",
    url:"https://www.infobae.com/america/agencias/2026/07/15/minoristas-esperan-mover-mas-de-1300-millones-de-dolares-por-fiesta-nacional-de-peru/" },
  { color:"#FF953A", viz:"money", week:false,
    title:"BCR eleva a 3.4% el crecimiento del Perú",
    fig:"3.4%", figsub:"proyecta el BCR para el PBI 2026; consumo privado subiría 3.6%",
    cat:"ECONOMÍA", source:"RPP · 19/06/2026",
    url:"https://rpp.pe/economia/economia/bcr-eleva-proyeccion-de-crecimiento-de-la-economia-peruana-a-34-para-2026-pese-a-nino-costero-noticia-1693784" }
],
  /* ═══ iPARTNER — pantalla interna (permanente, curada por el equipo) ═══ */
  IPARTNER: {

  /* mensaje fijo de la empresa; {nombre} se reemplaza solo */
  DEDICATORIA: "De parte de todo el equipo de iPartner nos enorgullece celebrar contigo. Gracias por lo que sumas cada día: ¡que este nuevo año te traiga todo lo que te propongas, {nombre}!",

  /* fecha:"MM-DD" · foto: avatar cuadrado en img/avatars/ */
  CUMPLES: [
    /* ENERO */
    { nombre:"Sofía Salcedo",       equipo:"",         fecha:"01-30", foto:"" },
    /* MARZO */
    { nombre:"Mauricio",            equipo:"",         fecha:"03-17", foto:"" },
    { nombre:"Nicol de la Cruz",    equipo:"",         fecha:"03-23", foto:"" },
    /* ABRIL */
    { nombre:"Darwin Hoyos",        equipo:"Renewals", fecha:"04-07", foto:"" },
    { nombre:"Miryan Mendo",        equipo:"",         fecha:"04-09", foto:"" },
    { nombre:"Jorge Luis Gomez",    equipo:"Reports",  fecha:"04-25", foto:"" },
    /* MAYO */
    { nombre:"Carlos Daniel del Castillo Vergara", equipo:"", fecha:"05-11", foto:"" },
    { nombre:"Brenda Sanchez",      equipo:"",         fecha:"05-14", foto:"" },
    { nombre:"Andres Castillo",     equipo:"",         fecha:"05-16", foto:"" },
    /* JUNIO */
    { nombre:"Aixa Enriquez",       equipo:"Business", fecha:"06-01", foto:"" },
    { nombre:"Hilary Salazar",      equipo:"",         fecha:"06-05", foto:"" },
    { nombre:"Evelýn",              equipo:"",         fecha:"06-20", foto:"" },
    { nombre:"Mario Mendez",        equipo:"",         fecha:"06-20", foto:"" },
    { nombre:"José Salazar",        equipo:"",         fecha:"06-30", foto:"" },
    /* JULIO */
    { nombre:"Lender Sayago",       equipo:"Finance",  fecha:"07-04", foto:"" },
    { nombre:"Manuel Jimenez",      equipo:"",         fecha:"07-09", foto:"" },
    { nombre:"Oscar Montes",        equipo:"",         fecha:"07-23", foto:"img/avatars/oscar-montes.jpg" },
    /* AGOSTO */
    { nombre:"Romano Alfaro",       equipo:"",         fecha:"08-01", foto:"" },
    { nombre:"Naty",                equipo:"",         fecha:"08-21", foto:"" },
    { nombre:"Alonso Inga",         equipo:"",         fecha:"08-25", foto:"" },
    /* SETIEMBRE */
    { nombre:"Luis Enrique",        equipo:"",         fecha:"09-07", foto:"" },
    /* OCTUBRE */
    { nombre:"Pierina Cefaratti",   equipo:"",         fecha:"10-24", foto:"" },
    /* NOVIEMBRE */
    { nombre:"Flor Mendez",         equipo:"",         fecha:"11-05", foto:"" },
    { nombre:"Kassandra Lopez",     equipo:"",         fecha:"11-15", foto:"" },
    /* DICIEMBRE */
    { nombre:"Gustavo Aspajo",      equipo:"",         fecha:"12-05", foto:"" },
    { nombre:"Paola Quevedo",       equipo:"",         fecha:"12-13", foto:"" },
    { nombre:"Susana Mora",         equipo:"",         fecha:"12-13", foto:"" }
  ],

  EXTRA: {
    periodo:"Junio 2026",
    cards:[
      { nombre:"Darwin Hoyos",  equipo:"Renewals", img:"img/extraordinarios/2026-06-1-darwin-hoyos.jpg" },
      { nombre:"Jorge Gomez",   equipo:"Reports",  img:"img/extraordinarios/2026-06-2-jorge-gomez.jpg" },
      { nombre:"Aixa Enriquez", equipo:"Business", img:"img/extraordinarios/2026-06-3-aixa-enriquez.jpg" },
      { nombre:"Lender Sayago", equipo:"Finance",  img:"img/extraordinarios/2026-06-4-lender-sayago.jpg" }
    ]
  },

  /* Nuestro ADN comercial: encendido todo el mes. Al pasar "hasta" desaparece. */
  ADN: {
    kicker:"NUESTRO ADN COMERCIAL",
    hasta:"2026-07-31",
    foco:"La disciplina es nuestro escudo",
    mindset:"La motivación da el primer impulso, pero la rutina diaria es la que asegura los cierres: cada “No” es entrenamiento y cada llamada contestada, una oportunidad.",
    hitos:[
      { titulo:"El Entrenamiento",
        desc:"Dedicamos la primera hora del día a simular llamadas, corregirnos entre nosotras y afinar argumentos.",
        frase:"“Los partidos se ganan en la práctica, no en la cancha.”" },
      { titulo:"El Ritmo",
        desc:"El éxito B2B no es suerte, es matemática: cumplir los bloques de gestión blinda el funnel de ventas.",
        frase:"“La constancia vence al talento, cuando el talento se cansa.”" },
      { titulo:"La Revisión",
        desc:"Cada semana la IA analiza nuestras llamadas para ver qué salió bien y qué toca mejorar.",
        frase:"“Mirar la repetición de la jugada nos hace invencibles.”" }
    ]
  },

  EVENTOS: [
    { titulo:"Fiestas Patrias 2026",
      bajada:"Cena Criolla + Tómbola Patriótica",
      cuando:"5:00 p.m. · Terraza del piso 10",
      fecha:"2026-07-22",
      img:"img/eventos/2026-07-fiestas-patrias.jpg" }
  ]

},
  DATO: "El consumo privado crecería <b>3.6%</b> este 2026, con la economía peruana en 3.4% (BCR): hay caja y confianza en las empresas para invertir en talento y retención",
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
