const sliders = document.querySelectorAll(".perpetual-slider");

sliders.forEach((slider) => {
  const sliderInner = slider.querySelector(".perpetual-slider div");
  const sliderContent = Array.from(sliderInner.children);
  sliderContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    sliderInner.appendChild(duplicatedItem);
    sliderInner.style.animation = "move 12s linear infinite";
  });
});

const currentYear = new Date().getFullYear();
document.getElementById(
  "copyright"
).innerHTML = `&copy; ${currentYear} Vita Somniorum. All rights reserved.`;
