const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

gulp.task('default', ['copiarHTML'], () => {
     gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat("estilo.min.css"))
        .pipe(gulp.dest('build/css'))
})

gulp.task('copiarHTML', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})