const mobileSwitchWidth = 768;

// добавить @ в начало (@prepros)

// Готовые:

// Доделать:
// prepros-append templates/input_range.js
// prepros-append templates/simple_slider.js



// избавиться от undefined значений
// использовать const и let
// прототипы
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
	let popup = document.querySelectorAll('.popup');
	for (let i = 0; i < popup.length; i++) {
		popup[i].classList.remove('_visible');
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
function OnloadCounter(goal = 1000, timeout = 1, resultElem = '.counter') { 
	this.goal = goal; // number
	this.timeout = timeout; // seconds
	this.increment = this.goal / (this.timeout * 1000);
	this.resultElem = document.querySelector(resultElem);
}
OnloadCounter.prototype.startCounter = function() {
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

let onloadCounter1 = new OnloadCounter(51806, 1 , '.test-counter--1');
let onloadCounter2 = new OnloadCounter(35704, 2 , '.test-counter--2');
// /

// Accordion
function Accordion(elem = '.accordion', isOpened = false){
	this.elem = document.querySelector(elem);
	this.items = this.elem.querySelectorAll('.accordion__item');
	for (let i = 0; i < this.items.length; i++) {
		this.items[i].itemMinHeight = this.items[i].querySelector('.accordion__item-header').offsetHeight;
		this.items[i].itemMaxHeight = this.items[i].itemMinHeight + this.items[i].querySelector('.accordion__item-content').offsetHeight;
		this.items[i].addEventListener('click', this.closeItem.bind(this));
		this.items[i].addEventListener('click', this.openItem);
	};
	if (isOpened == true) this.openItem(0, this.items[0]);
};
Accordion.prototype.closeItem = function(){
	for (let i = 0; i < this.items.length; i++) {
		this.items[i].style.height = this.items[i].itemMinHeight + 'px';
	}
};
Accordion.prototype.openItem = function(event, item = this){
	item.style.height = item.itemMaxHeight + 'px';
};

let accordion1 = new Accordion('.accordion--1', true);
let accordion2 = new Accordion('.accordion--2');
// /

// Selection
function Selection(elem = '.selection'){
	this.elem = document.querySelector(elem);
	this.header = this.elem.querySelector('.selection__header');
	this.list = this.elem.querySelector('.selection__list');
	this.options = this.elem.querySelectorAll('.selection__option');

	this.listMinHeight = this.listMaxHeight = 0;
	for (let i = 0; i < this.options.length; i++) {
		this.listMaxHeight += this.options[i].offsetHeight;
	}

	this.header.addEventListener('click', this.toggleList.bind(this));
	for (let i = 0; i < this.options.length; i++) {
		this.options[i].addEventListener('click', this.setToSelected);
		this.options[i].addEventListener('click', this.selectItem.bind(this));
	};
};
Selection.prototype.toggleList = function(){
	if (this.list.classList.contains('_active'))
		this.list.style.height = this.listMinHeight + 'px';
	else
		this.list.style.height = this.listMaxHeight + 'px';
	this.header.classList.toggle('_active');
	this.list.classList.toggle('_active');
};
Selection.prototype.setToSelected = function(){
	for (let i = 0; i < this.parentElement.children.length; i++) {
		this.parentElement.children[i].classList.remove('_selected');
	}
	this.classList.add('_selected');
};
Selection.prototype.selectItem = function(){
	for (let i = 0; i < this.options.length; i++) {
		if (this.options[i].classList.contains('_selected'))
			this.header.innerHTML = this.options[i].innerHTML;
	}
	this.toggleList();
};

let selection1 = new Selection('.selection--1');
let selection2 = new Selection('.selection--2');
// /
