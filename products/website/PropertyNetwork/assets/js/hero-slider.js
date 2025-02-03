const slideContainer = document.querySelector(".slider")
const sliderText = document.querySelector(".slider--text")
const btnLeft = document.querySelector(".slider__btn-left")
const btnRight = document.querySelector(".slider__btn-right")

const sliderImages = [
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    text: "Taste the magic",
  },
  {
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    text: "Taste the incredible",
  },
  {
    src: "https://images.unsplash.com/photo-1630650231815-a567e2ed26cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    text: "Taste the dream",
  },
]

let slideCounter = 0
const startSlider = () => {
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[0].src})`
  sliderText.innerHTML = sliderImages[0].text
}
btnRight.addEventListener("click", function() {
  if (slideCounter === sliderImages.length - 1) {
    slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[0].src})`
    sliderText.innerHTML = sliderImages[0].text
    slideCounter = -1

    slideContainer.classList.add("fadeIn")
    setTimeout(() => {
      slideContainer.classList.remove("fadeIn")
    }, 1000)
  }
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
      ),url(${sliderImages[slideCounter + 1].src})`
  sliderText.innerHTML = sliderImages[slideCounter + 1].text
  slideCounter++
  slideContainer.classList.add("fadeIn")
  setTimeout(() => {
    slideContainer.classList.remove("fadeIn")
  }, 1000)
})
btnLeft.addEventListener("click", function() {
  if (slideCounter === 0) {
    slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ),url(${sliderImages[sliderImages.length - 1].src})`
    sliderText.innerHTML = sliderImages[sliderImages.length - 1].text
    slideCounter = sliderImages.length
    slideContainer.classList.add("fadeIn")
    setTimeout(() => {
      slideContainer.classList.remove("fadeIn")
    }, 1000)
  }

  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ),url(${sliderImages[slideCounter - 1].src})`
  sliderText.innerHTML = sliderImages[slideCounter - 1].text
  slideCounter--
  slideContainer.classList.add("fadeIn")
  setTimeout(() => {
    slideContainer.classList.remove("fadeIn")
  }, 1000)
})



const myTimeout = setInterval(myGreeting, 5000);
  function myGreeting() {
  if (slideCounter === sliderImages.length - 1) {
    slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[0].src})`
    sliderText.innerHTML = sliderImages[0].text
    slideCounter = -1

    slideContainer.classList.add("fadeIn")
    setTimeout(() => {
      slideContainer.classList.remove("fadeIn")
    }, 1000)
  }
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
      ),url(${sliderImages[slideCounter + 1].src})`
  sliderText.innerHTML = sliderImages[slideCounter + 1].text
  slideCounter++
  slideContainer.classList.add("fadeIn")
  setTimeout(() => {
    slideContainer.classList.remove("fadeIn")
  }, 1000)
}




startSlider()