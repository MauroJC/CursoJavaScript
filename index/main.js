// Array para guardar las reservas
let reservas = [];

// Función para agregar reservas
function agregarReserva() {
    let nombre;

    do {
        nombre = prompt("Ingrese el nombre del cliente para la reserva (escriba 'fin' para terminar)");

        if (nombre !== null && nombre !== "fin") {
            reservas.push(nombre);
            alert("Reserva a nombre de: " + nombre);
        }

    } while (nombre !== null && nombre !== "fin");

    // Aca muestro las reservas en consola
    console.log("Reservas confirmadas:", reservas);

    // Consulta si quiere ver cantidad de mesas
    let verCantidad = confirm("¿Quiere ver cuántas mesas fueron reservadas?");
    if (verCantidad) {
        alert("Total de mesas reservadas: " + reservas.length);
        console.log("Total de mesas reservadas:", reservas.length);
    }
}

// Llamar a la funcion principal

agregarReserva();