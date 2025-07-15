// script.js

// Datos de la malla curricular
// 'prerequisitos': Un array de códigos de asignaturas que deben estar aprobadas antes.
// 'abre': Un array de códigos de asignaturas que esta asignatura "abre" o habilita.
// 'tipo': Para aplicar diferentes estilos de color definidos en estilos.css.
const mallaCurricular = {
    "Primer Año": {
        "Semestre 1": [
            { codigo: "BIMI030", nombre: "BIOLOGIA CELULAR", tipo: "obligatoria" },
            { codigo: "CIAN040", nombre: "ZOOLOGIA Y ECOLOGIA APLICADA", tipo: "obligatoria" },
            { codigo: "DYRE070", nombre: "EDUCACIÓN FÍSICA Y SALUD", tipo: "obligatoria" },
            { codigo: "ELECT12", nombre: "OFG 1", tipo: "electiva" },
            { codigo: "MATM003", nombre: "ELEMENTOS DE CALCULO", tipo: "obligatoria" },
            { codigo: "MVET013", nombre: "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA I", tipo: "practica" },
            { codigo: "QUIM007", nombre: "QUIMICA GENERAL", tipo: "obligatoria" }
        ],
        "Semestre 2": [
            { codigo: "ANAV051", nombre: "ANATOMIA VETERINARIA", tipo: "obligatoria" },
            { codigo: "ANAV131", nombre: "EMBRIOLOGIA VETERINARIA", tipo: "obligatoria" },
            { codigo: "ELECT13", nombre: "OFG 2", tipo: "electiva" },
            { codigo: "FARM101", nombre: "BIOQUIMICA VETERINARIA", tipo: "obligatoria", prerequisitos: ["BIMI030"] },
            { codigo: "HIPA104", nombre: "HISTOLOGIA", tipo: "obligatoria", prerequisitos: ["BIMI030"] },
            { codigo: "MVET053", nombre: "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA II", tipo: "practica", prerequisitos: ["MVET013"] }
        ]
    },
    "Segundo Año": {
        "Semestre 3": [
            { codigo: "ANAV140", nombre: "MORFOLOGÍA VETERINARIA APLICADA", tipo: "obligatoria", prerequisitos: ["ANAV051"] },
            { codigo: "BIMI165", nombre: "MICROBIOLOGÍA GENERAL", tipo: "obligatoria", prerequisitos: ["FARM101"] },
            { codigo: "CIAN141", nombre: "ZOOTECNIA", tipo: "obligatoria", prerequisitos: ["CIAN040"] },
            { codigo: "FARM151", nombre: "FISIOLOGÍA VETERINARIA", tipo: "obligatoria", prerequisitos: ["FARM101"] },
            { codigo: "FARM155", nombre: "INMUNOLOGÍA", tipo: "obligatoria", prerequisitos: ["BIMI030"] },
            { codigo: "MEPR132", nombre: "BIOESTADISTICA", tipo: "obligatoria", prerequisitos: ["MATM003"] }
        ],
        "Semestre 4": [
            { codigo: "CIAN113", nombre: "ETOLOGIA Y BIENESTAR ANIMAL", tipo: "obligatoria", prerequisitos: ["CIAN141"] },
            { codigo: "CIAN161", nombre: "FISIOLOGIA REPRODUCTIVA", tipo: "obligatoria", prerequisitos: ["ANAV131", "ANAV140"] },
            { codigo: "CIDI023", nombre: "INGLES I", tipo: "obligatoria" },
            { codigo: "FARM202", nombre: "FISIOPATOLOGÍA VETERINARIA", tipo: "obligatoria", prerequisitos: ["FARM151"] },
            { codigo: "MEPR235", nombre: "ENFERMEDADES INFECCIOSAS DE LOS ANIMALES DOMÉSTICOS", tipo: "obligatoria", prerequisitos: ["BIMI165"] },
            { codigo: "PANI142", nombre: "PATOLOGÍA GENERAL", tipo: "obligatoria", prerequisitos: ["HIPA104", "FARM155"] }
        ]
    },
    "Tercer Año": {
        "Semestre 5": [
            { codigo: "CIAN243", nombre: "NUTRICIÓN Y ALIMENTACIÓN", tipo: "obligatoria", prerequisitos: ["CIAN141"] },
            { codigo: "CIAN262", nombre: "REPRODUCCION ANIMAL I", tipo: "obligatoria", prerequisitos: ["CIAN161"] },
            { codigo: "CIDI123", nombre: "INGLES II", tipo: "obligatoria", prerequisitos: ["CIDI023"] },
            { codigo: "FARM211", nombre: "FARMACOLOGIA VETERINARIA", tipo: "obligatoria", prerequisitos: ["FARM202"] },
            { codigo: "MVET102", nombre: "PRÁCTICA BÁSICA", tipo: "practica", prerequisitos: ["TODOS-1-4-SEMESTRE"] },
            { codigo: "PANI238", nombre: "ENFERMEDADES PARASITARIAS", tipo: "obligatoria", prerequisitos: ["FARM202", "PANI142"] },
            { codigo: "PANI239", nombre: "PATOLOGIA ESPECIAL E INMUNOPATOLOGIA", tipo: "obligatoria", prerequisitos: ["PANI142"] }
        ],
        "Semestre 6": [
            { codigo: "CIAN233", nombre: "REPRODUCCIÓN ANIMAL II", tipo: "obligatoria", prerequisitos: ["CIAN161"] },
            { codigo: "CIAN240", nombre: "ECONOMIA Y FUNDAMENTOS DE ADMINISTRACION PECUARIA", tipo: "obligatoria", prerequisitos: ["MEPR132"] },
            { codigo: "CIAN249", nombre: "PRODUCCIÓN DE NO RUMIANTES", tipo: "obligatoria", prerequisitos: ["CIAN243"] },
            { codigo: "CIDI223", nombre: "INGLES III", tipo: "obligatoria", prerequisitos: ["CIDI123"] },
            { codigo: "MEPR200", nombre: "EPIDEMIOLOGÍA VETERINARIA", tipo: "obligatoria" },
            { codigo: "PANI253", nombre: "ACUICULTURA Y ENFERMEDADES DE PECES", tipo: "obligatoria", prerequisitos: ["CIAN243", "PANI239"] },
            { codigo: "PANI254", nombre: "ENFERMEDADES DE AVES", tipo: "obligatoria", prerequisitos: ["PANI238", "PANI239"] }
        ]
    },
    "Cuarto Año": {
        "Semestre 7 ": [
            { codigo: "CIAN244", nombre: "GENETICA PECUARIA", tipo: "obligatoria", prerequisitos: ["MEPR132", "CIAN249"] },
            { codigo: "CIAN246", nombre: "PRODUCCIÓN DE RUMIANTES I", tipo: "obligatoria", prerequisitos: ["CIAN243", "CIAN262"] },
            { codigo: "ELECT100", nombre: "OPTATIVO DE ESPECIALIZACIÓN I", tipo: "electiva", prerequisitos: ["TODOS-1-6-SEMESTRE"] },
            { codigo: "HOVE215", nombre: "CIRUGÍA GENERAL Y ANESTESIOLOGÍA VETERINARIA", tipo: "obligatoria", prerequisitos: ["FARM211"] },
            { codigo: "HOVE272", nombre: "EXPLORACIÓN CLINICA", tipo: "obligatoria", prerequisitos: ["FARM202", "PANI239"] },
            { codigo: "HOVE278", nombre: "MEDICINA INTERNA I", tipo: "obligatoria", prerequisitos: ["FARM211", "PANI239"] },
            { codigo: "MEPR209", nombre: "PRÁCTICA TRANSFERENCIA TECNOLÓGICA Y SERVICIO VETERINARIO A LA SOCIEDAD", tipo: "practica", prerequisitos: ["PANI238", "MEPR200", "MVET102"] }
        ],
        "Semestre 8": [
            { codigo: "CIAN235", nombre: "PRODUCTOS ANIMALES", tipo: "obligatoria", prerequisitos: ["CIAN249", "CIAN246"] },
            { codigo: "CIAN248", nombre: "PRODUCCIÓN DE RUMIANTES II", tipo: "obligatoria", prerequisitos: ["CIAN246", "CIAN240"] },
            { codigo: "ELECT101", nombre: "OPTATIVO DE ESPECIALIZACIÓN II", tipo: "electiva", prerequisitos: ["TODOS-1-7-SEMESTRE"] },
            { codigo: "HOVE279", nombre: "MÉTODOS COMPLEMENTARIOS DE DIAGNÓSTICO", tipo: "obligatoria", prerequisitos: ["HOVE272"] },
            { codigo: "HOVE292", nombre: "MEDICINA INTERNA II", tipo: "obligatoria", prerequisitos: ["PANI239"] },
            { codigo: "HOVE293", nombre: "PATOLOGÍA QUIRÚRGICA Y CIRUGÍA ESPECIAL", tipo: "obligatoria", prerequisitos: ["HOVE215", "HOVE272"] },
            { codigo: "MEPR216", nombre: "CONTROL SANITARIO E INOCUIDAD DE ALIMENTOS", tipo: "obligatoria", prerequisitos: ["PANI238", "MEPR200", "PANI239"] }
        ]
    },
    "Quinto Año": {
        "Semestre 9": [
            { codigo: "CIAN255", nombre: "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS", tipo: "obligatoria", prerequisitos: ["CIAN248", "CIAN235"] },
            { codigo: "ELECT112", nombre: "OPTATIVO DE PROFUNDIZACIÓN I", tipo: "electiva", prerequisitos: ["TODOS-1-8-SEMESTRE"] },
            { codigo: "HOVE294", nombre: "CLÍNICA DE RUMIANTES", tipo: "obligatoria", prerequisitos: ["HOVE278", "HOVE292", "HOVE279", "HOVE293"] },
            { codigo: "HOVE295", nombre: "CLÍNICA DE EQUINOS", tipo: "obligatoria", prerequisitos: ["HOVE278", "HOVE292", "HOVE279", "HOVE293"] },
            { codigo: "HOVE296", nombre: "CLÍNICA DE PEQUEÑOS ANIMALES", tipo: "obligatoria", prerequisitos: ["HOVE278", "HOVE292", "HOVE279", "HOVE293"] },
            { codigo: "MEPR210", nombre: "SALUD PÚBLICA VETERINARIA", tipo: "obligatoria", prerequisitos: ["MEPR216"] }
        ],
        "Semestre 10": [
            { codigo: "ELECT116", nombre: "OPTATIVO DE PROFUNDIZACIÓN II", tipo: "electiva", prerequisitos: ["TODOS-1-9-SEMESTRE"] },
            { codigo: "HOVE297", nombre: "INTERNADO CLÍNICO", tipo: "practica", prerequisitos: ["HOVE294", "HOVE295", "HOVE296"] },
            { codigo: "MVET207", nombre: "PRACTICA PROFESIONAL DE INSPECCION VETERINARIA DE ALIMENTOS", tipo: "practica", prerequisitos: ["MEPR216"] },
            { codigo: "MVET208", nombre: "PRÁCTICA PROFESIONAL", tipo: "practica", prerequisitos: ["TODAS-DEMAS-1-9-SEMESTRE"] },
            { codigo: "MVET299", nombre: "PROYECTO DE TÍTULO (a)", tipo: "obligatoria", prerequisitos: ["TODAS-DEMAS-1-9-SEMESTRE"] }
        ]
    }
};

