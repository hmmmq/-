CNVS.Hover3D = function() {
	var __core = SEMICOLON.Core;

	return {
		init: function(selector) {
			if( __core.getSelector(selector, false, false).length < 1 ){
				return true;
			}

			__core.initFunction({ class: 'has-plugin-hover3d', event: 'pluginHover3DReady' });

			selector = __core.getSelector( selector, false );
			if( selector.length < 1 ){
				return true;
			}

			selector.forEach( function(el) {
				var height = el.clientHeight;
				var width = el.clientWidth;

				el.addEventListener( 'mousemove', function(e) {
					var xVal = e.layerX;
					var yVal = e.layerY;

					var yRotation = 20 * ((xVal - width / 2) / width);
					var xRotation = -20 * ((yVal - height / 2) / height);

					var transform = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg) rotateZ(0)';

					el.style.transform = transform;
				});

				el.addEventListener( 'mouseout', function() {
					el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0) rotateZ(0)';
				});

				el.addEventListener( 'mousedown', function() {
					el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0) rotateZ(0)';
				});

				el.addEventListener( 'mouseup', function() {
					el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0) rotateZ(0)';
				});
			});
		}
	};
}();
