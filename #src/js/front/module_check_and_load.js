const moduleCheckAndLoad = {
	init: function(params = {}) {
		if (params.delayed && params.delayed.length > 0) 
			window.addEventListener('load', () => {this.check(params.delayed)});
		if (params.instant && params.instant.length > 0) this.check(params.instant);
	},
	check: function(arr) {
		for (let i = 0; i < arr.length; i++) {
			if (document.querySelector(arr[i][0])) arr[i][1]();
		}
	}
}