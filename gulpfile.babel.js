'use strict';

import gulp         from 'gulp';
import babel        from 'gulp-babel';
import imagemin     from 'gulp-imagemin';
import mjml         from 'gulp-mjml';
import newer        from 'gulp-newer';
import browserSync  from 'browser-sync';
import del          from 'del';


// Simple config: just set up paths for everything
const basePaths = {
  src: './src/',
  dist: './dist/',
};

const paths = {
  html: {
    src: basePaths.src + '*.mjml',
  },
  images: {
    src: basePaths.src + 'img/*',
    dist: basePaths.dist + 'img/'
  }
};


//
// `generateHtml` function:
// Transform the MJML files using `gulp-mjml` into HTML files
// Waiting for the process to be `done` before reloading the browsers
//
export const generateHtml = (done) => {
  gulp.src(paths.html.src)
    .pipe(mjml())
    .pipe(gulp.dest(basePaths.dist));
    browserSync.reload();
    done();
};


//
// `images` function:
// Get all the new images (gulp-newer), compress them through imagemin,
// throw them in the `dist` folder & then inject them with BrowserSync
//
export const images = (done) => {
  gulp.src(paths.images.src)
    .pipe(newer(paths.images.dist))
    .pipe(imagemin({
      verbose: true
    }))
    .pipe(gulp.dest(paths.images.dist))
    .pipe(browserSync.stream())
    done();
}


//
// `watch` function:
// Start a BrowserSync server on the `dist` folder which will listen
// to the changes on html & images generated
//
export const watch = () => {
  browserSync.init({
    server: basePaths.dist
  })
  gulp.watch(paths.html.src, generateHtml);
  gulp.watch(paths.images.src, images);
};


// Simple clean task, deleting the `dist` folder
gulp.task('clean', () =>
  del([ basePaths.dist ])
);


// Default task: clean `dist/` folder & then run generateHtml & images tasks
gulp.task('default', gulp.series('clean', gulp.parallel(generateHtml, images)));


// Watch task: refering to the `watch` function - see above
gulp.task('watch', watch);
