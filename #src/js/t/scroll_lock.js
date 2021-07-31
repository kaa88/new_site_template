let scrollLock = false;
let scrollLockItems = document.querySelector('.page').children;
let scrollLockMenu = document.querySelector('.menu__container');
let scrollbarWidth;

scrollLockMenu.basePadding = Number(getComputedStyle(scrollLockMenu).paddingRight.slice(0,-2));
for (let i = 0; i < scrollLockItems.length; i++) {
	scrollLockItems[i].basePadding = Number(getComputedStyle(scrollLockItems[i]).paddingRight.slice(0,-2));
}
window.addEventListener('resize', scrollLockInit);
scrollLockInit();

function scrollLockInit() {
	scrollbarWidth = window.innerWidth - document.body.offsetWidth;
}
function lockScrollbar() {
	if (scrollLock == false) {
		for (let i = 0; i < scrollLockItems.length; i++) {
			if (window.innerWidth <= mobileSwitchWidth)
				scrollLockMenu.style.paddingRight = scrollLockMenu.basePadding + scrollbarWidth + 'px';
			scrollLockItems[i].style.paddingRight = scrollLockItems[i].basePadding + scrollbarWidth + 'px';
		}
		document.body.classList.add('_locked');
		scrollLock = true;
	}
	else {
		setTimeout(function(){
			scrollLockMenu.style.paddingRight = scrollLockMenu.basePadding + 'px';
			for (let i = 0; i < scrollLockItems.length; i++) {
				scrollLockItems[i].style.paddingRight = scrollLockItems[i].basePadding + 'px';
			}
			document.body.classList.remove('_locked');
			scrollLock = false;
		}, scrollLockTimeout);
	}
}