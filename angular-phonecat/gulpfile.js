var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');

gulp.task('default', ['develop']);

gulp.task('develop', ['sass', 'cssnano', 'scripts', 'lint', 'browser-sync']);

// gulp.task('deploy', ['miniCSS']);

gulp.task('sass', function() {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('cssnano', function() {
  return gulp.src('./app/css/app.css')
    .pipe(cssnano())
    .pipe(gulp.dest('./app/out'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('scripts', function() {
  return gulp.src('./app/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./app/dist/'))
    .pipe(reload({
      stream: true
    }));
});

// gulp.task('compress', function() {
//   return gulp.src('./app/js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('.app/dist/'));
// });

gulp.task('lint', function() {
  return gulp.src(['**/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Static server
gulp.task('browser-sync', ['sass'], function() {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });
  gulp.watch("./app/sass/**/*.scss", ['sass']);
  gulp.watch("./app/css/**/*.css", ['cssnano']);
  gulp.watch("./app/js/**/*.js", ['scripts']);
  gulp.watch("./app/partials/*.html").on('change', reload);
  // gulp.watch("./app/partials/*.html").on('change', browserSync.reload);
});
