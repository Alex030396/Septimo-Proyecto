document.addEventListener('DOMContentLoaded' ,function(){
    iniciarApp();
});
function iniciarApp() {
    crearGaleria();
}
function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1; i<= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML= 
            `<source src="build/img/thumb/${i}.avif" type="iamgen/avif">
            <source src="build/img/thumb/${i}.webp" type="iamgen/webp">
            <img loading="lazy" height="300" width="200" src="build/img/thumb/${i}.jpg" alt="imagen galeria"></img>`
        ;
        imagen.onclick = function(){
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }
}
function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML= 
        `<source src="build/img/grande/${id}.avif" type="iamgen/avif">
        <source src="build/img/grande/${id}.webp" type="iamgen/webp">
        <img loading="lazy" height="300" width="200" src="build/img/grande/${id}.jpg" alt="imagen galeria"></img>`
    ;
    //Crear el overlar con la imagen
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    };
    //Boton para cerrar el Modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    };
    overlay.appendChild(cerrarModal);
    //Añadir boton HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}