const gulp = require('gulp')

module.exports = function video() {
  return gulp.src('src/video/*')
    .pipe(gulp.dest('build/video'))
}


