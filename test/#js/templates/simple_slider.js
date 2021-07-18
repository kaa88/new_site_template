// Top Slider
var slides = document.querySelectorAll('.slide');
var pagination = document.querySelectorAll('.pagination__item');
var paginationLine = document.querySelector('.pagination__line');
var paginationLineInner = document.querySelector('.pagination__line-inner');
var paginationLinePositions = [], paginationLineCurrentPosition = 0;
var timerID;

for (var i = 0; i < pagination.length; i++) {
	pagination[i].addEventListener('click', switchSlide);
}
window.addEventListener('resize', paginationLineInit);
paginationLineInit();

function paginationLineInit() {
	for (var i = 0; i < pagination.length; i++) {
		paginationLinePositions[i] = 0 + (1 / pagination.length * i) * paginationLine.clientWidth + 4 + 'px';
	}
	movePaginationLine();
}

function movePaginationLine() {
	paginationLineInner.style.left = paginationLinePositions[paginationLineCurrentPosition];
}

function switchSlide(event, slideNum) {
	if (!slideNum && this.classList.contains('_active')) return;
	for (var i = 0; i < pagination.length; i++) {
		pagination[i].classList.remove('_active');
		slides[i].classList.remove('_active');
	}
	if (!slideNum) {
		this.classList.add('_active');
		clearInterval(timerID);
	}
	else
		pagination[slideNum - 1].classList.add('_active');

	for (var i = 0; i < pagination.length; i++) {
		if (pagination[i].classList.contains('_active')) {
			paginationLineCurrentPosition = i;
			movePaginationLine();
			setTimeout(function(){slides[i].classList.add('_active');}, 100);
			break; // prevent timeout break
		}
	}
}
function intervalSwitch() {
	timerID = setInterval(function(){
		var slideNum;
		for (var i = 1; i <= pagination.length; i++) {
			if (pagination[i - 1].classList.contains('_active')) {
				if (i == pagination.length)
					slideNum = 1;
				else
					slideNum = i + 1;
				break;
			}
		}
		switchSlide(0, slideNum);
	}, 8000);
}
intervalSwitch();
// /
