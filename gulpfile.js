var gulp = require('gulp');
var ts = require('gulp-typescript');
var del = require('del');
var fs = require('fs');

var tppDataProject = ts.createProject('data/tsconfig.json');
var tppDisplayProject = ts.createProject('display/tsconfig.json');
var tppProgressProject = ts.createProject('tsconfig.json');

gulp.task('build', ['build-data', 'build-display', 'build-progress']);

gulp.task('build-data', ['clean-up-data']);

gulp.task('build-progress', function () {
    var tsResult = tppProgressProject.src().pipe(tppProgressProject())
    return tsResult.js.pipe(gulp.dest("bin/"));
});
gulp.task('build-display', function () {
    var tsResult = tppDisplayProject.src().pipe(tppDisplayProject())
    return tsResult.js.pipe(gulp.dest("."));
});

gulp.task('compile-data', function () {
    var tsResult = tppDataProject.src().pipe(tppDataProject())
    return tsResult.js.pipe(gulp.dest("bin/"));
});
gulp.task('process-data', ['compile-data'], function (callback) {
    var tppData = require('./bin/data/tpp-data.js').tppData;
    setTimeout(function () {
        var tppDataString = JSON.stringify(tppData);
        var tppDataOut = "var tppData = " + tppDataString + ';';
        fs.writeFile("./bin/tpp-data.json", tppDataString);
        fs.writeFile("./bin/tpp-data.js", tppDataOut, callback);
    }, 1);
});
gulp.task('clean-up-data', ['process-data'], function () {
    return del('bin/data');
});