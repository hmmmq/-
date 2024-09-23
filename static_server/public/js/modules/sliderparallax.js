CNVS.SliderParallax = function() {
	var __core = SEMICOLON.Core;
	var __mobile = SEMICOLON.Mobile;

	var _settings;
	var	_transform;
	var _transform2;

	var _parallax = function(_settings) {
		if( !_settings.sliderPx.el ) {
			return true;
		}

		fastdom.measure( function(){
			_settings.scrollPos.y = window.scrollY;

			if( _settings.body.classList.contains('is-expanded-menu') && !_settings.isMobile ) {
				if( ( _settings.height + _settings.sliderPx.offset + 50 ) > _settings.scrollPos.y ){
					_settings.classes.add('slider-parallax-visible');
					_settings.classes.remove('slider-parallax-invisible');
					if ( _settings.scrollPos.y > _settings.sliderPx.offset ) {
						if( typeof _settings.sliderPx.el.querySelector('.slider-inner') === 'object' ) {
							_transform = ((_settings.scrollPos.y-_settings.sliderPx.offset) * -.4);
							_transform2 = ((_settings.scrollPos.y-_settings.sliderPx.offset) * -.15);

							_setParallax(0, _transform, _settings.sliderPx.inner);
							_setParallax(0, _transform2, _settings.sliderPx.caption);
						} else {
							_transform = ((_settings.scrollPos.y-_settings.sliderPx.offset) / 1.5);
							_transform2 = ((_settings.scrollPos.y-_settings.sliderPx.offset) / 7);

							_setParallax(0, _transform, _settings.sliderPx.el);
							_setParallax(0, _transform2, _settings.sliderPx.caption);
						}
					} else {
						if( _settings.sliderPx.el.querySelector('.slider-inner') ) {
							_setParallax(0, 0, _settings.sliderPx.inner);
							_setParallax(0, 0, _settings.sliderPx.caption);
						} else {
							_setParallax(0, 0, _settings.sliderPx.el);
							_setParallax(0, 0, _settings.sliderPx.caption);
						}
					}
				} else {
					_settings.classes.add('slider-parallax-invisible');
					_settings.classes.remove('slider-parallax-visible');
				}
			} else {
				if( _settings.sliderPx.el.querySelector('.slider-inner') ) {
					_setParallax(0, 0, _settings.sliderPx.inner);
					_setParallax(0, 0, _settings.sliderPx.caption);
				} else {
					_setParallax(0, 0, _settings.sliderPx.el);
					_setParallax(0, 0, _settings.sliderPx.caption);
				}

				_settings.classes.add('slider-parallax-visible');
				_settings.classes.remove('slider-parallax-invisible');
			}
		});
	};

	var _offset = function() {
		var sliderPx = __core.getVars.sliderParallax;

		var sliderParallaxOffsetTop = 0,
			headerHeight = __core.getVars.elHeader?.offsetHeight || 0;

		if( __core.getVars.elBody.classList.contains('side-header') || (__core.getVars.elHeader && __core.getNext(__core.getVars.elHeader, '.include-header').length > 0) ) {
			headerHeight = 0;
		}

		// if( $pageTitle.length > 0 ) {
		// 	sliderParallaxOffsetTop = $pageTitle.outerHeight() + headerHeight - 20;
		// } else {
		// 	sliderParallaxOffsetTop = headerHeight - 20;
		// }

		if( __core.getNext(__core.getVars.elSlider, '#header').length > 0 ) {
			sliderParallaxOffsetTop = 0;
		}

		sliderPx.offset = sliderParallaxOffsetTop;
	};

	var _setParallax = function(xPos, yPos, el) {
		if( el ) {
			fastdom.mutate( function(){
				el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
			});
		}
	};

	var _elementFade = function(_settings) {
		if( _settings.sliderPx.el.length < 1 ) {
			return true;
		}

		fastdom.mutate( function(){
			if( _settings.body.classList.contains('is-expanded-menu') && !_settings.isMobile ) {
				var tHeaderOffset;

				if( (_settings.header && _settings.header.classList.contains('transparent-header')) || _settings.body.classList.contains('side-header') ) {
					tHeaderOffset = 100;
				} else {
					tHeaderOffset = 0;
				}

				if( _settings.sliderPx.el.classList.contains('slider-parallax-visible') ) {
					_settings.sliderPx.el.querySelectorAll('.slider-arrow-left,.slider-arrow-right,.slider-caption,.slider-element-fade').forEach( function(el) {
						el.style.opacity = 1 - ( ( ( _settings.scrollPos.y - tHeaderOffset ) * 1.85 ) / _settings.height );
					});
				}
			} else {
				_settings.sliderPx.el.querySelectorAll('.slider-arrow-left,.slider-arrow-right,.slider-caption,.slider-element-fade').forEach( function(el) {
					el.style.opacity = 1;
				});
			}
		});
	};

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

				_settings = {
					sliderPx: __core.getVars.sliderParallax,
					body: __core.getVars.elBody,
					header: __core.getVars.elHeader,
					scrollPos: __core.getVars.scrollPos,
					isMobile: __mobile.any(),
					get height() {
						return this.sliderPx.el.offsetHeight;
					},
					get classes() {
						return this.sliderPx.el.classList;
					},
				};

				if( _settings.sliderPx.el.querySelector('.slider-inner') ) {
					_setParallax(0, 0, _settings.sliderPx.inner);
					_setParallax(0, 0, _settings.sliderPx.caption);
				} else {
					_setParallax(0, 0, _settings.sliderPx.el);
					_setParallax(0, 0, _settings.sliderPx.caption);
				}

				window.addEventListener('scroll', function(){
					_parallax(_settings);
					_elementFade(_settings);
				}, {passive:true});

				__core.getVars.resizers.sliderparallax = function() {
					_parallax(_settings);
					_elementFade(_settings);
				};
			});
		}
	};
}();
