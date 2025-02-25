"use strict";

var dropdownOpen = document.querySelector(".open");
var dropdownId = document.getElementById("dropdownWrapper");

let dropdown = document.querySelectorAll(".ul-dropdown");

dropdown.forEach(function (elem) {
  var btn = elem.querySelector("[data-toggle='dropdown']");

  if (btn) {
    btn.addEventListener("click", () => {
      // ULUtil.hasClass(elem, 'open') ? ULUtil.removeClass(elem, 'open') : ULUtil.addClass(elem, 'open');
      if (ULUtil.hasClass(elem, "open")) {
        ULUtil.removeClass(elem, "open");
      } else {
        dropdown.forEach((e) => {
          ULUtil.removeClass(e, "open");
        });
        ULUtil.addClass(elem, "open");
      }
    });
  }
});

// var specifiedElement = document.querySelector(".mega-menu");

// //I'm using "click" but it works with any event
// document.addEventListener("click", function (event) {
//   var isClickInside = specifiedElement.contains(event.target);
  
//   if (!isClickInside) {
//     ULUtil.removeClass(specifiedElement, "open");
//   } 
// });


// dropdown overlay click 
document.addEventListener('click', (event) => {
  dropdown.forEach((e) => {
    let isClickInside = e.contains(event.target);
    if (!isClickInside) {
      ULUtil.removeClass(e, "open");
    } 
  })
})
