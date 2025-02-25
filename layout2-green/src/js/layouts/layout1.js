'use strict';
let layoutOne = document.querySelector('.app-admin-wrap-layout-1');
var Layout1 = (function () {
  var initLayout1 = function () {
    // Layout script
    var $body = document.querySelector('body');
    var $appAdminWrap = document.querySelector('.app-admin-wrap-layout-1');
    var $sidebarPanel = document.querySelector('.sidebar-panel');
    var $sidebarFullToggle = document.querySelector('.sidebar-full-toggle');
    var $sidebarCompactToggle = document.querySelector(
      '.sidebar-compact-switch'
    );

    function openSidebarFull() {
      ULUtil.removeClass($appAdminWrap, 'sidebar-closed');
      ULUtil.addClass($appAdminWrap, 'sidebar-full');
    }
    function closeSidebarFull() {
      ULUtil.addClass($appAdminWrap, 'sidebar-closed');
      ULUtil.removeClass($appAdminWrap, 'sidebar-full');
    }
    function openSidebarCompact() {
      ULUtil.addClass($appAdminWrap, 'sidebar-compact');
    }
    function closeSidebarCompact() {
      ULUtil.removeClass($appAdminWrap, 'sidebar-compact');
    }
    function toggleOnHover() {
      closeSidebarCompact();
      if (ULUtil.hasClass($appAdminWrap, 'sidebar-compact-onhover')) {
        ULUtil.removeClass($appAdminWrap, 'sidebar-compact-onhover');
      } else {
        ULUtil.addClass($appAdminWrap, 'sidebar-compact-onhover');
      }
    }
    function toggleOverlay() {
      if ($body.find('.ul-overlay').length) {
        $('.ul-overlay').remove();
      } else {
        $body.append(
          $('<div class="ul-overlay">').css({
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            background: 'rgba(0,0,0, .1)',
            zIndex: 10,
          })
        );
      }
    }

    $sidebarFullToggle.addEventListener('click', function (e) {
      // console.log(e);
      if (ULUtil.hasClass($appAdminWrap, 'sidebar-mobile')) {
        ULUtil.removeClass($appAdminWrap, 'sidebar-mobile');
        // e.preventDefault();
        console.log($appAdminWrap);
      } else {
        ULUtil.addClass($appAdminWrap, 'sidebar-mobile');
      }
      // $appAdminWrap.toggleClass('sidebar-mobile');
      toggleOverlay();
    });

    $(document).on('click', '.ul-overlay', function () {
      $appAdminWrap.toggleClass('sidebar-mobile');
      toggleOverlay();
    });

    $sidebarCompactToggle.addEventListener('click', function () {
      toggleOnHover();
    });

    $sidebarPanel.addEventListener('mouseenter', function (e) {
      if (ULUtil.hasClass($appAdminWrap, 'sidebar-compact-onhover')) {
        closeSidebarCompact();
        openSidebarFull();
      }
    });
    $sidebarPanel.addEventListener('mouseleave', function (e) {
      if (ULUtil.hasClass($appAdminWrap, 'sidebar-compact-onhover')) {
        closeSidebarFull();
        openSidebarCompact();
      }
    });
  };

  return {
    init: function () {
      initLayout1();
    },
  };
})();

document.addEventListener('DOMContentLoaded', function () {
  if (layoutOne) {
    new MetisMenu('#ul-menu');
    Layout1.init();
  }
});
