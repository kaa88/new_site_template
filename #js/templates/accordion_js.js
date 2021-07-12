// Accordion
let accordion = {
	names: {
		accordion: '.accordion', // если несколько, добавить id
		item: '.accordion__item',
		header: '.accordion__item-header',
		content: '.accordion__item-content'
	},
};
accordion.items = document.querySelectorAll(accordion.names.item);
for (let i = 0; i < accordion.items.length; i++) {
	accordion.items[i].addEventListener('click', openItem);
	accordion.items[i].itemMinHeight = accordion.items[i].querySelector(accordion.names.header).offsetHeight;
	accordion.items[i].itemMaxHeight = accordion.items[i].itemMinHeight + accordion.items[i].querySelector(accordion.names.content).offsetHeight;
}

function openItem(){
	for (let i = 0; i < accordion.items.length; i++) {
		accordion.items[i].style.height = accordion.items[i].itemMinHeight + 'px';
	}
	this.style.height = this.itemMaxHeight + 'px';
}
// /
