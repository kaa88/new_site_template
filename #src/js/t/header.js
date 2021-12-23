headerMenu.element = document.querySelector('.menu__container');
headerMenu.buttons = document.querySelectorAll('.menu-open-btn, .menu-close-btn, .menu-turn-off-area');
headerMenu.init = function() {
	let newMenu = document.getElementsByClassName('menu__items')[0];
	let options = headerMenuOptions;
	if (options.links) {
		let clone = {};
		for (let i = 0; i < newMenu.children.length; i++) {
			clone[newMenu.children[i].dataset.name] = newMenu.children[i];
		}
		newMenu.innerHTML = '';
		for (let i = 0; i < options.links.length; i++) {
			newMenu.appendChild(clone[options.links[i]]);
		}
	}
	if (options.activeLink) {
		for (let i = 0; i < newMenu.children.length; i++) {
			if (newMenu.children[i].dataset.name == options.activeLink) {
				newMenu.children[i].firstElementChild.classList.add('this-page');
				break;
			}
		}
	}
	options.elem = document.querySelector('#headerMenuOptions');
	options.elem.parentElement.removeChild(options.elem);
}
headerMenu.toggle = function() {
	let o = headerMenu;
	if (transitionLock.check(o.timeout)) return;
	
	if (o.element.classList.contains('_active')) {
		o.element.classList.remove('_active');
		for (let i = 0; i < o.buttons.length; i++) {
			o.buttons[i].classList.remove('_active');
		}
		scrollLock.unlock(o.element, o.timeout);
	}
	else {
		o.element.classList.add('_active');
		for (let i = 0; i < o.buttons.length; i++) {
			o.buttons[i].classList.add('_active');
		}
		scrollLock.lock(o.element);
		hidingHeader.scroll(0, true);
	}
	
	//new
	if (submenu.list.classList.contains('_visible')) {
		submenu.link.classList.remove('_active');
		submenu.list.classList.remove('_visible');
	}
}
for (let i = 0; i < headerMenu.buttons.length; i++) {
	headerMenu.buttons[i].addEventListener('click', headerMenu.toggle);
}
headerMenu.init();

// Hiding header
let hidingHeader = {elem: document.querySelector('.header')};
hidingHeader.visiblePosition = Number(getComputedStyle(hidingHeader.elem).top.slice(0,-2));
hidingHeader.hiddenPosition = hidingHeader.elem.offsetHeight * -1;

hidingHeader.scroll = function(e, click) {
	if (window.innerWidth > mobileSwitchWidth) return;
	let o = hidingHeader;
	if (click) {
		o.elem.style.top = o.visiblePosition + 'px';
		o.currentPos = o.visiblePosition;
		return;
	}
	// lazyLoadFix check
	if ((pageYOffset < (o.Y + o.diff) && o.Y > o.YPrev) || (pageYOffset > (o.Y + o.diff) && o.Y < o.YPrev)) {
		o.diff = pageYOffset - o.Y;
	}
	o.YPrev = o.Y;
	o.Y = pageYOffset - o.diff;
	o.currentPos -= o.Y - o.YPrev;
	if (o.currentPos > o.visiblePosition) o.currentPos = o.visiblePosition;
	if (o.currentPos < o.hiddenPosition) o.currentPos = o.hiddenPosition;
	o.elem.style.top = o.currentPos + 'px';
}
hidingHeader.init = function() {
	let o = hidingHeader;
	o.Y = o.YPrev = pageYOffset;
	o.diff = 0;
	o.currentPos = o.visiblePosition;
	o.elem.style.top = o.currentPos + 'px';
	window.addEventListener('scroll', hidingHeader.scroll);
}
window.addEventListener('load', hidingHeader.init);

// SubMenu
// let submenu = {
// 	link: document.querySelector('._drop-link'),
// 	list: document.querySelector('.menu__dropdown'),
// 	backButton: document.querySelector('.menu-back-btn'),
// 	header: document.querySelector('.header')
// }
// submenu.open = function(e) {
// 	e.preventDefault();
// 	submenu.link.classList.add('_active');
// 	submenu.list.classList.add('_visible');
// }
// submenu.close = function() {
// 	submenu.link.classList.remove('_active');
// 	submenu.list.classList.remove('_visible');
// }
// submenu.updateEvents = function() {
// 	if (window.innerWidth <= mobileSwitchWidth) {
// 		this.link.removeEventListener('mouseover', this.open);
// 		this.header.removeEventListener('mouseleave', this.close);
// 		this.link.addEventListener('click', this.open);
// 	}
// 	else {
// 		this.link.addEventListener('mouseover', this.open);
// 		this.header.addEventListener('mouseleave', this.close);
// 		this.link.removeEventListener('click', this.open);
// 	}
// }
// submenu.backButton.addEventListener('click', submenu.close);
// submenu.updateEvents();
// /
