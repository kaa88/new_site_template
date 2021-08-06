modal.activeElem = null;
modal.closingElems = document.querySelectorAll('.modal__close-area, .modal__close-button');
modal.toggle = function(name) {
	if (transitionLock.check(modal.timeout)) return;
	
	let o = modal;
	if (!o.activeElem)
		o.activeElem = document.querySelector(!name ? '.modal' : ('.modal--' + name));
	o.activeElem.classList.toggle('_visible');
	scrollLock.toggle(o.activeElem, o.timeout);
	if (o.activeElem.classList.contains('_visible')) return;
	else o.activeElem = null;
}
for (let i = 0; i < modal.closingElems.length; i++) {
	modal.closingElems[i].addEventListener('click', modal.toggle);
}