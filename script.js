let loader = document.querySelector('#preloader');

window.addEventListener('load', vanish);

function vanish() {
  loader.classList.add('disppear');
}

  gsap.to(smoother, {
    	scrollTop: smoother.offset(".main-slider-div", "center center"),
    	duration: 1
    });