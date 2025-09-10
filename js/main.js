// Cargar reservas
let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

// Tomar elementos del DOM
const formReserva = document.getElementById("formReserva");
const nombreCliente = document.getElementById("nombreCliente");
const cantidadPersonas = document.getElementById("cantidadPersonas");
const listaReservas = document.getElementById("listaReservas");
const contadorMesas = document.getElementById("contadorMesas");

// Función para mostrar reservas
function mostrarReservas() {
    listaReservas.innerHTML = "";
    reservas.forEach((reserva, index) => {
        const li = document.createElement("li");
        li.textContent = `Reserva ${index + 1}: ${reserva.nombre} - ${reserva.cantidad} personas`;
        listaReservas.appendChild(li);
    }); 

    // Total de mesas (cada reserva cuenta como 1 mesa)
    contadorMesas.textContent = "Total de mesas reservadas: " + reservas.length;
}

// Función agregar reserva
function agregarReserva(e) {
    e.preventDefault();

    const nombre = nombreCliente.value.trim();
    const cantidad = parseInt(cantidadPersonas.value);

    if (nombre !== "" && cantidad > 0) {
 
        reservas.push({ nombre: nombre, cantidad: cantidad });

 
        localStorage.setItem("reservas", JSON.stringify(reservas));

        // Limpiar inputs
        nombreCliente.value = "";
        cantidadPersonas.value = "";

        mostrarReservas();
    }
}


formReserva.addEventListener("submit", agregarReserva);

// Mostrar reservas al cargar la página
mostrarReservas();