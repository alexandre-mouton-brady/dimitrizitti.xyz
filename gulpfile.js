'use strict';

var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return gulp.src('./style/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./style/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./style/**/*.scss', ['sass']);
});

gulp.task('css', function () {
  var processors = [
    autoprefixer({browsers: ['last 1 version']}),
    cssnano(),
  ];
  return gulp.src('./style/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./style/dist'));
});

gulp.task('default', ['sass:watch']);
