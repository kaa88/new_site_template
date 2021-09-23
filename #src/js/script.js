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
let headerMenu = {timeout: 400};
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

// Input range
// Params: {}
// - elem - element name (default = 'input-range')
//	- start - track scale start (default = 0)
// - end - track scale end (default = 100)
// - thumbs [] - thumbs base position (default = [0])
// - bubble - enable bubble (default = false)
// - results [] - result element (no default)
@@include('t/input_range.js')
let iRange1 = new InputRange({
	elem: 'elem1__input-range',
	start: 20,
	end: 200,
	thumbs: 100,
	results: 'elem1__ir-result'
});
let iRange2 = new InputRange({
	elem: 'form__input-range',
	start: 200,
	end: 492,
	thumbs: [250, 400],
	bubble: true,
	results: ['form__ir-result1', 'form__ir-result2']
});
// /

// Popup
//include('t/popup.js')
// /
