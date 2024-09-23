CNVS.HoverAnimations = function() {
	var __core = SEMICOLON.Core;

	var _t, _x;

	var _showOverlay = function(params) {
		clearTimeout(_x);

		_t = setTimeout( function() {
			params.element.classList.add( 'not-animated' );

			(params.elAnimateOut + ' not-animated').split(" ").forEach( function(_class) {
				params.element.classList.remove(_class);
			});

			(params.elAnimate + ' animated').split(" ").forEach( function(_class) {
				params.element.classList.add(_class);
			});
		}, params.elDelayT );
	};

	var _hideOverlay = function(params) {
		params.element.classList.add( 'not-animated' );

		(params.elAnimate + ' not-animated').split(" ").forEach( function(_class) {
			params.element.classList.remove(_class);
		});

		(params.elAnimateOut + ' animated').split(" ").forEach( function(_class) {
			params.element.classList.add(_class);
		});

		if( params.elReset == 'true' ) {
			_x = setTimeout( function() {
				(params.elAnimateOut + ' animated').split(" ").forEach( function(_class) {
					params.element.classList.remove(_class);
				});

				params.element.classList.add( 'not-animated' );
			}, Number( params.elSpeed ) );
		}

		clearTimeout(_t);
	};

	var _isInsideElement = function(touch){
		var rect = element.getBoundingClientRect();

		return (
			touch.clientX >= rect.left &&
			touch.clientX <= rect.right &&
			touch.clientY >= rect.top &&
			touch.clientY <= rect.bottom
		);
	};

	return {
		init: function(selector) {
			if( __core.getSelector(selector, false, false).length < 1 ){
				return true;
			}

			__core.initFunction({ class: 'has-plugin-hoveranimation', event: 'pluginHoverAnimationReady' });

			selector = __core.getSelector( selector, false );
			if( selector.length < 1 ){
				return true;
			}

			selector.forEach( function(element) {
				var elAnimate = element.getAttribute( 'data-hover-animate' ),
					elAnimateOut = element.getAttribute( 'data-hover-animate-out' ) || 'fadeOut',
					elSpeed = element.getAttribute( 'data-hover-speed' ) || 600,
					elDelay = element.getAttribute( 'data-hover-delay' ),
					elParent = element.getAttribute( 'data-hover-parent' ),
					elReset = element.getAttribute( 'data-hover-reset' ) || 'false',
					elMobile = element.getAttribute( 'data-hover-mobile' ) || 'true';

				if( elMobile != 'true' ) {
					if( elMobile == 'false' ) {
						if( !__core.getVars.elBody.classList.contains('device-up-lg') ) {
							return true;
						}
					} else {
						if( !__core.getVars.elBody.classList.contains('device-up-' + elMobile) ) {
							return true;
						}
					}
				}

				element.classList.add( 'not-animated' );

				if( !elParent ) {
					if( element.closest( '.bg-overlay' ) ) {
						elParent = element.closest( '.bg-overlay' );
					} else {
						elParent = element;
					}
				} else {
					if( elParent == 'self' ) {
						elParent = element;
					} else {
						elParent = element.closest( elParent );
					}
				}

				var elDelayT = 0;

				if( elDelay ) {
					elDelayT = Number( elDelay );
				}

				if( elSpeed ) {
					element.style.animationDuration = Number( elSpeed ) + 'ms';
				}

				var params = {
					element: element,
					elAnimate: elAnimate,
					elAnimateOut: elAnimateOut,
					elSpeed: elSpeed,
					elDelayT: elDelayT,
					elParent: elParent,
					elReset: elReset,
				}

				elParent.addEventListener( 'mouseenter', function(){
					_showOverlay(params);
				}, false);

				elParent.addEventListener( 'mouseleave', function(){
					_hideOverlay(params);
				}, false);

				// elParent.addEventListener( 'touchstart', function(e){
				// 	e.preventDefault();

				// 	_showOverlay(params);

				// 	elParent.addEventListener('touchmove', function(e){
				// 		if (!_isInsideElement(e.touches[0])) {
				// 			_hideOverlay(params);
				// 			elParent.removeEventListener('touchmove');
				// 		}
				// 	});

      			// 	elParent.addEventListener('touchend', function(){
				// 		_hideOverlay(params);
				// 		elParent.removeEventListener('touchmove');
				// 		elParent.removeEventListener('touchend');
				// 	});
				// });
			});
		}
	};
}();
