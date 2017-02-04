var gulp = require('gulp');
var ts = require('gulp-typescript');
var del = require('del');
var fs = require('fs');
var merge = require('merge2');
var removeLines = require('gulp-remove-lines');

var tppDataProject = ts.createProject('data/tsconfig.json');
var pokedexProject = ts.createProject('data/Pokedex/tsconfig.json');
var pokeStylesProject = ts.createProject('poke-styles/tsconfig.json');
var tppDisplayProject = ts.createProject('display/tsconfig.json');
var tppTransformsProject = ts.createProject('transforms/tsconfig.json');
var tppProgressProject = ts.createProject('tsconfig.json');

gulp.task('build', ['build-data', 'build-display', 'build-transforms', 'build-progress']);

gulp.task('test', ['clean-transform-tests']);

gulp.task('build-data', ['clean-up-data']);

gulp.task('build-progress', function () {
    var tsResult = tppProgressProject.src().pipe(tppProgressProject())
    return tsResult.js.pipe(gulp.dest("bin/"));
});
gulp.task('build-display', function () {
    var tsResult = tppDisplayProject.src().pipe(tppDisplayProject())
    return tsResult.js.pipe(gulp.dest("."));
});
gulp.task('build-transforms', function () {
    var tsResult = tppTransformsProject.src().pipe(tppTransformsProject())
    return tsResult.js.pipe(gulp.dest("."));
});

gulp.task('compile-data', function () {
    var tsResult = tppDataProject.src().pipe(tppDataProject())
    return merge(
        tsResult.js.pipe(gulp.dest("bin/")),
        tsResult.dts.pipe(gulp.dest("bin/"))
    );
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

gulp.task('compile-pokedex', function () {
    var tsResult = pokedexProject.src().pipe(pokedexProject())
    return merge(
        tsResult.js.pipe(gulp.dest("bin/")),
        tsResult.dts.pipe(gulp.dest("bin/"))
    );
});
gulp.task('process-pokedex', ['compile-pokedex'], function (callback) {
    var pokedex = require('./bin/data/Pokedex/pokedex-data.js').Pokedex;
    setTimeout(function () {
        var pokedexString = JSON.stringify(pokedex);
        var pokedexOut = "var Pokedex = " + pokedexString + ';';
        fs.writeFile("./bin/pokedex-data.json", pokedexString);
        fs.writeFile("./bin/pokedex-data.js", pokedexOut, callback);
    }, 1);
});

gulp.task('compile-poke-styles', function () {
    var tsResult = pokeStylesProject.src().pipe(pokeStylesProject())
    return merge(
        tsResult.js.pipe(gulp.dest("bin/")),
        tsResult.dts.pipe(gulp.dest("bin/"))
    );
});
gulp.task('process-poke-styles', ['compile-poke-styles'], function (callback) {
    var styles = require('./bin/poke-styles/poke-styles.js').pokeStyles;
    setTimeout(function () {
        fs.writeFile("./css/pokemon.css", styles.join("\n").trim(), callback);
    }, 1);
});
gulp.task('clean-up-poke-styles', ['process-poke-styles'], function () {
    return del('bin/poke-styles');
});

gulp.task('move-definition-files', ['compile-data', 'compile-pokedex'], function () {
    return merge(
        gulp.src('bin/data/Pokedex/pokedex-data.d.ts').pipe(removeLines({ 'filters': [/declare var exports: any;/] })).pipe(gulp.dest('ref/'))
    );
});

gulp.task('clean-up-data', ['process-data', 'process-pokedex', 'clean-up-poke-styles', 'move-definition-files'], function () {
    return del('bin/data');
});

gulp.task('build-transform-tests', function () {
    var tests = ts.createProject('transforms/tests/tsconfig.json');
    return tests.src().pipe(tests()).js.pipe(gulp.dest('.'));
});

var mocha = require('gulp-mocha');
gulp.task('test-transforms', ['build-transform-tests'], function () {
    return gulp.src('./transforms/tests/tpp-transform-tests.js', { read: false })
    // gulp-mocha needs filepaths so you can't have any plugins before it 
        .pipe(mocha());
});

gulp.task('clean-transform-tests', ['test-transforms'], function () {
    return del('./transforms/tests/tpp-transform-tests.js');
});