const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i)
        });
    });


   /** image slider up to down  */

   var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:true,
    start:"38% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}});
tl
.to(".text",{
    top: "-7%",
},'a')
.to("#card-one",{
    top: "35%",
},'a')
.to("#card-two",{
    top: "130%"
},'a')
.to("#card-two",{
    top: "42%"
},'b')
.to("#card-one",{
    width: "65%",
    height: "65vh"
},'b')
.to("#card-three",{
    top: "130%"
}, 'b')
.to("#card-three",{
    top: "50%"
}, 'c')
.to("#card-two",{
    width: "70%",
    height: "70vh"
},'c')




var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    speed: 600,
    coverflowEffect: {
      rotate: 50,
      stretch: -20,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true, 
      dynamicBullets: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
  });



// Testimonials carousel


        