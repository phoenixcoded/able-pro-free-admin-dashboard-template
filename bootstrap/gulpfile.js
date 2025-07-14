var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var merge = require('merge-stream');
var babel = require('gulp-babel');
var npmlodash = require('lodash');
var smushit = require('gulp-smushit');
var autoprefixer = require('gulp-autoprefixer');
var fileinclude = require('gulp-file-include');
var browsersync = require('browser-sync');
var htmlmin = require('gulp-htmlmin');
const { parallel } = require('gulp');

// =======================================================
// ----------- START: Able Pro Theme Configuration -----------
// =======================================================

const theme_contrast = 'false'; // [ false , true ]
const caption_show = 'true'; // [ false , true ]
const preset_theme = 'preset-1'; // [ preset-1 to preset-10 ]
const theme_layout = 'vertical'; // [ vertical, horizontal, color-header, compact, tab ]
const dark_layout = 'false'; // [ false , true , default ]
const rtl_layout = 'false'; // [ false , true ]
const box_container = 'false'; // [ false , true ]
const version = 'v2.7.0';
const production_version = 'v2.7.0';

if (rtl_layout == 'true') {
  var rtlflag = 'rtl';
} else {
  var rtlflag = 'ltr';
}

if (theme_contrast == 'true') {
  var contrastflag = 'true';
} else {
  var contrastflag = '';
}

if (dark_layout == 'true') {
  var darklayoutflag = 'dark';
} else {
  var darklayoutflag = 'light';
}

const layout = {
  pc_theme_contrast: contrastflag,
  pc_caption_show: caption_show,
  pc_preset_theme: preset_theme,
  pc_theme_layout: theme_layout,
  pc_dark_layout: darklayoutflag,
  pc_rtl_layout: rtl_layout,
  pc_box_container: box_container,
  pc_theme_version: version,
  pc_production_version: production_version,
  bodySetup:
    'data-pc-preset="' +
    preset_theme +
    '" data-pc-sidebar-caption="' +
    caption_show +
    '" data-pc-layout="' +
    theme_layout +
    '" data-pc-direction="' +
    rtlflag +
    '" data-pc-theme_contrast="' +
    contrastflag +
    '" data-pc-theme="' +
    darklayoutflag +
    '"'
};

// =======================================================
// ----------- END: Able Pro Theme Configuration -----------
// =======================================================

// all paths setup
const path = {
  src: {
    html: 'src/html/**/*.html',
    css: 'src/assets/scss/*.scss',
    layoutjs: 'src/assets/js/*.js',
    pagesjs: 'src/assets/js/pages/*.js',
    images: 'src/assets/images/**/*.{jpg,png}'
  },
  destination: {
    html: 'dist',
    css: 'dist/assets/css',
    layoutjs: 'dist/assets/js',
    pagesjs: 'dist/assets/js/pages',
    images: 'dist/assets/images'
  }
};

//  [ common ] task start
//  [ browser reload ] start
gulp.task('browserSync', function () {
  browsersync.init({
    server: 'dist/',
    ghostMode: false
  });
});
//  [ browser reload ] end

gulp.task('cleandist', function (callback) {
  del.sync(['dist/*/']);
  callback();
});
//  [ common ] task end

// =======================================================
// ----------- START: Development tasks -----------
// =======================================================
//  [ scss compiler ] start
gulp.task('sass', function () {
  // main style css
  return gulp
    .src(path.src.css)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.destination.css));
});
//  [ scss compiler ] end

//  [ Copy assets ] start
gulp.task('build-node-modules', function () {
  var required_libs = {
    js: [
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/@popperjs/core/dist/umd/popper.min.js",
      "node_modules/simplebar/dist/simplebar.min.js",
      "node_modules/feather-icons/dist/feather.min.js",
      "node_modules/clipboard/dist/clipboard.min.js",
      "node_modules/apexcharts/dist/apexcharts.min.js",
    ],
    css: [
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
    ],
  };
  npmlodash(required_libs).forEach(function (assets, type) {
    if (type == 'css') {
      gulp.src(assets).pipe(gulp.dest('dist/assets/css/plugins'));
    } else {
      gulp.src(assets).pipe(gulp.dest('dist/assets/js/plugins'));
    }
  });
  var cpyassets = gulp.src(['src/assets/**/*.*', '!src/assets/scss/**/*.*']).pipe(gulp.dest('dist/assets'));
 
  return merge(cpyassets);
});
//  [ Copy assets ] end

