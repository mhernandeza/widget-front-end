var gulp = require('gulp');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var clean = require('gulp-clean');

var SRC = './pre-less/*.less';
var DEST = './app/css/*.css';

gulp.task('changed', function(){
	return gulp.src(SRC)
		.pipe(plumber())
		.pipe(changed(DEST))
		.pipe(gulp.dest(DEST));
});

gulp.task('watch', function(){
	gulp.watch(SRC, ['less']);
});

gulp.task('less', function() {
	gulp.src('./pre-less/*.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(gulp.dest('app/css'));
});

gulp.task('clean', function(){
	gulp.src('app/css/*.css')
		.pipe(clean());
});

gulp.task('default', ['clean', 'less', 'watch']);