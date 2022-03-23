/* 
	Set transition timeout in CSS only
	
	Init params {obj}: (defaults = false)
	- menu - add menu block
	- submenu - add submenu block
	- hidingHeader - add hidingHeader block
*/
const header = {
	refs: { // dependences
		mobile: jsMediaQueries.mobile,
		translock: transitionLock,
		scrlock: scrollLock
	},
	names: {
		header: '.header',
		menu: '.header-menu-hide-wrapper',
		menuItems: '.header-menu__items',
		menuItem: '.header-menu__item',
		menuOpenBtn: '.header-menu-open-btn',
		menuCloseBtn: '.header-menu-close-btn',
		menuBackBtn: '.header-submenu-back-btn',
		menuArea: '.header-menu-turn-off-area',
		menuOptions: '#header-menu-options',
		submenu: '.header-submenu-hide-wrapper',
		submenuDropLink: '.submenu-drop-link',
		thisPageClass: 'this-page',
		varTimer: '--timer-menu',
		varHeight: '--header-height',
	},
	init: function(params = {}) {
		this.headerElem = document.querySelector(this.names.header);
		let timeout = parseFloat(getComputedStyle(document.body).getPropertyValue(this.names.varTimer))*1000 || 0;
		this.setCssHeaderHeight();
		window.addEventListener('resize', this.setCssHeaderHeight.bind(this));

		if (params.menu) this.menu.init(this, timeout, this.names);
		if (params.submenu) this.submenu.init(this, timeout, this.names);
		if (params.hidingHeader) window.addEventListener('load', () => this.hidingHeader.init(this));

	},
	setCssHeaderHeight: function() {
		// This func controls the mobile menu height variable in css
		let hh = getComputedStyle(this.headerElem).height;
		document.body.style.setProperty(this.names.varHeight, hh);
		this.headerHeight = parseFloat(hh);
	},
	mobileViewService: function() {
		this.menu.toggle();
		this.menu.hideOnViewChange();
		this.hidingHeader.calc();
	},

	// Menu
	menu: {
		isLoaded: false,
		init: function(that, timeout, names) {
			this.isLoaded = true;
			this.root = that;
			this.timeout = timeout;
			this.menuElem = this.root.headerElem.querySelector(names.menu);
			this.buttons = this.root.headerElem.querySelectorAll(`${names.menuOpenBtn}, ${names.menuCloseBtn}, ${names.menuArea}`);
			let newMenu = this.menuElem.querySelector(names.menuItems);
			let options = {};
			if (typeof headerMenuOptions !== 'undefined') options = headerMenuOptions;
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
						newMenu.children[i].firstElementChild.classList.add(names.thisPageClass);
						break;
					}
				}
			}
			options.elem = document.querySelector(names.menuOptions);
			if (options.elem) options.elem.parentElement.removeChild(options.elem);

			for (let i = 0; i < this.buttons.length; i++) {
				this.buttons[i].addEventListener('click', this.toggle.bind(this));
			}
		},
		toggle: function(e) {
			if (!this.isLoaded) return;
			if (this.root.refs.translock.check(this.timeout)) return;
			
			if (this.menuElem.classList.contains('_active')) {
				this.menuElem.classList.remove('_active');
				for (let i = 0; i < this.buttons.length; i++) {
					this.buttons[i].classList.remove('_active');
				}
				this.root.refs.scrlock.unlock(this.timeout);
				this.root.submenu.closeAll(); // submenu reference
			}
			else {
				if (e) {
					this.menuElem.classList.add('_active');
					for (let i = 0; i < this.buttons.length; i++) {
						this.buttons[i].classList.add('_active');
					}
					this.root.refs.scrlock.lock();
					this.root.hidingHeader.scroll(0, true); // hidingHeader reference
				}
			}
		},
		hideOnViewChange: function() {
			// this func prevents menu blinking on mobile view switch
			if (this.isLoaded) {
				let that = this;
				this.menuElem.style.display = 'none';
				setTimeout(() => {
					that.menuElem.style.display = '';
				}, that.timeout)
			}
		}
	},
	// /Menu

	// SubMenu
	submenu: {
		isLoaded: false,
		init: function(that, timeout, names){
			this.isLoaded = true;
			this.root = that;
			this.timeout = timeout;
			this.sMenuElems = this.root.headerElem.querySelectorAll(names.submenu);
			if (this.sMenuElems.length == 0) {
				console.log('Error: No submenu detected');
				return;
			}
			this.links = this.root.headerElem.querySelectorAll(names.submenuDropLink);
			this.backButtons = this.root.headerElem.querySelectorAll(names.menuBackBtn);
			// if menu-item contains submenu
			if (this.links[0]) {
				if (this.links[0].closest(names.menuItem).querySelector(names.submenu)) this.isOutside = false;
				else this.isOutside = true;
			}
			// setting events
			for (let i = 0; i < this.backButtons.length; i++) {
				this.backButtons[i].addEventListener('click', this.toggle.bind(this));
			}
			for (let i = 0; i < this.links.length; i++) {
				this.links[i].addEventListener('click', this.toggle.bind(this));
				this.links[i].addEventListener('mouseover', this.toggle.bind(this));
				if (!this.isOutside)
					this.links[i].closest(names.menuItem).addEventListener('mouseleave', this.toggle.bind(this));
			}
			if (this.isOutside)
				this.root.headerElem.addEventListener('mouseleave', this.toggle.bind(this));
		},
		toggle: function(e) {
			if (!e) return;
			let that = this, mobile = false;
			if (window.innerWidth <= this.root.refs.mobile) mobile = true;

			function is(name) {
				let str = that.root.names[name];
				if (str.match(/[#.]/)) str = str.substring(1);
				return e.currentTarget.classList.contains(str);
			}
			
			if (mobile) {
				if (e.type == 'click') {
					if (is('submenuDropLink')) this.open(e, mobile);
					if (is('menuBackBtn')) this.close(e, mobile);
				}
			}
			else {
				if (e.type == 'mouseover') {
					if (is('submenuDropLink')) this.open(e, mobile);
				}
				if (e.type == 'mouseleave') {
					if (is('menuItem') || is('header')) this.close(e, mobile);
				}
			}
		},
		open: function(e, m) {
			e.preventDefault();
			if (m && this.root.refs.translock.check(this.timeout)) return;
			if (this.isOutside) {
				for (let i = 0; i < this.links.length; i++) {
					this.links[i].classList.add('_active');
				}
				for (let i = 0; i < this.sMenuElems.length; i++) {
					this.sMenuElems[i].classList.add('_active');
				}
			}
			else {
				e.currentTarget.classList.add('_active');
				e.currentTarget.nextElementSibling.classList.add('_active');
			}
		},
		close: function(e, m) {
			if (m && this.root.refs.translock.check(this.timeout)) return;
			if (this.isOutside) {
				let items = this.root.headerElem.querySelectorAll(`${this.root.names.menuItem} ._active, ${this.root.names.submenu}._active`);
				for (let i = 0; i < items.length; i++) {
					items[i].classList.remove('_active');
				}
			}
			else {
				let parent = e.currentTarget.closest(this.root.names.submenu).parentElement;
				for (let i = 0; i < parent.children.length; i++) {
					parent.children[i].classList.remove('_active');
				}
			}
		},
		closeAll: function() {
			if (this.isLoaded) {
				for (let i = 0; i < this.links.length; i++) {
					this.links[i].classList.remove('_active');
				}
				for (let i = 0; i < this.sMenuElems.length; i++) {
					this.sMenuElems[i].classList.remove('_active');
				}
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
			this.hiddenPositionOffset = 0; // set this one if you want to move header by value that differs it's height
			this.visiblePosition = parseFloat(getComputedStyle(this.root.headerElem).top);
			this.calc();
			window.addEventListener('scroll', this.scroll.bind(this));
		},
		calc: function() {
			if (!this.isLoaded) return;
			this.Y = this.YPrev = pageYOffset;
			this.diff = 0;
			this.currentPos = this.visiblePosition;
			this.root.headerElem.style.top = this.currentPos + 'px';
		},
		scroll: function(e, click) {
			if (!this.isLoaded) return;
			if (window.innerWidth > this.root.refs.mobile) return;
			if (click) {
				this.root.headerElem.style.top = this.visiblePosition + 'px';
				this.currentPos = this.visiblePosition;
				return;
			}
			// lazyLoad check
			if ((pageYOffset < (this.Y + this.diff) && this.Y > this.YPrev) || (pageYOffset > (this.Y + this.diff) && this.Y < this.YPrev)) {
				this.diff = pageYOffset - this.Y;
			}
			
			this.YPrev = this.Y;
			this.Y = pageYOffset - this.diff;
			this.currentPos -= this.Y - this.YPrev;
			this.hiddenPosition = (this.root.headerHeight + this.hiddenPositionOffset) * -1;
			if (this.currentPos > this.visiblePosition) this.currentPos = this.visiblePosition;
			if (this.currentPos < this.hiddenPosition) this.currentPos = this.hiddenPosition;
			this.root.headerElem.style.top = this.currentPos + 'px';
		}
	},
	// /Hiding Header
}