// Objeto para llevar el registro de asignaturas aprobadas (se carga desde localStorage)
const asignaturasAprobadas = {};

// Objeto para llevar el registro de asignaturas aprobadas que están tachadas
const asignaturasTachadasPermanentemente = {};

// Mapa para acceder rápidamente a la información de todas las asignaturas por su código
const todasLasAsignaturasMap = new Map();
let todosLosCodigosDeAsignaturas = []; // Para los requisitos "TODAS-DEMAS-X-SEMESTRE"
let semestreIndexMap = new Map(); // Para mapear semestre a su índice global (1, 2, 3...)

// Función para inicializar el mapa de asignaturas y el índice de semestres
function inicializarAsignaturasYSemestres() {
    console.log("Inicializando asignaturas y semestres...");
    let globalSemestreCount = 0;
    for (const yearKey in mallaCurricular) {
        // Obtenemos las claves de los semestres para este año y las ordenamos numéricamente
        const semestresOrdenados = Object.keys(mallaCurricular[yearKey]).sort((a, b) => {
            const numA = parseInt(a.match(/\d+/)[0]);
            const numB = parseInt(b.match(/\d+/)[0]);
            return numA - numB;
        });

        for (const semestreKey of semestresOrdenados) { // Usamos el orden correcto
            globalSemestreCount++;
            // Aquí se cambió el "1 Semestre" por "Primer Semestre" para el mapeo
            const displaySemestreName = getOrdinalSemestreName(globalSemestreCount);
            semestreIndexMap.set(semestreKey, {num: globalSemestreCount, display: displaySemestreName});
            
            mallaCurricular[yearKey][semestreKey].forEach(asignatura => {
                todasLasAsignaturasMap.set(asignatura.codigo, asignatura);
                // Excluir asignaturas finales que dependen de "TODAS-DEMAS" para evitar auto-referencias
                // o que no deberían ser contadas en el total para ciertos prerrequisitos.
                if (!["MVET208", "MVET299", "ELECT116", "ELECT112"].includes(asignatura.codigo)) {
                    todosLosCodigosDeAsignaturas.push(asignatura.codigo);
                }
            });
        }
    }
    console.log("Inicialización completa. Total de asignaturas:", todasLasAsignaturasMap.size);
    console.log("Mapa de semestres:", semestreIndexMap);
    console.log("Códigos de asignaturas considerados para 'TODAS-DEMAS' (excluyendo finales/optativas):", todosLosCodigosDeAsignaturas.length);
}

