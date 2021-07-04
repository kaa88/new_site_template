// Onload counter
var timerId, timeout = 1, startDate;
var counter = 0, goal = 51806, increment = goal / (timeout * 1000); 
var counterElem = document.querySelector('.counter');

function startCounter() {
	startDate = new Date().valueOf();
	timerId = setInterval(editCounter, 11);
	setTimeout(function(){
		clearInterval(timerId)
		counterElem.innerHTML = goal;
	}, timeout * 1000);
}
function editCounter() {
	counter = Math.floor((new Date().valueOf() - startDate) * increment);
	counterElem.innerHTML = counter;
}
function clearCounter() {
	counter = 0;
	counterElem.innerHTML = counter;
}
// /

// заметить кнопки на onload