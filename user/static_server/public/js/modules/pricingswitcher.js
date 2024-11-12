CNVS.PricingSwitcher = function() {
	var __core = SEMICOLON.Core;

	var _staticValue;

	var _switcher = function(check, switcher, pricing, defClass, actClass) {
		var value;

		if( check.type == 'checkbox' ) {
			_staticValue = check.checked;
		} else if( check.type == 'radio' ) {
			if( check.checked ) {
				_staticValue = check.value;
			}
		} else {
			_staticValue = check.value;
		}

		value = _staticValue;

		switcher.querySelectorAll('.pts-switch')?.forEach( function(elem) {
			actClass.split(" ").forEach( function(_class) {
				elem.classList.remove(_class);
			});

			defClass.split(" ").forEach( function(_class) {
				elem.classList.add(_class);
			});
		});

		pricing.querySelectorAll('.pts-content')?.forEach( function(elem) {
			elem.classList.add('d-none');
		});

		if( check.type == 'checkbox' ) {
			value = value ? 'true' : 'false';
		}

		defClass.split(" ").forEach( function(_class) {
			switcher.querySelector('.pts-' + value)?.classList.remove(_class);
		});

		actClass.split(" ").forEach( function(_class) {
			switcher.querySelector('.pts-' + value)?.classList.add(_class);
		});

		pricing.querySelectorAll('.pts-content-' + value).forEach( function(el) {
			el.classList.remove('d-none');
		});
	};

	return {
		init: function(selector) {
			if( __core.getSelector(selector, false, false).length < 1 ){
				return true;
			}

			__core.initFunction({ class: 'has-plugin-pricing-switcher', event: 'pluginPricingSwitcherReady' });

			selector = __core.getSelector( selector, false );
			if( selector.length < 1 ){
				return true;
			}

			selector.forEach( function(element) {
				var elCheck = element.querySelectorAll('[type="checkbox"], [type="radio"], select'),
					elDefClass = element.getAttribute('data-default-class') || 'text-muted op-05',
					elActClass = element.getAttribute('data-active-class') || 'fw-bold',
					elPricing = document.querySelector( element.getAttribute('data-container') );

				elCheck.forEach( function(el) {
					_switcher(el, element, elPricing, elDefClass, elActClass);

					el.addEventListener( 'change', function() {
						_switcher(el, element, elPricing, elDefClass, elActClass);
					});
				});
			});
		}
	};
}();