// Helper para convertir número de semestre a nombre ordinal
function getOrdinalSemestreName(num) {
    const ordinalNames = [
        "", // 0 no se usa
        "Primer", "Segundo", "Tercer", "Cuarto", "Quinto",
        "Sexto", "Séptimo", "Octavo", "Noveno", "Décimo"
    ];
    return ordinalNames[num] ? `${ordinalNames[num]} Semestre` : `${num} Semestre`; // Fallback si no está en la lista
}


// Función para obtener una asignatura por su código
const getAsignaturaByCodigo = (codigo) => {
    return todasLasAsignaturasMap.get(codigo);
};

// Función para verificar si una asignatura está aprobada
function estaAprobada(codigoAsignatura) {
    return asignaturasAprobadas[codigoAsignatura] === true;
}

// Función para verificar si los prerrequisitos de una asignatura están cumplidos
function prerrequisitosCumplidos(asignatura) {
    // Si la asignatura ya está aprobada, sus prerrequisitos se consideran cumplidos para efectos de habilitación
    // (Esta línea se mantiene si el estado 'aprobada' implica que ya se pasó el prerrequisito)
    if (estaAprobada(asignatura.codigo)) {
        return true;
    }

    // Si no tiene 'prerequisitos' (el array está vacío o no existe), se considera desbloqueada.
    if (!asignatura.prerequisitos || asignatura.prerequisitos.length === 0) {
        return true;
    }

    let todosCumplidos = true;
    for (const prereq of asignatura.prerequisitos) {
        if (prereq.startsWith("TODOS-")) {
            const parts = prereq.split('-'); // Ej: ["TODOS", "1", "4", "SEMESTRE"]
            const startSemestreNum = parseInt(parts[1]);
            const endSemestreNum = parseInt(parts[2]);

            let allSemestersCovered = true;
            for (const yearKey in mallaCurricular) {
                for (const semestreKey in mallaCurricular[yearKey]) {
                    const currentSemestreData = semestreIndexMap.get(semestreKey);
                    const currentSemestreNum = currentSemestreData ? currentSemestreData.num : null;

                    if (currentSemestreNum !== null && currentSemestreNum >= startSemestreNum && currentSemestreNum <= endSemestreNum) {
                        for (const s of mallaCurricular[yearKey][semestreKey]) {
                            if (!estaAprobada(s.codigo)) {
                                allSemestersCovered = false;
                                break;
                            }
                        }
                    }
                    if (!allSemestersCovered) break; // Salir del loop de semestres
                }
                if (!allSemestersCovered) break; // Salir del loop de años
            }
            if (!allSemestersCovered) {
                todosCumplidos = false;
                break;
            }
        } else if (prereq === "TODAS-DEMAS-1-9-SEMESTRE") {
            let allOthersCovered = true;
            // Se verifica que todas las asignaturas *dentro del conjunto de "todosLosCodigosDeAsignaturas"*
            // (que ya excluye MVET208, MVET299, ELECT116, ELECT112) estén aprobadas.
            for (const otherCodigo of todosLosCodigosDeAsignaturas) {
                if (!estaAprobada(otherCodigo)) {
                    allOthersCovered = false;
                    break;
                }
            }
            if (!allOthersCovered) {
                todosCumplidos = false;
                break;
            }
        } else {
            // Requisito normal: debe estar aprobado
            if (!estaAprobada(prereq)) {
                todosCumplidos = false;
                break;
            }
        }
    }

    return todosCumplidos;
}


