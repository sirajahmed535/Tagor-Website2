


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



