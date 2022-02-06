const spoiler = {
	init: function() {
		this.elems = document.querySelectorAll('.spoiler');
		for (let i = 0; i < this.elems.length; i++) {
			this.elems[i].children[0].addEventListener('click', this.toggle.bind(this));
		}
	},
	toggle: function(e) {
		let parent = e.currentTarget.parentElement;
		parent.classList.toggle('_visible');
		if (parent.classList.contains('_visible'))
			parent.children[1].style.height = parent.children[1].children[0].offsetHeight + 'px';
		else parent.children[1].style.height = '';
	}
}