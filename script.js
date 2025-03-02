document.addEventListener("DOMContentLoaded", function () {
    console.log("Página cargada correctamente.");

    // Función para mostrar mensaje al hacer clic en 'LEER MÁS'
    const leerMasBtn = document.querySelector("#historia a");
    leerMasBtn.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Próximamente más información sobre nuestra historia.");
    });
});
