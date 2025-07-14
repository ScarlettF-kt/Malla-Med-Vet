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
            { codigo: "ANAV131", nombre: "EMBRIOLOGIA VETERINARIA", tipo: "obligatoria", abre: ["CIAN161"], prerequisitosConjuntos: ["ANAV140"] }, // Abre junto a Morfología Aplicada
            { codigo: "ELECT13", nombre: "OFG 2", tipo: "electiva" },
            { codigo: "FARM101", nombre: "BIOQUIMICA VETERINARIA", tipo: "obligatoria", prerequisitos: ["BIMI030"], abre: ["BIMI165", "FARM151"] },
            { codigo: "HIPA104", nombre: "HISTOLOGIA", tipo: "obligatoria", prerequisitos: ["BIMI030"], abre: ["PANI142"], prerequisitosConjuntos: ["FARM155"] }, // Junto a Inmunología
            { codigo: "MVET053", nombre: "PRACTICA INTRODUCCION A LA MEDICINA VETERINARIA II", tipo: "practica", prerequisitos: ["MVET013"] }
        ]
    },
    "Segundo Año": {
        "3 Semestre": [
            { codigo: "ANAV140", nombre: "MORFOLOGÍA VETERINARIA APLICADA", tipo: "obligatoria", prerequisitos: ["ANAV051"], abre: ["CIAN161"], prerequisitosConjuntos: ["ANAV131"] },
            { codigo: "BIMI165", nombre: "MICROBIOLOGÍA GENERAL", tipo: "obligatoria", prerequisitos: ["FARM101"], abre: ["MEPR235"] },
            { codigo: "CIAN141", nombre: "ZOOTECNIA", tipo: "obligatoria", prerequisitos: ["CIAN040"], abre: ["CIAN113", "CIAN243"] },
            { codigo: "FARM151", nombre: "FISIOLOGÍA VETERINARIA", tipo: "obligatoria", prerequisitos: ["FARM101"], abre: ["FARM202"] },
            { codigo: "FARM155", nombre: "INMUNOLOGÍA", tipo: "obligatoria", prerequisitos: ["BIMI030"], abre: ["PANI142"], prerequisitosConjuntos: ["HIPA104"] },
            { codigo: "MEPR132", nombre: "BIOESTADISTICA", tipo: "obligatoria", prerequisitos: ["MATM003"], abre: ["CIAN240"], prerequisitosConjuntos: ["CIAN249"] } // Abre junto a producción de no rumiantes para Genética Pecuaria
        ],
        "4 Semestre": [
            { codigo: "CIAN113", nombre: "ETOLOGIA Y BIENESTAR ANIMAL", tipo: "obligatoria", prerequisitos: ["CIAN141"] },
            { codigo: "CIAN161", nombre: "FISIOLOGIA REPRODUCTIVA", tipo: "obligatoria", prerequisitos: ["ANAV131", "ANAV140"], abre: ["CIAN262", "CIAN233"] },
            { codigo: "CIDI023", nombre: "INGLES I", tipo: "obligatoria", abre: ["CIDI123"] },
            { codigo: "FARM202", nombre: "FISIOPATOLOGÍA VETERINARIA", tipo: "obligatoria", prerequisitos: ["FARM151"], abre: ["FARM211", "PANI238", "HOVE272"], prerequisitosConjuntos: ["PANI142", "PANI239"] }, // Abre junto a patología general, patología especial e inmunopatología
            { codigo: "MEPR235", nombre: "ENFERMEDADES INFECCIOSAS DE LOS ANIMALES DOMÉSTICOS", tipo: "obligatoria", prerequisitos: ["BIMI165"] },
            { codigo: "PANI142", nombre: "PATOLOGÍA GENERAL", tipo: "obligatoria", prerequisitos: ["HIPA104", "FARM155"], abre: ["PANI238", "PANI239"], prerequisitosConjuntos: ["FARM202"] } // Abre junto a fisiopatología veterinaria
        ]
    },
    "Tercer Año": {
        "5 Semestre": [
            { codigo: "CIAN243", nombre: "NUTRICIÓN Y ALIMENTACIÓN", tipo: "obligatoria", prerequisitos: ["CIAN141"], abre: ["CIAN249", "MEPR200", "CIAN246"], prerequisitosConjuntos: ["PANI239", "CIAN262"] },
            { codigo: "CIAN262", nombre: "REPRODUCCION ANIMAL I", tipo: "obligatoria", prerequisitos: ["CIAN161"], abre: ["CIAN246"], prerequisitosConjuntos: ["CIAN243"] },
            { codigo: "CIDI123", nombre: "INGLES II", tipo: "obligatoria", prerequisitos: ["CIDI023"], abre: ["CIDI223"] },
            { codigo: "FARM211", nombre: "FARMACOLOGIA VETERINARIA", tipo: "obligatoria", prerequisitos: ["FARM202"], abre: ["HOVE215", "HOVE278"], prerequisitosConjuntos: ["PANI239"] },
            { codigo: "MVET102", nombre: "PRÁCTICA BÁSICA", tipo: "practica", prerequisitos: ["TODOS-1-4-SEMESTRE"], abre: ["MEPR209"], prerequisitosConjuntos: ["PANI238", "MEPR200"] },
            { codigo: "PANI238", nombre: "ENFERMEDADES PARASITARIAS", tipo: "obligatoria", prerequisitos: ["FARM202", "PANI142"], abre: ["PANI254", "MEPR209", "MEPR216"], prerequisitosConjuntos: ["MVET102", "MEPR200", "PANI239"] },
            { codigo: "PANI239", nombre: "PATOLOGIA ESPECIAL E INMUNOPATOLOGIA", tipo: "obligatoria", prerequisitos: ["PANI142"], abre: ["MEPR200", "PANI254", "HOVE272", "HOVE278", "HOVE292", "MEPR216"], prerequisitosConjuntos: ["CIAN243", "FARM202", "FARM211", "PANI238", "MEPR200"] }
        ],
        "6 Semestre": [
            { codigo: "CIAN233", nombre: "REPRODUCCIÓN ANIMAL II", tipo: "obligatoria", prerequisitos: ["CIAN161"] },
            { codigo: "CIAN240", nombre: "ECONOMIA Y FUNDAMENTOS DE ADMINISTRACION PECUARIA", tipo: "obligatoria", prerequisitos: ["MEPR132"], abre: ["CIAN248"], prerequisitosConjuntos: ["CIAN246"] },
            { codigo: "CIAN249", nombre: "PRODUCCIÓN DE NO RUMIANTES", tipo: "obligatoria", prerequisitos: ["CIAN243"], abre: ["CIAN244", "CIAN235"], prerequisitosConjuntos: ["MEPR132", "CIAN246"] },
            { codigo: "CIDI223", nombre: "INGLES III", tipo: "obligatoria", prerequisitos: ["CIDI123"] },
            { codigo: "MEPR200", nombre: "EPIDEMIOLOGÍA VETERINARIA", tipo: "obligatoria", prerequisitos: ["CIAN243", "PANI239"], abre: ["MEPR209", "MEPR216"], prerequisitosConjuntos: ["PANI238", "MVET102"] },
            { codigo: "PANI253", nombre: "ACUICULTURA Y ENFERMEDADES DE PECES", tipo: "obligatoria" },
            { codigo: "PANI254", nombre: "ENFERMEDADES DE AVES", tipo: "obligatoria", prerequisitos: ["PANI238", "PANI239"] }
        ]
    },
    "Cuarto Año": {
        "7 Semestre": [
            { codigo: "CIAN244", nombre: "GENETICA PECUARIA", tipo: "obligatoria", prerequisitos: ["MEPR132", "CIAN249"] },
            { codigo: "CIAN246", nombre: "PRODUCCIÓN DE RUMIANTES I", tipo: "obligatoria", prerequisitos: ["CIAN243", "CIAN262"], abre: ["CIAN235", "CIAN248"], prerequisitosConjuntos: ["CIAN249", "CIAN240"] },
            { codigo: "ELECT100", nombre: "OPTATIVO DE ESPECIALIZACIÓN I", tipo: "electiva", prerequisitos: ["TODOS-1-6-SEMESTRE"] },
            { codigo: "HOVE215", nombre: "CIRUGÍA GENERAL Y ANESTESIOLOGÍA VETERINARIA", tipo: "obligatoria", prerequisitos: ["FARM211"], abre: ["HOVE293"], prerequisitosConjuntos: ["HOVE272"] },
            { codigo: "HOVE272", nombre: "EXPLORACIÓN CLINICA", tipo: "obligatoria", prerequisitos: ["FARM202", "PANI239"], abre: ["HOVE279", "HOVE293"], prerequisitosConjuntos: ["HOVE215"] },
            { codigo: "HOVE278", nombre: "MEDICINA INTERNA I", tipo: "obligatoria", prerequisitos: ["FARM211", "PANI239"], abre: ["HOVE294", "HOVE295", "HOVE296"], prerequisitosConjuntos: ["HOVE292", "HOVE279", "HOVE293"] },
            { codigo: "MEPR209", nombre: "PRÁCTICA TRANSFERENCIA TECNOLÓGICA Y SERVICIO VETERINARIO A LA SOCIEDAD", tipo: "practica", prerequisitos: ["MVET102", "PANI238", "MEPR200"] }
        ],
        "8 Semestre": [
            { codigo: "CIAN235", nombre: "PRODUCTOS ANIMALES", tipo: "obligatoria", prerequisitos: ["CIAN249", "CIAN246"], abre: ["CIAN255"], prerequisitosConjuntos: ["CIAN248"] },
            { codigo: "CIAN248", nombre: "PRODUCCIÓN DE RUMIANTES II", tipo: "obligatoria", prerequisitos: ["CIAN240", "CIAN246"], abre: ["CIAN255"], prerequisitosConjuntos: ["CIAN235"] },
            { codigo: "ELECT101", nombre: "OPTATIVO DE ESPECIALIZACIÓN II", tipo: "electiva", prerequisitos: ["TODOS-1-6-SEMESTRE"] },
            { codigo: "HOVE279", nombre: "MÉTODOS COMPLEMENTARIOS DE DIAGNÓSTICO", tipo: "obligatoria", prerequisitos: ["HOVE272"], abre: ["HOVE294", "HOVE295", "HOVE296"], prerequisitosConjuntos: ["HOVE278", "HOVE292", "HOVE293"] },
            { codigo: "HOVE292", nombre: "MEDICINA INTERNA II", tipo: "obligatoria", prerequisitos: ["PANI239"], abre: ["HOVE294", "HOVE295", "HOVE296"], prerequisitosConjuntos: ["HOVE278", "HOVE279", "HOVE293"] },
            { codigo: "HOVE293", nombre: "PATOLOGÍA QUIRÚRGICA Y CIRUGÍA ESPECIAL", tipo: "obligatoria", prerequisitos: ["HOVE215", "HOVE272"], abre: ["HOVE294", "HOVE295", "HOVE296"], prerequisitosConjuntos: ["HOVE278", "HOVE292", "HOVE279"] },
            { codigo: "MEPR216", nombre: "CONTROL SANITARIO E INOCUIDAD DE ALIMENTOS", tipo: "obligatoria", prerequisitos: ["PANI238", "MEPR200", "PANI239"], abre: ["MEPR210", "MVET207"] }
        ]
    },
    "Quinto Año": {
        "9 Semestre": [
            { codigo: "CIAN255", nombre: "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS", tipo: "obligatoria", prerequisitos: ["CIAN235", "CIAN248"] },
            { codigo: "ELECT112", nombre: "OPTATIVO DE PROFUNDIZACIÓN I", tipo: "electiva", prerequisitos: ["TODOS-1-8-SEMESTRE"] },
            { codigo: "HOVE294", nombre: "CLÍNICA DE RUMIANTES", tipo: "obligatoria", prerequisitos: ["HOVE278", "HOVE292", "HOVE279", "HOVE293"], abre: ["HOVE297"], prerequisitosConjuntos: ["HOVE295", "HOVE296"] },
            { codigo: "HOVE295", nombre: "CLÍNICA DE EQUINOS", tipo: "obligatoria", prerequisitos: ["HOVE278", "HOVE292", "HOVE279", "HOVE293"], abre: ["HOVE297"], prerequisitosConjuntos: ["HOVE294", "HOVE296"] },
            { codigo: "HOVE296", nombre: "CLÍNICA DE PEQUEÑOS ANIMALES", tipo: "obligatoria", prerequisitos: ["HOVE278", "HOVE292", "HOVE279", "HOVE293"], abre: ["HOVE297"], prerequisitosConjuntos: ["HOVE294", "HOVE295"] },
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

// Objeto para llevar el registro de asignaturas aprobadas (para futura interactividad)
const asignaturasAprobadas = {}; // Puedes cargar esto desde localStorage o una base de datos

// Función para obtener una asignatura por su código
const getAsignaturaByCodigo = (codigo) => {
    for (const yearKey in mallaCurricular) {
        for (const semestreKey in mallaCurricular[yearKey]) {
            const asignatura = mallaCurricular[yearKey][semestreKey].find(
                (a) => a.codigo === codigo
            );
            if (asignatura) return asignatura;
        }
    }
    return null;
};

// Función para renderizar la malla
function renderizarMalla() {
    const mallaContainer = document.getElementById('malla');
    mallaContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar

    for (const year in mallaCurricular) {
        for (const semestre in mallaCurricular[year]) {
            // Crear el div para el semestre
            const semestreDiv = document.createElement('div');
            semestreDiv.classList.add('semestre');

            // Crear el título del semestre
            const semestreTitulo = document.createElement('h3');
            semestreTitulo.textContent = `${year} - ${semestre}`;
            semestreDiv.appendChild(semestreTitulo);

            // Añadir asignaturas a este semestre
            mallaCurricular[year][semestre].forEach(asignatura => {
                const asignaturaDiv = document.createElement('div');
                asignaturaDiv.classList.add('asignatura');
                // Añadir clases de tipo para el CSS
                asignaturaDiv.classList.add(`tipo-${asignatura.tipo}`);
                asignaturaDiv.dataset.codigo = asignatura.codigo; // Guardar el código para referencia
                asignaturaDiv.textContent = asignatura.nombre;

                // Añadir evento click para futura funcionalidad
                asignaturaDiv.addEventListener('click', () => {
                    mostrarDetallesAsignatura(asignatura);
                });

                // Ejemplo: resaltar si está aprobada (futura funcionalidad)
                if (asignaturasAprobadas[asignatura.codigo]) {
                    asignaturaDiv.classList.add('aprobada'); // Necesitarías un estilo para .aprobada
                }

                semestreDiv.appendChild(asignaturaDiv);
            });
            mallaContainer.appendChild(semestreDiv);
        }
    }
}

// Función para mostrar detalles de la asignatura (ejemplo)
function mostrarDetallesAsignatura(asignatura) {
    let mensaje = `**${asignatura.nombre}** (${asignatura.codigo})\n`;
    mensaje += `Tipo: ${asignatura.tipo}\n`;

    if (asignatura.prerequisitos && asignatura.prerequisitos.length > 0) {
        const prereqNombres = asignatura.prerequisitos.map(p => {
            const prereqObj = getAsignaturaByCodigo(p);
            return prereqObj ? prereqObj.nombre : p;
        });
        mensaje += `Prerequisitos: ${prereqNombres.join(', ')}\n`;
    }

    if (asignatura.prerequisitosConjuntos && asignatura.prerequisitosConjuntos.length > 0) {
        const prereqConjNombres = asignatura.prerequisitosConjuntos.map(p => {
            const prereqObj = getAsignaturaByCodigo(p);
            return prereqObj ? prereqObj.nombre : p;
        });
        mensaje += `Prerequisitos (junto a): ${prereqConjNombres.join(', ')}\n`;
    }

    if (asignatura.abre && asignatura.abre.length > 0) {
        const abreNombres = asignatura.abre.map(a => {
            const abreObj = getAsignaturaByCodigo(a);
            return abreObj ? abreObj.nombre : a;
        });
        mensaje += `Habilita: ${abreNombres.join(', ')}\n`;
    }

    alert(mensaje); // Puedes reemplazar esto con un modal más elegante
}

// Iniciar la renderización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', renderizarMalla);

// --- Funcionalidades Adicionales (para el futuro) ---

// Función para marcar una asignatura como aprobada
function marcarComoAprobada(codigoAsignatura) {
    asignaturasAprobadas[codigoAsignatura] = true;
    // Guardar en localStorage para persistencia
    localStorage.setItem('asignaturasAprobadas', JSON.stringify(asignaturasAprobadas));
    renderizarMalla(); // Volver a renderizar para aplicar el estilo "aprobada"
}

// Función para verificar si una asignatura está aprobada
function estaAprobada(codigoAsignatura) {
    return asignaturasAprobadas[codigoAsignatura] === true;
}

// Función para verificar si los prerrequisitos de una asignatura están cumplidos
function prerrequisitosCumplidos(asignatura) {
    if (!asignatura.prerequisitos && !asignatura.prerequisitosConjuntos) {
        return true; // No tiene prerequisitos
    }

    let todosBasicosCumplidos = true;
    if (asignatura.prerequisitos) {
        todosBasicosCumplidos = asignatura.prerequisitos.every(prereq => estaAprobada(prereq));
    }

    let todosConjuntosCumplidos = true;
    if (asignatura.prerequisitosConjuntos) {
        todosConjuntosCumplidos = asignatura.prerequisitosConjuntos.every(prereq => estaAprobada(prereq));
    }

    // Casos especiales para "TODOS-X-Y-SEMESTRE"
    if (asignatura.prerequisitos && asignatura.prerequisitos.includes("TODOS-1-4-SEMESTRE")) {
        // Aquí necesitarías una lógica para revisar *todas* las asignaturas de esos semestres
        // Por simplicidad, esto sería más complejo de implementar directamente sin un mapeo completo de todos los códigos de asignaturas.
        // Por ahora, asumimos que se cumple.
        // En una implementación real, se iteraría sobre `mallaCurricular` para obtener todos los códigos de asignatura en ese rango de semestres y se verificarían.
    }
    if (asignatura.prerequisitos && asignatura.prerequisitos.includes("TODOS-1-6-SEMESTRE")) { /* Similar */ }
    if (asignatura.prerequisitos && asignatura.prerequisitos.includes("TODOS-1-8-SEMESTRE")) { /* Similar */ }
    if (asignatura.prerequisitos && asignatura.prerequisitos.includes("TODOS-1-9-SEMESTRE")) { /* Similar */ }
    if (asignatura.prerequisitos && asignatura.prerequisitos.includes("TODAS-DEMAS-1-10-SEMESTRE")) { /* Similar */ }


    return todosBasicosCumplidos && todosConjuntosCumplidos;
}

// Cargar asignaturas aprobadas al inicio (si hay)
document.addEventListener('DOMContentLoaded', () => {
    const savedAprobadas = localStorage.getItem('asignaturasAprobadas');
    if (savedAprobadas) {
        Object.assign(asignaturasAprobadas, JSON.parse(savedAprobadas));
    }
    renderizarMalla();
});

// Puedes agregar un botón o algún mecanismo en el HTML para llamar a `marcarComoAprobada`
// Por ejemplo:
// <button onclick="marcarComoAprobada('BIMI030')">Aprobar Biología Celular</button>
