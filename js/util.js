let playAll = function(...audios) {
	for(let i = 0; i < audios.length; i++) {
		audios[i].addEventListener('ended', function () {
			audios[(i+1)%audios.length].play();
		}, true);
	}
	window.onmousedown = function() {
		audios[0].play();
	}
}