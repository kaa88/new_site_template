const header = {
	refs: { // dependences
		mobSwitchW: mobileSwitchWidth,
		translock: transitionLock,
		scrlock: scrollLock
	},
	init: function(params = {}) {
		this.elem = document.querySelector('.header');
		let timeout = getComputedStyle(document.body).getPropertyValue('--timer-menu').slice(0,-1)*1000 || 0;
		if (params.menu) this.menu.init(this, timeout);
		if (params.submenu) this.submenu.init(this, timeout);
		if (params.hidingHeader) window.addEventListener('load', () => this.hidingHeader.init(this));
	},

	// Menu
	menu: {
		refs: {
			sm: 'submenu',
			hh: 'hidingHeader'
		},
		isLoaded: false,
		init: function(that, timeout) {
			this.isLoaded = true;
			this.root = that;
			this.timeout = timeout;
			this.element = document.querySelector('.menu__container');
			this.buttons = document.querySelectorAll('.menu-open-btn, .menu-close-btn, .menu-turn-off-area');
			let newMenu = document.getElementsByClassName('menu__items')[0];
			let options = headerMenuOptions || null;
			if (options) {
				if (options.links) {
					let clone = {};
					for (let i = 0; i < newMenu.children.length; i++) {
						clone[newMenu.children[i].dataset.name] = newMenu.children[i];
					}
					newMenu.innerHTML = '';
					for (let i = 0; i < options.links.length; i++) {
						newMenu.appendChild(clone[options.links[i]]);
					}
				}
				if (options.activeLink) {
					for (let i = 0; i < newMenu.children.length; i++) {
						if (newMenu.children[i].dataset.name == options.activeLink) {
							newMenu.children[i].firstElementChild.classList.add('this-page');
							break;
						}
					}
				}
			}
			options.elem = document.querySelector('#headerMenuOptions');
			options.elem.parentElement.removeChild(options.elem);
			for (let i = 0; i < this.buttons.length; i++) {
				this.buttons[i].addEventListener('click', this.toggle.bind(this));
			}
		},
		toggle: function(e) {
			if (!this.isLoaded) return;
			if (this.root.refs.translock.check(this.timeout)) return;
			
			if (this.element.classList.contains('_active')) {
				this.element.classList.remove('_active');
				for (let i = 0; i < this.buttons.length; i++) {
					this.buttons[i].classList.remove('_active');
				}
				this.root.refs.scrlock.unlock(this.timeout);
			}
			else {
				if (e) {
					this.element.classList.add('_active');
					for (let i = 0; i < this.buttons.length; i++) {
						this.buttons[i].classList.add('_active');
					}
					this.root.refs.scrlock.lock();
					if (this.root[this.refs.hh].isLoaded) this.root[this.refs.hh].scroll(0, true);
				}
			}
			// submenu close
			if (this.root[this.refs.sm].isLoaded && this.root[this.refs.sm].list.classList.contains('_visible')) {
				this.root[this.refs.sm].link.classList.remove('_active');
				this.root[this.refs.sm].list.classList.remove('_visible');
			}
		}
	},
	// /Menu

	// SubMenu
	submenu: {
		isLoaded: false,
		init: function(that, timeout){
			this.isLoaded = true;
			this.root = that;
			this.timeout = timeout;
			this.link = document.querySelector('._drop-link'); // if many?
			this.list = document.querySelector('.menu__dropdown');
			this.backButton = document.querySelector('.menu-back-btn');
			this.backButton.addEventListener('click', this.close);
			this.updateEvents();
		},
		open: function(e) {
			e.preventDefault();
			this.link.classList.add('_active');
			this.list.classList.add('_visible');
		},
		close: function() {
			this.link.classList.remove('_active');
			this.list.classList.remove('_visible');
		},
		updateEvents: function() {
			if (!this.isLoaded) return;
			if (window.innerWidth <= this.root.refs.mobSwitchW) {
				this.link.removeEventListener('mouseover', this.open);
				this.root.elem.removeEventListener('mouseleave', this.close);
				this.link.addEventListener('click', this.open);
			}
			else {
				this.link.addEventListener('mouseover', this.open);
				this.root.elem.addEventListener('mouseleave', this.close);
				this.link.removeEventListener('click', this.open);
			}
		}
	},
	// /SubMenu

	// Hiding Header
	hidingHeader: {
		isLoaded: false,
		init: function(that) {
			this.isLoaded = true;
			this.root = that;
			this.visiblePosition = Number(getComputedStyle(this.root.elem).top.slice(0,-2));
			this.hiddenPosition = this.root.elem.offsetHeight * -1;
			this.calc();
			window.addEventListener('scroll', this.scroll.bind(this));
		},
		calc: function() {
			if (!this.isLoaded) return;
			this.Y = this.YPrev = pageYOffset;
			this.diff = 0;
			this.currentPos = this.visiblePosition;
			this.root.elem.style.top = this.currentPos + 'px';
		},
		scroll: function(e, click) {
			if (window.innerWidth > this.root.refs.mobSwitchW) return;
			if (click) {
				this.root.elem.style.top = this.visiblePosition + 'px';
				this.currentPos = this.visiblePosition;
				return;
			}
			// lazyLoadFix check
			if ((pageYOffset < (this.Y + this.diff) && this.Y > this.YPrev) || (pageYOffset > (this.Y + this.diff) && this.Y < this.YPrev)) {
				this.diff = pageYOffset - this.Y;
			}
			
			this.YPrev = this.Y;
			this.Y = pageYOffset - this.diff;
			this.currentPos -= this.Y - this.YPrev;
			if (this.currentPos > this.visiblePosition) this.currentPos = this.visiblePosition;
			if (this.currentPos < this.hiddenPosition) this.currentPos = this.hiddenPosition;
			this.root.elem.style.top = this.currentPos + 'px';
		}
	},
	// /Hiding Header
}