const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
    // .pipe(purgecss({ content: ["*.html"] })) 
    return src("colorful/**/*.scss")
        .pipe(sass())
        .pipe(dest("css"));
}

function watchTask() {
    watch(["colorful/**/*.scss",'*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
