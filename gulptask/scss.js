const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const groupCSSmediaQuery = require("gulp-group-css-media-queries");

const scss = () =>
  gulp
    .src("./node_modules/@kocktail/scss/kocktail.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(groupCSSmediaQuery())
    .pipe(gulp.dest("./"));

module.exports = scss;
