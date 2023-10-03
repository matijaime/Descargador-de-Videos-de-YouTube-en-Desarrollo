// Obtén el elemento del interruptor de modo oscuro y el body
const botonModoOscuro = document.getElementById("modo-oscuro-checkbox");
const body = document.body;

// Variable para rastrear el estado actual del modo (oscuro o claro)
let modoOscuro = false;

// Función para cambiar el modo oscuro
function toggleModoOscuro() {
  modoOscuro = !modoOscuro;
  body.classList.toggle("modo-oscuro", modoOscuro);
}

// Controlador de eventos para el interruptor de modo oscuro
botonModoOscuro.addEventListener("change", toggleModoOscuro);

// Función para obtener el sistema operativo del usuario
function getOperatingSystem() {
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Win")) {
    return "Windows";
  } else if (userAgent.includes("Mac")) {
    return "macOS";
  } else if (userAgent.includes("Linux")) {
    return "Linux";
  } else {
    return "Desconocido";
  }
}

// Función para descargar en sistemas operativos Windows
function descargarEnWindows(enlace, carpetaDestino) {
  alert("Descargando en Windows. Enlace: " + enlace + ", Carpeta Destino: " + carpetaDestino);
}

// Función para descargar en sistemas operativos macOS
function descargarEnMacOS(enlace, carpetaDestino) {
  alert("Descargando en macOS. Enlace: " + enlace + ", Carpeta Destino: " + carpetaDestino);
}

// Función para descargar en sistemas operativos Linux
function descargarEnLinux(enlace, carpetaDestino) {
  alert("Descargando en Linux. Enlace: " + enlace + ", Carpeta Destino: " + carpetaDestino);
}

// Obtén el elemento de la barra de progreso
const progressBar = document.querySelector(".progress");

// Controlador de eventos para el botón "Descargar"
document.getElementById("descargar").addEventListener("click", async function () {
  // ... Tu código de descarga aquí

  // Simular el progreso de descarga (esto es solo un ejemplo)
  for (let i = 0; i <= 100; i += 10) {
    await esperar(1000); // Simula una espera de 1 segundo
    progressBar.style.width = i + "%"; // Actualiza el ancho de la barra
  }
});

// Función para simular una espera (puedes ajustarla según tus necesidades)
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Controlador de eventos para el enlace "Ver Ajustes de Descarga"
document.getElementById("ver-ajustes").addEventListener("click", function (event) {
  event.preventDefault(); // Evitar que el enlace siga su URL

  // URL de la página de ajustes de descarga (puedes personalizarla)
  const urlAjustesDescarga = "/ajustes-de-descarga"; // Cambia esto por la URL deseada

  // Abre una nueva ventana o pestaña con la URL de ajustes de descarga
  window.open(urlAjustesDescarga, "_blank");
});

// Controlador de eventos para el interruptor de modo oscuro
botonModoOscuro.addEventListener("change", () => {
    // Cambiar el estado del modo
    modoOscuro = !modoOscuro;
  
    // Agregar o eliminar la clase según el estado del modo
    if (modoOscuro) {
      body.classList.add("modo-oscuro");
    } else {
      body.classList.remove("modo-oscuro");
    }
  });
  
  