let transitionLock = {
	locked: false,
	check: function(timeout = 0) {
		let result = transitionLock.locked;
		if (transitionLock.locked == false) {
			transitionLock.locked = true;
			setTimeout(function(){
				transitionLock.locked = false;
			}, timeout);
		}
		return result;
	}
}