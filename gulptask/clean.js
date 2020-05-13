const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const size = require("gulp-size");

const clean = () =>
  gulp
    .src("kocktail.css", { allowEmpty: true })
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(
      size({
        showFiles: true,
        gzip: true,
      })
    )
    .pipe(gulp.dest("./"));

module.exports = clean;
