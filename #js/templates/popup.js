// Popup
var closingElements = document.querySelectorAll('.popup__back, .pop-window__close');
for (var i = 0; i < closingElements.length; i++) {
	closingElements[i].addEventListener('click', hidePopup);
}
function hidePopup() {
	var visiblePop = document.querySelectorAll('.popup');
	for (var i = 0; i < visiblePop.length; i++) {
		visiblePop[i].classList.remove('_visible');
	}
}
function showPopup(type) {
	document.querySelector('.popup--' + type).classList.add('_visible');
}
// /
