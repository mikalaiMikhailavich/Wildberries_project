import {
  createButtonElement,
  createContainerComponent,
  createImageComponent,
} from "../createElements";

const buttonLeft = createButtonElement({
  className: "slider__button-left",
  value: "<",
});

const buttonRight = createButtonElement({
  className: "slider__button-right",
  value: ">",
});
const buttonContainer = createContainerComponent({
  className: "slider__button-container",
  children: [buttonLeft, buttonRight],
});

const image1 = createImageComponent({
  className: "slider__image",
});

image1.src = new URL(`../../../assets/img/slider-image1.jpg`, import.meta.url);

const imageContainer1 = createContainerComponent({
  className: "slider__image-container",
  children: [image1],
});

const image2 = createImageComponent({
  className: "slider__image",
});

image2.src = new URL(`../../../assets/img/slider-image2.jpg`, import.meta.url);

const imageContainer2 = createContainerComponent({
  className: "slider__image-container",
  children: [image2],
});

const sliderInner = createContainerComponent({
  className: " slider__inner",
  children: [imageContainer1, imageContainer2],
});

const sliderContainer = createContainerComponent({
  className: "container slider__container",
});

sliderContainer.append(buttonContainer, sliderInner);

export const slider = createContainerComponent({
  id: "slider",
  className: "slider",
  children: [sliderContainer],
});

// const slider = document.querySelector("#slider");
const sliderItems = Array.from(sliderInner.children);

sliderItems.forEach((slide, index) => {
  if (index !== 0) {
    slide.classList.add("hide");
  }
  slide.dataset.index = index;

  sliderItems[0].setAttribute("data-active", "");
});

buttonRight.onclick = function () {
  showNextSlide("next");
};

buttonLeft.onclick = function () {
  showNextSlide("prev");
};

function showNextSlide(direction) {
  const currentSlide = sliderInner.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;
  // console.log(typeof currentSlideIndex);
  currentSlide.classList.add("hide");
  currentSlide.removeAttribute("data-active");

  let nextSlideIndex;
  if (direction === "next") {
    nextSlideIndex =
      currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  } else if (direction === "prev") {
    nextSlideIndex =
      currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  }
  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove("hide");
  nextSlide.setAttribute("data-active", "");
}
