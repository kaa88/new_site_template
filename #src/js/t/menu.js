let menu = document.querySelector('.menu__container');
let menuBtn = document.querySelectorAll('.menu__menu-open-btn, .menu__menu-close-btn, .menu-turn-off-area');
for (let i = 0; i < menuBtn.length; i++) {
	menuBtn[i].addEventListener('click', toggleMenu);
}

function toggleMenu() {
	menu.classList.toggle('_active');
	for (let i = 0; i < menuBtn.length; i++) {
		menuBtn[i].classList.toggle('_active');
	}
	lockScrollbar();
}