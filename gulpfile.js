"use strict";

var gulp = require("gulp");

gulp.task("css", function() {
  return gulp.src("source/sass/style.scss")
  .pipe(gulp.dest("source/css"));
})
