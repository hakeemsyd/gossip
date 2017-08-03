var gulp = require('gulp');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');

// Grab settings from tsconfig.json
var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', function () {
    return gulp.src('./bin', { read: false })
        .pipe(clean());
});

gulp.task('build', ['assets'], function () {
    var tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('bin'));
});

gulp.task('assets', ['clean'], function () {
    gulp.src("./app/images/**.*")
        .pipe(gulp.dest('bin/app/images/'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./**/*.ts', ['compile']);
    gulp.watch('./**/*.tsx', ['compile']);
});

gulp.task('default', ['build']);