// Función para renderizar la malla y actualizar estados
function renderizarMalla() {
    console.log("Iniciando renderización de la malla...");
    const mallaContainer = document.getElementById('malla');
    mallaContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar

    // Recopilar todos los semestres en un array plano
    const allSemestres = [];
    for (const year in mallaCurricular) {
        // Ordenar los semestres dentro de cada año numéricamente
        const semestresOrdenadosDentroDelAño = Object.keys(mallaCurricular[year]).sort((a, b) => {
            const numA = parseInt(a.match(/\d+/)[0]);
            const numB = parseInt(b.match(/\d+/)[0]);
            return numA - numB;
        });

        for (const semestreKey of semestresOrdenadosDentroDelAño) {
            allSemestres.push({
                key: semestreKey,
                asignaturas: mallaCurricular[year][semestreKey]
            });
        }
    }

    // Ordenar globalmente los semestres del 1 al 10
    allSemestres.sort((a, b) => {
        const numA = parseInt(a.key.match(/\d+/)[0]);
        const numB = parseInt(b.key.match(/\d+/)[0]);
        return numA - numB;
    });

    // Crear un contenedor único para todos los semestres
    const globalSemestresContainer = document.createElement('div');
    globalSemestresContainer.classList.add('global-semestres-container'); // Nueva clase para styling si es necesario

    allSemestres.forEach(semestreData => {
        const semestreDiv = document.createElement('div');
        semestreDiv.classList.add('semestre');

        const semestreTitulo = document.createElement('h3');
        // Usar el nombre ordinal del semestre
        const semestreNumberMatch = semestreData.key.match(/\d+/);
        if (semestreNumberMatch) {
            semestreTitulo.textContent = getOrdinalSemestreName(parseInt(semestreNumberMatch[0]));
        } else {
            semestreTitulo.textContent = semestreData.key;
        }

        semestreDiv.appendChild(semestreTitulo);

        semestreData.asignaturas.forEach(asignatura => {
            const asignaturaDiv = document.createElement('div');
            asignaturaDiv.classList.add('asignatura');
            asignaturaDiv.classList.add(`tipo-${asignatura.tipo}`);
            asignaturaDiv.dataset.codigo = asignatura.codigo;

            const nombreSpan = document.createElement('span');
            nombreSpan.classList.add('asignatura-nombre');
            nombreSpan.textContent = asignatura.nombre;

            const codigoSpan = document.createElement('span');
            codigoSpan.classList.add('asignatura-codigo');
            codigoSpan.textContent = `${asignatura.codigo}`;

            asignaturaDiv.appendChild(nombreSpan);
            asignaturaDiv.appendChild(codigoSpan);

            // === Lógica de asignación de clases para el renderizado ===
            if (estaAprobada(asignatura.codigo)) {
                asignaturaDiv.classList.add('aprobada');
                // Si la asignatura está aprobada Y tachada, aplica el estilo de tachado
                if (asignaturasTachadasPermanentemente[asignatura.codigo]) {
                    asignaturaDiv.classList.add('deseleccionada-aprobada');
                }
            } else {
                // Si NO está aprobada, pero sus prerrequisitos están cumplidos, es 'desbloqueada'
                if (prerrequisitosCumplidos(asignatura)) {
                    asignaturaDiv.classList.add('desbloqueado');
                }
                // Si no está aprobada Y sus prerrequisitos NO están cumplidos, no se añade 'aprobada' ni 'desbloqueado',
                // por lo que permanecerá con los estilos de la clase base y la regla :not(.aprobada):not(.desbloqueado) (gris/plomo).
            }
            // === FIN Lógica de asignación de clases ===

            asignaturaDiv.addEventListener('click', () => {
                const clickedAsignatura = todasLasAsignaturasMap.get(asignaturaDiv.dataset.codigo);
                if (!clickedAsignatura) return;

                // === NUEVA LÓGICA DE CLIC ===
                // Si la asignatura está marcada como aprobada (lo que en este flujo significa 'menta+tachado')
                if (estaAprobada(clickedAsignatura.codigo)) {
                    // Desaprobamos y destachamos completamente (vuelve a plomo)
                    console.log(`Clic en asignatura aprobada y tachada: ${clickedAsignatura.codigo} -> Desaprobando y destachando.`);
                    delete asignaturasAprobadas[clickedAsignatura.codigo];
                    delete asignaturasTachadasPermanentemente[clickedAsignatura.codigo];
                }
                // Si la asignatura NO está aprobada, pero sus prerrequisitos están cumplidos (está 'desbloqueada', color 'menta')
                else if (prerrequisitosCumplidos(clickedAsignatura)) {
                    // La aprobamos Y la tachamos inmediatamente (primer clic = tachado)
                    console.log(`Clic en asignatura desbloqueada: ${clickedAsignatura.codigo} -> Aprobando y tachando.`);
                    asignaturasAprobadas[clickedAsignatura.codigo] = true;
                    asignaturasTachadasPermanentemente[clickedAsignatura.codigo] = true;
                }
                // Si no está aprobada y sus prerrequisitos NO están cumplidos, no hace nada (sigue 'plomo').
                else {
                    console.log(`Asignatura ${clickedAsignatura.codigo} está bloqueada. No se puede clickear.`);
                }
                
                // Guardar el estado actual en localStorage (ambos objetos)
                localStorage.setItem('asignaturasAprobadas', JSON.stringify(asignaturasAprobadas));
                localStorage.setItem('asignaturasTachadasPermanentemente', JSON.stringify(asignaturasTachadasPermanentemente));

                // Re-renderizar la malla para actualizar los estilos y la visibilidad
                renderizarMalla();
                // === FIN NUEVA LÓGICA DE CLIC ===
            });

            semestreDiv.appendChild(asignaturaDiv);
        });
        globalSemestresContainer.appendChild(semestreDiv);
    });

    mallaContainer.appendChild(globalSemestresContainer);
    console.log("Renderización de la malla finalizada.");
}

