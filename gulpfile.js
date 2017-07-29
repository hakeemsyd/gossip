var gulp = require('gulp');
var ts = require('gulp-typescript');

// Grab settings from tsconfig.json
var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', ['assets'], function () {
    var tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('bin'));
});

gulp.task('assets', function () {
    gulp.src("./app/images/**.*")
        .pipe(gulp.dest('bin/app/images'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./**/*.ts', ['build']);
    gulp.watch('./**/*.tsx', ['build']);
});

gulp.task('default', ['build']);