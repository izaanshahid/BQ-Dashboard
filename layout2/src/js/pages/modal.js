"use stricts"

let modal = document.querySelectorAll("[data-toggle='ul-modal']")
let modalShow = document.querySelectorAll(".modal")
let body = document.querySelector("body")
let overlay = document.querySelectorAll(".modal-overlay")
let modalClose = document.querySelectorAll(".modal-close")

modal.forEach((elem) => {

  elem.addEventListener('click', (modalElem) => {
     modalBtn = modalElem.target.dataset.target;
     modalShow.forEach((e) => {
      
      modalData = e.dataset.target
      if(modalBtn === modalData)
      {
        e.classList.add("show")
        body.style.overflow = "hidden"
        body.style.paddingRight = "17px"
        overlay.forEach((elem2) => {
        elem2.addEventListener('click', () => {
          ULUtil.removeClass(e, 'show')
          body.removeAttribute("style") 
          body.removeAttribute("style") 
        }) 
      })
      
      modalClose.forEach((modal) => {
        modal.addEventListener('click', () => {
          ULUtil.removeClass(e, 'show')
          body.removeAttribute("style") 
          body.removeAttribute("style") 
        })
      })
      }
     })

  })


})








