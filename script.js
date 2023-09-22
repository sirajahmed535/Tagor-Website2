let loader = document.querySelector('#preloader');

window.addEventListener('load', vanish);

function vanish() {
  loader.classList.add('disppear');
}

  // gsap.to(smoother, {
  //   	scrollTop: smoother.offset(".main-slider-div", "center center"),
  //   	duration: 1
  //   });
gsap.registerPlugin(ScrollTrigger);

gsap.to(".services-row", {
  scale: 0.8,
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".services-row",
    start: "top 70%",
    end: "bottom 20%",
    toggleActions: "play pause resume reverse",
    markers: false
  }
})



let delSections = document.querySelectorAll(".delayed-section");

delSections.forEach(section => {

  let imageAnim = gsap.to(section.querySelector("img"), {
    y: "-100vh",
    ease: "none",
    paused: true
  });

  let progressTo = gsap.quickTo(imageAnim, "progress", { ease: "power3", duration: parseFloat(section.dataset.scrub) || 0.1 });

  gsap.to(section.querySelector(".innerContainer"), {
    y: "100vh",
    ease: "none",
    scrollTrigger: {
      scrub: true,
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onUpdate: self => progressTo(self.progress)
    }
  });

});

gsap.to(".process-row", {
  scale: 0.8,
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".process-row",
    start: "top 70%",
    end: "bottom 20%",
    toggleActions: "play pause resume reverse",
    markers: false
  }
})

gsap.to(".process-row-1", {
  scale: 0.8,
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".process-row-1",
    start: "top 70%",
    end: "bottom 20%",
    toggleActions: "play pause resume reverse",
    markers: false
  }
})

gsap.to(".process-row-2", {
  scale: 0.8,
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".process-row-2",
    start: "top 70%",
    end: "bottom 20%",
    toggleActions: "play pause resume reverse",
    markers: false
  }
})

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});


let month = document.querySelector('.price-toggler .month');
let year = document.querySelector('.price-toggler .year');
let monthAmount = document.querySelectorAll('.box-container .box .month');
let yearAmount = document.querySelectorAll('.box-container .box .year');

year.onclick = () => {
  year.classList.add('active');
  month.classList.remove('active');

  monthAmount.forEach(mo => { mo.style.display = 'none' });
  yearAmount.forEach(yr => { yr.style.display = 'block' });
};

month.onclick = () => {
  year.classList.remove('active');
  month.classList.add('active');

  monthAmount.forEach(mo => { mo.style.display = 'block' });
  yearAmount.forEach(yr => { yr.style.display = 'none' });
};

const carousell = document.getElementsByClassName('carousells');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselItems = document.querySelectorAll('.carousel-item-1');

let currentIndex = 0;


function updateCarousel() {
  carousell.style.transform = `translateX(-${currentIndex * 300}px)`;
}


nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
});


prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
});