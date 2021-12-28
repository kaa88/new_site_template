const scrollLock = {
	items: document.body.children,
	init: function(){
		for (let i = 0; i < this.items.length; i++) {
			this.items[i].basePadding = getComputedStyle(this.items[i]).paddingRight.slice(0,-2) * 1;
		}
		window.addEventListener('resize', this.calc.bind(this));
		this.calc();
	},
	calc: function() {
		this.scrollbarWidth = window.innerWidth - document.body.offsetWidth;
	},
	lock: function() {
		for (let i = 0; i < this.items.length; i++) {
			this.items[i].style.paddingRight = this.items[i].basePadding + this.scrollbarWidth + 'px';
		}
		document.body.classList.add('_locked');
	},
	unlock: function(timeout = 0) {
		let that = this;
		setTimeout(function(){
			for (let i = 0; i < that.items.length; i++) {
				that.items[i].style.paddingRight = that.items[i].basePadding + 'px';
			}
			document.body.classList.remove('_locked');
		}, timeout);
	}
}