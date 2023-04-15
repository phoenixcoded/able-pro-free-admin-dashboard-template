var gulp = require("gulp"), // main
  sass = require("gulp-sass")(require("sass")), // scss compiler
  del = require('del'), // remove directory
  sourcemaps = require("gulp-sourcemaps"), // scss sourcemaps
  uglify = require("gulp-uglify"), // minify js files
  cssmin = require("gulp-cssmin"), // minify css files
  merge = require("merge-stream"), // merge two task
  babel = require("gulp-babel"), // convert next generation JavaScript, today.
  npmlodash = require("lodash"), // performing oops in gulp
  smushit = require("gulp-smushit"), // image optimizer
  autoprefixer = require("gulp-autoprefixer"), // css property autoprefixer
  cssbeautify = require("gulp-cssbeautify"), // css css beautify
  fileinclude = require("gulp-file-include"), // include html files
  browsersync = require("browser-sync"); // browser reload

//  [ scss compiler ] start
gulp.task("sass", function () {
  // main style css
  return gulp
    .src("src/assets/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/assets/css"));
});
//  [ scss compiler ] end

//  [ Copy assets ] start
gulp.task("build", function () {
  var required_libs = {
    js: [
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/@popperjs/core/dist/umd/popper.min.js",
      "node_modules/apexcharts/dist/apexcharts.min.js",
      "node_modules/simplebar/dist/simplebar.min.js",
      "node_modules/feather-icons/dist/feather.min.js",
      "node_modules/clipboard/dist/clipboard.min.js",
    ],
    css: [
      "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
  };
  npmlodash(required_libs).forEach(function (assets, type) {
    if (type == "css") {
      gulp.src(assets).pipe(gulp.dest("dist/assets/css/plugins"));
    } else {
      gulp.src(assets).pipe(gulp.dest("dist/assets/js/plugins"));
    }
  });
  var copyAssets = gulp
    .src(["src/assets/**/*.*", "!src/assets/scss/**/*.*"])
    .pipe(gulp.dest("dist/assets"));
  return merge(copyAssets);
});

//  [ Copy assets ] end

//  [ build html ] start
gulp.task("build-html", function () {
  return gulp
    .src("src/html/**/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
        indent: true,
      })
    )
    .pipe(gulp.dest("dist"));
});
//  [ build html ] end

//  [ build js ] start
gulp.task("build-js", function () {
  var layoutjs = gulp
    .src("src/assets/js/*.js")
    .pipe(gulp.dest("dist/assets/js"));

  var pagesjs = gulp
    .src("src/assets/js/pages/*.js")
    .pipe(gulp.dest("dist/assets/js/pages"));

  return merge(layoutjs, pagesjs);
});
//  [ build js ] end

//  [ scss compiler ] start
gulp.task("mincss", function () {
  // main style css
  return gulp
    .src("src/assets/scss/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssbeautify())
    .pipe(gulp.dest("dist/assets/css"))
    .pipe(cssmin())
    .pipe(gulp.dest("dist/assets/css"));
});
//  [ scss compiler ] end

//  [ uglify js ] start
gulp.task("uglify", function () {
  var layoutjs = gulp
    .src("src/assets/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/assets/js"));

  var pagesjs = gulp
    .src("src/assets/js/pages/*.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest("dist/assets/js/pages"));

  return merge(layoutjs, pagesjs);
});
//  [ uglify js ] end

//  [ image optimizer ] start
gulp.task("imgmin", function () {
  return gulp
    .src("src/assets/img/**/*.{jpg,png}")
    .pipe(smushit())
    .pipe(gulp.dest("dist/assets/img"));
});
//  [ image optimizer ] end

//  [ browser reload ] start
gulp.task("browserSync", function () {
  browsersync.init({
    server: "dist/",
  });
});
//  [ browser reload ] end

gulp.task("cleandist", function (callback) {
  del.sync(["dist/*/"]);
  callback();
});

//  [ watch ] start
gulp.task("watch", function () {
  gulp
    .watch("src/assets/scss/**/*.scss", gulp.series("sass"))
    .on("change", browsersync.reload);
  gulp
    .watch("src/assets/js/**/*.js", gulp.series("build-js"))
    .on("change", browsersync.reload);
  gulp
    .watch("src/html/**/*.html", gulp.series("build-html"))
    .on("change", browsersync.reload);
  });
//  [ watch ] start
const compile = gulp.parallel("browserSync", "watch");

//  [ Default task ] start
gulp.task(
  "default",
  gulp.series("cleandist", "build", "sass", "build-js", "build-html", "imgmin", compile)
);
//  [ Default task ] end

// build in production mode
gulp.task(
  "build-prod",
  gulp.series("cleandist", "build", "sass", "build-js", "build-html", "imgmin")
);
