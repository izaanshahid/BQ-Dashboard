"use stricts"

let sidebarClick = document.querySelector('.inbox-sidebar-click');
let inboxMainSidebar = document.querySelector('.inbox-main-sidebar');
let inboxMainSidebarClose = document.querySelector('.inbox-sidebar-close');

// secondary sidebar 
let inboxMainSecondaeySidebar = document.querySelector('.inbox-secondary-sidebar');
let inboxMainSecondaeySidebarClick = document.querySelector('.inbox-secondary-sidebar-click');
let inboxMainSecondaeySidebarClose = document.querySelector('.inbox-secondary-sidebar-close');


sidebarClick.addEventListener('click', () => {
  ULUtil.addClass(inboxMainSidebar, 'open')
})
inboxMainSidebarClose.addEventListener('click', () => {
  ULUtil.removeClass(inboxMainSidebar, 'open')
})



inboxMainSecondaeySidebarClick.addEventListener('click', () => {
  ULUtil.addClass(inboxMainSecondaeySidebar, 'open')
})
inboxMainSecondaeySidebarClose.addEventListener('click', () => {
  ULUtil.removeClass(inboxMainSecondaeySidebar, 'open')
})