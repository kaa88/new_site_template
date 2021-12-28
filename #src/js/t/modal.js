const modal = {
	refs: {
		translock: transitionLock,
		scrlock: scrollLock
	},
	init: function(params = {}){
		this.elemName = params.elem || 'modal';
		this.elem = document.querySelector('.' + this.elemName);
		if (!this.elem) return;
		this.timeout = getComputedStyle(document.body).getPropertyValue('--timer-modal').slice(0,-1)*1000 || 0;
		this.windows = this.elem.querySelectorAll('.' + this.elemName + '__window');
		this.links = document.querySelectorAll(params.linkName ? '.' + params.linkName : '.modal-link');
		let that = this;
		for (let i = 0; i < this.links.length; i++) {
			this.links[i].addEventListener('click', this.open.bind(this));
		}
		this.elem.addEventListener('click', function(e) {
			if (!e.target.closest('.' + this.elemName + '__wrapper')) this.closeAll();
		}.bind(this));
		let closeButtons = this.elem.querySelectorAll('.' + this.elemName + '__close-button');
		for (let i = 0; i < closeButtons.length; i++) {
			closeButtons[i].addEventListener('click', this.closeThis.bind(this));
		}
		this.on = params.on || {};
	},
	open: function(e){
		if (this.refs.translock.check(this.timeout)) return;
		e.preventDefault();
		let modalName = e.currentTarget.getAttribute('href').replace('#','');
		let currentModal = this.elem.querySelector('#' + modalName);
		currentModal.classList.add('_open');
		if (this.on[currentModal.id] && this.on[currentModal.id].open) this.on[currentModal.id].open(e);
		modal.check();
	},
	closeThis: function(e){
		if (this.refs.translock.check(this.timeout)) return;
		let currentModal = e.target.closest('.' + this.elemName + '__window');
		currentModal.classList.remove('_open');
		if (this.on[currentModal.id] && this.on[currentModal.id].close) this.on[currentModal.id].close(e);
		modal.check();
	},
	closeAll: function(){
		if (this.refs.translock.check(this.timeout)) return;
		for (let i = 0; i < this.windows.length; i++) {
			if (this.windows[i].classList.contains('_open')) {
				this.windows[i].classList.remove('_open');
				if (this.on[this.windows[i].id] && this.on[this.windows[i].id].close) this.on[this.windows[i].id].close();
			}
		}
		modal.check();
	},
	check: function(){
		let openedWindows = 0;
		for (let i = 0; i < this.windows.length; i++) {
			if (this.windows[i].classList.contains('_open')) openedWindows++;
		}
		if (openedWindows) {
			this.elem.classList.add('_visible');
			this.refs.scrlock.lock();
		}
		else {
			this.elem.classList.remove('_visible');
			this.refs.scrlock.unlock(this.timeout);
		}
	}
}