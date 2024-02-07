// function tarea(done) {
//     console.log('Desde la primera tarea')
//     done();
// };
// function tarea1(done) {
//     console.log('Desde la segunda tarea')
//     done();
// };

// exports.nuevatarea = tarea;
// exports.nuevatarea1 = tarea1;

//Ejemplo de como ejectuta las tareas en la terminal y sus funciones.   gulp nombredelatarea.

const {src, dest, watch, parallel} = require('gulp');  //Las llaves es una forma de extraer varias funciones.

//CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

//Imagenes

// import webp from 'gulp-webp';

const webp = require( 'gulp-webp');

function css(done) {
    
    src('src/scss/**/*.scss')  //indentificar el archivo .SCSS a compilar
        .pipe(plumber() )  //Compilarlo
        .pipe(sass() )  //Compilarlo
        .pipe( dest('build/css') ) //almacenarla en el disco duro   
    done();
}
function versionWebp( done ) {
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe( webp(opciones) )
        .pipe( dest('build/img') )
    done();
}
  
function dev(done){
    watch('src/scss/**/*.scss', css);  //Para que la terminal lo vaya ejecutando automaticamente.
    done();
}
exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp, dev); 
// exports.dev =  dev; 

