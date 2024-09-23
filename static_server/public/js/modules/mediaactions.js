CNVS.MediaActions = function() {
	var __core = SEMICOLON.Core;

	var _pauseEv = ['ended', 'error', 'pause', 'seeking', 'waiting'];
	var _playEv = ['play', 'playing', 'timeupdate'];

	var _volume = function(mediaEl) {
		var mediaWrap = mediaEl.closest('.media-wrap');

		if( mediaEl.volume < 0.1 || mediaEl.muted == true ) {
			mediaWrap.classList.add('media-is-muted');
		} else {
			mediaWrap.classList.remove('media-is-muted');
		}
	};

	var _time = function(duration) {
		var minutes = (duration / 60).toFixed(0);
		var seconds = (duration % 60).toFixed(0);

		return minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
	};

	return {
		init: function(selector) {
			if( __core.getSelector(selector, false, false).length < 1 ){
				return true;
			}

			__core.initFunction({ class: 'has-plugin-mediaactions', event: 'pluginMediaActionsReady' });

			selector = __core.getSelector( selector, false );
			if( selector.length < 1 ){
				return true;
			}

			selector.forEach( function(mediaWrap) {
				var mediaEl = mediaWrap.querySelector('video,audio');
				var mediaTrigger = mediaWrap.querySelector('.media-trigger-playback');
				var volumeTrigger = mediaWrap.querySelector('.media-trigger-volume');
				var mediaDuration = mediaWrap.querySelector('.media-duration');

				if( !mediaEl ) {
					return true;
				}

				_pauseEv.forEach( function(_event) {
					mediaEl.addEventListener(_event, function(){
						mediaWrap.classList.remove('media-is-playing');
						_volume(mediaEl);
					});
				});

				_playEv.forEach( function(_event) {
					mediaEl.addEventListener(_event, function(){
						mediaWrap.classList.add('media-is-playing');
						_volume(mediaEl);

						if( mediaDuration ) {
							mediaDuration.innerHTML = _time(mediaEl.currentTime);
						}
					});
				});

				mediaEl.addEventListener('volumechange', function(){
					_volume(mediaEl);
				});

				var ifLoaded = setInterval( function(){
					if( mediaEl.readyState === 4 ) {
						if( mediaDuration ) {
							mediaDuration.innerHTML = _time(mediaEl.duration);
						}

						clearInterval(ifLoaded);
					}
				}, 1000);

				if( mediaTrigger ) {
					mediaTrigger.onclick = function(e) {
						e.preventDefault();

						if (mediaEl.paused) {
							mediaEl.play();
						} else {
							mediaEl.pause();
						}
					};
				}

				if( volumeTrigger ) {
					volumeTrigger.onclick = function(e) {
						e.preventDefault();

						if (mediaEl.muted) {
							mediaEl.muted = false;
						} else {
							mediaEl.muted = true;
						}
					};
				}
			});
		}
	};
}();
