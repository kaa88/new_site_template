let scrollLock = {
	scrollbarWidth: 0,
	initializer: null,
	items: document.querySelector('.page').children
};
for (let i = 0; i < scrollLock.items.length; i++) {
	scrollLock.items[i].basePadding = Number(getComputedStyle(scrollLock.items[i]).paddingRight.slice(0,-2));
}
scrollLock.init = function() {
	scrollLock.scrollbarWidth = window.innerWidth - document.body.offsetWidth;
}
window.addEventListener('resize', scrollLock.init);
scrollLock.init();

scrollLock.toggle = function(initializer, timeout = 0) {
	let o = scrollLock; // to prevent errors with events
	if (initializer && o.initializer == null) {
		o.initializer = initializer;
		o.initializer.basePadding = Number(getComputedStyle(o.initializer).paddingRight.slice(0,-2));
	}
	if (document.body.classList.contains('_locked')) {
		setTimeout(function(){
			if (o.initializer) {
				o.initializer.style.paddingRight = o.initializer.basePadding + 'px';
				o.initializer = null;
			}
			for (let i = 0; i < o.items.length; i++) {
				o.items[i].style.paddingRight = o.items[i].basePadding + 'px';
			}
			document.body.classList.remove('_locked');
		}, timeout);
	}
	else {
		if (o.initializer)
			o.initializer.style.paddingRight = o.initializer.basePadding + o.scrollbarWidth + 'px';
		for (let i = 0; i < o.items.length; i++) {
			o.items[i].style.paddingRight = o.items[i].basePadding + o.scrollbarWidth + 'px';
		}
		document.body.classList.add('_locked');
	}
}