let project_folder = 'dist';
let source_folder = '#src';
let path = {
	build: {
		html: project_folder + '/',
		css: project_folder + '/css/',
		js: project_folder + '/js/',
		img: project_folder + '/img/',
		fonts: project_folder + '/fonts/'
	},
	src: {
		html: [source_folder + '/*.html', '!' + source_folder + '/_*.html', '!' + source_folder + '/#*.html'],
		scss: source_folder + '/css/style.scss',
		css: source_folder + '/css/*.css', // для всяких файлов библиотек
		js: source_folder + '/js/*.js', // всё кроме папки t
		img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
		fonts: source_folder + '/fonts/*.ttf'
	},
	watch: {
		html: source_folder + '/**/*.html',
		scss: source_folder + '/css/**/*.scss',
		js: source_folder + '/js/**/*.js',
		img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
		fonts: source_folder + '/fonts/'
	},
	clean: './' + project_folder + '/'
}

let {src, dest} = require('gulp'),
	gulp = require('gulp'),
	browsersync = require('browser-sync').create(),
	fileinclude = require('gulp-file-include'),
	del = require('del'),
	scss = require('gulp-sass')(require('sass')),
	autoprefixer = require('gulp-autoprefixer'),
	// imagemin = require('gulp-imagemin'), // замена на tiny.png
	ttf2woff = require('gulp-ttf2woff'),
	ttf2woff2 = require('gulp-ttf2woff2');

function clean() {
	return del(path.clean);
}
function html() {
	return src(path.src.html) // ввод
		.pipe(fileinclude()) // действие
		.pipe(dest(path.build.html)) // вывод
		.pipe(browsersync.stream()); // обновление
}
function css() {
	src(path.src.css)
		.pipe(dest(path.build.css));
	return src(path.src.scss)
		.pipe(scss({
			outputStyle: 'expanded'
		}))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 5 versions'],
			cascade: true
		}))
		.pipe(dest(path.build.css))
		.pipe(browsersync.stream());
}
function js() {
	return src(path.src.js)
		.pipe(fileinclude())
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream());
}
function images() {
	return src(path.src.img)
		// .pipe(imagemin({
		// 	progressive: true,
		// 	svgoPlugins: [{ removeVievBox: false }],
		// 	interlaced: true,
		// 	optimizationLevel: 3 // 0 - 7
		// }))
		.pipe(dest(path.build.img))
		.pipe(browsersync.stream());
}
function fonts() {
	src(path.src.fonts)
		.pipe(dest(path.build.fonts));
	src(path.src.fonts)
		.pipe(ttf2woff())
		.pipe(dest(path.build.fonts));
	return src(path.src.fonts)
		.pipe(ttf2woff2())
		.pipe(dest(path.build.fonts));
}

function watchFiles() {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.scss], css);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.img], images);
	gulp.watch([path.watch.fonts], fonts);
}
function browserSync() {
	setTimeout(function(){ // чтобы не зависал при загрузке
		browsersync.init({
			server: {
				baseDir: './' + project_folder + '/'
			},
			port: 3000,
			notify: false
		})
	},3000)
}

let build = gulp.series(clean, gulp.parallel(html, css, js, images, fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;