// добавить @ в начало (@prepros)

// Готовые:

// Доделать:
// prepros-append templates/input_range.js
// prepros-append templates/media_switcher.js
// prepros-append templates/onload_counter.js
// prepros-append templates/random.js
// prepros-append templates/simple_slider.js

// Main Menu
var menu = document.querySelector('.menu__container');
var menuBtn = document.querySelectorAll('.menu__menu-open-btn, .menu__menu-close-btn');
for (var i = 0; i < menuBtn.length; i++) {
	menuBtn[i].addEventListener('click', toggleMenu);
}

function toggleMenu() {
	menuBtn[0].classList.toggle('_active'); // if animated burger
	menu.classList.toggle('_active');
	lockScrollbar();
}
// /

// Popup
var popupClosingElements = document.querySelectorAll('.popup__back, .popup-content__close');
for (var i = 0; i < popupClosingElements.length; i++) {
	popupClosingElements[i].addEventListener('click', hidePopup);
}
function hidePopup() {
	var visiblePopup = document.querySelectorAll('.popup');
	for (var i = 0; i < visiblePopup.length; i++) {
		visiblePopup[i].classList.remove('_visible');
	}
	lockScrollbar();
}
function showPopup(name) {
	document.querySelector(!name ? '.popup' : ('.popup--' + type)).classList.add('_visible');
	lockScrollbar();
}
// /

// Scroll Lock
var scrollbarWidth = window.innerWidth - document.body.offsetWidth;
var scrollLock = false;
var itemsToLock = {
	body: {
		elem: document.body,
		basepad: Number(getComputedStyle(document.body).paddingRight.slice(0,-2))
	},
	menu: {
		elem: document.querySelector('.menu__container'),
		basepad: Number(getComputedStyle(document.querySelector('.menu__container')).paddingRight.slice(0,-2))
	},
	popup1: {
		elem: document.querySelector('.popup--login'),
		basepad: Number(getComputedStyle(document.querySelector('.popup--login')).paddingRight.slice(0,-2))
	},
};

function lockScrollbar() {
	if (scrollLock == false) {
		for (var x in itemsToLock) {
			itemsToLock[x].elem.style.paddingRight = itemsToLock[x].basepad + scrollbarWidth + 'px';
		}
		itemsToLock.body.elem.classList.add('_locked');
		scrollLock = true;
	}
	else {
		for (var x in itemsToLock) {
			itemsToLock[x].elem.style.paddingRight = itemsToLock[x].basepad + 'px';
		}
		itemsToLock.body.elem.classList.remove('_locked');
		scrollLock = false;
	}
}
// /
