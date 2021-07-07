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
