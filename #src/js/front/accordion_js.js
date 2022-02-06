class Accordion {
	constructor(elem, isOpened = false) {
		this.elemName = elem ? '.' + elem : '.accordion';
		this.elem = document.querySelector(this.elemName);
		if (!this.elem) return;
		this.items = this.elem.querySelectorAll('.accordion__item');
		for (let i = 0; i < this.items.length; i++) {
			this.items[i].itemMaxHeight = 0;
			for (let j = 0; j < this.items[i].children.length; j++) {
				this.items[i].itemMaxHeight += this.items[i].children[j].offsetHeight;
			}
			this.items[i].addEventListener('click', this.openItem.bind(this));
		};
		if (isOpened == true) this.openItem(0, this.items[0]);
	}
	openItem(event, item) {
		for (let i = 0; i < this.items.length; i++) {
			this.items[i].style.height = '';
		}
		if (!item) item = event.currentTarget;
		item.style.height = item.itemMaxHeight + 'px';
	}
}