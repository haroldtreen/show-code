var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cssNano = require('gulp-cssnano');
var merge = require('gulp-merge');
var del = require('del');

var packageInfo = require('./package.json');

// Basic usage
gulp.task('build', function() {
    var minifiedJs = gulp.src(['src/*.js'])
    .pipe(uglify())
    .pipe(rename(`${packageInfo.name}.min.js`));

    var minifiedCss = gulp.src(['src/*.css'])
    .pipe(cssNano())
    .pipe(rename(`${packageInfo.name}.min.css`));

    return merge(minifiedJs, minifiedCss).pipe(gulp.dest('./build'));
});

gulp.task('clean', () => {
    del('build/*.js');
});

gulp.task('default', ['clean', 'build']);
