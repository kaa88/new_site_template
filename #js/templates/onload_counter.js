// Onload counter
function OnloadCounter(goal = 1000, timeout = 1, resultElem = '.counter') { 
	this.goal = goal; // number
	this.timeout = timeout; // seconds
	this.increment = this.goal / (this.timeout * 1000);
	this.resultElem = document.querySelector(resultElem);
}
OnloadCounter.prototype.startCounter = function() {
	let o = this;
	o.startDate = new Date().valueOf();
	o.timerId = setInterval(function(){
		o.counter = Math.floor((new Date().valueOf() - o.startDate) * o.increment);
		o.resultElem.innerHTML = o.counter;
	}, 11);
	setTimeout(function(){
		clearInterval(o.timerId);
		o.resultElem.innerHTML = o.goal;
	}, o.timeout * 1000);
}

let onloadCounter1 = new OnloadCounter(51806, 1 , '.test-counter--1');
let onloadCounter2 = new OnloadCounter(35704, 2 , '.test-counter--2');
// /
