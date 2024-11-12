CNVS.Tips = function() {
	var __core = SEMICOLON.Core;
	var __modules = SEMICOLON.Modules;

	return {
		init: function(selector) {
			__core.loadJS({ file: 'plugins.bootstrap.js', id: 'canvas-bootstrap-js', jsFolder: true });

			__core.isFuncTrue( function() {
				return typeof bootstrap !== 'undefined';
			}).then( function(cond) {
				if( !cond ) {
					return false;
				}

				if( typeof cnvsTips === "undefined" || cnvsTips.length < 1 ) {
					return false;
				}

				__core.initFunction({ class: 'has-plugin-tips', event: 'pluginTipsReady' });

				var randomIndex = Math.floor(Math.random() * cnvsTips.length);
				var randomTip = cnvsTips[randomIndex];

				var tipsEl = document.getElementById('cnvs-tips-element');

				if( !tipsEl ) {
					var tipsHTML = '<div class="position-fixed bottom-0 end-0 p-3 text-start" style="z-index: 699;"><div id="cnvs-tips-element" data-notify-trigger="custom" data-notify-target="#cnvs-tips-element" data-notify-timeout="7777" class="toast hide p-3 bg-white" role="alert" aria-live="assertive" aria-atomic="true" style="--bs-toast-max-width:400px;--bs-toast-bg: rgba(var(--bs-body-bg-rgb),.925);"><div class="toast-header bg-transparent border-0 mb-0 align-items-center pb-1"><h5 id="cnvs-tips-element-title" class="me-auto fs-6 fw-semibold mb-0"></h5><button type="button" class="btn-close me-1" data-bs-dismiss="toast" aria-label="Close"></button></div><div id="cnvs-tips-element-content" class="toast-body small pt-1"></div><a href="#" id="cnvs-tips-element-disable" class="text-muted text-decoration-underline op-06 h-op-08 px-2 pb-2 ms-1 mt-1 d-inline-block" data-cookies="true" style="font-size:.75rem;text-underline-offset:3px;">Disable Random Tips</a></div></div>';

					__core.getVars.elWrapper.insertAdjacentHTML('beforeend', tipsHTML);
					tipsEl = document.getElementById('cnvs-tips-element');
				}

				var tipsTitle = document.getElementById('cnvs-tips-element-title');
				var tipsContent = document.getElementById('cnvs-tips-element-content');
				var tipsDisable = document.getElementById('cnvs-tips-element-disable');
				var tipsEnable = document.getElementById('cnvs-tips-element-enable');

				tipsTitle.innerHTML = randomTip.title;
				tipsContent.innerHTML = randomTip.content;

				if( tipsDisable ) {
					tipsDisable.onclick = function(e) {
						e.preventDefault();

						var tipsToast = bootstrap.Toast.getOrCreateInstance(document.getElementById('cnvs-tips-element'));
						tipsToast.hide();

						__core.cookie.set('__cnvs_tips_cookies', 'hide', 1);
					};
				}

				if( tipsEnable ) {
					tipsEnable.onclick = function(e) {
						e.preventDefault();

						__core.cookie.remove('__cnvs_tips_cookies');
						window.location.reload();
					};
				}

				(function(){
					var enabled = true;

					if( __core.cookie.get('__cnvs_tips_cookies' ) == 'hide' ) {
						enabled = false;
					}

					if( enabled ) {
						setTimeout(function(){
							__modules.notifications(tipsEl);
						}, Math.floor(Math.random() * 5000));
					}
				})();
			});
		}
	};
}();
