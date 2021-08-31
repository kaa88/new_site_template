function Select(elem = '.select', chooseFirstOpt = true){
	this.elem = document.querySelector(elem);
	if (!this.elem) return;
	this.header = this.elem.querySelector('.select__header-text');
	this.list = this.elem.querySelector('.select__list-wrapper');
	this.options = this.elem.querySelectorAll('.select__option');
	this.listMaxHeight = this.elem.querySelector('.select__list').offsetHeight;
	this.listMinHeight = 0;
	this.header.parentElement.addEventListener('click', this.toggleList.bind(this));
	for (let i = 0; i < this.options.length; i++) {
		this.options[i].addEventListener('click', this.setToSelected);
		this.options[i].addEventListener('click', this.selectItem.bind(this));
	};
	if (chooseFirstOpt == true) {
		this.header.innerHTML = this.options[0].innerHTML;
		this.options[0].classList.add('_selected');
	}
};
Select.prototype.toggleList = function(){
	if (this.list.classList.contains('_active'))
		this.list.style.height = this.listMinHeight + 'px';
	else
		this.list.style.height = this.listMaxHeight + 'px';
	this.header.classList.toggle('_active');
	this.list.classList.toggle('_active');
};
Select.prototype.setToSelected = function(){
	for (let i = 0; i < this.parentElement.children.length; i++) {
		this.parentElement.children[i].classList.remove('_selected');
	}
	this.classList.add('_selected');
};
Select.prototype.selectItem = function(){
	for (let i = 0; i < this.options.length; i++) {
		if (this.options[i].classList.contains('_selected'))
			this.header.innerHTML = this.options[i].innerHTML;
	}
	this.toggleList();
};