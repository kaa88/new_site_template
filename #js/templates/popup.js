// Popup
var popupClosingElements = document.querySelectorAll('.popup__back, .popup-content__close');
for (var i = 0; i < popupClosingElements.length; i++) {
	popupClosingElements[i].addEventListener('click', hidePopup);
}
function hidePopup() {
	var visiblePopup = document.querySelectorAll('.popup');
	for (var i = 0; i < visiblePopup.length; i++) {
		visiblePopup[i].classList.remove('_visible');
	}
	lockScrollbar();
}
function showPopup(name) {
	document.querySelector(!name ? '.popup' : ('.popup--' + type)).classList.add('_visible');
	lockScrollbar();
}
// /
