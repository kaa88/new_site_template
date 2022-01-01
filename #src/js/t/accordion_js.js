class Accordion {
	constructor(elem, isOpened = false) {
		this.elemName = elem ? '.' + elem : '.accordion';
		this.elem = document.querySelector(this.elemName);
		if (!this.elem) return;
		this.items = this.elem.querySelectorAll('.accordion__item');
		for (let i = 0; i < this.items.length; i++) {
			this.items[i].itemMinHeight = this.items[i].querySelector('.accordion__item-header').offsetHeight;
			this.items[i].itemMaxHeight = this.items[i].itemMinHeight + this.items[i].querySelector('.accordion__item-content').offsetHeight;
			this.items[i].addEventListener('click', this.closeItem.bind(this));
			this.items[i].addEventListener('click', this.openItem);
		};
		if (isOpened == true) this.openItem(0, this.items[0]);
	}
	closeItem() {
		for (let i = 0; i < this.items.length; i++) {
			this.items[i].style.height = this.items[i].itemMinHeight + 'px';
		}
	}
	openItem(event, item = this) {
		item.style.height = item.itemMaxHeight + 'px';
	}
}