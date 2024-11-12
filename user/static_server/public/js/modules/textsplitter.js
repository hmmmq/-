CNVS.TextSplitter = function() {
	var __core = SEMICOLON.Core;

	var _getText = function(element) {
		return element.textContent || element.innerText;
	};

	var _joiner = function(arr, joiner='span', glue=' ') {
		return arr.map( function(chunk) {
			return '<'+ joiner +'>' + chunk + '</'+ joiner +'>';
		}).join(glue);
	};

	var _words = function(element, joiner='span') {
		return _joiner(_getText(element).split(' '), joiner, ' ');
	};

	var _letters = function(element, joiner='span') {
		return _joiner(_getText(element).split(''), joiner, '');
	};

	var _splitter = function(el, type = 'word') {
		el.innerHTML = type == 'letter' ? _letters(el) : _words(el);

		el.querySelectorAll('span')?.forEach( function(elem, index) {
			elem.style.setProperty('--cnvs-split-index', index + 1);
		});
	};

	return {
		init: function(selector) {
			if( __core.getSelector(selector, false, false).length < 1 ){
				return true;
			}

			selector = __core.getSelector( selector, false );
			if( selector.length < 1 ){
				return true;
			}

			selector.forEach( function(el) {
				var type = el.getAttribute('data-split-type') || 'word';

				_splitter(el, type);
			});
		}
	};
}();
