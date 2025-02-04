import gulp from 'gulp';
const { src, dest, parallel, series, watch } = gulp;
import autoprefixer from 'autoprefixer';
import concat from 'gulp-concat';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import browserSync from 'browser-sync';
import cleancss from 'gulp-clean-css';
import fileinclude from 'gulp-file-include';
import postcss from 'gulp-postcss';

function styles() {
	return gulp
	.src(['scss/ui-kit.scss', 'scss/theme/theme.scss'])
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(cleancss( { level: { 1: { specialComments: 0 } } } ))
	.pipe(concat('vybir-theme.min.css'))
	.pipe(gulp.dest('dist/css/'))
	.pipe(browserSync.stream())

}

function scripts() {
	return gulp
	.src([ // Берем файлы из источников
		'dist/js/init/*.js', // Пользовательские скрипты
		'!dist/js/plugins/*.js'
		])
	.pipe(concat('main.js')) // Конкатенируем в один файл
	.pipe(gulp.dest('dist/js/')) // Выгружаем готовый файл в папку назначения
	.pipe(browserSync.stream()) // Триггерим Browsersync для обновления страницы
}

async function includeHTML(){
	return gulp.src([
		'html/*.html',
		])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(dest('dist/'))
		.pipe(browserSync.stream())
}

function browsersync() {
	browserSync.init({ // Инициализация Browsersync
		server: { baseDir: 'dist/' }, // Указываем папку сервера
		port: 1111,
		host: '0.0.0.0',
		notify: false, // Отключаем уведомления
		online: true // Режим работы: true или false
	})
}

function startwatch() {
	// Выбираем все файлы JS в проекте, а затем исключим с суффиксом .min.js
	gulp.watch(['dist/js/**/*.js', '!dist/js/main.js'], series(scripts)).on('change', browserSync.reload);
	// Мониторим файлы препроцессора на изменения
	gulp.watch(['scss/**/*.scss'], series(styles)).on('change', browserSync.reload);
	// Мониторим файлы HTML на изменения
	gulp.watch(['html/**/*.html'], series(includeHTML)).on('change', browserSync.reload);
	// Мониторим папку-источник изображений, если есть изменения
	gulp.watch(['dist/img/src/**/*'], series(browserSync.reload));
}

const _default = parallel(includeHTML, styles, scripts, browsersync, startwatch)
export { _default as default };