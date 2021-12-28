// Hello World!


// Some modules use this variable to check mobile or desktop view. Make sure it matches with CSS.
const mobileSwitchWidth = 768


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


/* Transition lock (prevents double-clicking on transitions, e.g. when menu slides)
	Simple use from other module:
	if (transitionLock.check( #timeout# )) return;
*/
@@include('t/trans_lock.js')


/* Scroll lock (prevents window scrolling with menu, modals etc.)
	Use: 
	scrollLock.lock()
	scrollLock.unlock( #timeout# )
*/
@@include('t/scroll_lock.js')
scrollLock.init()


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


/* Modal window
	Set transition timeout in CSS only
	Params {obj}: 
	- elem - element name (default = 'modal'),
	- linkName - modal link name (default = 'modal-link')
	- on: {'modal-window': {open, close}} - events
*/
@@include('t/modal.js')
modal.init({
	on: {
		// 'modal-contact': {
		// 	close: function() {setTimeout(() => {formToEmail.clean(document.querySelector('.question-form'))}, 700)}
		// },
		// 'modal-imgpreview': {
		// 	open: function(e) {
		// 		let source = e.currentTarget.children[e.currentTarget.children.length-1];
		// 		let img = document.querySelector('#modal-imgpreview img');
		// 		img.src = source.getAttribute('src').replace('.','-preview.');
		// 		if (source.srcset) img.srcset = source.srcset.replace('@2x.','-preview@2x.');
		// 		else img.srcset = '';
		// 	},
		// 	close: function(e) {
		// 		let img = document.querySelector('#modal-imgpreview img');
		// 		setTimeout(() => {
		// 			img.src = img.srcset = '';
		// 		}, modal.timeout)
		// 	},
		// },
		// 'modal-video': {
		// 	open: function() {setTimeout(() => {videoPlayer.play(0, 'play')}, 700)},
		// 	close: function() {videoPlayer.play(0, 'pause')}
		// }
	}
})


/* Send form to email
	Params:
	1) demo - demo mode: all checks and response messages, but disabled php
*/
const formToEmail = {demo: true};
@@include('t/form_to_email.js')


/* Select
	Params:
	1) element name (default = 'select')
	2) chooseFirstOpt (default = true)
*/
@@include('t/select.js')
let form_select = new Select('form__select', false);
form_select.onselect = function(selection) {console.log(selection)};


/* Accordion (js version)
	Params:
	1) element name (default = 'accordion')
	2) isOpened (default = false)
*/
@@include('t/accordion_js.js')
let accordion = new Accordion('js__accordion', true);


/* Random
	Use: function getRandom(min = 0, max = 99)
*/
@@include('t/random.js')


/* Onload counter
	Params:
	1) goal number
	2)	timeout in seconds
	3)	result element class
*/
@@include('t/onload_counter.js')
let onloadCounter1 = new OnloadCounter(51806, 1 , '.test-counter--1');
let onloadCounter2 = new OnloadCounter(35704, 2 , '.test-counter--2');


/* Input range simple (script for input's track gradient filling)
	Params {obj}:
	- elemName - element name (default = 'input-range')
	- trackColorStart - color of the left track part (default = 'var(--track-color-start)')
	- trackColorEnd - color of the right track part (default = 'var(--track-color-end)')
*/
@@include('t/input_range.js')
let iRange_simple = new InputRange({
	elemName: 'input-range'
})


/* Input range (full js version, may have 2 thumbs, no vertical orientation)
	Params {obj}:
	- elem - element name (default = 'input-range-jsv')
	- start - track scale start (default = 0)
	- end - track scale end (default = 100)
	- thumbs [] - thumbs base position (default = [0])
	- bubble - enable bubble (default = false)
	- results [] - result element (no default)
*/
@@include('t/input_range_jsv.js')
let iRangeJSV = new InputRangeJsv({
	elem: 'form__input-range-jsv',
	start: 200,
	end: 492,
	thumbs: [250, 400],
	bubble: true,
	results: ['form__ir-result1', 'form__ir-result2']
})


// Video player
@@include('t/video_player.js')
// Include "Input range simple" script if track colored progress is required.
// iRange_seek = new InputRange({
// 	elemName: 'video-controls__seek-bar'
// });
// iRange_volume = new InputRange({
// 	elemName: 'video-controls__volume-bar'
// });


// Swiper
@@include('t/swiper.js')


// Module check & load (2 variants)
document.addEventListener('DOMContentLoaded', () => {})
window.addEventListener('load', () => {
	let arr = [
		['.gridslider__slider',()=> {gridSlider.init()}],
		// ['.banner__swiper',()=> {swiperCustoms.initNewSwiper('.banner__swiper')}],
	];
	for (let i = 0; i < arr.length; i++) {
		if (document.querySelector(arr[i][0])) arr[i][1]();
	}
})


// Loadscreen
window.addEventListener('load', () => {
	let ls = document.querySelector('.loadscreen');
	if (ls) ls.classList.remove('_visible');
})
