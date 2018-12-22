const gulp = require('gulp')
/* const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const htmlmin = require('gulp-htmlmin') */
const util = require('gulp-util')
// const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    if(util.env.production){
        // sequence('deps', 'app')
        gulp.start('deps', 'app')
    } else {
        // sequence('deps', 'app', 'servidor')
        gulp.start('deps', 'app', 'servidor')
    }
})
