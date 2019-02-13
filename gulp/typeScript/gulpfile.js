const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

gulp.task('default', () => {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(concat('codigo.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'))
})