//  [ build html ] start
gulp.task('build-html', function () {
  return gulp
    .src(path.src.html)
    .pipe(
      fileinclude({
        context: layout,
        prefix: '@@',
        basepath: '@file',
        indent: true
      })
    )
    .pipe(gulp.dest(path.destination.html));
});
//  [ build html ] end

//  [ build js ] start
gulp.task('build-js', function () {
  var layoutjs = gulp.src(path.src.layoutjs).pipe(gulp.dest(path.destination.layoutjs));

  var pagesjs = gulp.src(path.src.pagesjs).pipe(gulp.dest(path.destination.pagesjs));

  return merge(layoutjs, pagesjs);
});
//  [ build js ] end

//  [ watch ] start
gulp.task('watch', function () {
  gulp.watch('src/assets/scss/**/*.scss', gulp.series('sass')).on('change', browsersync.reload);
  gulp.watch('src/assets/js/**/*.js', gulp.series('build-js')).on('change', browsersync.reload);
  gulp.watch('src/html/**/*.html', gulp.series('build-html')).on('change', browsersync.reload);
});
//  [ watch ] start
const compile = parallel('browserSync', 'watch');
//  [ Default task ] start
gulp.task('default', gulp.series('cleandist', 'build-node-modules', 'sass', 'build-js', 'build-html', compile));
//  [ Default task ] end

// =======================================================
// ----------- END: Development tasks -----------
// =======================================================

// =======================================================
// ----------- START: Production mode tasks -----------
// =======================================================

//  [ css minify ] start
gulp.task('min-css', function () {
  // main style css
  return gulp.src(path.src.css).pipe(sass()).pipe(autoprefixer()).pipe(cssmin()).pipe(gulp.dest(path.destination.css));
});
//  [ css minify ] end

//  [ min-js ] start
gulp.task('min-js', function () {
  var layoutjs = gulp.src(path.src.layoutjs).pipe(uglify()).pipe(gulp.dest(path.destination.layoutjs));

  var pagesjs = gulp.src(path.src.pagesjs).pipe(babel()).pipe(uglify()).pipe(gulp.dest(path.destination.pagesjs));

  return merge(layoutjs, pagesjs);
});
//  [ min-js ] end

//  [ minify html ] start
gulp.task('min-html', function () {
  return gulp
    .src(path.src.html)
    .pipe(
      fileinclude({
        context: layout,
        prefix: '@@',
        basepath: '@file',
        indent: true
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true
      })
    )
    .pipe(gulp.dest(path.destination.html));
});
//  [ minify html ] end

//  [ image optimizer ] start
// Function to compress images with retry mechanism
function compressImagesWithRetry(src, dest, retries = 40) {
  return new Promise((resolve, reject) => {
    const stream = gulp
      .src(src)
      .pipe(
        smushit({
          verbose: true // Enable verbose logging for debugging
        })
      )
      .on('error', function (err) {
        console.error('Error during image compression:', err.toString());
        if (retries > 0) {
          // Retry by recursively calling the function with reduced number of retries
          compressImagesWithRetry(src, dest, retries - 1)
            .then(resolve)
            .catch(reject);
        } else {
          // No more retries left, reject the promise
          reject(new Error('Max retries exceeded. Unable to compress image.'));
        }
      });

    stream.on('end', () => resolve());
    stream.pipe(gulp.dest(dest));
  });
}
gulp.task('min-image', function () {
  return compressImagesWithRetry(path.src.images, path.destination.images);
});
//  [ image optimizer ] end

//  [ watch minify ] start
gulp.task('watch-minify', function () {
  gulp.watch('src/assets/scss/**/*.scss', gulp.series('min-css'));
  gulp.watch('src/assets/js/**/*.js', gulp.series('min-js'));
  gulp.watch('src/html/**/*.html', gulp.series('min-html'));
});
//  [ watch minify ] start

// build in production mode
gulp.task('build-prod', gulp.series('cleandist', 'build-node-modules', 'min-css', 'min-js', 'min-html'));

// =======================================================
// ----------- END: Production mode tasks -----------
// =======================================================
