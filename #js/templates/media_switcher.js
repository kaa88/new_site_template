// Media switcher
var mobileSwitchWidth = 768;

if (window.innerWidth <= mobileSwitchWidth)
	var mobileIsOn = true, prevMobileIsOn = true;
else
	var mobileIsOn = false, prevMobileIsOn = false;

function mobileSwitch() {
	if (window.innerWidth <= mobileSwitchWidth) mobileIsOn = true;
	else mobileIsOn = false;

	if (mobileIsOn != prevMobileIsOn) {
		hideEverything();
	}
	prevMobileIsOn = mobileIsOn;
}
window.addEventListener('resize', mobileSwitch);

function hideEverything() {
	if (menu.classList.contains('_active')) 
		toggleMenu();
}
// /
