const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

// exports.default = () => (
//   gulp.src('src/images/*')
//       .pipe(imagemin([
//         imagemin.gifsicle({interlaced: true}),
//         imagemin.mozjpeg({quality: 75, progressive: true}),
//         imagemin.optipng({optimizationLevel: 5}),
//         imagemin.svgo({
//             plugins: [
//                 {removeViewBox: true},
//                 {cleanupIDs: false}
//             ]
//         })
//     ]))
//       .pipe(gulp.dest('build/img'))
// );

module.exports = function imageMinify() {
  return gulp.src('src/img/*.{gif,png,jpg,svg,webp}')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(gulp.dest('build/img'))
}
