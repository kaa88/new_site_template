let mobileSwitch = {state: false, prev_state: false};
mobileSwitch.check = function(init) {
	let o = mobileSwitch;
	if (window.innerWidth <= mobileSwitchWidth) o.state = true;
	else o.state = false;
	if (o.state != o.prev_state && init != true) o.do();
	o.prev_state = o.state;
}
window.addEventListener('resize', mobileSwitch.check);
mobileSwitch.check(true);