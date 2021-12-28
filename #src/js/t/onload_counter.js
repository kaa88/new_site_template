function OnloadCounter(goal = 1000, timeout = 1, resultElem = '.counter') { 
	this.goal = goal;
	this.timeout = timeout;
	this.increment = this.goal / (this.timeout * 1000);
	this.resultElem = document.querySelector(resultElem);
}
OnloadCounter.prototype.startCounter = function() {
	if (!this.resultElem) return;
	let that = this;
	that.startDate = new Date().valueOf();
	that.timerId = setInterval(function(){
		that.counter = Math.floor((new Date().valueOf() - that.startDate) * that.increment);
		that.resultElem.innerHTML = that.counter;
	}, 11);
	setTimeout(function(){
		clearInterval(that.timerId);
		that.resultElem.innerHTML = that.goal;
	}, that.timeout * 1000);
}