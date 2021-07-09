// Onload counter
let onloadCounter1 = new OnloadCounter(51806, 1 , '.test-counter1');
let onloadCounter2 = new OnloadCounter(35704, 2 , '.test-counter2');

function OnloadCounter(goal = 1000, timeout = 1, resultElem = '.counter') { 
	// constructor
	this.goal = goal; // number
	this.timeout = timeout; // seconds
	this.resultElem = document.querySelector(resultElem);
	this.increment = this.goal / (this.timeout * 1000);
	this.startCounter = startCounter;
}
function startCounter() {
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
// /
