// Mobile switcher (turns off menu on window resize)
let mobileSwitchWidth = 768;
@@include('t/mobile_switcher.js')
mobileSwitch.do = function() { // place functions here to run
	if (menu.element.classList.contains('_active')) menu.toggle();
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

//include('t/popup.js')
//include('t/select.js')
//include('t/accordion_js.js')
//include('t/random.js')
//include('t/onload_counter.js')
