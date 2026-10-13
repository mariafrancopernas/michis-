const gatos = [
    {
        nombre: 'Siamés',
        pelaje: 'Pelo Corto',
        facial: 'Dolicocefálico (Cara alargada)',
        contextura: 'Esbelto / Oriental',
        energia: 'Muy Alto'
    },
    {
        nombre: 'Persa',
        pelaje: 'Pelo Largo',
        facial: 'Braquicefálico',
        contextura: 'Cobby (Robusto)',
        energia: 'Bajo'
    },
    {
        nombre: 'Sphynx (Esfinge)',
        pelaje: 'Sin Pelo',
        facial: 'Dolicocefálico (Cara alargada)',
        contextura: 'Musculoso / Estilizado',
        energia: 'Alto'
    },
    {
        nombre: 'Maine Coon',
        pelaje: 'Pelo Largo',
        facial: 'Mesocefálico',
        contextura: 'Formato Gigante',
        energia: 'Medio'
    },
    {
        nombre: 'Bengalí',
        pelaje: 'Pelo Corto',
        facial: 'Mesocefálico',
        contextura: 'Musculoso / Atlético',
        energia: 'Extremo'
    },
    {
        nombre: 'British Shorthair',
        pelaje: 'Pelo Corto Denso',
        facial: 'Mesocefálico',
        contextura: 'Cobby (Robusto)',
        energia: 'Bajo - Medio'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtener las selecciones del formulario
        const selecciones = Array.from(new FormData(formulario).values());

        if (selecciones.length === 0) {
            alert('Por favor, selecciona al menos una característica.');
            return;
        }

        let mensaje = "Resultados de la búsqueda:\n\n";
        let encontradas = 0;

        // Evaluamos cada gato
        gatos.forEach(gato => {
            let contador = 0;
            let coincidenciasGuardadas = []; // Guardará las características que coincidieron

            selecciones.forEach(opcionUsuario => {
                // Comprobamos cada propiedad y guardamos la coincidencia exacta
                if (
                    gato.pelaje === opcionUsuario ||
                    gato.facial === opcionUsuario ||
                    gato.contextura === opcionUsuario ||
                    gato.energia === opcionUsuario
                ) {
                    contador++;
                    coincidenciasGuardadas.push(opcionUsuario);
                }
            });

            // Si tiene 2 o más coincidencias, armamos el mensaje indicando los gatos y los rasgos
            if (contador >= 2) {
                mensaje += `${gato.nombre} (${contador} coincidencias):\n`;
                mensaje += `   Coincide en: ${coincidenciasGuardadas.join(', ')}\n\n`;
                encontradas++;
            }
        });

        if (encontradas === 0) {
            mensaje = "No se encontraron razas que coincidan en al menos 2 de tus preferencias.";
        }

        // Mostrar el mensaje final
        alert(mensaje);
    });
});