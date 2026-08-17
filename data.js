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
  generado: "2026-08-17 21:40 (Lima) — tarea nocturna",
  NEWS: [
  { color:"#F52055", viz:"money", week:true,
    title:"Sueldo minimo sube en dos tramos",
    fig:"S/ 1.300", figsub:"sera la nueva remuneracion minima vital: la presidenta Keiko Fujimori confirmo que el alza va en dos tramos, primero S/100 este 2026 y luego S/70 cuando pase el fenomeno El Nino, con un bono del MEF para amortiguar el golpe en las mypes; el Consejo Nacional del Trabajo se convoca este mes: toca sentarse con cada cliente a recalcular planilla, CTS y gratificaciones antes de que salga el decreto",
    cat:"LEGAL", source:"Infobae \u00b7 17/08/2026",
    url:"https://www.infobae.com/peru/2026/08/17/keiko-fujimori-confirma-que-sueldo-minimo-subira-en-dos-tramos-la-segunda-etapa-sera-despues-del-fenomeno-el-nino/" },
  { color:"#E6299C", viz:"doc", week:true,
    title:"MEF alista combo tributario laboral para formalizar",
    fig:"Sin recortes", figsub:"de gratificaciones ni de CTS, aclaro el ministro de Economia Elmer Cuba al anunciar el paquete que ira al Congreso para que sea mas facil ser formal en el Peru, sobre todo para el microempresario; el foco esta en el aporte excesivo que pagan los trabajadores de menores ingresos: si formalizar se abarata, el pipeline de planilla y cumplimiento se abre solo",
    cat:"RRHH", source:"Andina \u00b7 17/08/2026",
    url:"https://andina.pe/agencia/noticia-mef-alista-combo-tributariolaboral-para-facilitar-formalizacion-1087878.aspx" },
  { color:"#FF953A", viz:"people", week:true,
    title:"Mercado laboral empuja el credito de consumo",
    fig:"12%", figsub:"crece el credito de consumo y cerca de 7% el hipotecario gracias a la reactivacion del mercado laboral, senalo el CEO de BBVA Peru en el Moody's Inside LatAm 2026; las expectativas empresariales a 12 meses estan en su nivel mas alto desde 2017 y los ahorros de personas naturales suben 28%: hay caja y hay mindset de contratar, buen momento para tocar puertas",
    cat:"ECONOM\u00cdA", source:"Andina \u00b7 17/08/2026",
    url:"https://andina.pe/agencia/noticia-agentes-economicos-confianza-y-consumo-impulsan-economia-peruana-1087850.aspx" },
  { color:"#FF953A", viz:"bars-up", week:true,
    title:"Economia peruana crecio 3,05% en el semestre",
    fig:"3,05%", figsub:"avanzo el PBI peruano en el primer semestre de 2026 segun el INEI, con junio en 1,75% empujado por Construccion, Comercio y Servicios, mientras Pesca cayo 51,94%; el BCRP recoge expectativas de 3,1% a 3,3% para el ano y el MEF apunta a 4%: los rubros que jalan son los que estan contratando, y ahi debe apuntar el target comercial",
    cat:"ECONOM\u00cdA", source:"Infobae \u00b7 15/08/2026",
    url:"https://www.infobae.com/peru/2026/08/15/economia-peruana-crecio-mediocre-305-este-primer-semestre-y-aun-se-viene-el-fenomeno-el-nino-global/" }
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
    { nombre:"Alonso Inga",         equipo:"Renewals", fecha:"08-25", foto:"img/avatars/alonso-inga.jpg" },
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
  DATO: "El credito de consumo en el Peru crece a <b>12%</b> y los depositos de ahorro de personas naturales suben 28%, con expectativas empresariales a 12 meses en su mejor nivel desde 2017: hay caja en los hogares y apetito de inversion en las empresas, el escenario ideal para abrir un funnel de planilla, seleccion y cumplimiento antes de que llegue el fenomeno El Nino",
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
