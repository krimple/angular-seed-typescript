var gulp = require('gulp');
var ts = require('gulp-typescript');
var tinylr;


// in order for project-based gulp-typescript to work, you MUST create the project 
// outside of a task...
var tsProject = ts.createProject('tsconfig.json');

gulp.task('setup', function(done) {
    gulp.src([
        'node_modules/angular2/bundles/js',
        'node_modules/angular2/bundles/angular2.*.js*',
        'node_modules/angular2/bundles/http.*.js*',
        'node_modules/angular2/bundles/router.*.js*',
        'node_modules/es6-shim/es6-shim.js*',
        'node_modules/systemjs/dist/*.*'
    ]).pipe(gulp.dest('web/lib'));
    
    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css'
    ]).pipe(gulp.dest('web/css'));
});

gulp.task('assets', function() {
     gulp.src(['./src/**/*.json', './src/**/*.html', './src/**/*.css'])
            .pipe(gulp.dest('./web'));
     
});

gulp.task('ts', function(done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src([
        "node_modules/angular2/bundles/typings/es6-shim/es6-shim.d.ts",
        "node_modules/angular2/bundles/typings/angular2/angular2.d.ts",
        "node_modules/angular2/bundles/typings/angular2/http.d.ts",
        "node_modules/angular2/bundles/typings/angular2/router.d.ts",
        "node_modules/rx/ts/rx.d.ts", 
        "src/**/*.ts"])
                    .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('web/js'));
});

gulp.task('watch', ['watch.assets', 'watch.ts', 'watch.web']);

gulp.task('watch.assets', ['assets'], function() {
   return gulp.watch(['./src/**/*.json', './src/**/*.html', './src/**/*.css'], ['assets']) 
});

gulp.task('watch.ts', ['ts'], function() {
    return gulp.watch('src/**/*.ts', ['ts']);
});

// see https://community.nitrous.io/tutorials/setting-up-gulp-with-livereload-sass-and-other-tasks

function notifyLiveReload(event) {
    console.log('live reload on', event);
    var fileName= require('path').relative(__dirname + '/web', event.path);
    console.log('file name is', fileName);
    tinylr.changed({
        body: {
            files: [fileName]
        }
    });
}

gulp.task('watch.web', function() {
    gulp.watch('web/**', notifyLiveReload);
});


gulp.task('express', function() {
    var express = require('express');
    var app = express();
    app.use(require('connect-livereload')({port:4002}));
    app.use(express.static(__dirname + '/web'));
    app.listen(4000, '0.0.0.0');
});

gulp.task('livereload', function() {
    tinylr = require('tiny-lr')();
    tinylr.listen(35729);
});

gulp.task('default', ['express', 'livereload', 'watch']);