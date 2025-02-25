'use_strict';

var AatroxCustomizer = (function () {
  var secondarySidebarLayout = document.querySelector('.narrow-sidebar');

  //customizer
  var AatroxCustomSettings = document.querySelector(
    '.sidebar-customizer-settings'
  );
  var AatroxCustomizer = document.querySelector('.egret-customizer');
  var AatroxCustomizerClose = document.querySelector('.customizer-close');

  var closeCustomizer = function () {
    ULUtil.removeClass(AatroxCustomizer, 'show');
    ULUtil.removeClass(AatroxCustomizer, 'collapse');
  };

  var initAatroxCustomizer = function () {
    if (!AatroxCustomizer) {
      return;
    }
    if (AatroxCustomSettings) {
      AatroxCustomSettings.addEventListener('click', function () {
        if (AatroxCustomizer) {
          ULUtil.hasClass(AatroxCustomizer, 'show')
            ? ULUtil.removeClass(AatroxCustomizer, 'show')
            : ULUtil.addClass(AatroxCustomizer, 'show');
        }
      });
    }

    if (AatroxCustomizerClose) {
      AatroxCustomizerClose.addEventListener('click', function () {
        closeCustomizer();
      });
    }

    //egret customizer color sidebar-theme

    var addColors = document.querySelectorAll('[data-sidebar-color]');
    var adminWrapLayout1 = document.querySelector('.app-admin-wrap-layout-1');

    addColors.forEach((element) => {
      element.addEventListener('click', function () {
        var sidebarThemeClass = ULUtil.attr(element, 'data-sidebar-color');
        ULUtil.removeClassByPrefix(adminWrapLayout1, 'sidebar-theme');
        ULUtil.addClass(adminWrapLayout1, sidebarThemeClass);
      });
    });

    secondarySidebarLayout.addEventListener(
      'secondarySidebarClose',
      function () {
        closeCustomizer();
      }
    );
  };

  return {
    init: function () {
      initAatroxCustomizer();
    },
  };
})();

document.addEventListener('DOMContentLoaded', function () {
  AatroxCustomizer.init();
});
