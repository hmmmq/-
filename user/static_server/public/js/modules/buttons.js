CNVS.Buttons = function() {
	var __core = SEMICOLON.Core;

	return {
		init: function(selector) {
			if( __core.getSelector(selector, false, false).length < 1 ){
				return true;
			}

			__core.initFunction({ class: 'has-plugin-buttons', event: 'pluginButtonsReady' });

			selector = __core.getSelector( selector, false );
			if( selector.length < 1 ){
				return true;
			}

			selector.forEach( function(el){
				var text = el.innerHTML;
				el.innerHTML = '';

				var inner = document.createElement('div');
				inner.classList.add('button-inner');

				var span = document.createElement('span');

				span.innerHTML = text;

				inner.append(span);

				var span2 = span.cloneNode(true);
				span.after(span2);

				el.append(inner);
			});
		}
	};
}();
