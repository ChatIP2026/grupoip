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
  generado: "2026-08-12 21:40 (Lima) — tarea nocturna",
  NEWS: [
  { color:"#FF953A", viz:"chart-up", week:true,
    title:"Interbank firma alianza directa con Anthropic",
    fig:"1er BANCO", figsub:"del Perú en cerrar un acuerdo directo con Anthropic para desplegar Claude AI: arrancó con Claude Enterprise para equipos de tecnología y especialistas, más programas de formación y acompañamiento; la banca ya movió ficha en IA y eso abre conversación de upskilling y nuevos perfiles con cualquier cliente corporativo",
    cat:"ECONOM\u00cdA", source:"Infobae \u00b7 12/08/2026",
    url:"https://www.infobae.com/peru/2026/08/12/un-banco-de-peru-ha-suscrito-una-alianza-con-anthropic-para-desplegar-ia-generativa-en-sus-operaciones-como-la-usara/" },
  { color:"#FF953A", viz:"cart", week:true,
    title:"Exportaciones peruanas marcan récord histórico semestral",
    fig:"US$ 54,049 M", figsub:"exportó el Perú en el primer semestre 2026 (+34%, Mincetur), con minería en US$ 39,875 M (+49%) y arándano, palta y uva liderando el agro; 7,798 empresas exportadoras y 65% son mypes: hay caja y hay pipeline de clientes medianos que van a necesitar personal",
    cat:"ECONOM\u00cdA", source:"Infobae \u00b7 07/08/2026",
    url:"https://www.infobae.com/peru/2026/08/07/cobre-oro-arandanos-y-paltas-son-de-los-productos-peruanos-mas-demandados-en-el-extranjero/" },
  { color:"#F52055", viz:"doc", week:true,
    title:"MEF llevará cuatro leyes al Tribunal Constitucional",
    fig:"4 LEYES", figsub:"impugnará el MEF ante el TC por su costo fiscal, entre ellas la Ley 32563 de gratificación y CTS para trabajadores CAS, ya vigente; el ministro Elmer Cuba advierte que cumplirlas obligaría a subir el IGV dos puntos: el marco de beneficios sigue en movimiento y conviene revisar supuestos de costo laboral",
    cat:"LEGAL", source:"Infobae \u00b7 08/08/2026",
    url:"https://www.infobae.com/peru/2026/08/08/adios-a-la-gratificacion-cas-aumento-de-pensiones-a-maestros-y-militares-y-homologacion-cafae-mef-las-llevara-al-tc/" },
  { color:"#E6299C", viz:"pie", week:true,
    title:"Agentes de IA ya atienden siete de diez consultas",
    fig:"70%", figsub:"de las interacciones de atención al cliente ya las gestionan agentes de IA, según el índice de Salesforce; la habilidad promedio de un agente pasó de dos a seis funciones en un año y en retail llegó a nueve acciones en campaña: el performance sube, pero el reto de RRHH es formar y gobernar ese talento",
    cat:"RRHH", source:"Infobae \u00b7 07/08/2026",
    url:"https://www.infobae.com/peru/2026/08/07/inteligencia-artificial-en-la-empresa-mas-agentes-mayor-productividad-y-nuevos-retos-en-peru/" },
  { color:"#FF953A", viz:"alert", week:true,
    title:"Conflictos sociales frenan cartera minera de US$ 64,000 millones",
    fig:"151", figsub:"conflictos sociales activos registró la Defensoría del Pueblo a junio 2026, 96 de ellos socioambientales, frente a una cartera minera de US$ 64,000 millones en 66 proyectos y 19 departamentos; la minería transfirió S/ 10,045 millones en 2025: gestión social y clima laboral en regiones son insight de venta",
    cat:"ECONOM\u00cdA", source:"Infobae \u00b7 10/08/2026",
    url:"https://www.infobae.com/peru/2026/08/10/el-camino-hacia-el-dorado-151-conflictos-mineros-amenazan-una-cartera-de-usd-64-mil-millones-en-peru/" }
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
  DATO: "El Perú exhibió <b>7,798</b> empresas exportadoras en el primer semestre de 2026 y el 65% son mypes: compañías que crecen rápido, todavía sin estructura de RRHH propia, y que necesitan reclutar y formalizar personal para sostener el ritmo; ese es el target más accionable del funnel hoy",
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
