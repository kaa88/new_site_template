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
