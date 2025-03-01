'use_strict';

var StickyHeader = (function () {
  var initStickyHeader = function () {
    var body = ULUtil.get('body');
    window.addEventListener('scroll', () => {
      var header = document.querySelector('.ul-header-navigation');
      var yOffset = window.pageYOffset;

      if (yOffset > 300 && !ULUtil.isInResponsiveRange('tablet-and-mobile')) {
        body.classList.add('sticky-header');
        ULUtil.addClass(body, 'sticky-header');
      } else {
        // ULUtil.removeClass(body, 'sticky-header');
        body.classList.remove('sticky-header');
      }
    });
  };
  return {
    init: function () {
      initStickyHeader();
    },
  };
})();

document.addEventListener('DOMContentLoaded', function () {
  StickyHeader.init();
});
