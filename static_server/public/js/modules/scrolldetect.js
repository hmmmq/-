CNVS.ScrollDetect = function() {
	var __core = SEMICOLON.Core;

	var _detects = [];

	var _percent = function(params) {
		var percent = 0,
			ratio = 0,
			start = 0,
			end = 0;

		var onScroll = function(params) {
			fastdom.measure( function(){
				var position = window.scrollY;

				if( position >= params.start && position <= params.end ) {
					var startViewScroll = position - params.start;
					var offsetScroll = position - params.offset;
					percent = (startViewScroll / params.range.full) * 100;
					start = (startViewScroll / params.range.start);

					if( position > (params.start + params.height) && position < (params.offset) ) {
						start = 1;
						end = 0;
					} else if( position >= (params.offset) ) {
						start = 1;
						end = (offsetScroll / params.range.end);
					} else {
						end = 0;
					}

					ratio = start - end;
				} else if( position > params.end ) {
					percent = 100;
					ratio = 0;
					start = end = 1;
				} else {
					percent = ratio = start = end = 0;
				}

				if( ratio > 0 ) {
					params.elem.classList.add('scroll-detect-inview');
				} else {
					params.elem.classList.remove('scroll-detect-inview');
				}

				if( start > 0 && start < 1 ) {
					params.elem.classList.add('scroll-detect-inview-start');
				} else {
					params.elem.classList.remove('scroll-detect-inview-start');
				}

				if( end > 0 && end < 1 ) {
					params.elem.classList.add('scroll-detect-inview-end');
				} else {
					params.elem.classList.remove('scroll-detect-inview-end');
				}

				params.elem.style.setProperty('--cnvs-scroll-percent', percent);
				params.elem.style.setProperty('--cnvs-scroll-ratio', ratio);
				params.elem.style.setProperty('--cnvs-scroll-start', start);
				params.elem.style.setProperty('--cnvs-scroll-end', end);
			});
		};

		onScroll(params);
	};

	var _handle = function() {
		_detects.forEach( function(settings) {
			_percent(settings);
		});
	}

	return {
		init: function(selector) {
			if( __core.getSelector(selector, false, false).length < 1 ){
				return true;
			}

			__core.loadJS({ file: 'plugins.fastdom.js', id: 'canvas-fastdom-js', jsFolder: true });

			__core.isFuncTrue( function() {
				return typeof fastdom !== 'undefined';
			}).then( function(cond) {
				if( !cond ) {
					return false;
				}

				__core.initFunction({ class: 'has-plugin-scrolldetect', event: 'pluginScrollDetectReady' });

				selector = __core.getSelector( selector, false );
				if( selector.length < 1 ){
					return true;
				}

				var resizeObserver = new ResizeObserver( function(entries) {
					entries.forEach( function(entry) {
						if( !doing ) {
							var doing = setTimeout( function() {
								initParams(selector);
								doing = false;
							}, 333);
						}
					});
				});

				var initParams = function(selector) {
					_detects = [];

					selector.forEach( function(elem) {
						var elemWidth = elem.offsetWidth,
							elemHeight = elem.offsetHeight,
							elemOffset = __core.offset(elem).top,
							viewportHeight = __core.getVars.viewport.height,
							includeWidth = elem.getAttribute('data-include-width'),
							includeHeight = elem.getAttribute('data-include-height'),
							includeOffset = elem.getAttribute('data-include-offset'),
							scrollOffset = elem.getAttribute('data-scroll-offset'),
							parallaxRatio = elem.getAttribute('data-parallax-ratio'),
							params = {};

						if( scrollOffset ) {
							scrollOffset = scrollOffset.split('%');

							if( scrollOffset.length > 1 ) {
								elemOffset = elemOffset + (viewportHeight * Number(scrollOffset[0]) * 0.01);
							} else if( scrollOffset.length == 1 && scrollOffset[0] ) {
								elemOffset = elemOffset + Number(scrollOffset[0]);
							}
						}

						var scrollStart = elemOffset - viewportHeight,
							scrollEnd = elemOffset + elemHeight,
							scrollRange = scrollEnd - scrollStart;

						params.elem = elem;
						params.start = scrollStart;
						params.end = scrollEnd;
						params.range = {
							start: elemHeight,
							end: elemHeight,
							full: scrollRange,
						};
						params.width = elemWidth;
						params.height = elemHeight;
						params.offset = elemOffset;

						if( includeWidth == 'true' || (elem.classList.contains('parallax') && elem.getAttribute('data-parallax-direction') == 'horizontal') ) {
							elem.style.setProperty('--cnvs-scroll-width', params.width);
						}

						if( includeHeight == 'true' || (elem.classList.contains('parallax') && elem.getAttribute('data-parallax-direction') != 'horizontal') ) {
							elem.style.setProperty('--cnvs-scroll-height', params.height);
						}

						if( includeOffset == 'true' ) {
							elem.style.setProperty('--cnvs-scroll-offset', params.offset);
						}

						if( !isNaN(parallaxRatio) ) {
							elem.style.setProperty('--cnvs-parallax-ratio', parallaxRatio);
						}

						_percent(params);
						_detects.push(params);

						resizeObserver.observe(elem);
					});
				};

				initParams(selector);
				_handle();

				// var ticking = false;
				window.addEventListener("scroll", function(){
					fastdom.mutate( function(){
						_handle();
					});
					// if (!ticking) {
					// 	window.requestAnimationFrame( function(){
					// 		_handle();
					// 		ticking = false;
					// 	});
					// 	ticking = true;
					// }
				}, {passive: true});

				resizeObserver.observe(document.documentElement);
			});
		}
	};
}();
