function Select(elem, chooseFirstOpt = true){
	this.elemName = elem ? '.' + elem : '.select';
	this.elem = document.querySelector(this.elemName);
	if (!this.elem) return;
	this.header = this.elem.querySelector('.select__header-text');
	this.list = this.elem.querySelector('.select__list-wrapper');
	this.list.innerHTML = '';

	this.basicSelect = this.elem.querySelectorAll('select option');

	let newList = document.createElement('ul');
	newList.classList.add('select__list');
	this.list.appendChild(newList);
	for (let i = 0; i < this.basicSelect.length; i++) {
		if (this.basicSelect[i].hasAttribute('disabled')) continue;
		let newLi = document.createElement('li');
		newLi.classList.add('select__option');
		newLi.innerHTML = this.basicSelect[i].innerHTML;
		newList.appendChild(newLi);
	}

	this.options = this.elem.querySelectorAll('.select__option');
	this.listMaxHeight = this.elem.querySelector('.select__list').offsetHeight;
	this.listMinHeight = 0;
	this.hideList();
	let that = this;
	for (let i = 0; i < this.options.length; i++) {
		this.options[i].addEventListener('click', function() {
			that.setToSelected(event, that, i);
		});
		this.options[i].addEventListener('click', this.selectItem.bind(this));
	};

	if (chooseFirstOpt) {
		this.header.innerHTML = this.options[0].innerHTML;
		this.options[0].classList.add('_selected');
		this.basicSelect[0].parentElement.removeChild(this.basicSelect[0]);
	}
	else {
		this.header.innerHTML = this.basicSelect[0].innerHTML;
	}
	this.onselect = function(selection){};
};
Select.prototype.hideList = function(e){
	this.list.style.height = this.listMinHeight + 'px';
	this.header.classList.remove('_active');
	this.list.classList.remove('_active');
	this.header.parentElement.addEventListener('click', this.showList.bind(this), {once: true});
}
Select.prototype.showList = function(e){
	e.stopPropagation();
	this.list.style.height = this.listMaxHeight + 'px';
	this.header.classList.add('_active');
	this.list.classList.add('_active');
	window.addEventListener('click', this.hideList.bind(this), {once: true});
};
Select.prototype.setToSelected = function(e, that, i){
	for (let j = 0; j < e.target.parentElement.children.length; j++) {
		e.target.parentElement.children[j].classList.remove('_selected');
		that.basicSelect[j].removeAttribute('selected');
	}
	e.target.classList.add('_selected');
	that.basicSelect[i+1].setAttribute('selected', 'true');
	that.onselect(that.basicSelect[i+1].value);
};
Select.prototype.selectItem = function(){
	for (let i = 0; i < this.options.length; i++) {
		if (this.options[i].classList.contains('_selected')) {
			this.header.innerHTML = this.options[i].innerHTML;
			break;
		}
	}
};