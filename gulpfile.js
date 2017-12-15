const gulp = require( 'gulp' );
const sass = require('gulp-sass');
const postcss = require( 'gulp-postcss' )
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// gulp.task( 'sass', () => {
//   gulp.src( 'sass/app.scss' )
//   .pipe( sass().on( 'error', sass.logError ) )
//   .pipe( gulp.dest( 'assets/css/' ) );
// });

gulp.task('minify-css', () => {
  return gulp.src('assets/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task( 'default', () => {
  gulp.watch( 'sass/*.scss', ['sass'] );
});

// ... variables

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

const autoprefixerOptions = {
  browsers: [
    "Android 2.3",
    "Android >= 4",
    "Chrome >= 20",
    "Firefox >= 24",
    "Explorer >= 8",
    "iOS >= 6",
    "Opera >= 12",
    "Safari >= 6"
  ]
};

gulp.task('sass', () => {
  return gulp
    .src('sass/*.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('assets/css/'));
});