// Las siguientes funciones 'marcarComoAprobada', 'toggleTachadoAprobada' y 'desmarcarAsignatura'
// ya NO son llamadas directamente desde 'clickAsignatura' con la nueva lógica.
// Se mantienen en el código por si las necesitas para otras funcionalidades
// o para futuras expansiones. Si no, podrías eliminarlas.

// Función para marcar una asignatura como aprobada (YA NO USADA EN CLICK)
function marcarComoAprobada(codigoAsignatura) {
    if (!estaAprobada(codigoAsignatura)) {
        console.log(`[Antiguo uso] Marcando ${codigoAsignatura} como aprobada...`);
        asignaturasAprobadas[codigoAsignatura] = true;
        localStorage.setItem('asignaturasAprobadas', JSON.stringify(asignaturasAprobadas));
        renderizarMalla();
        console.log(`[Antiguo uso] Asignatura ${codigoAsignatura} aprobada y malla re-renderizada.`);
    }
}

// Función para alternar el estado "tachado" de una asignatura aprobada (YA NO USADA EN CLICK)
function toggleTachadoAprobada(codigoAsignatura) {
    if (!estaAprobada(codigoAsignatura)) {
        console.warn(`[Antiguo uso] Intento de alternar tachado en asignatura no aprobada: ${codigoAsignatura}`);
        return;
    }

    if (asignaturasTachadasPermanentemente[codigoAsignatura]) {
        console.log(`[Antiguo uso] Des-tachando ${codigoAsignatura}.`);
        delete asignaturasTachadasPermanentemente[codigoAsignatura];
    } else {
        console.log(`[Antiguo uso] Tachando ${codigoAsignatura}.`);
        asignaturasTachadasPermanentemente[codigoAsignatura] = true;
    }
    localStorage.setItem('asignaturasTachadasPermanentemente', JSON.stringify(asignaturasTachadasPermanentemente));
    renderizarMalla();
}

