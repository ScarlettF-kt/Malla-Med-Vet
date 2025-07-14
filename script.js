// script.js

// Datos de la malla curricular
// 'prerequisitos': Un array de códigos de asignaturas que deben estar aprobadas antes.
// 'abre': Un array de códigos de asignaturas que esta asignatura "abre" o habilita.
// 'tipo': Para aplicar diferentes estilos de color definidos en estilos.css.
const mallaCurricular = {
    "Primer Año": {
        "1 Semestre": [
            { codigo: "BIMI030", nombre: "BIOLOGIA CELULAR", tipo: "obligatoria", abre: ["FARM101", "HIPA104", "FARM155"] },
            { codigo: "CIAN040", nombre: "ZOOLOGIA Y ECOLOGIA APLICADA", tipo: "obligatoria", abre: ["CIAN141"] },
            { codigo: "DYRE070", nombre: "EDUCACIÓN FÍSICA Y SALUD", tipo: "obligatoria" },
            { codigo: "ELECT12", nombre: "OFG 1", tipo: "electiva" },
            { codigo: "MATM003", nombre: "ELEMENTOS DE CALCULO", tipo: "obligatoria", abre: ["MEPR132"] },
            { codigo: "MVET013", nombre: "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA I", tipo: "practica", abre: ["MVET053"] },
            { codigo: "QUIM007", nombre: "QUIMICA GENERAL", tipo: "obligatoria" }
        ],
        "2 Semestre": [
            { codigo: "ANAV051", nombre: "ANATOMIA VETERINARIA", tipo: "obligatoria", abre: ["ANAV140"] },
            { codigo: "ANAV131", nombre: "EMBRIOLOGIA VETERINARIA", tipo: "obligatoria", prerequisitos: ["ANAV140"], abre: ["CIAN161"] }, // Abre junto a Morfología Aplicada
            { codigo: "ELECT13", nombre: "OFG 2", tipo: "electiva" },
            { codigo: "FARM101", nombre: "BIOQUIMICA VETERINARIA", tipo: "obligatoria", prerequisitos: ["BIMI030"], abre: ["BIMI165", "FARM151"] },
            { codigo: "HIPA104", nombre: "HISTOLOGIA", tipo: "obligatoria", prerequisitos: ["BIMI030"], abre: ["PANI142"] }, // CORRECCIÓN: Solo requiere Biología Celular
            { codigo: "MVET053", nombre: "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA II", tipo: "practica", prerequisitos: ["MVET013"] }
        ]
    },
    "Segundo Año": {
        "3 Semestre": [
            { codigo: "ANAV140", nombre: "MORFOLOGÍA VETERINARIA APLICADA", tipo: "obligatoria", prerequisitos: ["ANAV051", "ANAV131"], abre: ["CIAN161"] },
            { codigo: "BIMI165", nombre: "MICROBIOLOGÍA GENERAL", tipo: "obligatoria", prerequisitos: ["FARM101"], abre: ["MEPR235"] },
            { codigo: "CIAN141", nombre: "ZOOTECNIA", tipo: "obligatoria", prerequisitos: ["CIAN040"], abre: ["CIAN113", "CIAN243"] },
            { codigo: "FARM151", nombre: "FISIOLOGÍA VETERINARIA", tipo: "obligatoria", prerequisitos: ["FARM101"], abre: ["FARM202"] },
            { codigo: "FARM155", nombre: "INMUNOLOGÍA", tipo: "obligatoria", prerequisitos: ["BIMI030"], abre: ["PANI142"] },
            { codigo: "MEPR132", nombre: "BIOESTADISTICA", tipo: "obligatoria", prerequisitos: ["MATM003"], abre: ["CIAN240", "CIAN249"] } // Abre junto a producción de no rumiantes para Genética Pecuaria
        ],
        "4 Semestre": [
            { codigo: "CIAN113", nombre: "ETOLOGIA Y BIENESTAR ANIMAL", tipo: "obligatoria", prerequisitos: ["CIAN141"] },
            { codigo: "CIAN161", nombre: "FISIOLOGIA REPRODUCTIVA", tipo: "obligatoria", prerequisitos: ["ANAV131", "ANAV140"], abre: ["CIAN262", "CIAN233"] },
            { codigo: "CIDI023", nombre: "INGLES I", tipo: "obligatoria", abre: ["CIDI123"] },
            { codigo: "FARM202", nombre: "FISIOPATOLOGÍA VETERINARIA", tipo: "obligatoria", prerequisitos: ["FARM151", "PANI142"], abre: ["FARM211", "PANI238", "HOVE272", "PANI239"] }, // Abre junto a patología general, patología especial e inmunopatología
            { codigo: "MEPR235", nombre: "ENFERMEDADES INFECCIOSAS DE LOS ANIMALES DOMÉSTICOS", tipo: "obligatoria", prerequisitos: ["BIMI165"] },
            { codigo: "PANI142", nombre: "PATOLOGÍA GENERAL", tipo: "obligatoria", prerequisitos: ["HIPA104", "FARM155"], abre: ["PANI238", "PANI239"] }
        ]
    },
    "Tercer Año": {
        "5 Semestre": [
            { codigo: "CIAN243", nombre: "NUTRICIÓN Y ALIMENTACIÓN", tipo: "obligatoria", prerequisitos: ["CIAN141", "PANI239", "CIAN262"], abre: ["CIAN249", "MEPR200", "CIAN246"] },
            { codigo: "CIAN262", nombre: "REPRODUCCION ANIMAL I", tipo: "obligatoria", prerequisitos: ["CIAN161", "CIAN243"], abre: ["CIAN246"] },
            { codigo: "CIDI123", nombre: "INGLES II", tipo: "obligatoria", prerequisitos: ["CIDI023"], abre: ["CIDI223"] },
            { codigo: "FARM211", nombre: "FARMACOLOGIA VETERINARIA", tipo: "obligatoria", prerequisitos: ["FARM202", "PANI239"], abre: ["HOVE215", "HOVE278"] },
            { codigo: "MVET102", nombre: "PRÁCTICA BÁSICA", tipo: "practica", prerequisitos: ["TODOS-1-4-SEMESTRE", "PANI238", "MEPR200"], abre: ["MEPR209"] },
            { codigo: "PANI238", nombre: "ENFERMEDADES PARASITARIAS", tipo: "obligatoria", prerequisitos: ["FARM202", "PANI142", "MVET102", "MEPR200", "PANI239"], abre: ["PANI254", "MEPR209", "MEPR216"] },
            { codigo: "PANI239", nombre: "PATOLOGIA ESPECIAL E INMUNOPATOLOGIA", tipo: "obligatoria", prerequisitos: ["PANI142", "FARM202", "CIAN243", "FARM211", "PANI238", "MEPR200"], abre: ["MEPR200", "PANI254", "HOVE272", "HOVE278", "HOVE292", "MEPR216"] }
        ],
        "6 Semestre": [
            { codigo: "CIAN233", nombre: "REPRODUCCIÓN ANIMAL II", tipo: "obligatoria", prerequisitos: ["CIAN161"] },
            { codigo: "CIAN240", nombre: "ECONOMIA Y FUNDAMENTOS DE ADMINISTRACION PECUARIA", tipo: "obligatoria", prerequisitos: ["MEPR132", "CIAN246"], abre: ["CIAN248"] },
            { codigo: "CIAN249", nombre: "PRODUCCIÓN DE NO RUMIANTES", tipo: "obligatoria", prerequisitos: ["CIAN243", "MEPR132", "CIAN246"], abre: ["CIAN244", "CIAN235"] },
            { codigo: "CIDI223", nombre: "INGLES III", tipo: "obligatoria", prerequisitos: ["CIDI123"] },
            { codigo: "MEPR200", nombre: "EPIDEMIOLOGÍA VETERINARIA", tipo: "obligatoria", prerequisitos: ["CIAN243", "PANI239", "PANI238", "MVET102"], abre: ["MEPR209", "MEPR216"] },
            { codigo: "PANI253", nombre: "ACUICULTURA Y ENFERMEDADES DE PECES", tipo: "obligatoria" },
            { codigo: "PANI254", nombre: "ENFERMEDADES DE AVES", tipo: "obligatoria", prerequisitos: ["PANI238", "PANI239"] }
        ]
    },
    "Cuarto Año": {
        "7 Semestre": [
            { codigo: "CIAN244", nombre: "GENETICA PECUARIA", tipo: "obligatoria", prerequisitos: ["MEPR132", "CIAN249"] },
            { codigo: "CIAN246", nombre: "PRODUCCIÓN DE RUMIANTES I", tipo: "obligatoria", prerequisitos: ["CIAN243", "CIAN262", "CIAN249", "CIAN240"], abre: ["CIAN235", "CIAN248"] },
            { codigo: "ELECT100", nombre: "OPTATIVO DE ESPECIALIZACIÓN I", tipo: "electiva", prerequisitos: ["TODOS-1-6-SEMESTRE"] },
            { codigo: "HOVE215", nombre: "CIRUGÍA GENERAL Y ANESTESIOLOGÍA VETERINARIA", tipo: "obligatoria", prerequisitos: ["FARM211", "HOVE272"], abre: ["HOVE293"] },
            { codigo: "HOVE272", nombre: "EXPLORACIÓN CLINICA", tipo: "obligatoria", prerequisitos: ["FARM202", "PANI239", "HOVE215"], abre: ["HOVE279", "HOVE293"] },
            { codigo: "HOVE278", nombre: "MEDICINA INTERNA I", tipo: "obligatoria", prerequisitos: ["FARM211", "PANI239", "HOVE292", "HOVE279", "HOVE293"], abre: ["HOVE294", "HOVE295", "HOVE296"] },
            { codigo: "MEPR209", nombre: "PRÁCTICA TRANSFERENCIA TECNOLÓGICA Y SERVICIO VETERINARIO A LA SOCIEDAD", tipo: "practica", prerequisitos: ["MVET102", "PANI238", "MEPR200"] }
        ],
        "8 Semestre": [
            { codigo: "CIAN235", nombre: "PRODUCTOS ANIMALES", tipo: "obligatoria", prerequisitos: ["CIAN249", "CIAN246", "CIAN248"], abre: ["CIAN255"] },
            { codigo: "CIAN248", nombre: "PRODUCCIÓN DE RUMIANTES II", tipo: "obligatoria", prerequisitos: ["CIAN240", "CIAN246", "CIAN235"], abre: ["CIAN255"] },
            { codigo: "ELECT101", nombre: "OPTATIVO DE ESPECIALIZACIÓN II", tipo: "electiva", prerequisitos: ["TODOS-1-6-SEMESTRE"] },
            { codigo: "HOVE279", nombre: "MÉTODOS COMPLEMENTARIOS DE DIAGNÓSTICO", tipo: "obligatoria", prerequisitos: ["HOVE272", "HOVE278", "HOVE292", "HOVE293"], abre: ["HOVE294", "HOVE295", "HOVE296"] },
            { codigo: "HOVE292", nombre: "MEDICINA INTERNA II", tipo: "obligatoria", prerequisitos: ["PANI239", "HOVE278", "HOVE279", "HOVE293"], abre: ["HOVE294", "HOVE295", "HOVE296"] },
            { codigo: "HOVE293", nombre: "PATOLOGÍA QUIRÚRGICA Y CIRUGÍA ESPECIAL", tipo: "obligatoria", prerequisitos: ["HOVE215", "HOVE272", "HOVE278", "HOVE292", "HOVE279"], abre: ["HOVE294", "HOVE295", "HOVE296"] },
            { codigo: "MEPR216", nombre: "CONTROL SANITARIO E INOCUIDAD DE ALIMENTOS", tipo: "obligatoria", prerequisitos: ["PANI238", "MEPR200", "PANI239"], abre: ["MEPR210", "MVET207"] }
        ]
    },
    "Quinto Año": {
        "9 Semestre": [
            { codigo: "CIAN255", nombre: "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS", tipo: "obligatoria", prerequisitos: ["CIAN235", "CIAN248"] },
            { codigo: "ELECT112", nombre: "OPTATIVO DE PROFUNDIZACIÓN I", tipo: "electiva", prerequisitos: ["TODOS-1-8-SEMESTRE"] },
            { codigo: "HOVE294", nombre: "CLÍNICA DE RUMIANTES", tipo: "obligatoria", prerequisitos: ["HOVE278", "HOVE292", "HOVE279", "HOVE293", "HOVE295", "HOVE296"], abre: ["HOVE297"] },
            { codigo: "HOVE295", nombre: "CLÍNICA DE EQUINOS", tipo: "obligatoria", prerequisitos: ["HOVE278", "HOVE292", "HOVE279", "HOVE293", "HOVE294", "HOVE296"], abre: ["HOVE297"] },
            { codigo: "HOVE296", nombre: "CLÍNICA DE PEQUEÑOS ANIMALES", tipo: "obligatoria", prerequisitos: ["HOVE278", "HOVE292", "HOVE279", "HOVE293", "HOVE294", "HOVE295"], abre: ["HOVE297"] },
            { codigo: "MEPR210", nombre: "SALUD PÚBLICA VETERINARIA", tipo: "obligatoria", prerequisitos: ["MEPR216"] }
        ],
        "10 Semestre": [
            { codigo: "ELECT116", nombre: "OPTATIVO DE PROFUNDIZACIÓN II", tipo: "electiva", prerequisitos: ["TODOS-1-9-SEMESTRE"] },
            { codigo: "HOVE297", nombre: "INTERNADO CLÍNICO", tipo: "practica", prerequisitos: ["HOVE294", "HOVE295", "HOVE296"] },
            { codigo: "MVET207", nombre: "PRACTICA PROFESIONAL DE INSPECCION VETERINARIA DE ALIMENTOS", tipo: "practica", prerequisitos: ["MEPR216"] },
            { codigo: "MVET208", nombre: "PRÁCTICA PROFESIONAL", tipo: "practica", prerequisitos: ["TODAS-DEMAS-1-10-SEMESTRE"] },
            { codigo: "MVET299", nombre: "PROYECTO DE TÍTULO (a)", tipo: "obligatoria", prerequisitos: ["TODAS-DEMAS-1-10-SEMESTRE"] }
        ]
    }
};

