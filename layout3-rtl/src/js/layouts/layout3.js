'use strict';

let menuToggle = document.querySelector('.menu-toggle-3');
let layoutThree = document.querySelector('.app-admin-wrap-layout-3');
let sideOverlayThree = document.querySelector('.ul-sidebar-3-panel-overlay');
let navItemThree = document.querySelectorAll('.nav-item');
let childNavThree = document.querySelectorAll('.childNav');
let subMenuArea = document.querySelectorAll('.submenu-area');

if (layoutThree) {
  menuToggle.addEventListener('click', () => {
    ULUtil.hasClass(layoutThree, 'open')
      ? ULUtil.removeClass(layoutThree, 'open')
      : ULUtil.addClass(layoutThree, 'open');
  });
  sideOverlayThree.addEventListener('click', () => {
    ULUtil.removeClass(layoutThree, 'open');
  });

  navItemThree.forEach((event) => {
    event.addEventListener('mouseover', () => {
      let item = event.dataset.item;
      let activeElement = event;

      navItemThree.forEach((e) => {
        e.classList.remove('active');
      });

      subMenuArea.forEach((elem) => {
        let parent = elem.dataset.parent;
        if (item === parent) {
          activeElement.classList.add('active');
          elem.style.display = 'block';
        } else {
          elem.style.display = 'none';
        }
      });
    });
  });

  let subMenu = document.querySelectorAll('.dropdown-sidemenu');

  subMenu.forEach((sub) => {
    sub.addEventListener('click', () => {
      if (ULUtil.hasClass(sub, 'open')) {
        ULUtil.removeClass(sub, 'open');
      } else {
        subMenu.forEach((e) => {
          ULUtil.removeClass(e, 'open');
        });
        ULUtil.addClass(sub, 'open');
      }
    });
  });

  // window resizing
  window.addEventListener('load', () => {
    if (window.innerWidth <= 1000) {
      ULUtil.removeClass(layoutThree, 'open');
    } else {
      ULUtil.addClass(layoutThree, 'open');
    }
  });
}
