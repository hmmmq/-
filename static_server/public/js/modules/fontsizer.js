CNVS.FontSizer = function() {
	var __core = SEMICOLON.Core;

	return {
		init: function(selector) {
			if( __core.getSelector(selector, false, false).length < 1 ){
				return true;
			}

			__core.initFunction({ class: 'has-plugin-fontsizer', event: 'pluginFontSizerReady' });

			selector = __core.getSelector( selector, false );
			if( selector.length < 1 ){
				return true;
			}

			selector.forEach( function(elem) {
				var target = elem.getAttribute('data-target');
				var targetEl = document.querySelector(target);
				var step = elem.getAttribute('data-step') || 10;
				var min = elem.getAttribute('data-min') || 12;
				var max = elem.getAttribute('data-max') || 24;
				var defaultSize = Number(document.defaultView.getComputedStyle(targetEl).getPropertyValue('font-size').split('px')[0]);
				var percent = defaultSize * Number(step) * .01;

				var defaultBtn = elem.querySelector('.font-size-default');
				var minusBtn = elem.querySelector('.font-size-minus');
				var plusBtn = elem.querySelector('.font-size-plus');

				if( defaultBtn ) {
					defaultBtn.onclick = function(e) {
						e.preventDefault();
						targetEl.style.fontSize = defaultSize + 'px';
					};
				}

				if( minusBtn ) {
					elem.querySelector('.font-size-minus').onclick = function(e) {
						e.preventDefault();

						var current = Number(document.defaultView.getComputedStyle(targetEl).getPropertyValue('font-size').split('px')[0]);
						var newSize = current - percent;
						if( newSize >= min ) {
							targetEl.style.fontSize = newSize + 'px';
						}
					};
				}

				if( plusBtn ) {
					elem.querySelector('.font-size-plus').onclick = function(e) {
						e.preventDefault();

						var current = Number(document.defaultView.getComputedStyle(targetEl).getPropertyValue('font-size').split('px')[0]);
						var newSize = current + percent;
						if( newSize <= max ) {
							targetEl.style.fontSize = newSize + 'px';
						}
					};
				}
			});
		}
	};
}();
