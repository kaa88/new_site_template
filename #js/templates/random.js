// Random
function getRandom(min, max) {
	if (!min) min = 0;
	if (!max) max = 99;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// /