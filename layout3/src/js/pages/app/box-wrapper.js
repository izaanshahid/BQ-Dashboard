"use strict";

let toggleButton = document.querySelector(".ul-box-menu-bar");
let boxSidebar = document.querySelector(".ul-box-sidebar");
var overlayChat = document.querySelector(".ul-box-sidebar-overlay");




toggleButton.addEventListener("click", function(){
  ULUtil.hasClass(boxSidebar, 'open') ? ULUtil.removeClass(boxSidebar, 'open') : ULUtil.addClass(boxSidebar, 'open');
  ULUtil.hasClass(overlayChat, 'open') ? ULUtil.removeClass(overlayChat, 'open') : ULUtil.addClass(overlayChat, 'open');
});

overlayChat.addEventListener("click", function(){
 ULUtil.removeClass(overlayChat, 'open');
 ULUtil.removeClass(boxSidebar, 'open')
})

