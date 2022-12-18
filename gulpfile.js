var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var fs = require('fs');
var merge = require('merge2');
var removeLines = require('gulp-rm-lines');
var uglify = require('gulp-uglify');

var tppDataProject = ts.createProject('data/tsconfig.json');
var pokedexProject = ts.createProject('data/Pokedex/tsconfig.json');
var pokeStylesProject = ts.createProject('poke-styles/tsconfig.json');
var tppDisplayProject = ts.createProject('display/tsconfig.json');
var tppTransformsProject = ts.createProject('transforms/tsconfig.json');
var tppProgressProject = ts.createProject('tsconfig.json');

gulp.task('build-progress', function () {
    var tsResult = tppProgressProject.src().pipe(tppProgressProject())
    return tsResult.js.pipe(uglify()).pipe(gulp.dest("bin/"));
});

gulp.task('build-transforms', function () {
    var tsResult = tppTransformsProject.src().pipe(tppTransformsProject())
    return merge(
        tsResult.js.pipe(uglify()).pipe(gulp.dest("./transforms/")),
        tsResult.dts.pipe(gulp.dest("./ref/"))
    );
});

gulp.task('build-display', gulp.series("build-transforms", function () {
    var tsResult = tppDisplayProject.src().pipe(tppDisplayProject())
    return merge(
        tsResult.js.pipe(uglify()).pipe(gulp.dest("./display/")),
        tsResult.dts.pipe(gulp.dest("./ref/"))
    );
}));

gulp.task('compile-data', function () {
    var tsResult = tppDataProject.src().pipe(tppDataProject())
    return merge(
        tsResult.js.pipe(gulp.dest("bin/data/")),
        tsResult.dts.pipe(gulp.dest("ref/"))
    );
});
gulp.task('process-data', gulp.series('compile-data', function (callback) {
    var tppData = require('./bin/data/tpp-data.js').tppData;
    setTimeout(function () {
        var tppDataString = JSON.stringify(tppData);
        var tppDataOut = "var tppData = " + tppDataString + ';';
        fs.writeFile("./bin/tpp-data.json", tppDataString, () => fs.writeFile("./bin/tpp-data.js", tppDataOut, callback));
    }, 1);
}));

gulp.task('compile-pokedex', function () {
    var tsResult = pokedexProject.src().pipe(pokedexProject())
    return merge(
        tsResult.js.pipe(gulp.dest("bin/data/Pokedex")),
        tsResult.dts.pipe(gulp.dest("bin/data/Pokedex"))
    );
});
gulp.task('process-pokedex', gulp.series('compile-pokedex', function (callback) {
    var pokedex = require('./bin/data/Pokedex/pokedex-data.js').Pokedex;
    setTimeout(function () {
        var pokedexString = JSON.stringify(pokedex);
        var pokedexOut = "var Pokedex = " + pokedexString + ';';
        fs.writeFile("./bin/pokedex-data.json", pokedexString, () => fs.writeFile("./bin/pokedex-data.js", pokedexOut, callback));
    }, 1);
}));

gulp.task('compile-poke-styles', function () {
    var tsResult = pokeStylesProject.src().pipe(pokeStylesProject())
    return merge(
        tsResult.js.pipe(gulp.dest("bin/poke-styles/")),
        tsResult.dts.pipe(gulp.dest("bin/poke-styles/"))
    );
});
gulp.task('process-poke-styles', gulp.series('compile-poke-styles', function (callback) {
    var styles = require('./bin/poke-styles/poke-styles.js').pokeStyles;
    setTimeout(function () {
        fs.writeFile("./css/pokemon.css", styles.join("\n").trim(), callback);
    }, 1);
}));
gulp.task('clean-up-poke-styles', gulp.series('process-poke-styles', function () {
    return del('bin/poke-styles');
}));

gulp.task('move-definition-files', gulp.series('compile-pokedex', function () {
    return merge(
        gulp.src('bin/data/Pokedex/pokedex-data.d.ts').pipe(removeLines({ 'filters': [/declare var exports: any;/] })).pipe(gulp.dest('ref/')),
        //gulp.src('transforms/tpp-transforms.d.ts').pipe(gulp.dest('ref/'))
    );
}));

gulp.task('clean-up-data', gulp.series('process-data', 'process-pokedex', 'clean-up-poke-styles', 'move-definition-files', function () {
    del('transforms/tpp-transforms.d.ts');
    return del('bin/data');
}));

gulp.task('build-data-tests', function () {
    var tests = ts.createProject('data/tests/tsconfig.json', { outFile: 'tpp-data-tests.js' });
    return tests.src()
        .pipe(sourcemaps.init())
        .pipe(tests())
        .js
        .pipe(sourcemaps.write('./data/tests', { sourceRoot: '', includeContent: false }))
        .pipe(gulp.dest('./data/tests/'));
});
gulp.task('test-data', gulp.series('build-data-tests', function (callback) {
    const tests = require('./data/tests/tpp-data-tests.js').tests;
    setTimeout(function() {
        tests();
        callback();   
    }, 10);
}));
gulp.task('clean-data-tests', gulp.series('test-data', function () {
    return del('./data/tests/tpp-data-tests.*');
}));

gulp.task('build-transform-tests', function () {
    var tests = ts.createProject('transforms/tests/tsconfig.json', { outFile: 'tpp-transform-tests.js' });
    return tests.src()
        .pipe(sourcemaps.init())
        .pipe(tests())
        .js
        .pipe(sourcemaps.write('./transforms/tests/', { sourceRoot: '', includeContent: false }))
        .pipe(gulp.dest('./transforms/tests/'));
});

var mocha = require('gulp-mocha');
gulp.task('test-transforms', gulp.series('build-transform-tests', function () {
    return gulp.src('./transforms/tests/tpp-transform-tests.js', { read: false })
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha());
}));

gulp.task('clean-transform-tests', gulp.series('test-transforms', function () {
    return del('./transforms/tests/tpp-transform-tests.*');
}));

gulp.task('build-data', gulp.series('clean-up-data'));

gulp.task('build', gulp.series('build-data', 'build-display', 'build-transforms', 'build-progress'));
gulp.task('test', gulp.series('clean-data-tests'/*, 'clean-transform-tests'*/));