// Función para desmarcar una asignatura (YA NO USADA EN CLICK)
function desmarcarAsignatura(codigoAsignatura) {
    if (estaAprobada(codigoAsignatura)) {
        console.log(`[Antiguo uso] Desmarcando ${codigoAsignatura}...`);
        delete asignaturasAprobadas[codigoAsignatura];
        if (asignaturasTachadasPermanentemente[codigoAsignatura]) {
            delete asignaturasTachadasPermanentemente[codigoAsignatura];
            localStorage.setItem('asignaturasTachadasPermanentemente', JSON.stringify(asignaturasTachadasPermanentemente));
        }
        localStorage.setItem('asignaturasAprobadas', JSON.stringify(asignaturasAprobadas));
        renderizarMalla();
        console.log(`[Antiguo uso] Asignatura ${codigoAsignatura} desmarcada y malla re-renderizada.`);
    }
}


// --- Lógica de inicialización ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente cargado. Iniciando script.");

    // Cargar asignaturas aprobadas desde localStorage
    const savedAprobadas = localStorage.getItem('asignaturasAprobadas');
    if (savedAprobadas) {
        try {
            Object.assign(asignaturasAprobadas, JSON.parse(savedAprobadas));
            console.log("Asignaturas aprobadas cargadas de localStorage:", asignaturasAprobadas);
        } catch (e) {
            console.error("Error al cargar asignaturas aprobadas de localStorage:", e);
            localStorage.removeItem('asignaturasAprobadas');
        }
    }

    // Cargar asignaturas tachadas permanentemente desde localStorage
    const savedTachadas = localStorage.getItem('asignaturasTachadasPermanentemente');
    if (savedTachadas) {
        try {
            Object.assign(asignaturasTachadasPermanentemente, JSON.parse(savedTachadas));
            console.log("Asignaturas tachadas cargadas de localStorage:", asignaturasTachadasPermanentemente);
        } catch (e) {
            console.error("Error al cargar asignaturas tachadas de localStorage:", e);
            localStorage.removeItem('asignaturasTachadasPermanentemente');
        }
    }

    inicializarAsignaturasYSemestres();
    renderizarMalla();
});


// Opcional: Funcionalidad para resetear el progreso (para pruebas)
function resetearProgreso() {
    if (confirm("¿Estás seguro de que quieres resetear todo tu progreso?")) {
        console.log("Reseteando progreso...");
        localStorage.removeItem('asignaturasAprobadas');
        localStorage.removeItem('asignaturasTachadasPermanentemente');
        for (const key in asignaturasAprobadas) {
            if (asignaturasAprobadas.hasOwnProperty(key)) {
                delete asignaturasAprobadas[key];
            }
        }
        for (const key in asignaturasTachadasPermanentemente) {
            if (asignaturasTachadasPermanentemente.hasOwnProperty(key)) {
                delete asignaturasTachadasPermanentemente[key];
            }
        }
        renderizarMalla();
        alert("Progreso reseteado.");
        console.log("Progreso reseteado y malla re-renderizada.");
    }
}
