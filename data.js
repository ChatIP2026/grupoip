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
  generado: "2026-08-14 21:40 (Lima) — tarea nocturna",
  NEWS: [
  { color:"#FF953A", viz:"chart-up", week:true,
    title:"Moody's eleva proyeccion de crecimiento del Peru",
    fig:"3,5%", figsub:"crecera el PBI peruano en 2026 segun Moody's, que sube su estimado desde 3% por el repunte de la inversion privada y la resiliencia del consumo interno; Renzo Merino, VP de riesgo soberano, dijo que sin El Nino el pais podria superar el 4% anual y proyecta un potencial de 3,5% a 4% en los proximos anios: empresa que crece contrata, y ese es el mejor momento para abrir el pipeline",
    cat:"ECONOM\u00cdA", source:"Infobae \u00b7 13/08/2026",
    url:"https://www.infobae.com/peru/2026/08/13/moodys-eleva-proyeccion-de-crecimiento-de-peru-a-35-en-2026-incluso-con-un-incumplimiento-fiscal-mas-pronunciado/" },
  { color:"#F52055", viz:"calendar", week:true,
    title:"Feriado del 30 de agosto cae domingo",
    fig:"Pago triple", figsub:"le corresponde a quien trabaje el domingo 30 por Santa Rosa de Lima sin descanso sustitutorio: el Decreto Legislativo 713 obliga a pagar el feriado, la jornada y una sobretasa del 100%, y Sunafil recibe la denuncia si la empresa no cumple; toca revisar turnos y planilla antes de fin de mes con cada cliente que opera fines de semana",
    cat:"LEGAL", source:"Infobae \u00b7 13/08/2026",
    url:"https://www.infobae.com/peru/2026/08/13/que-dia-cae-el-feriado-el-30-de-agosto-y-cuanto-te-deben-pagar-si-trabajas-el-dia-de-santa-rosa-de-lima/" },
  { color:"#E6299C", viz:"pie", week:true,
    title:"Empresas peruanas gastan S/150 en alimentacion",
    fig:"S/ 150", figsub:"destinan al mes por trabajador las empresas en Peru en beneficios alimentarios, sobre todo tarjetas de alimentos, segun ONURA; la norma permite que lleguen al 20% de la remuneracion bruta y la alimentacion pesa 40% del gasto del hogar: es el beneficio no remunerativo con mejor performance para retener talento sin tocar el sueldo base",
    cat:"RRHH", source:"Infobae \u00b7 10/08/2026",
    url:"https://www.infobae.com/peru/2026/08/10/que-tanto-te-quiere-tu-jefe-este-es-el-monto-que-las-empresas-en-peru-destinan-para-beneficios-alimentarios/" },
  { color:"#FF953A", viz:"cart", week:true,
    title:"Solo 12% de bodegas accede a credito",
    fig:"440 mil", figsub:"bodegas peruanas no acceden a credito formal porque los bancos las consideran de alto riesgo por las extorsiones, alerta Agremub en el Dia del Bodeguero; las mas de 500 mil bodegas del pais generan unos 870 mil puestos de trabajo y lideran la formalizacion entre las mypes: el canal tradicional sigue siendo un target enorme y sin cubrir",
    cat:"RETAIL", source:"Infobae \u00b7 12/08/2026",
    url:"https://www.infobae.com/peru/2026/08/12/mas-de-440-mil-bodegas-no-acceden-a-creditos-bancos-las-consideran-de-alto-riesgo-por-extorsiones/" },
  { color:"#07F3F4", viz:"shield", week:true,
    title:"Pagos digitales incluyen a siete millones",
    fig:"7 millones", figsub:"de peruanos entraron al sistema financiero gracias a la digitalizacion, segun el CEO de Yape en el Inside LatAm de Moody's: 4 millones de micronegocios ya cobran por la app y hay mas de 200 millones de transacciones interoperables al mes, aunque el efectivo aun mueve entre 80% y 90% de la economia; bancarizar al colaborador simplifica planilla y abre el insight de formalizacion",
    cat:"ECONOM\u00cdA", source:"Infobae \u00b7 13/08/2026",
    url:"https://www.infobae.com/peru/2026/08/13/peru-supera-los-200-millones-de-transacciones-interoperables-al-mes-pero-el-80-de-los-pagos-aun-son-en-efectivo/" }
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
    { nombre:"Romano Alfaro",       equipo:"Renewals", fecha:"08-01", foto:"img/avatars/romano-alfaro.jpg" },
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
    periodo:"Julio 2026",
    cards:[
      { nombre:"Alonso Inga",     equipo:"Renewals", img:"img/extraordinarios/2026-07-1-alonso-inga.jpg" },
      { nombre:"Andres Castillo", equipo:"Reports",  img:"img/extraordinarios/2026-07-2-andres-castillo.jpg" },
      { nombre:"Luis Cabanillas", equipo:"Finance",  img:"img/extraordinarios/2026-07-3-luis-cabanillas.jpg" },
      { nombre:"Hilary Salazar",  equipo:"Business", img:"img/extraordinarios/2026-07-4-hilary-salazar.jpg" }
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
  DATO: "Las mas de <b>500 mil</b> bodegas del Peru generan alrededor de 870 mil puestos de trabajo y encabezan la formalizacion entre las mypes, pero solo el 12% llega al credito bancario: es un mercado enorme, formal y desatendido, justo el tipo de lead que el funnel de iPartner puede trabajar con propuesta de planilla y cumplimiento",
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
