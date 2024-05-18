const heroShape_topSquare = document.getElementById("hero-shape-topSquare")
const hero_fillShapeTop = document.getElementById("hero-fillShapeTop")

heroShape_topSquare.addEventListener("mouseover" , () => {
  hero_fillShapeTop.classList.add("hero-fillShape-hover")
})

heroShape_topSquare.addEventListener("mouseout" , () => {
  hero_fillShapeTop.classList.remove("hero-fillShape-hover")
})