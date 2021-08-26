headerMenu.element = document.querySelector('.menu__container');
headerMenu.buttons = document.querySelectorAll('.menu__menu-open-btn, .menu__menu-close-btn, .menu-turn-off-area');
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
	
	o.element.classList.toggle('_active');
	for (let i = 0; i < o.buttons.length; i++) {
		o.buttons[i].classList.toggle('_active');
	}
	scrollLock.toggle(o.element, o.timeout);
}
for (let i = 0; i < headerMenu.buttons.length; i++) {
	headerMenu.buttons[i].addEventListener('click', headerMenu.toggle);
}
headerMenu.init();

// Hiding header
hidingHeader.elem = document.querySelector('.header');
hidingHeader.visiblePosition = Number(getComputedStyle(hidingHeader.elem).top.slice(0,-2));

hidingHeader.scroll = function() {
	if (window.innerWidth > mobileSwitchWidth) return;
	let o = hidingHeader;
	o.currentPos -= pageYOffset - o.pagePrevPos;
	o.pagePrevPos = pageYOffset;
	if (o.currentPos > o.visiblePosition) o.currentPos = o.visiblePosition;
	if (o.currentPos < o.hiddenPosition) o.currentPos = o.hiddenPosition;
	o.elem.style.top = o.currentPos + 'px';
}
hidingHeader.init = function() {
	let o = hidingHeader;
	o.currentPos = o.visiblePosition;
	o.pagePrevPos = pageYOffset;
	o.elem.style.top = o.currentPos + 'px';
}
window.addEventListener('scroll', hidingHeader.scroll);
hidingHeader.init();