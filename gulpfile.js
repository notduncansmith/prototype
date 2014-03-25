var gulp = require('gulp')
  , concat = require('gulp-concat')
  , uglify = require('gulp-uglify')
  , less = require('gulp-less')
  , minifyCSS = require('gulp-minify-css')
  , livereload = require('gulp-livereload')
  , shell = require('gulp-shell');

var paths = {
  styles: [
    './less/app.less'
  ],

  allStyles: [
    './less/*.less'
  ],

  components: [
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/bootstrap/dist/js/bootstrap.min.js',
  ],

  scripts: [
    './js/src/*.js'
  ]
};

var defaultTasks = [
  'components',
  'scripts',
  'styles',
  'watch'
];

gulp.task('styles', function () {
  return gulp.src(paths.styles)
  .pipe(less({
    paths: paths.styles
  }))
  .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function () {
  return gulp.src(paths.scripts)
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./js'));
});

gulp.task('components', function () {
  return gulp.src(paths.components)
  .pipe(concat('components.js'))
  .pipe(gulp.dest('./js'));
});

gulp.task('watch', function () {
  var server = livereload();

  gulp.watch(paths.allStyles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.components, ['components']);

  gulp.watch(['./_site/css/app.css'])
  .on('change', function (file) {
    server.changed('css/app.css');
  });
});

gulp.task('buildScripts', function () {
  var allScripts = paths.components.concat(paths.scripts);

  return gulp.src(allScripts)
  .pipe(concat('build.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./js'));
});

gulp.task('buildStyles', function () {
  return gulp.src(['./css/app.css'])
  .pipe(minifyCSS())
  .pipe(gulp.dest('./css'));
});

gulp.task('buildSite', shell.task(['echo "Building site..."', 'jekyll build']) );


gulp.task('build', ['buildStyles', 'buildScripts', 'buildSite']);
gulp.task('default', defaultTasks);
