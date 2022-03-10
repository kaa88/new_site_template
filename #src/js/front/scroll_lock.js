const scrollLock = {
	refs: {
		mobile: jsMediaQueries.mobile
	},
	defaultElems: ['main', 'footer'],
	paddingItemClassName: 'scroll-lock-item-p',
	paddingDesktopItemClassName: 'scroll-lock-item-pd',
	marginItemClassName: 'scroll-lock-item-m',
	lockedClassName: '_locked',

	init: function(params = {}) {
		this.paddingItems = document.querySelectorAll('.' + this.paddingItemClassName);
		this.paddingDesktopItems = document.querySelectorAll('.' + this.paddingDesktopItemClassName);
		this.marginItems = document.querySelectorAll('.' + this.marginItemClassName);

		if (params.useDefaultGroups) {
			let selector = '';
			for (let i = 0; i < this.defaultElems.length; i++) {
				selector += '.' + this.defaultElems[i] + '>*';
				if (i < this.defaultElems.length - 1) selector += ',';
			}
			let defaultItems = document.querySelectorAll(selector);
			let joinedPaddingItems = Array.from(defaultItems);
			for (let i = 0; i < this.paddingItems.length; i++) {
				let exist = false;
				for (let j = 0; j < defaultItems.length; j++) {
					if (defaultItems[j] == this.paddingItems[i]) exist = true;
				}
				if (!exist) joinedPaddingItems.push(this.paddingItems[i]);
			}
			this.paddingItems = joinedPaddingItems;
		}
	},

	lock: function() {
		if (document.body.classList.contains(this.lockedClassName)) return;
		this.scrollbarWidth = window.innerWidth - document.body.offsetWidth;
		let that = this;
		function f(items, prop) {
			for (let i = 0; i < items.length; i++) {
				items[i][prop] = parseFloat(getComputedStyle(items[i])[prop]);
				items[i].style[prop] = items[i][prop] + that.scrollbarWidth + 'px';
			}
		}
		if (window.innerWidth > this.refs.mobile)
			f(this.paddingDesktopItems, 'paddingRight');
		f(this.paddingItems, 'paddingRight');
		f(this.marginItems, 'marginRight');
		document.body.classList.add(this.lockedClassName);
	},

	unlock: function(timeout = 0) {
		let that = this;
		setTimeout(() => {
			function f(items, prop) {
				for (let i = 0; i < items.length; i++) {
					items[i].style[prop] = '';
				}
			}
			f(this.paddingDesktopItems, 'paddingRight');
			f(this.paddingItems, 'paddingRight');
			f(this.marginItems, 'marginRight');
			document.body.classList.remove(that.lockedClassName);
		}, timeout);
	}
}