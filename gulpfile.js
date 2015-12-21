var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');

function build (file, watch) {
  var bundler = watchify(browserify('./src/' + file, { debug: true }).transform(babel));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source(file))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(concat('build.js'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'));
  };

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
};

function watch(source) {
  return build(source, true);
}

gulp.task('build', function() { return build('index.js'); });
gulp.task('watch', function() { return watch('index.js');   });

gulp.task('default', ['watch']);
