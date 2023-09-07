const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const imageContainer = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect(); //get the top position of the section relative to the viewport

  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`; //move each element by multiplying scroll value by speed value
  });

  opacity.forEach((element) => {
    element.style.opacity = scroll / (sectionY.top + section_height);
  });

  big_title.style.opacity = -scroll / (header_height / 2) + 1;
  shadow.style.height = `${scroll * 0.5 + 300}px`;

  content.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * 50 - 50
  }px)`; /// this will give a value between - and -50 based on the value of the scroll
  imageContainer.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * -50 + 50
  }px)`;

  border.style.width = `${(scroll / (sectionY.top + section_height)) * 30}%`;
});
