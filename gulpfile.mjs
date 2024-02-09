import pkg from 'gulp';
const { src, dest, watch, parallel } = pkg;

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import plumber from 'gulp-plumber';
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import cache from 'gulp-cache';
import avif from 'gulp-avif';

function css(done) {
    src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest('build/css'));
    done();
}
function imagenes(done) {
    const opciones = {
        optimizarionLevel: 3
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'))
    done();
}
function versionAvif(done) {
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'));
    done();
}
function versionWebp(done) {
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'));
    done();
}
function javascript(done) {
    src('src/js/**/*.js')
        .pipe(dest('build/js'))
    done();
}
function dev(done) {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);
    done();
}

export { css, javascript, versionWebp, dev, imagenes, versionAvif };
export default parallel(imagenes, versionWebp, versionAvif, javascript, dev);
