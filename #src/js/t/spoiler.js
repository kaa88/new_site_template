const spoiler = {
	names: {
		elem: 'spoiler',
		devider: '__',
		header: 'header',
		content: 'content'
	},
	init: function() {
		this.elems = document.querySelectorAll('.' + this.names.elem);
		for (let i = 0; i < this.elems.length; i++) {
			this.elems[i].querySelector('.' + this.names.elem + this.names.devider + this.names.header)
				.addEventListener('click', this.toggle.bind(this));
		}
	},
	toggle: function(e) {
		e.currentTarget.parentElement.classList.toggle('_visible');
	}
}