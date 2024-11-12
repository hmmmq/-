var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider401"] = {
  once:
    RS_MODULES.modules["revslider401"] !== undefined
      ? RS_MODULES.modules["revslider401"].once
      : undefined,
  init: function () {
    window.revapiShop =
      window.revapiShop === undefined ||
      window.revapiShop === null ||
      window.revapiShop.length === 0
        ? document.getElementById("rev_slider_shop")
        : window.revapiShop;
    if (
      window.revapiShop === null ||
      window.revapiShop === undefined ||
      window.revapiShop.length == 0
    ) {
      window.revapiShopinitTry =
        window.revapiShopinitTry === undefined
          ? 0
          : window.revapiShopinitTry + 1;
      if (window.revapiShopinitTry < 20)
        requestAnimationFrame(function () {
          RS_MODULES.modules["revslider401"].init();
        });
      return;
    }
    window.revapiShop = jQuery(window.revapiShop);
    if (window.revapiShop.revolution == undefined) {
      revslider_showDoubleJqueryError("rev_slider_shop");
      return;
    }
    revapiShop.revolutionInit({
      revapi: "revapiShop",
      DPR: "dpr",
      sliderLayout: "fullscreen",
      duration: "7000ms",
      visibilityLevels: "1140,1024,778,480",
      gridwidth: "1240,1024,778,480",
      gridheight: "900,768,960,720",
      lazyType: "smart",
      perspective: 600,
      perspectiveType: "global",
      editorheight: "900,768,960,720",
      responsiveLevels: "1140,1024,778,480",
      stopAtSlide: 1,
      stopAfterLoops: 0,
      stopLoop: false,
      progressBar: { disableProgressBar: true },
      navigation: {
        onHoverStop: false,
      },
      parallax: {
        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
        type: "scroll",
        origo: "slidercenter",
        speed: 0,
      },
      viewPort: {
        global: false,
        globalDist: "0px",
        enable: true,
        visible_area: "0px",
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true,
      },
    });
  },
}; // End of RevInitScript

var circleType = new CircleType(document.getElementById("rotated-text")).radius(
  80
);
