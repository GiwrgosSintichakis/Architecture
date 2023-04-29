window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add ("display");
  }, 1000);
};

document.querySelector('.hamburger-menu').
addEventListener('click',() => {
  document.querySelector('.container').classList.toggle("change");
});

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
   speedAsDuration: true});