// Selection
function Selection(elem){
	this.elem = document.querySelector(elem ? elem : '.selection');
	this.header = this.elem.querySelector('.selection__header');
	this.list = this.elem.querySelector('.selection__list');
	this.options = this.elem.querySelectorAll('.selection__option');

	this.listMinHeight = this.listMaxHeight = 0;
	for (let i = 0; i < this.options.length; i++) {
		this.listMaxHeight += this.options[i].offsetHeight;
	}

	this.toggleList = function(){
		if (this.list.classList.contains('_active'))
			this.list.style.height = this.listMinHeight + 'px';
		else
			this.list.style.height = this.listMaxHeight + 'px';
		this.header.classList.toggle('_active');
		this.list.classList.toggle('_active');
	};
	this.setToSelected = function(){
		for (let i = 0; i < this.parentElement.children.length; i++) {
			this.parentElement.children[i].classList.remove('_selected');
		}
		this.classList.add('_selected');
	};
	this.selectItem = function(){
		for (let i = 0; i < this.options.length; i++) {
			if (this.options[i].classList.contains('_selected'))
				this.header.innerHTML = this.options[i].innerHTML;
		}
		this.toggleList();
	};

	this.header.addEventListener('click', this.toggleList.bind(this));
	for (let i = 0; i < this.options.length; i++) {
		this.options[i].addEventListener('click', this.setToSelected);
		this.options[i].addEventListener('click', this.selectItem.bind(this));
	};
}

let selection1 = new Selection('.selection--1');
let selection2 = new Selection('.selection--2');
// /
