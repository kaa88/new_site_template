// Scroll Lock
let scrollbarWidth = window.innerWidth - document.body.offsetWidth;
let scrollLock = false;
let itemsToLock = {
	body: {
		elem: document.body,
		basepad: Number(getComputedStyle(document.body).paddingRight.slice(0,-2)),
		always: true
	},
	menu: {
		elem: document.querySelector('.menu__container'),
		basepad: Number(getComputedStyle(document.querySelector('.menu__container')).paddingRight.slice(0,-2))
		always: false
	},
	popup1: {
		elem: document.querySelector('.popup--login'),
		basepad: Number(getComputedStyle(document.querySelector('.popup--login')).paddingRight.slice(0,-2))
		always: true
	},
};

function lockScrollbar() {
	if (scrollLock == false) {
		for (let x in itemsToLock) {
			if (itemsToLock[x].always == false && window.innerWidth > mobileSwitchWidth) continue; // не будет лочить на пк
			itemsToLock[x].elem.style.paddingRight = itemsToLock[x].basepad + scrollbarWidth + 'px';
		}
		itemsToLock.body.elem.classList.add('_locked');
		scrollLock = true;
	}
	else {
		for (let x in itemsToLock) {
			itemsToLock[x].elem.style.paddingRight = itemsToLock[x].basepad + 'px';
		}
		itemsToLock.body.elem.classList.remove('_locked');
		scrollLock = false;
	}
}
// /
