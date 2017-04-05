var gulp = require('gulp');

gulp.task('lib', function() {

    gulp.src([
            './node_modules/react/dist/react.js',
            './node_modules/react-dom/dist/react-dom.js'
        ])
        .pipe(gulp.dest('./lib/'));

});

