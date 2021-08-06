menu.element = document.querySelector('.menu__container');
menu.buttons = document.querySelectorAll('.menu__menu-open-btn, .menu__menu-close-btn, .menu-turn-off-area');
menu.toggle = function() {
	if (transitionLock.check(menu.timeout)) return;
	
	menu.element.classList.toggle('_active');
	for (let i = 0; i < menu.buttons.length; i++) {
		menu.buttons[i].classList.toggle('_active');
	}
	scrollLock.toggle(menu.element, menu.timeout);
}
for (let i = 0; i < menu.buttons.length; i++) {
	menu.buttons[i].addEventListener('click', menu.toggle);
}