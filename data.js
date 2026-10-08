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
   DW, Forbes Perú (forbes.pe) y Approlog (approlog.org/articulos). Ampliadas
   el 30/09/2026 con: gob.pe (SUNAFIL, MTPE, MEF), El Peruano (normas
   legales), La República, Gestión y Perú Retail (solo notas abiertas).
   EXCLUSIÓN ABSOLUTA como fuente o mención: Adecco, Manpower y Tawa.

   ⚠️ ESTILO SPANGLISH (norma de marca): usar términos en inglés ya comunes en
   ventas/RRHH (funnel, mindset, lead, pipeline, insight, target, coaching,
   feedback, deal, follow-up, performance…) en NEWS y en IPARTNER, cuando fluya
   natural. Sin forzar: si el término en español es el que se usa de verdad, se
   deja en español.

   ⚠️ AL EDITAR ESTE ARCHIVO: nunca reemplaces un rango que abarque varios
   bloques (así se borró ADN por accidente el 07/08 y estuvo perdido 12 días).
   Edita el fragmento exacto y comprueba al final que IPARTNER conserve sus
   SEIS bloques: DEDICATORIA, CUMPLES, EXTRA, ADN, EVENTOS y VIDEO.
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

   CATEGORÍAS (30/09/2026) — valor exacto de `cat` y su color:
     ECONOMÍA  #FF953A  diaria. Foco en los rubros de clientes de iPartner.
     RRHH      #E6299C  diaria. SUNAFIL, empleo, talento, normas laborales.
     LEGAL     #F52055  solo si hay norma, fallo o proyecto nuevo.
     IA        #D97757 (o color de la marca)  diaria. Máximo UNA nota de
               Claude/Anthropic cada DOS ediciones; los otros días, otra IA
               (ChatGPT, Gemini, Grok…) o IA aplicada a RRHH/ventas. Icono =
               isotipo de la IA de la nota; si no tiene, "ai".
     CONSUMO   #FF953A  (antes RETAIL) retail, consumo masivo, campañas,
               ventas por canal. Solo con impacto en empleo o ventas.
     MUNDO     #07F3F4  (absorbe LIBRE) solo lo que afecta al Perú. Opcional.
   Escribir "ECONOMÍA" con la tilde literal, nunca como Í.

   ⚠️ NO REPETIR: antes de elegir, leer historial.json. Se descarta una nota
   si su URL ya salió, o si cuenta el MISMO HECHO que otra publicada en los
   últimos 14 días (en cualquier categoría y de cualquier medio), salvo que
   traiga un dato nuevo real (otra cifra, otra decisión). Al publicar, agregar
   cada nota a historial.json con su "tema".

   ⚠️ FRESCURA: priorizar notas de las últimas 48 h, buscadas en los feeds
   RSS / portadas de sección de cada medio. Hasta 7 días solo como respaldo
   (y marcadas week:true). Fecha verificada abriendo la nota. */
