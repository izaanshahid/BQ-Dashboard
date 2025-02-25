'use_strict';

let menu = document.querySelector('.menu-toggle');
let sidebarLeft = document.querySelector('.sidebar-left');
let sidebarLeftSecondary = document.querySelector('.sidebar-left-secondary');
let mainContentBody = document.querySelector('.main-content-body');
let navItem = document.querySelectorAll('.nav-item');
let childNav = document.querySelectorAll('.childNav');
let mainContentWrap = document.querySelector('.main-content-wrap');
let layoutTwo = document.querySelector('.app-admin-wrap-layout-2');
// let layoutOne = document.querySelector('.app-admin-wrap-layout-1');

if (layoutTwo) {
  menu.addEventListener('click', () => {
    //secondarySidebar close after hover
    if (
      ULUtil.hasClass(sidebarLeft, 'open') &&
      ULUtil.hasClass(sidebarLeftSecondary, 'open')
    ) {
      ULUtil.removeClass(sidebarLeftSecondary, 'open');
      ULUtil.removeClass(mainContentWrap, 'full');
    } else {
      // sidebarclose
      if (ULUtil.hasClass(sidebarLeft, 'open')) {
        ULUtil.removeClass(sidebarLeft, 'open');
        ULUtil.addClass(mainContentWrap, 'full');
      }
      // sidebaropen
      else {
        ULUtil.addClass(sidebarLeft, 'open');
        ULUtil.removeClass(mainContentWrap, 'full');

        navItem.forEach((e) => {
          let dataItem = e.dataset.item;
          // if the sidebar got active class then it iwill open initial stage
          if (dataItem !== undefined && ULUtil.hasClass(e, 'active')) {
            ULUtil.addClass(sidebarLeftSecondary, 'open');
          } else if (dataItem === undefined && ULUtil.hasClass(e, 'active')) {
            ULUtil.removeClass(sidebarLeftSecondary, 'open');
            activeElement.classList.add('active');
          }
        });
      }
    }
  });

  mainContentBody.addEventListener('click', () => {
    ULUtil.removeClass(sidebarLeftSecondary, 'open');
  });

  navItem.forEach((event) => {
    event.addEventListener('mouseover', (ex) => {
      // e.preventDefault();

      ULUtil.addClass(sidebarLeftSecondary, 'open');

      // console.log(elem.target.parentNode);
      let item = event.dataset.item;
      let activeElement = event;

      //  need to refactor
      navItem.forEach((e) => {
        e.classList.remove('active');
        let dataItem = e.dataset.item;
        // console.log(dataItem);
        if (dataItem === undefined) {
          ULUtil.removeClass(sidebarLeftSecondary, 'open');
          activeElement.classList.add('active');
        }
      });

      childNav.forEach((childItem) => {
        let parent = childItem.dataset.parent;

        if (item === parent) {
          ULUtil.addClass(sidebarLeftSecondary, 'open');
          activeElement.classList.add('active');
          childItem.style.display = 'block';
        } else {
          childItem.style.display = 'none';
        }
      });
      
    });
  });

  // submenu dropdown
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

  // resizing viewport
  window.addEventListener('load', () => {
    if (window.innerWidth <= 991) {
      ULUtil.removeClass(sidebarLeft, 'open');
    } else {
      ULUtil.addClass(sidebarLeft, 'open');
    }
  });
}

//search bar

if (!layoutOne) {
  let searchBar = document.querySelector('.search-bar input');
  let searchUi = document.querySelector('.search-ui');
  let searchUiClose = document.querySelector('.search-ui-close');

  if(searchBar){
      searchBar.addEventListener('focus', () => {
          // ULUtil.hasClass(searchUi, "open")
          //       ? ULUtil.removeClass(searchUi, "open")
          ULUtil.addClass(searchUi, 'open')
      })

      searchUiClose.addEventListener('click', () => {
          ULUtil.removeClass(searchUi, 'open')
      })
  }
}
