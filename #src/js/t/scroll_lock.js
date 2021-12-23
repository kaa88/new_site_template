let scrollLock = {
	initializer: null,
	items: document.body.children
};
for (let i = 0; i < scrollLock.items.length; i++) {
	scrollLock.items[i].basePadding = Number(getComputedStyle(scrollLock.items[i]).paddingRight.slice(0,-2));
}
scrollLock.calc = function() {
	scrollLock.scrollbarWidth = window.innerWidth - document.body.offsetWidth;
}
window.addEventListener('resize', scrollLock.calc);
scrollLock.calc();

scrollLock.lock = function(initializer) {
	let o = scrollLock;
	if (initializer && o.initializer == null) {
		o.initializer = initializer;
		o.initializer.basePadding = Number(getComputedStyle(o.initializer).paddingRight.slice(0,-2));
	}
	if (o.initializer)
		o.initializer.style.paddingRight = o.initializer.basePadding + o.scrollbarWidth + 'px';
	for (let i = 0; i < o.items.length; i++) {
		o.items[i].style.paddingRight = o.items[i].basePadding + o.scrollbarWidth + 'px';
	}
	document.body.classList.add('_locked');
}
scrollLock.unlock = function(initializer, timeout = 0) {
	let o = scrollLock;
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