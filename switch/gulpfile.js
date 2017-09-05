var gulp = require('gulp'), // Подключаем Gulp
		sass = require('gulp-sass'); // Подключаем Sass пакет
		browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('browser-sync', ['sass'], function() {
		browserSync.init({
				server: {
						baseDir: "./"
				},
				notify: false
		});
});

gulp.task('sass', function() { // Создаем таск "sass"
	return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Берем источник
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(gulp.dest('css')) // Выгружаем результата в папку css
		.pipe(browserSync.stream());
});

gulp.task('watch', function() {
	gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
	gulp.watch('sass/*.sass').on("change", browserSync.reload);
	gulp.watch('js/*.js').on("change", browserSync.reload);
	gulp.watch('*.html').on('change', browserSync.reload);
});
 
gulp.task('default', ['browser-sync', 'watch']);