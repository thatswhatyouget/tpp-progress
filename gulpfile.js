var gulp = require('gulp');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');
var del = require('del');
var fs = require('fs');

var tppDataProject = ts.createProject('data/tsconfig.json');
var tppProgressProject = ts.createProject('tsconfig.json');

gulp.task('build', ['build-data', 'build-progress']);

gulp.task('build-data', function (callback) {
    runSequence('compile-data', 'process-data', 'clean-up-data', callback);
});
gulp.task('build-progress', function () {
    var tsResult = tppProgressProject.src().pipe(tppProgressProject())
    return tsResult.js.pipe(gulp.dest("bin/"));
});

gulp.task('compile-data', function () {
    var tsResult = tppDataProject.src().pipe(tppDataProject())
    return tsResult.js.pipe(gulp.dest("bin/"));
});
gulp.task('process-data', function (callback) {
    var tppData = require('./bin/data/tpp-data.js').tppData;
    setTimeout(function () {
        var tppDataString = JSON.stringify(tppData);
        var tppDataOut = "var tppData = " + tppDataString + ';';
        fs.writeFile("./bin/tpp-data.json", tppDataString, callback);
        fs.writeFile("./bin/tpp-data.js", tppDataOut, callback);
    }, 1);
});
gulp.task('clean-up-data', function () {
    return del('bin/data');
});