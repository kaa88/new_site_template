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
		html: [source_folder + '/*.html', '!' + source_folder + '/[_#]*.html'],
		scss: source_folder + '/css/style.scss',
		css_lib: source_folder + '/css/lib/*.css',
		js: source_folder + '/js/*.js',
		js_lib: source_folder + '/js/lib/*.js',
		img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
		fonts: source_folder + '/fonts/*.ttf'
	},
	watch: {
		html: source_folder + '/**/*.html',
		scss: source_folder + '/css/**/*.scss',
		js: source_folder + '/js/**/*.js',
		img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
		fonts_otf: source_folder + '/fonts/*.otf',
		fonts_ttf: source_folder + '/fonts/*.ttf'
	},
	clean: './' + project_folder + '/'
}

let {src, dest} = require('gulp'),
	gulp = require('gulp'),
	fs = require('fs'),
	browsersync = require('browser-sync').create(),
	fileinclude = require('gulp-file-include'),
	del = require('del'),
	scss = require('gulp-sass')(require('sass')),
	autoprefixer = require('gulp-autoprefixer'),
	ttf2woff = require('gulp-ttf2woff'),
	ttf2woff2 = require('gulp-ttf2woff2'),
	fonter = require('gulp-fonter');

function cb() {}

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
	src(path.src.css_lib)
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
	src(path.src.js_lib)
		.pipe(dest(path.build.js));
	return src(path.src.js)
		.pipe(fileinclude())
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream());
}
function images() {
	return src(path.src.img)
		.pipe(dest(path.build.img))
		.pipe(browsersync.stream());
}
function otf2ttf() {
	return src([source_folder + '/fonts/*.otf'])
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(dest([source_folder + '/fonts/']));
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
function fontsStyle() {
	let file_content = fs.readFileSync(source_folder + '/css/fontscript.scss');
	if (file_content == '') {
		fs.writeFile(source_folder + '/css/fontscript.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
					let fontname = items[i].split('.');
					fontname = fontname[0];
					if (c_fontname != fontname) {
						fs.appendFile(source_folder + '/css/fontscript.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
					}
					c_fontname = fontname;
				}
			}
		})
	}
}
function watchFiles() {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.scss], css);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.img], images);
	gulp.watch([path.watch.fonts_otf], otf2ttf);
	gulp.watch([path.watch.fonts_ttf], fonts);
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

let build = gulp.series(clean, otf2ttf, gulp.parallel(html, css, js, images, fonts), fontsStyle);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fontsStyle = fontsStyle;
exports.otf2ttf = otf2ttf;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
