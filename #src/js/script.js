// Mobile switcher (turns off menu on window resize)
let mobileSwitch = {switchWidth: 768};
@@include('t/mobile_switcher.js')
mobileSwitch.do = function() { // place functions here to run
	if (menu.element.classList.contains('_active')) menu.toggle();
}
// /

// Transition lock (prevents double-clicking, e.g. when menu slides)
@@include('t/trans_lock.js')
// /

// Scroll lock
@@include('t/scroll_lock.js')
// /

// Main menu
let menu = {timeout: 1400};
@@include('t/menu.js')
// /

// Modal window
let modal = {timeout: 800};
@@include('t/modal.js')
// /

//include('t/popup.js')
//include('t/selection.js')
//include('t/accordion_js.js')
//include('t/random.js')
//include('t/onload_counter.js')
