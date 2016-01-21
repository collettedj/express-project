"use strict";

const jshint = require('gulp-jshint');
const gulp   = require('gulp');
const mocha = require('gulp-mocha');
const stylish = require('jshint-stylish');

const jshintFiles = ['*.js', 'routes/**/*.js', 'api-routes/**/*.js', 'tests/**/*.js', 'passport/**/*.js'];
const testFiles = ['tests/**/*test.js'];
 
gulp.task('lint', function() {
  return gulp.src(jshintFiles)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});


gulp.task('test', ['lint'], () => {
    return gulp.src(testFiles, {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({}));
});

gulp.task('watch', ['lint', 'test'], function() {
    gulp.watch(jshintFiles, ['test']);
}); 
