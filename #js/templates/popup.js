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
