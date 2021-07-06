// добавить @ в начало (@prepros)

// Готовые:

// Доделать:
// prepros-append templates/media_switcher.js
// prepros-append templates/onload_counter.js
// prepros-append templates/popup.js
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

// Input range
// Required jquery.js & jquery-ui.js
$('.jq-slider').slider({
	min: 0,
	max: 1000,
	value: 300,
	range: 'min', // окрашивает область до ползунка
	slide : function(event, ui) {    
            $('#jq-slider-count').text(ui.value); // обработчик события
            $('.slider-bubble').text(ui.value); // обработчик события окошка
        }
});
$('#jq-slider-count').text($('.jq-slider').slider('value')); // установка значения при инициализации
// далее я добавляю скриптом окошко со значением, т.к. DOM элементов таких нет
$('.ui-slider-handle').append('<span class="slider-bubble"></span>');
$('.slider-bubble').text($('.jq-slider').slider('value'));
// /
