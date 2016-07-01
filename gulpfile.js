// mini faq
// for Production version:    ==>  compress/minify css/js files
// terminal> 'NODE_ENV=production gulp'
// Development version is used as default


var gulp         = require('gulp'),
    jade         = require('gulp-jade'),
    browserify   = require('gulp-browserify'),
    uglify       = require('gulp-uglify'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename       = require('gulp-rename'),
    clean        = require('gulp-clean'),

    connect      = require('gulp-connect'),
    gulpif       = require('gulp-if');

var env = process.env.NODE_ENV || 'development'; // if we do not specify explicitly a value, then it defaults to the development
var outputDir = 'builds/development';



/////////////////////////////////
/////  On ERROR function    /////
/////////////////////////////////
function errorLog(err){
  console.log(err.message);
  this.emit('end');
}



gulp.task('jade', function() {
  return gulp.src([
    '!src/templates/partials/cheatsheet.jade', // ignore this file
    '!src/templates/partials/config.jade', // ignore this file
    '!src/templates/partials/docwrapper.jade', // ignore this file
    'src/templates/**/*.jade'
  ])     // выборка files from glob
        .pipe(jade( { pretty: true } ))                             // push this^^^ query to jade pluguin
        .on('error', errorLog)
        .pipe(gulp.dest(outputDir))            // take every compiled html file and pipe it to an output folder
        .pipe(connect.reload());
});




gulp.task('js', function() {
    return gulp.src('src/js/main.js')     // here we specify main js file as an entry point
        .pipe(browserify({ debug: env === 'development' })) // we pass the entry point on to the browserify plug. //2// include the source maps only if we're i a dev environment
        .pipe(gulpif(env === 'production', uglify())) // if our environment is production, only then uglify it
        // debug: true --- this way browserify include sourcemaps with the compiled js
        // now we just have to specify an output folder
        .pipe(gulpif(env === 'production', rename({suffix:'.min'})))
        .on('error', errorLog)
        .pipe(gulp.dest(outputDir + '/js'))
        .pipe(connect.reload());
});




gulp.task('sass', function() {
    var config = {};

    if (env === 'development') {
        config.sourceComments = 'map';
    }

    if (env === 'production') {
        config.outputStyle = 'compressed';
    }


    return gulp.src('src/sass/main.scss')
        .pipe(sass(config).on('error', sass.logError))
        // .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
          browsers: [
            'last 2 versions',
            '>1%',
            'ie 8'
          ],
          remove: false
        }))
        .pipe(gulpif(env === 'production', rename({suffix:'.min'})))
        .pipe(gulp.dest(outputDir + '/css'))
        .pipe(connect.reload());
});




gulp.task('copyFonts', function() {
  return gulp.src('src/files/fonts/**/*.{ttf,woff,woff2,eot,svg}')
    .pipe(gulp.dest(outputDir + '/fonts'));
});




gulp.task('removeImages', function() {
    return gulp.src(outputDir + '/img/**/*.*')
      .pipe(clean( {read: false} ));
});




gulp.task('copyImages', ['removeImages'], function() {
  return gulp.src('src/files/img/**/*.{png,svg,jpg,ico}')
    .pipe(gulp.dest(outputDir + '/img'));
});
// first willremove old imgs, then copy new ones: https://github.com/gulpjs/gulp/issues/67




gulp.task('watch', function() {
    gulp.watch('src/templates/**/*.jade', ['jade']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/files/img/**/*.{png,svg,jpg,ico}', ['copyImages']);
    gulp.watch('bower.json', ['libs']);
});




gulp.task('connect', function() {
    connect.server({
        root: [outputDir],
        port: 8888,
        livereload: true
    });
});



gulp.task('default', ['connect', 'js', 'jade', 'sass', 'copyFonts', 'copyImages', 'watch']);
// we can run the task we just created by typing 'gulp jade' into our terminal
