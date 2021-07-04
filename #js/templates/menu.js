// Top Menu
var menu = document.querySelector('.menu');
var menuBurger = document.querySelector('.header__menu-burger');
menuBurger.addEventListener('click', toggleMenu);

function toggleMenu() {
	menuBurger.classList.toggle('_active');
	menu.classList.toggle('_active');
	scrollLock();
}
// /

// Scroll Lock
var scrollbarWidth = window.innerWidth - document.body.offsetWidth;
var lock = false;
var lockerObj = {
	body: {
		elem: document.body,
		basepad: Number(getComputedStyle(document.body).paddingRight.slice(0,-2))
	},
	header: {
		elem: document.querySelector('.header'),
		basepad: Number(getComputedStyle(document.querySelector('.header')).paddingRight.slice(0,-2))
	},
	search: {
		elem: document.querySelector('.header__search-input-box'),
		basepad: Number(getComputedStyle(document.querySelector('.header__search-input-box')).paddingRight.slice(0,-2))
	},
	menu: {
		elem: document.querySelector('.menu'),
		basepad: Number(getComputedStyle(document.querySelector('.menu')).paddingRight.slice(0,-2))
	},
};

function scrollLock() {
	// this code prevents adding a padding to search-bar if it's not necessary
	if (getComputedStyle(lockerObj.search.elem).position == 'fixed')
		var applyPaddingToSearchElem = true;
	else
		var applyPaddingToSearchElem = false;
	// /

	if (lock == false) {
		for (var x in lockerObj) {
			if (x == 'search' && applyPaddingToSearchElem == false) continue; // and this
			lockerObj[x].elem.style.paddingRight = lockerObj[x].basepad + scrollbarWidth + 'px';
		}
		lockerObj.body.elem.classList.add('_locked');
		lock = true;
	}
	else {
		for (var x in lockerObj) {
			lockerObj[x].elem.style.paddingRight = lockerObj[x].basepad + 'px';
		}
		lockerObj.body.elem.classList.remove('_locked');
		lock = false;
	}
}
// /
