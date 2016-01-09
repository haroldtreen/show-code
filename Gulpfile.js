var gulp = require('gulp');
var browserify = require('gulp-browserify');

// Basic usage
gulp.task('build', function() {
    // Single entry point to browserify
    gulp.src(['src/*.js', 'lib/*.js'])
    .pipe(browserify({
        transform: ['babelify'],
        insertGlobals : true
    }))
    .pipe(gulp.dest('./build'));
});
