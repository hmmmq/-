CNVS.ViewportDetect = function() {
	var __core = SEMICOLON.Core;

	var _setBSTheme = function(target) {
		if( target.classList.contains('dark') ) {
			target.setAttribute('data-bs-theme', 'dark');
		} else {
			target.removeAttribute('data-bs-theme');
		}
	};

	return {
		init: function(selector) {
			if( __core.getSelector(selector, false, false).length < 1 ){
				return true;
			}

			__core.initFunction({ class: 'has-plugin-viewportdetect', event: 'pluginViewportDetectReady' });

			selector = __core.getSelector( selector, false );
			if( selector.length < 1 ){
				return true;
			}

			selector.forEach( function(el) {
				var elDelay = el.getAttribute('data-delay') || 0;
				var elClass = el.getAttribute('data-viewport-class') || "";
				var elClassOut = el.getAttribute('data-viewport-class-out') || "";
				var elClassTarget = el.getAttribute('data-viewport-class-target');
				var elThreshold = el.getAttribute('data-viewport-threshold') || "0";
				var elRootMargin = el.getAttribute('data-viewport-rootmargin') || "0px";

				elClass = elClass.split(" ");
				elClassOut = elClassOut.split(" ");

				var hasDark = false;

				if( elClass.includes('dark') || elClassOut.includes('dark') ) {
					hasDark = true;
				}

				elClassTarget = elClassTarget ? document.querySelector(elClassTarget) : false;

				var observer = new IntersectionObserver( function(el) {
					el.forEach( function(entry) {
						var elTarget = entry.target;

						if( !elClassTarget ) {
							elClassTarget = elTarget;
						}

						if( entry.isIntersecting ) {
							setTimeout( function() {
								elTarget.classList.add('is-in-viewport');

								elClass.forEach( function(_class) {
									_class && elClassTarget.classList.add(_class);
								});

								elClassOut.forEach( function(_class) {
									_class && elClassTarget.classList.remove(_class);
								});

								hasDark && _setBSTheme(elClassTarget);
							}, Number(elDelay));
						} else {
							elTarget.classList.remove('is-in-viewport');

							elClass.forEach( function(_class) {
								_class && elClassTarget.classList.remove(_class);
							});

							elClassOut.forEach( function(_class) {
								_class && elClassTarget.classList.add(_class);
							});

							hasDark && _setBSTheme(elClassTarget);
						}
					});
				}, {
					threshold: parseFloat(elThreshold),
					rootMargin: elRootMargin,
				});

				observer.observe(el);
			});
		}
	};
}();