// Objeto para llevar el registro de asignaturas aprobadas (se carga desde localStorage)
const asignaturasAprobadas = {};

// Mapa para acceder rápidamente a la información de todas las asignaturas por su código
const todasLasAsignaturasMap = new Map();
let todosLosCodigosDeAsignaturas = []; // Para los requisitos "TODOS-X-SEMESTRE"
let semestreIndexMap = new Map(); // Para mapear semestre a su índice global (1, 2, 3...)

// Función para inicializar el mapa de asignaturas y el índice de semestres
function inicializarAsignaturasYSemestres() {
    console.log("Inicializando asignaturas y semestres...");
    let globalSemestreCount = 0;
    for (const yearKey in mallaCurricular) {
        for (const semestreKey in mallaCurricular[yearKey]) {
            globalSemestreCount++;
            semestreIndexMap.set(semestreKey, globalSemestreCount); // Mapea "1 Semestre" -> 1, "2 Semestre" -> 2
            mallaCurricular[yearKey][semestreKey].forEach(asignatura => {
                todasLasAsignaturasMap.set(asignatura.codigo, asignatura);
                todosLosCodigosDeAsignaturas.push(asignatura.codigo);
            });
        }
    }
    console.log("Inicialización completa. Total de asignaturas:", todasLasAsignaturasMap.size);
    console.log("Mapa de semestres:", semestreIndexMap);
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
    if (estaAprobada(asignatura.codigo)) {
        return true;
    }

    // *** PUNTO CLAVE: ASIGNATURAS SIN PRERREQUISITOS EXPLÍCITOS ***
    // Si no tiene 'prerequisitos' (el array está vacío o no existe)
    // Y no tiene 'prerequisitosConjuntos' (el array está vacío o no existe),
    // entonces se considera desbloqueada por defecto.
    const tienePrerequisitosBasicos = asignatura.prerequisitos && asignatura.prerequisitos.length > 0;
    const tienePrerequisitosConjuntos = asignatura.prerequisitosConjuntos && asignatura.prerequisitosConjuntos.length > 0;

    // Si tiene prerequisitosConjuntos, esos deben evaluarse primero y ser true
    if (tienePrerequisitosConjuntos) {
        // En este diseño, prerequisitosConjuntos significa que todos los de ese array deben estar aprobados.
        // Se puede fusionar con la lógica de prerequisitos básicos si queremos una lógica más simple
        // donde todos los elementos listados en `prerequisitos` son un "AND" lógico.
        // Por ahora, asumimos que `prerequisitos` es el AND de sus elementos.
        // Si hay `prerequisitosConjuntos`, los fusionamos en `prerequisitos` para una única lista AND.
        if (!tienePrerequisitosBasicos) {
            asignatura.prerequisitos = []; // Inicializar si no existe
        }
        asignatura.prerequisitos.push(...asignatura.prerequisitosConjuntos);
        asignatura.prerequisitosConjuntos = []; // Vaciar después de fusionar
    }


    let todosBasicosCumplidos = true;
    if (tienePrerequisitosBasicos) { // Re-evaluar `tienePrerequisitosBasicos` después de posible fusión
        for (const prereq of asignatura.prerequisitos) {
            if (prereq.startsWith("TODOS-")) {
                const parts = prereq.split('-'); // ["TODOS", "1", "4", "SEMESTRE"]
                const startSemestreNum = parseInt(parts[1]);
                const endSemestreNum = parseInt(parts[2]);

                let allSemestersCovered = true;
                for (const yearKey in mallaCurricular) {
                    for (const semestreKey in mallaCurricular[yearKey]) {
                        const currentSemestreNum = semestreIndexMap.get(semestreKey);
                        if (currentSemestreNum >= startSemestreNum && currentSemestreNum <= endSemestreNum) {
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
                    // console.log(`Prerequisito 'TODOS-${startSemestreNum}-${endSemestreNum}-SEMESTRE' para ${asignatura.codigo} NO CUMPLIDO.`);
                    todosBasicosCumplidos = false;
                    break;
                }
            } else if (prereq === "TODAS-DEMAS-1-10-SEMESTRE") {
                 let allOthersCovered = true;
                 for(const otherCodigo of todosLosCodigosDeAsignaturas) {
                     // Excluir la asignatura actual y otras asignaturas especiales (e.g. proyecto de título si aplica)
                     if (otherCodigo !== asignatura.codigo && !estaAprobada(otherCodigo)) {
                         allOthersCovered = false;
                         break;
                     }
                 }
                 if (!allOthersCovered) {
                    // console.log(`Prerequisito 'TODAS-DEMAS' para ${asignatura.codigo} NO CUMPLIDO.`);
                    todosBasicosCumplidos = false;
                    break;
                 }
            } else {
                // Requisito normal: debe estar aprobado
                if (!estaAprobada(prereq)) {
                    // console.log(`Prerequisito normal ${prereq} para ${asignatura.codigo} NO CUMPLIDO.`);
                    todosBasicosCumplidos = false;
                    break;
                }
            }
        }
    }

    const cumple = todosBasicosCumplidos; // `todosConjuntosCumplidos` ya fue absorbido
    // if (cumple) {
    //     console.log(`Asignatura ${asignatura.codigo} CUMPLE todos sus prerequisitos.`);
    // } else {
    //     console.log(`Asignatura ${asignatura.codigo} NO CUMPLE todos sus prerequisitos.`);
    // }
    return cumple;
}


// Función para renderizar la malla y actualizar estados
function renderizarMalla() {
    console.log("Iniciando renderización de la malla...");
    const mallaContainer = document.getElementById('malla');
    mallaContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar

    for (const year in mallaCurricular) {
        for (const semestreKey in mallaCurricular[year]) {
            // Crear el div para el semestre
            const semestreDiv = document.createElement('div');
            semestreDiv.classList.add('semestre');

            // Crear el título del semestre (ej. "1 Semestre", "2 Semestre")
            const semestreTitulo = document.createElement('h3');
            // Usar solo el número del semestre
            const semestreNumberMatch = semestreKey.match(/\d+/); // Extrae el número
            if (semestreNumberMatch) {
                semestreTitulo.textContent = `${semestreNumberMatch[0]} Semestre`;
            } else {
                semestreTitulo.textContent = semestreKey; // Fallback si no encuentra número
            }
            
            semestreDiv.appendChild(semestreTitulo);

            // Añadir asignaturas a este semestre
            mallaCurricular[year][semestreKey].forEach(asignatura => {
                const asignaturaDiv = document.createElement('div');
                asignaturaDiv.classList.add('asignatura');
                asignaturaDiv.classList.add(`tipo-${asignatura.tipo}`); // Aplica la clase de tipo
                asignaturaDiv.dataset.codigo = asignatura.codigo; // Guardar el código para referencia
                asignaturaDiv.textContent = asignatura.nombre;

                // Verificar y aplicar estado "aprobada"
                if (estaAprobada(asignatura.codigo)) {
                    asignaturaDiv.classList.add('aprobada');
                    // console.log(`Asignatura ${asignatura.codigo} marcada como aprobada.`);
                } else {
                    // Verificar y aplicar estado "desbloqueado" si no está aprobada
                    if (prerrequisitosCumplidos(asignatura)) {
                        asignaturaDiv.classList.add('desbloqueado');
                        // console.log(`Asignatura ${asignatura.codigo} marcada como desbloqueada.`);
                    } else {
                        // console.log(`Asignatura ${asignatura.codigo} bloqueada (prerequisitos pendientes).`);
                    }
                }
                
                // Añadir el event listener para permitir marcar/desmarcar
                asignaturaDiv.addEventListener('click', () => {
                    const clickedAsignatura = todasLasAsignaturasMap.get(asignaturaDiv.dataset.codigo);
                    if (!clickedAsignatura) return;

                    if (estaAprobada(clickedAsignatura.codigo)) {
                        console.log(`Clic en asignatura aprobada: ${clickedAsignatura.codigo} -> Desmarcando.`);
                        desmarcarAsignatura(clickedAsignatura.codigo);
                    } else if (prerrequisitosCumplidos(clickedAsignatura)) {
                        console.log(`Clic en asignatura desbloqueada: ${clickedAsignatura.codigo} -> Marcando como aprobada.`);
                        marcarComoAprobada(clickedAsignatura.codigo);
                    } else {
                        console.log(`Asignatura ${clickedAsignatura.codigo} está bloqueada. No se puede clickear.`);
                    }
                });
                
                semestreDiv.appendChild(asignaturaDiv);
            });
            mallaContainer.appendChild(semestreDiv);
        }
    }
    console.log("Renderización de la malla finalizada.");
}

// Función para marcar una asignatura como aprobada
function marcarComoAprobada(codigoAsignatura) {
    if (!estaAprobada(codigoAsignatura)) { // Solo si no ha sido aprobada ya
        console.log(`Marcando ${codigoAsignatura} como aprobada...`);
        asignaturasAprobadas[codigoAsignatura] = true;
        localStorage.setItem('asignaturasAprobadas', JSON.stringify(asignaturasAprobadas));
        // Después de marcar una asignatura como aprobada, volvemos a renderizar
        // para que los estados de otras asignaturas se actualicen (desbloqueos, etc.).
        renderizarMalla();
        console.log(`Asignatura ${codigoAsignatura} aprobada y malla re-renderizada.`);
    }
}

// Función para desmarcar una asignatura
function desmarcarAsignatura(codigoAsignatura) {
    if (estaAprobada(codigoAsignatura)) {
        console.log(`Desmarcando ${codigoAsignatura}...`);
        delete asignaturasAprobadas[codigoAsignatura];
        localStorage.setItem('asignaturasAprobadas', JSON.stringify(asignaturasAprobadas));
        renderizarMalla();
        console.log(`Asignatura ${codigoAsignatura} desmarcada y malla re-renderizada.`);
    }
}


// --- Lógica de inicialización ---
// Asegura que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente cargado. Iniciando script.");
    // Cargar asignaturas aprobadas al inicio (si hay)
    const savedAprobadas = localStorage.getItem('asignaturasAprobadas');
    if (savedAprobadas) {
        try {
            Object.assign(asignaturasAprobadas, JSON.parse(savedAprobadas));
            console.log("Asignaturas aprobadas cargadas de localStorage:", asignaturasAprobadas);
        } catch (e) {
            console.error("Error al cargar asignaturas aprobadas de localStorage:", e);
            // Si hay un error, limpiar el localStorage para evitar bucles
            localStorage.removeItem('asignaturasAprobadas');
        }
    }
    
    inicializarAsignaturasYSemestres(); // Llenar los mapas antes de renderizar
    renderizarMalla();
});


// Opcional: Funcionalidad para resetear el progreso (para pruebas)
// Agrega un botón en tu HTML: <button onclick="resetearProgreso()">Resetear Progreso</button>
function resetearProgreso() {
    if (confirm("¿Estás seguro de que quieres resetear todo tu progreso?")) {
        console.log("Reseteando progreso...");
        localStorage.removeItem('asignaturasAprobadas');
        // Limpiar el objeto en memoria también
        for (const key in asignaturasAprobadas) {
            if (asignaturasAprobadas.hasOwnProperty(key)) {
                delete asignaturasAprobadas[key];
            }
        }
        renderizarMalla();
        alert("Progreso reseteado.");
        console.log("Progreso reseteado y malla re-renderizada.");
    }
}
