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
