(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),$(".responsive").slick({prevArrow:'<button type="button" class="my-slick-prev">&xlarr;</button>',nextArrow:'<button type="button" class="my-slick-next">&xrarr;</button>',infinite:!0,speed:300,slidesToScroll:1,adaptiveHeight:!0,slidesToShow:3,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]});
//# sourceMappingURL=index.f3fe14e3.js.map
