mobileSwitch.state = mobileSwitch.prev_state = false;
mobileSwitch.check = function() {
	let o = mobileSwitch;
	if (window.innerWidth <= o.switchWidth) o.state = true;
	else o.state = false;
	if (o.state != o.prev_state) o.do();
	o.prev_state = o.state;
}
window.addEventListener('resize', mobileSwitch.check);