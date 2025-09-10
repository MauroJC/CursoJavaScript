// 1. Cargar reservas desde localStorage o iniciar vacío
let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

// 2. Capturar elementos del DOM
const formReserva = document.getElementById("formReserva");
const nombreCliente = document.getElementById("nombreCliente");
const cantidadPersonas = document.getElementById("cantidadPersonas");
const listaReservas = document.getElementById("listaReservas");
const contadorMesas = document.getElementById("contadorMesas");

// 3. Función para mostrar reservas
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

// 4. Función para agregar reserva
function agregarReserva(e) {
    e.preventDefault();

    const nombre = nombreCliente.value.trim();
    const cantidad = parseInt(cantidadPersonas.value);

    if (nombre !== "" && cantidad > 0) {
        // Guardamos un objeto en el array
        reservas.push({ nombre: nombre, cantidad: cantidad });

        // Guardamos en localStorage
        localStorage.setItem("reservas", JSON.stringify(reservas));

        // Limpiar inputs
        nombreCliente.value = "";
        cantidadPersonas.value = "";

        mostrarReservas();
    }
}

// 5. Evento submit
formReserva.addEventListener("submit", agregarReserva);

// 6. Mostrar reservas al cargar la página
mostrarReservas();