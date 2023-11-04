window.onload = crearTabla;

function crearTabla() {
    let tabla = document.getElementById("Tabla");
    for (let i = 0; i < 100; i++) {
        let fila = tabla.insertRow(i);
        for (let j = 0; j < 100; j++) {
            let celda = fila.insertCell(j);
            celda.classList.add("celda");
            celda.addEventListener('mousemove', (event) => {
                if (event.shiftKey) {
                    celda.style.backgroundColor = "blue";
                }
                if (event.ctrlKey) {
                    celda.style.backgroundColor = "red";
                }
                if (event.altKey) {
                    celda.style.backgroundColor = "white";
                }
            });
        }
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === "Space") {
            let celdas = document.getElementsByClassName("celda");
            for (let celda of celdas) {
                celda.style.backgroundColor = "white";
            }
        }
    });
}
