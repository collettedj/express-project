"use strict";

const jshint = require('gulp-jshint');
const gulp   = require('gulp');
const stylish = require('jshint-stylish');

const jshintFiles = ['*.js', 'routes/**/*.js', 'api-routes/**/*.js', 'tests/**/*.js', 'passport/**/*.js'];
 
gulp.task('lint', function() {
  return gulp.src(jshintFiles)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('watch', function() {
    gulp.watch(jshintFiles, ["lint"]);
}); 
