let imagen = document.getElementById('miImagen');
let contenedor = document.querySelector('.contenedor');

let movimiento = false;
let offset = {x: 0, y: 0};

imagen.addEventListener('mousedown', (e) => {
    movimiento = true;
    offset.x = e.clientX - imagen.offsetLeft;
    offset.y = e.clientY - imagen.offsetTop;
});

document.addEventListener('mousemove', (e) => {
    if (movimiento) {
        let x = e.clientX - offset.x;
        let y = e.clientY - offset.y;
        imagen.style.left = x + 'px';
        imagen.style.top = y + 'px';
    }
});
document.addEventListener('mouseup', () => {
    movimiento = false;
});