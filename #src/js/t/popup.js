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
	document.querySelector(!name ? '.popup' : ('.popup--' + name)).classList.add('_visible');
	lockScrollbar();
}
// /
