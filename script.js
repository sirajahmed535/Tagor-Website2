


// const races = document.querySelector(".races");
// console.log(races.offsetWidth)
// window.scrollPercent = -1;

// function getScrollAmount() {
// 	let racesWidth = races.scrollWidth;
// 	return -(racesWidth - window.innerWidth);
// }

// const tween = gsap.to(races, {
// 	x: getScrollAmount,
// 	duration: 1,
// 	ease: "none",
// });


// ScrollTrigger.create({
// 	trigger:".racesWrapper",
// 	start:"top 20%",
// 	end: () => `+=${getScrollAmount() * -1}`,
// 	pin:true,
// 	animation:tween,
// 	scrub:1,
// 	invalidateOnRefresh:true,
// 	markers:false
// })
// let line1 = document.querySelector('.line-1');
// let line2 = document.querySelector('.line-2');

// window.onscroll = () =>{
    
//     let pos = window.scrollY;
//     line1.style.left = `${pos}px`
//     line2.style.right = `${pos}px`

// }

// const races1 = document.querySelector(".races1");
// console.log(races1.offsetWidth)
// window.scrollPercent = -1;

// function getScrollAmount1() {
// 	let racesWidth = races1.scrollWidth;
// 	return -(racesWidth - window.innerWidth);
// }

// const tween1 = gsap.to(races1, {
// 	x: getScrollAmount1,
// 	duration: 1,
// 	ease: "none",
// });


// ScrollTrigger.create({
// 	trigger:".racesWrapper",
// 	start:"top 20%",
// 	end: () => `+=${getScrollAmount1() * -1}`,
// 	pin:true,
// 	animation:tween1,
// 	scrub:1,
// 	invalidateOnRefresh:true,
// 	markers:false
// })

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ScrollTrigger.normalizeScroll(true)

// // create the smooth scroller FIRST!
// let smoother = ScrollSmoother.create({
//   smooth: 2,
//   effects: true,
//   normalizeScroll: true
// });

// pin box-c when it reaches the center of the viewport, for 300px
// ScrollTrigger.create({
//   trigger: ".logos",
//   pin: true,
//   start: "top 10%",
//   end: "+=10",
//   markers: false
// });


  
  // or you could animate the scrollTop:
  // gsap.to(smoother, {
  // 	scrollTop: smoother.offset(".box-c", "center center"),
  // 	duration: 1
  // });

//scroll trigger main code
// let line1 = document.querySelector('.line-1');
// let line2 = document.querySelector('.line-2');

// window.onscroll = () =>{
    
//     let pos = window.scrollY;
//     line1.style.left = `${pos}px`
//     line2.style.right = `${pos}px`

// }

// ScrollTrigger.create({
//     trigger: ".main-slider-div",
//     pin: true,
//     start: "top 10%",
//     end: "+=10",
//     markers: false
//   });

//   gsap.to(smoother, {
//     	scrollTop: smoother.offset(".main-slider-div", "center center"),
//     	duration: 1
//     });


let delSections = document.querySelectorAll(".delayed-section");

delSections.forEach(section => {
  
  let imageAnim = gsap.to(section.querySelector("img"), {
    y: "-100vh",
    ease: "none",
    paused: true
  });
  
  let progressTo = gsap.quickTo(imageAnim, "progress", {ease: "power3", duration: parseFloat(section.dataset.scrub) || 0.1});
  
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


gsap.registerPlugin(ScrollTrigger);

gsap.to(".services-row", {
  scale: 0.8,
  opacity: 1,
  duration:0.5,
  scrollTrigger: {
    trigger: ".services-row",
    start: "top 70%",
    end: "bottom 20%",
    toggleActions: "play pause resume reverse",
    markers:false
  }  
})

// gsap.registerPlugin(ScrollTrigger);

gsap.to(".process-row", {
  scale: 0.8,
  opacity: 1,
  duration:0.5,
  scrollTrigger: {
    trigger: ".process-row",
    start: "top 70%",
    end: "bottom 20%",
    toggleActions: "play pause resume reverse",
    markers:false
  }  
})

// gsap.registerPlugin(ScrollTrigger);

gsap.to(".process-row-1", {
  scale: 0.8,
  opacity: 1,
  duration:0.5,
  scrollTrigger: {
    trigger: ".process-row-1",
    start: "top 70%",
    end: "bottom 20%",
    toggleActions: "play pause resume reverse",
    markers:false
  }  
})

gsap.to(".process-row-2", {
  scale: 0.8,
  opacity: 1,
  duration:0.5,
  scrollTrigger: {
    trigger: ".process-row-2",
    start: "top 70%",
    end: "bottom 20%",
    toggleActions: "play pause resume reverse",
    markers:false
  }  
})

var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', function () {
      menu.classList.toggle('active');
      menuToggle.classList.toggle('active');
  });
});








