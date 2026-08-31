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

   ⚠️ AL EDITAR ESTE ARCHIVO: nunca reemplaces un rango que abarque varios
   bloques (así se borró ADN por accidente el 07/08 y estuvo perdido 12 días).
   Edita el fragmento exacto y comprueba al final que IPARTNER conserve sus
   CINCO bloques: DEDICATORIA, CUMPLES, EXTRA, ADN, EVENTOS.
   El detalle de este y otros errores ya cometidos está en el README,
   sección "Errores ya cometidos — NO repetir".

   ⚠️ SIN EMOJIS. Ninguna noticia lleva emojis: ni en el titular (`title`), ni
   en `figsub`, ni en `cat`, ni marcas en la esquina de la tarjeta. La tarjeta
   es titular + visual + cifra + fuente, nada más.

   ⚠️ VISUALES (campo "viz"): deben VARIAR. Se elige el que mejor cuente la
   noticia, no siempre el mismo. Regla: ningún visual puede repetirse dos días
   seguidos — antes de reescribir este archivo, mira qué "viz" tiene la edición
   anterior y elige otros.
   Biblioteca disponible en index.html — 30 iconos:
     chart-up    línea que sube (crecimiento, proyecciones al alza)
     chart-down  línea que baja (caída, contracción, retroceso)
     bars-up     barras que crecen (comparativos, series)
     pie         gráfico circular (porcentajes, participación)
     target      diana con flecha (metas, objetivos, proyecciones)
     money       monedas + S/ (dinero, sueldos, caja)
     piggy       alcancía (ahorro, CTS, AFP, gratificación)
     bank        edificio con columnas (BCR, banca, tasas, política monetaria)
     layoff      persona con X roja (despidos, ceses, rotación)
     hire        persona con check (contratación, empleo formal)
     people      grupo de personas (talento, planilla, equipos)
     search      lupa con persona (selección, búsqueda de talento, inspección)
     training    birrete (capacitación, formación, becas)
     handshake   apretón de manos (acuerdos, alianzas, negociación, contratos)
     legal       balanza (normas, derechos)
     gavel       martillo judicial (sentencias, leyes, facultades, fallos)
     shield      escudo con check (cumplimiento, prevención, seguridad)
     doc         documento validado (decretos, requisitos, trámites)
     alert       triángulo de alerta (multas, riesgos, sanciones, paros)
     calendar    calendario (plazos, feriados, fechas límite, cronogramas)
     clock       reloj (tiempo, jornada, demoras)
     health      corazón con pulso (SST, EsSalud, bienestar, seguridad y salud)
     building    edificios (empresas, sedes, oficinas)
     cart        carrito + barras (retail, consumo, ventas)
     truck       camión (transporte, logística, fletes, paros de transportistas)
     ship        barco (comercio exterior, puertos, exportaciones, aranceles)
     mining      cerros con pico (minería, inversión minera)
     agro        brote (agroexportación, agricultura, campo)
     ai          chip sonriente (IA genérica, tecnología, automatización)
     globe       globo terráqueo (MUNDO)
     claude      isotipo de Claude/Anthropic (usar color #D97757)
     openai      isotipo de ChatGPT/OpenAI (usar color #10A37F)
     gemini      isotipo de Gemini/Google (usar color #4C8DF6)
     grok        isotipo de Grok/xAI (usar color #C9D1D9)

   CATEGORIA "IA" (siempre activa): ultimas noticias y rumores de las IA mas
   importantes. PRIORIDAD: Claude/Anthropic primero; si hay algo de Claude
   interesante, va antes que otra IA. Luego ChatGPT, Gemini, Grok, etc. El icono
   debe ser el isotipo de la IA de la noticia con su color de marca; si la IA no
   tiene isotipo propio, usar "ai". Al menos UNA noticia de IA por edicion. */
window.NOTICIERO = {
  generado: "2026-08-31 11:30 (Lima) — edición manual",
  NEWS: [
  { color:"#D97757", viz:"claude", week:true,
    title:"Claude vuelve al Gobierno de Estados Unidos",
    fig:"Ilegal", figsub:"así declaró la jueza las sanciones de Trump: Claude regresa a las agencias federales",
    cat:"IA", source:"Infobae · 28/08/2026",
    url:"https://www.infobae.com/tecno/2026/08/28/anthropic-gana-batalla-legal-y-claude-podra-volver-a-utilizarse-en-las-agencias-del-gobierno-de-ee-uu/" },
  { color:"#E6299C", viz:"hire", week:true,
    title:"La cerveza sostiene un millón de empleos",
    fig:"1 millón", figsub:"161.000 locales formales, el 5,6% de la PEA: un target de planilla enorme y disperso",
    cat:"RRHH", source:"Andina · 31/08/2026",
    url:"https://andina.pe/agencia/noticia-sni-industria-cervecera-genera-mas-un-millon-puestos-trabajo-el-peru-1089764.aspx" },
  { color:"#FF953A", viz:"building", week:true,
    title:"El crédito hipotecario acelera y crece 7,6%",
    fig:"7,6%", figsub:"sube desde 7,4% en junio y el 94,4% de los nuevos créditos se pide en soles",
    cat:"ECONOMÍA", source:"Andina · 31/08/2026",
    url:"https://andina.pe/agencia/noticia-bcr-credito-hipotecario-se-acelera-el-peru-y-crece-76-anual-julio-del-2026-1089821.aspx" },
  { color:"#FF953A", viz:"chart-up", week:true,
    title:"La CCL sube a 3,2% su proyección para 2026",
    fig:"3,2%", figsub:"construcción crece 11,2% y la inversión privada 11,7%: ahí está el pipeline del año",
    cat:"ECONOMÍA", source:"Andina · 30/08/2026",
    url:"https://andina.pe/agencia/noticia-camara-comercio-lima-eleva-a-32-su-proyeccion-crecimiento-del-peru-para-2026-1089728.aspx" },
  { color:"#F52055", viz:"ship", week:true,
    title:"Fijan la cuota de jurel y caballa a diciembre",
    fig:"102.103 t", figsub:"la RM 302-2026-PRODUCE abre la extracción el 1 de setiembre y ordena la campaña",
    cat:"LEGAL", source:"Andina · 30/08/2026",
    url:"https://andina.pe/agencia/noticia-establecen-limite-pesca-del-jurel-y-caballa-para-periodo-setiembrediciembre-2026-1089725.aspx" }
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
    { titulo:"iPartner Awards 2026",
      bajada:"Una noche para inspirar, conectar y celebrar",
      cuando:"Viernes 4 de setiembre · 6 a 11 p.m.",
      fecha:"2026-09-04",
      img:"img/eventos/2026-09-ipartner-awards.jpg" }
  ]

},
  DATO: "El <b>99,8%</b> de los locales de restaurantes y afines del Perú son mypes: 161.000 establecimientos formales que casi nadie está trabajando como cartera.",


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
