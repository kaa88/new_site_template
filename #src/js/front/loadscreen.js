const loadscreen = {
	init: function(params = {}) {
		document.body.classList.add('_locked');
		window.addEventListener('load', () => {
			setTimeout(() => {
				document.body.classList.remove('_locked');
				if (params.scrollToTop) window.scrollTo({top: 0, behavior: 'instant'});
				document.querySelector('.loadscreen').classList.remove('_locked');
			}, params.timeout || 0)
		})
	}
}