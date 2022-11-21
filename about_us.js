
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
function scrolll() {
       var left = document.querySelector(".scroll-images");
       left.scrollBy(350, 0)
   }

   function scrollr() {
       var right = document.querySelector(".scroll-images");
       right.scrollBy(-350, 0)
   }
