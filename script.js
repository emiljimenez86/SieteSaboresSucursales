document.addEventListener("DOMContentLoaded", function() {
    // Cambiar color al hacer clic en una categoría
    const menuLinks = document.querySelectorAll(".menu-link");

    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            menuLinks.forEach(item => item.style.color = "white"); // Restaurar color
            this.style.color = "#ffd700"; // Cambiar color del clic
        });
    });
});

// Función para mostrar/ocultar detalles del plato
function toggleDetalle(button) {
    let detalle = button.nextElementSibling;
    detalle.style.display = detalle.style.display === "block" ? "none" : "block";
}


// Función para mostrar/ocultar el botón de WhatsApp
function toggleWhatsApp(button) {
    let whatsappInfo = button.nextElementSibling;
    whatsappInfo.style.display = whatsappInfo.style.display === "block" ? "none" : "block";
}
