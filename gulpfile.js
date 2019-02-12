const gulp = require('gulp');
const sass = require('gulp-sass');

// create style.css's task
gulp.task('default', function () {
  // check the style.scss file
  return gulp.watch('sass/style.scss', function () {
    // if there is an upload
    // get the style.scss
    return gulp.src('sass/style.scss')
      // execute compile to sass
      .pipe(sass({
        outputStyle: 'expanded'
      })
        .on('error', sass.logError))
      .pipe(gulp.dest('css'));
  });
});
