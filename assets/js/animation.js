const habits = document.querySelectorAll("#form-habits")
const header = document.querySelector(".header")

TweenMax.from(header, 2, {
  scale: 0,
  ease: Bounce.easeOut,
})
