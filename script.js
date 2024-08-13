// Cache DOM elements
const heading = document.querySelectorAll(".left .headings h5");
const paras = document.querySelectorAll(".left .paras p");
const imgs = document.querySelectorAll(".right img");
const menu = document.querySelector("#menu");
const slider = document.querySelector(".navigation");
const elems = document.querySelector(".elems");
const page3Img = document.querySelector(".page3 .img");
const page3ImgTag = document.querySelector(".page3 .img img");
const swiperContainer = document.querySelector(".swiper-container");
const crsr = document.querySelector(".crsr");
const loaderElement = document.querySelector(".loader");
const mainElement = document.querySelector("main");

// Function for showcasing elements
function showcase() {
  heading.forEach((elem, index) => {
    elem.addEventListener("click", (e) => {
      heading.forEach((t) => {
        t.classList.remove("border-[#fe330b]", "text-[#EFEAE3]");
        t.classList.add("border-zinc-500", "text-zinc-500");
      });
      e.target.classList.remove("text-zinc-500", "border-zinc-500");
      e.target.classList.add("border-[#fe330b]", "text-[#EFEAE3]");

      imgs.forEach((i) => {
        i.classList.toggle("opacity-0", i.getAttribute("data-image") != index);
      });

      paras.forEach((i) => {
        i.classList.toggle("opacity-0", i.getAttribute("data-para") != index);
      });
    });
  });
}

// Function for image animation
function imageAnimation() {
  elems.addEventListener("mouseenter", () => {
    page3Img.style.display = "block";
    document.querySelectorAll(".elem").forEach((elem) => {
      elem.addEventListener("mouseenter", (e) => {
        page3ImgTag.src = e.target.dataset.img;
      });
    });
  });

  elems.addEventListener("mouseleave", () => {
    page3Img.style.display = "none";
  });
}

// Function for swiper animation
function swipperAnimation() {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    grabCursor: true,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      480: { slidesPerView: 1, spaceBetween: 30 },
      640: { slidesPerView: 3, spaceBetween: 40 },
    },
  });

  swiperContainer.addEventListener("mousemove", (dets) => {
    crsr.style.transition = "none"; // Disable transition
    crsr.style.transform = `scale(1)`;
    crsr.style.opacity = 1;
    crsr.style.left = `${20 + dets.x}px`;
    crsr.style.top = `${
      20 + (dets.y - swiperContainer.getBoundingClientRect().top)
    }px`;
  });

  swiperContainer.addEventListener("mouseleave", () => {
    crsr.style.transition = "0.3s all ease-in-out"; // Disable transition

    crsr.style.transform = `scale(0)`;
    crsr.style.opacity = 0;
  });
}

// Function to toggle menu
function menuToggle() {
  menu.addEventListener("click", () => {
    slider.classList.toggle("translate-y-[0%]");
    document.body.classList.toggle("overflow-hidden");
  });
}

// Function for loader animation
function loader() {
  setTimeout(() => {
    loaderElement.classList.add("-translate-y-[100%]");
    mainElement.classList.remove("hidden");
  }, 3200);
}

// Function to initialize Locomotive Scroll
function loco() {
  new LocomotiveScroll({ el: mainElement, smooth: true });
}

// Initialize functions
loader();
showcase();
swipperAnimation();
imageAnimation();
menuToggle();
loco();
