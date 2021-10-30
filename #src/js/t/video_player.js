let videoPlayer = {};
// Functions are useful with swiper slides
// To do: constructor.
videoPlayer.create = function() {
	videoPlayer.video = document.querySelector('.video-player video');
	videoPlayer.window = document.querySelector('.video-controls');
	videoPlayer.playArea = document.querySelector('.video-controls__area');
	videoPlayer.playAreaBtn = document.querySelector('.video-controls__area-btn');
	videoPlayer.panel = document.querySelector('.video-controls__panel');
	videoPlayer.playBtn = document.querySelector('.video-controls__play-pause');
	videoPlayer.seekBar = document.querySelector('.video-controls__seek-bar input');
	videoPlayer.volBtn = document.querySelector('.video-controls__volume-btn');
	videoPlayer.volBar = document.querySelector('.video-controls__volume-bar input');

	videoPlayer.hidingTimeout = 0;
	if (!videoPlayer.window) return;

	videoPlayer.window.addEventListener('mouseover', videoPlayer.showOnMouseover);
	videoPlayer.window.addEventListener('mouseleave', videoPlayer.hideOnMouseleave);

	videoPlayer.playArea.addEventListener("click", videoPlayer.play);
	videoPlayer.playBtn.addEventListener("click", videoPlayer.play);

	videoPlayer.video.addEventListener("timeupdate", videoPlayer.seekBarUpdate);
	videoPlayer.seekBar.addEventListener("mousedown", videoPlayer.seekBarMousedown);
	videoPlayer.seekBar.addEventListener("mouseup", videoPlayer.seekBarMouseup);
	videoPlayer.seekBar.addEventListener("change", videoPlayer.seekBarChange);

	videoPlayer.video.volume = videoPlayer.volBar.value / 100;
	videoPlayer.volBtn.addEventListener("click", videoPlayer.mute);
	videoPlayer.volBar.addEventListener("input", videoPlayer.setVolume);
}
videoPlayer.destroy = function() {
	if (!videoPlayer.window) return;

	videoPlayer.window.removeEventListener('mouseover', videoPlayer.showOnMouseover);
	videoPlayer.window.removeEventListener('mouseleave', videoPlayer.hideOnMouseleave);

	videoPlayer.playArea.removeEventListener("click", videoPlayer.play);
	videoPlayer.playBtn.removeEventListener("click", videoPlayer.play);

	videoPlayer.video.removeEventListener("timeupdate", videoPlayer.seekBarUpdate);
	videoPlayer.seekBar.removeEventListener("mousedown", videoPlayer.seekBarMousedown);
	videoPlayer.seekBar.removeEventListener("mouseup", videoPlayer.seekBarMouseup);
	videoPlayer.seekBar.removeEventListener("change", videoPlayer.seekBarChange);

	videoPlayer.volBtn.removeEventListener("click", videoPlayer.mute);
	videoPlayer.volBar.removeEventListener("input", videoPlayer.setVolume);
}

videoPlayer.showOnMouseover = function() {
	videoPlayer.panel.classList.remove('_hidden');
	clearTimeout(videoPlayer.hidingTimeout);
}
videoPlayer.hideOnMouseleave = function() {
	if (!videoPlayer.video) return;
	if (videoPlayer.video.paused == false && videoPlayer.seekBar.value != 0) {
		videoPlayer.hidingTimeout = setTimeout(function() {
			if (videoPlayer.panel) videoPlayer.panel.classList.add('_hidden');
		}, 2000);
	}
}
videoPlayer.play = function(e, slider) {
	if (!videoPlayer.video) return;
	if (videoPlayer.video.paused == true) {
		if (slider) return;
		videoPlayer.video.play();
		// videoPlayer.playBtn.children[0].className = "icon-pause";
		videoPlayer.playAreaBtn.classList.add('_hidden');
		// banner_swiper.detachEvents();
	} else {
		videoPlayer.video.pause();
		// videoPlayer.playBtn.children[0].className = "icon-play";
		videoPlayer.playAreaBtn.classList.remove('_hidden');
		// banner_swiper.attachEvents();
	}
}
videoPlayer.seekBarUpdate = function() {
	let value = (100 / videoPlayer.video.duration) * videoPlayer.video.currentTime;
	videoPlayer.seekBar.value = value;
	videoPlayer.seekBar.dispatchEvent(new Event('input'));
}
videoPlayer.seekBarMousedown = function() {
	videoPlayer.video.removeEventListener("timeupdate", videoPlayer.seekBarUpdate);
}
videoPlayer.seekBarMouseup = function() {
	videoPlayer.video.addEventListener("timeupdate", videoPlayer.seekBarUpdate);
}
videoPlayer.seekBarChange = function() {
	let time = videoPlayer.video.duration * (videoPlayer.seekBar.value / 100);
	videoPlayer.video.currentTime = time;
}
videoPlayer.mute = function() {
	if (videoPlayer.video.muted == false) {
		videoPlayer.video.muted = true;
		videoPlayer.volBtn.classList.add('_off');
		videoPlayer.volBar.value = 0;
		videoPlayer.volBar.dispatchEvent(new Event('change'));
	} else {
		videoPlayer.video.muted = false;
		videoPlayer.volBtn.classList.remove('_off');
		videoPlayer.volBar.value = videoPlayer.video.volume * 100;
		videoPlayer.volBar.dispatchEvent(new Event('change'));
	}
}
videoPlayer.setVolume = function() {
	videoPlayer.video.volume = videoPlayer.volBar.value / 100;
}
videoPlayer.create();