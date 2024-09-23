CNVS.Cookies = function() {
	var __core = SEMICOLON.Core;

	var _resetPage = function(btn) {
		if( !btn.closest('#gdpr-preferences') ) {
			return false;
		}

		setTimeout( function() {
			window.location.reload();
		}, 500);
	};

	return {
		init: function(selector) {
			if( __core.getSelector(selector, false, false).length < 1 ){
				return true;
			}

			__core.initFunction({ class: 'has-plugin-cookie', event: 'pluginCookieReady' });

			selector = __core.getSelector( selector, false );
			if( selector.length < 1 ){
				return true;
			}

			var cookieBar = document.querySelector('.gdpr-settings'),
				elSpeed = cookieBar?.getAttribute('data-speed') || 300,
				elExpire = cookieBar?.getAttribute('data-expire') || 30,
				elDelay = cookieBar?.getAttribute('data-delay') || 1500,
				elPersist = cookieBar?.getAttribute('data-persistent'),
				elDirection = 'bottom',
				elHeight = cookieBar?.offsetHeight + 100,
				elWidth = cookieBar?.offsetWidth + 100,
				elSize,
				elSettings = document.querySelector('.gdpr-cookie-settings'),
				elSwitches = elSettings?.querySelectorAll('[data-cookie-name]');

			if( !cookieBar && !elSettings ) {
				return true;
			}

			if( elPersist == 'true' ) {
				__core.cookie.set('__cnvs_cookies_accept', '');
				__core.cookie.remove('__cnvs_cookies_decline');
			}

			if( cookieBar ) {
				if( cookieBar?.classList.contains('gdpr-settings-sm') && cookieBar?.classList.contains('gdpr-settings-right') ) {
					elDirection = 'right';
				} else if( cookieBar?.classList.contains('gdpr-settings-sm') ) {
					elDirection = 'left';
				}

				if( elDirection == 'left' ) {
					elSize = -elWidth;
					cookieBar.style.right = 'auto';
					cookieBar.style.marginLeft = '1rem';
				} else if( elDirection == 'right' ) {
					elSize = -elWidth;
					cookieBar.style.left = 'auto';
					cookieBar.style.marginRight = '1rem';
				} else {
					elSize = -elHeight;
				}

				cookieBar.style[elDirection] = elSize + 'px';

				if( __core.cookie.get('__cnvs_cookies_accept') != '1' ) {
					setTimeout( function() {
						cookieBar.style.display = 'block';
						cookieBar.style.pointerEvents = 'auto';
						cookieBar.style[elDirection] = 0;
						cookieBar.style.opacity = 1;
					}, Number( elDelay ) );
				}
			}

			var gdprAcceptBtn = document.querySelectorAll('.gdpr-accept'),
				gdprDeclineBtn = document.querySelectorAll('.gdpr-decline'),
				gdprSaveCookies = document.querySelectorAll('.gdpr-save-cookies');

			if( gdprAcceptBtn.length > 0 ) {
				gdprAcceptBtn.forEach( function(btn){
					btn.onclick = function(e) {
						e.preventDefault();

						if( cookieBar ) {
							cookieBar.style[elDirection] = elSize + 'px';
							cookieBar.style.opacity = 0;
							cookieBar.ontransitionend = function() {
								cookieBar.style.display = 'none';
								cookieBar.style.pointerEvents = 'none';
							};
						}

						__core.cookie.set('__cnvs_cookies_accept', '1', elExpire);
						__core.cookie.set('__cnvs_cookies_decline', '0', elExpire);

						_resetPage(btn);
					};
				});
			}

			if( gdprDeclineBtn.length > 0 ) {
				gdprDeclineBtn.forEach( function(btn){
					btn.onclick = function(e) {
						e.preventDefault();

						if( cookieBar ) {
							cookieBar.style[elDirection] = elSize + 'px';
							cookieBar.style.opacity = 0;
							cookieBar.ontransitionend = function() {
								cookieBar.style.display = 'none';
								cookieBar.style.pointerEvents = 'none';
							};
						}

						__core.cookie.set('__cnvs_cookies_accept', '0', elExpire);
						__core.cookie.set('__cnvs_cookies_decline', '1', elExpire);

						_resetPage(btn);
					};
				});
			}

			var acceptCookies = __core.cookie.get('__cnvs_cookies_accept'),
				declineCookies = __core.cookie.get('__cnvs_cookies_decline'),
				cookiesAllowed = (acceptCookies || acceptCookies != '0') && (!declineCookies || declineCookies != '1');

			elSwitches?.forEach( function(el) {
				var elCookie = '__cnvs_gdpr_' + el.getAttribute('data-cookie-name'),
					getCookie = __core.cookie.get(elCookie);

				if( typeof getCookie !== 'undefined' && getCookie == '1' && cookiesAllowed ) {
					el.checked = true;
				} else {
					el.checked = false;
				}
			});

			if( gdprSaveCookies.length > 0 ) {
				gdprSaveCookies.forEach( function(btn){
					btn.onclick = function(e) {
						e.preventDefault();

						__core.cookie.set('__cnvs_cookies_accept', '1', elExpire);
						__core.cookie.set('__cnvs_cookies_decline', '0', elExpire);

						elSwitches.forEach( function(el) {
							var elCookie = '__cnvs_gdpr_' + el.getAttribute( 'data-cookie-name' );

							if( el.checked == true ) {
								__core.cookie.set(elCookie, '1', elExpire);
							} else {
								__core.cookie.remove(elCookie, '');
							}
						});

						if( elSettings.closest( '.mfp-content' ).length > 0 ) {
							jQuery$.magnificPopup.close();
						}

						_resetPage(btn);
					};
				});
			}

			document.querySelectorAll('.gdpr-container')?.forEach( function(element) {
				var elCookie = '__cnvs_gdpr_' + element.getAttribute('data-cookie-name'),
					elContent = element.getAttribute('data-cookie-content'),
					elContentAjax = element.getAttribute('data-cookie-content-ajax'),
					getCookie = __core.cookie.get(elCookie);

				if( typeof getCookie !== 'undefined' && getCookie == '1' && cookiesAllowed ) {
					element.classList.add('gdpr-content-active');
					if( elContentAjax ) {
						fetch( elContentAjax ).then( function(response) {
							return response.text();
						}).then( function(html) {
							var domParser = new DOMParser();
							var parsedHTML = domParser.parseFromString(html, 'text/html');

							element?.insertAdjacentHTML('beforeend', parsedHTML.body.innerHTML);
						}).catch( function(err) {
							console.log(err);
						});
					} else {
						if( elContent ) {
							element.innerHTML += elContent;
						}
					}
					__core.runContainerModules(element);
				} else {
					element.classList.add('gdpr-content-blocked');
				}
			});
		}
	};
}();
