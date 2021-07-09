const mobileSwitchWidth = 768;

// добавить @ в начало (@prepros)

// Готовые:

// Доделать:
// prepros-append templates/input_range.js
// prepros-append templates/simple_slider.js



// избавиться от undefined значений
// использовать const и let
// Main Menu
let menu = document.querySelector('.menu__container');
let menuBtn = document.querySelectorAll('.menu__menu-open-btn, .menu__menu-close-btn');
for (let i = 0; i < menuBtn.length; i++) {
	menuBtn[i].addEventListener('click', toggleMenu);
}

function toggleMenu() {
	menuBtn[0].classList.toggle('_active'); // if animated burger
	menu.classList.toggle('_active');
	lockScrollbar();
}
// /

// Popup
let popupClosingElements = document.querySelectorAll('.popup__back, .popup-content__close');
for (let i = 0; i < popupClosingElements.length; i++) {
	popupClosingElements[i].addEventListener('click', hidePopup);
}
function hidePopup() {
	let visiblePopup = document.querySelectorAll('.popup');
	for (let i = 0; i < visiblePopup.length; i++) {
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
		basepad: Number(getComputedStyle(document.querySelector('.menu__container')).paddingRight.slice(0,-2)),
		always: false
	},
	popup1: {
		elem: document.querySelector('.popup--login'),
		basepad: Number(getComputedStyle(document.querySelector('.popup--login')).paddingRight.slice(0,-2)),
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

// Media switcher
// let mobileSwitchWidth = 768; // переместил в главный скрипт файл
let mobileIsOn= false, prevMobileIsOn = false;
window.addEventListener('resize', mobileSwitch);

function mobileSwitch() {
	if (window.innerWidth <= mobileSwitchWidth) mobileIsOn = true;
	else mobileIsOn = false;

	if (mobileIsOn != prevMobileIsOn) {
		mobileHideElements();
	}
	prevMobileIsOn = mobileIsOn;
}
function mobileHideElements() {
	if (menu.classList.contains('_active')) 
		toggleMenu();
}
// /

// Random
function getRandom(min = 0, max = 99) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// /

// Onload counter
let onloadCounter1 = new OnloadCounter(51806, 1 , '.test-counter1');
let onloadCounter2 = new OnloadCounter(35704, 2 , '.test-counter2');

function OnloadCounter(goal = 1000, timeout = 1, resultElem = '.counter') { 
	// constructor
	this.goal = goal; // number
	this.timeout = timeout; // seconds
	this.resultElem = document.querySelector(resultElem);
	this.increment = this.goal / (this.timeout * 1000);
	this.startCounter = startCounter;
}
function startCounter() {
	let o = this;
	o.startDate = new Date().valueOf();
	o.timerId = setInterval(function(){
		o.counter = Math.floor((new Date().valueOf() - o.startDate) * o.increment);
		o.resultElem.innerHTML = o.counter;
	}, 11);
	setTimeout(function(){
		clearInterval(o.timerId);
		o.resultElem.innerHTML = o.goal;
	}, o.timeout * 1000);
}
// /
