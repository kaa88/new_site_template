// Mobile switcher (turns off menu on window resize)
let mobileSwitchWidth = 768;
@@include('t/mobile_switcher.js')
mobileSwitch.do = function() { // place functions here to run
	if (headerMenu.element.classList.contains('_active')) headerMenu.toggle();
	hidingHeader.init();
}
// /

// Transition lock (prevents double-clicking, e.g. when menu slides)
@@include('t/trans_lock.js')
// /

// Scroll lock
@@include('t/scroll_lock.js')
// /

// Main menu
let headerMenu = {timeout: 500};
let hidingHeader = {hiddenPosition: -100};
@@include('t/header.js')
// /

// Modal window
let modal = {timeout: 800};
@@include('t/modal.js')
// /

// Send mail
@@include('t/form_to_email.js')
// /

// Select
// Params: 1) element name (default = 'select'), 2) chooseFirstOpt (default = true)
@@include('t/select.js')
let select = new Select('form__select', false);
// /

// Accordion (js version)
// Params: 1) element name (default = 'accordion'), 2) isOpened (default = false)
@@include('t/accordion_js.js')
let accordion = new Accordion('js__accordion', true);
// /

// Random
@@include('t/random.js')
// /

// Onload counter
@@include('t/onload_counter.js')
// /

// Input range simple (script for input's track gradient filling)
// Params: {}
// - elemName - element name (default = 'input-range')
// - trackColorStart - color of the left track part (default = 'var(--track-color-start)')
// - trackColorEnd - color of the right track part (default = 'var(--track-color-end)')
@@include('t/input_range.js')
iRange_simple = new InputRange({
	elemName: 'input-range'
});
// /

// Input range (full js version, may have 2 thumbs, no vertical orientation)
// Params: {}
// - elem - element name (default = 'input-range-jsv')
//	- start - track scale start (default = 0)
// - end - track scale end (default = 100)
// - thumbs [] - thumbs base position (default = [0])
// - bubble - enable bubble (default = false)
// - results [] - result element (no default)
@@include('t/input_range_jsv.js')
let iRangeJSV = new InputRangeJsv({
	elem: 'form__input-range-jsv',
	start: 200,
	end: 492,
	thumbs: [250, 400],
	bubble: true,
	results: ['form__ir-result1', 'form__ir-result2']
});
// /

// Swiper
// const swiper = new Swiper('.swiper', {
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev'
// 	},
//		spaceBetween: 50,
// 	loop: true,
// 	loopAdditionalSlides: 4,
// 	speed: 800,
// 	effect: 'cube',
// 	cubeEffect: {
// 		shadow: false,
// 		slideShadows: false,
// 	},
// 	autoplay: {
// 		delay: 4000,
// 		disableOnInteraction: false,
// 		pauseOnMouseEnter: true
// 	},
// 	breakpoints: {
// 		600: {
// 			slidesPerView: 'auto'
// 		}
// 	}
// });
// /

// Video player
@@include('t/video_player.js')
// Include "Input range simple" script if track colored progress is required.
// iRange_seek = new InputRange({
// 	elemName: 'video-controls__seek-bar'
// });
// iRange_volume = new InputRange({
// 	elemName: 'video-controls__volume-bar'
// });
// /

// Popup
//include('t/popup.js')
// /
