function InputRange(params) {
	this.elemName = params.elemName || 'input-range';
	this.input = document.querySelector('.' + this.elemName + ' input');
	if (!this.input) return;

	this.styleElem = document.createElement('style');
	this.input.parentElement.appendChild(this.styleElem);

	this.trackColorStart = params.trackColorStart || 'var(--track-color-start)';
	this.trackColorEnd = params.trackColorEnd || 'var(--track-color-end)';

	this.input.addEventListener('input', this.fillTrack.bind(this));
	this.input.addEventListener('change', this.fillTrack.bind(this));
	this.fillTrack();
}
InputRange.prototype.fillTrack = function(e) {
	if (e) this.input.setAttribute('value', this.input.value);
	let cssNameWebkit = '.' + this.elemName + ' input::-webkit-slider-runnable-track';
	let cssNameMoz = '.' + this.elemName + ' input::-moz-range-track';
	let cssStyle = '{background: linear-gradient(to right,' + this.trackColorStart + ' ' + this.input.value + '%,' + this.trackColorEnd + ' ' + this.input.value + '%);}';
	this.styleElem.innerHTML = cssNameWebkit + cssStyle + cssNameMoz + cssStyle;
}
// This func removes style element. It is useful e.g. on swiper slide.
InputRange.prototype.destroy = function() {
	if (this.input) {
		let styleElem = this.input.parentElement.querySelector('style');
		styleElem.parentElement.removeChild(styleElem);
	}
}