var postcss = require('gulp-postcss');
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');

gulp.task('css', ['copy-sass'], function() {
  var processors = [
    autoprefixer({
      browsers: ['last 2 versions']
    }),
    csswring({
      removeAllComments: true
    })
  ];
  return gulp.src('./dist/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'));
});

//Process sass
gulp.task('sass', function() {
  return sass('src/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('./dist'))

});

//Copy SCSS To Dist
gulp.task('copy-sass', ['sass'], function() {
  return gulp.src('./src/*.scss')
    .pipe(gulp.dest('./dist'));

});

// Default Task
gulp.task('default', ['css'], function() {

  gulp.watch('./dist/*.css', ['css'])
  gulp.watch('./src/*.scss', ['sass'])

});
