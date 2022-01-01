const swiperCustoms = {

	settings: {

		banner: {
			name: 'banner',
			cls: '.banner__swiper',
			init: function(that) {
				that.swipers[this.name] = new Swiper(this.cls, this.swiperParams)
			},
			swiperParams: {
				navigation: {
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next'
				},
				slidesPerView: 3,
				loop: true,
				spaceBetween: 11,
				speed: 500,
				slidesOffsetBefore: 15,
				breakpoints: {
					910: {
						spaceBetween: 30,
						slidesOffsetBefore: 0
					},
				}
			}
		},

	},

	swipers: {},
	initNewSwiper: function(cls) {
		if (cls) {
			for (let target in this.settings) {
				if (this.settings[target].cls == cls) {
					this.settings[target].init(this);
					break;
				}
			}
		}
	},
	initVirtual: function(name, cls, data, lazy, retina) {
		function setParam(elem, dataset, data) {
			switch(dataset) {
				case 'elem': 
					elem.dataset.type = data.type;
					if (cls) elem.classList.add(cls); 
					break;
				case 'title': elem.innerHTML = data.title; break;
				case 'date': elem.innerHTML = data.date; break;
				case 'loc': elem.innerHTML = data.location; break;
				case 'descr': elem.innerHTML = data.description; break;
				case 'text': elem.innerHTML = data.text; break;
				case 'link': 
					if (name == 'news' && cls != '--white')
						elem.classList.add('--white');
					elem.setAttribute('href', data.link);
					break;
				case 'img': 
					if (lazy) {
						elem.dataset.src = data.imgLink;
						if (retina) elem.dataset.srcset = data.imgLink.replace('.','@2x.') + ' 2x';
					}
					else {
						elem.src = data.imgLink;
						if (retina) elem.srcset = data.imgLink.replace('.','@2x.') + ' 2x';
					}
					break;
				case 'video':
					if (!data.video || data.video == '')
						elem.classList.add('--hidden');
					break;
			}
		}
		function scan(elem, data) {
			for (let j = 0; j < elem.children.length; j++) {
				scan(elem.children[j], data);
				if (elem.children[j].dataset.pattern) 
					setParam(elem.children[j], elem.children[j].dataset.pattern, data);
			}
		}
		if (!this.slidePattern[name]) return;
		let slide = [];
		for (let i = 0; i < data.length; i++) {
			if (i == 0 && cls == '--medium') continue;
			let clone = this.slidePattern[name].cloneNode(true);
			scan(clone, data[i]);
			slide.push(clone.innerHTML);
		}
		if (cls == '--medium') slide.push('<div class="empty-slide"></div>');
		return slide;
	},
	paginationFormat: function(num) {
		if (num < 10) return '0' + num;
		else return num;
	},
	// Opera loads images inside Swiper not like I want.
	// So I remove 'html loading lazy' in case that Swiper loads lazy.
	removeLazy: function(cls) {
		let images = document.querySelectorAll(cls + ' img');
		for (let i = 0; i < images.length; i++) {
			images[i].removeAttribute('loading');
		}
	},
}