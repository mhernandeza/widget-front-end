var gulp = require('gulp');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var clean = require('gulp-clean');

gulp.task('watch', function(){
	gulp.watch('./pre-less/*.less', ['less']);
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