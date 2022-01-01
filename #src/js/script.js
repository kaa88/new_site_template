// Hello World!


// Some modules use this variable to check mobile or desktop view. Make sure it matches with CSS.
const mobileSwitchWidth = 768

///////////////////////////////////////////////////////////////////////////////////////////

// Recounter (checks window resizing and runs funcs on breakpoints)
@@include('t/recounter.js')
recounter.init({
	breakpoints: {
		568: () => {},
		768: () => {
			header.menu.toggle();
			header.hidingHeader.calc();
			// header.submenu.updateEvents();
		}, 
		1228: () => {}
	}
})

///////////////////////////////////////////////////////////////////////////////////////////

/* Transition lock (prevents double-clicking on transitions, e.g. when menu slides)
	Simple use from other module:
	if (transitionLock.check( #timeout# )) return;
*/
@@include('t/trans_lock.js')

///////////////////////////////////////////////////////////////////////////////////////////

/* Scroll lock (prevents window scrolling with menu, modals etc.)
	Use: 
		scrollLock.lock()
		scrollLock.unlock( #timeout# )
*/
@@include('t/scroll_lock.js')
scrollLock.init()

///////////////////////////////////////////////////////////////////////////////////////////

/* Header
	Set transition timeout in CSS only
	Params {obj}:
	- menu - add menu block (default = true)
	- submenu - add submenu block (default = true)
	- hidingHeader - add hidingHeader block (default = true)
*/
@@include('t/header.js')
header.init({
	submenu: false,
	hidingHeader: true
})

///////////////////////////////////////////////////////////////////////////////////////////

/* Modal window
	Set transition timeout in CSS only
	Params {obj}: 
	- elem - element name (default = 'modal'),
	- linkName - modal link name (default = 'modal-link')
	- on: {'modal-window': {open, close}} - event function(event, content, timeout){}
*/
// @ @include('t/modal.js')
// modal.init({
// 	on: {
		// 'modal-contact': {
		// 	close: function(event, content, timeout) {setTimeout(() => {formToEmail.clean(document.querySelector('.question-form'))}, 700)}
		// },
		// 'modal-imgpreview': {
		// 	open: function(event, content, timeout) {
		// 		let source = event.currentTarget.children[event.currentTarget.children.length-1];
		// 		let img = document.querySelector('#modal-imgpreview img');
		// 		img.src = source.getAttribute('src').replace('.','-preview.');
		// 		if (source.srcset) img.srcset = source.srcset.replace('@2x.','-preview@2x.');
		// 		else img.srcset = '';
		// 	},
		// 	close: function(event, content) {
		// 		let img = document.querySelector('#modal-imgpreview img');
		// 		setTimeout(() => {
		// 			img.src = img.srcset = '';
		// 		}, modal.timeout)
		// 	},
		// },
		// 'modal-video': {
		// 	open: function(event, content, timeout) {setTimeout(() => {videoPlayer.play(content)}, timeout)},
		// 	close: function(event, content, timeout) {videoPlayer.pause(content)}
		// }
// 	}
// })

///////////////////////////////////////////////////////////////////////////////////////////

/* Send form to email
	Params:
	1) demo mode: all checks and response messages, but disabled php (default = false)
*/
// @ @include('t/form_to_email.js')
// formToEmail.init(true);

///////////////////////////////////////////////////////////////////////////////////////////

/* Select
	Params {obj}:
	- elem - element name (default = 'select')
	- firstOptSelected (default = false)
	- onselect - event
*/
// @ @include('t/select.js')
// let form_select = new Select({
// 	elem: 'form__select', 
// 	firstOptSelected: true,
// 	onselect: (selection) => {console.log(selection)}
// })

///////////////////////////////////////////////////////////////////////////////////////////

/* Accordion (js version)
	Params:
	1) element name (default = 'accordion')
	2) isOpened (default = false)
*/
// @ @include('t/accordion_js.js')
// let accordion = new Accordion('js__accordion', true);

///////////////////////////////////////////////////////////////////////////////////////////

/* Random
	Use: getRandom(min = 0, max = 99)
*/
// @ @include('t/random.js')

///////////////////////////////////////////////////////////////////////////////////////////

/* Onload counter
	Params:
	1) goal number
	2)	timeout in seconds
	3)	result element name
*/
// @ @include('t/onload_counter.js')
// let onloadCounter1 = new OnloadCounter(51806, 1 , 'test-counter--1');
// let onloadCounter2 = new OnloadCounter(35704, 2 , 'test-counter--2');

///////////////////////////////////////////////////////////////////////////////////////////

/* Input range colored (script for input's track gradient filling)
	Params {obj}:
	- elem - element name (default = 'input-range')
	- trackColorStart - color of the left track part (default = 'var(--track-color-start)')
	- trackColorEnd - color of the right track part (default = 'var(--track-color-end)')
*/
// @ @include('t/input_range_colored.js')
// let iRangeClr = new InputRangeColored({
// 	elem: 'input-range'
// })

///////////////////////////////////////////////////////////////////////////////////////////

/* Input range (full js version, may have 2 thumbs, no vertical orientation)
	Params {obj}:
	- elem - element name (default = 'input-range-jsv')
	- start - track scale start (default = 0)
	- end - track scale end (default = 100)
	- thumbs [] - thumbs base position (default = [0])
	- bubble - enable bubble (default = false)
	- results [] - result element (no default)
*/
// @ @include('t/input_range_double.js')
// let iRangeDbl = new InputRangeDouble({
// 	elem: 'form__input-range-dbl',
// 	start: 200,
// 	end: 492,
// 	thumbs: [250, 400],
// 	bubble: true,
// 	results: ['form__ir-result1', 'form__ir-result2']
// })

///////////////////////////////////////////////////////////////////////////////////////////

/* Video player
	Params:
	1) volume (default = 70)
*/
// @ @include('t/video_player.js')
// Include "Input range colored" script if track colored progress is required.
// iRange_seek = new InputRangeColored({
// 	elem: 'video-controls__seek-bar'
// });
// iRange_volume = new InputRangeColored({
// 	elem: 'video-controls__volume-bar'
// });
// videoPlayer.init(80);

///////////////////////////////////////////////////////////////////////////////////////////

/* Swiper Customs (Swiper options, launcher & JSON functions)
	It is useful with many swipers in a project
	Settings are inside module
*/
// @ @include('t/swiper_customs.js')

///////////////////////////////////////////////////////////////////////////////////////////

/* JSON Load (loads data from .json file & returns Promise)
	Params:
	1) file path (example: 'content/news.json')
*/
// @ @include('t/json_load.js')
// jsonLoad('news.json').then((result) => console.log(result)) // example

///////////////////////////////////////////////////////////////////////////////////////////

// Module check & load (2 variants)
// document.addEventListener('DOMContentLoaded', () => {
// 	let arr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (document.querySelector(arr[i][0])) arr[i][1]();
// 	}
// })
// window.addEventListener('load', () => {
// 	let arr = [
// 		['.gridslider__slider',()=> {gridSlider.init()}],
// 		// ['.banner__swiper',()=> {swiperCustoms.initNewSwiper('.banner__swiper')}],
// 	];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (document.querySelector(arr[i][0])) arr[i][1]();
// 	}
// })

///////////////////////////////////////////////////////////////////////////////////////////

// Loadscreen
// @ @include('t/loadscreen.js')
