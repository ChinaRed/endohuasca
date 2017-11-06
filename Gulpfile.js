var gulp = require('gulp');
var browserSync = require('browser-Sync').create();
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
      proxy: 'localhost:9001/'
    });
    gulp.watch("./sass/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("./compartments/**/*.html").on('change', browserSync.reload);
    gulp.watch("./compartments/assets/**/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./sass/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./compartments/assets/styles"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);


// //Task for SASS-build
// gulp.task('build-css', function(){
//   gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./compartments/assets/styles'));
// });

// //Task for Watch
//   gulp.task('watch', function(){
//     gulp.watch('./sass/**/*.scss', ['build-css']);
//     gulp.watch('./assets/**/*.js');
//   });

// //Default Task
// gulp.task('default', ['watch', 'build-css']);