window.NOTICIERO = {
  generado: "2026-10-08 08:30 (Lima) — tarea automática",
  NEWS: [
  { color:"#FF953A", viz:"agro", week:false,
    title:"El Niño llegaría a un récord en diciembre",
    fig:"+3,7 °C", figsub:"anomalía prevista en el Pacífico; supera el récord de 2,6 °C de 2015-2016",
    cat:"ECONOMÍA", source:"Andina · 08/10/2026",
    url:"https://andina.pe/agencia/noticia-el-nino-se-intensificara-hasta-alcanzar-su-maximo-diciembre-alerta-onu-1095121.aspx" },
  { color:"#E6299C", viz:"handshake", week:false,
    title:"Capeco y obreros firman acuerdo con la OIT",
    fig:"Adenda 1", figsub:"convenio de diálogo social en construcción civil; la OIT dice que es replicable",
    cat:"RRHH", source:"Andina · 08/10/2026",
    url:"https://andina.pe/agencia/noticia-sector-construccion-oit-destaca-dialogo-entre-empleadores-y-trabajadores-por-pais-1095053.aspx" },
  { color:"#10A37F", viz:"openai", week:false,
    title:"OpenAI lanza GPT-6 con interfaz interactiva",
    fig:"1.200 M", figsub:"de usuarios semanales de ChatGPT; Plus, Pro, Business y Enterprise primero",
    cat:"IA", source:"Infobae · 08/10/2026",
    url:"https://www.infobae.com/tecno/2026/10/08/openai-lanzo-gpt-6-y-una-interfaz-que-llena-las-respuestas-de-chatgpt-con-graficos-y-botones/" },
  { color:"#FF953A", viz:"money", week:false,
    title:"Bigbox apuesta por comprar más veces al año",
    fig:"+35%", figsub:"ventas acumuladas a agosto; Q4 concentra casi 50% del año; ticket de S/ 220",
    cat:"CONSUMO", source:"Gestión · 08/10/2026",
    url:"https://gestion.pe/economia/empresas/la-apuesta-de-bigbox-en-peru-por-comprar-mas-veces-los-regalos-ya-no-solo-por-fechas-noticia/" },
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
    { nombre:"Luis Enrique",        equipo:"",         fecha:"09-07", foto:"img/avatars/luis-enrique.jpg" },
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
    periodo:"Septiembre 2026",    /* fondo del escenario animado — lienzo 1920x951 */
    cards:[
      { nombre:"Lender Sayago",    equipo:"Finance & Legal", img:"img/extraordinarios/2026-09-1-lender-sayago.webp" },
      { nombre:"Andrés Castillo",  equipo:"Sales",           img:"img/extraordinarios/2026-09-2-andres-castillo.webp" },
      { nombre:"Gaddiel Enriquez", equipo:"IT",              img:"img/extraordinarios/2026-09-3-gaddiel-enriquez.webp" },
      { nombre:"José Salazar",     equipo:"Renewals",        img:"img/extraordinarios/2026-09-4-jose-salazar.webp" }
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
    { titulo:"Campeonato Deportivo IP",
      bajada:"Vóley, fútbol y gymkana: un día para compartir y jugar en equipo",
      cuando:"Viernes 25 de setiembre · Eureka Park",
      fecha:"2026-09-25",
      img:"img/eventos/2026-09-campeonato-deportivo.jpg" },
    { titulo:"Campeonato Deportivo IP · Reglas y premiación",
      bajada:"Etapa 1 vóley y fútbol mixto, etapa 2 gymkana, y los tres campeones",
      cuando:"Viernes 25 de setiembre · Eureka Park",
      fecha:"2026-09-25",
      img:"img/eventos/2026-09-campeonato-reglas.jpg" }
  ],

  /* ═══ VIDEO DEL MES ═══
     Aparece como un apartado más de iPartner, a pantalla completa. Acepta una
     IMAGEN (.png o .jpg) o un VIDEO (.mp4, que va en bucle y sin sonido): se
     detecta solo por la extensión de "src". Medida ideal: 2160x1080 (2:1).
     Para cambiarlo, sube el archivo nuevo al repositorio (nombre sin espacios
     ni tildes) y cambia "src". Para sacarlo del aire, deja src:"" y desaparece
     solo. "segundos" es cuánto dura en pantalla; en video, su duración manda. */
  /* "crono" dibuja el cronograma en HTML (ya no usa imagen): un día de pago por
     mes, de enero a diciembre. El mes en curso se resalta solo. */
  VIDEO: { titulo:"Cronograma de pagos 2026", segundos:20, kicker:false,
    crono:{ anio:2026, dias:[29,27,30,30,30,29,30,28,30,30,27,30] } }

},
  DATO: "Con ventas +35% en regalos y el Q4 como pico del año, ofrece a tus leads equipos temporales ya evaluados antes de la campaña.",





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
