export function createSlider(projeto){
  let currentPosition = 0

  let sliderContainer = document.createElement("div")
  sliderContainer.classList.add("projeto-slider")
  let buttonsContainer = document.createElement("div")
  buttonsContainer.classList.add("flex space-between container slider-buttons")

  let sliderImages = projeto.images
  let lastIndex = sliderImages.length - 1
  
  let sliderCurrentImage = document.createElement("img")
  let leftButton = document.createElement("img")
  let rightButton = document.createElement("img")
  
  sliderCurrentImage.src = sliderImages[0]
  sliderCurrentImage.classList.add("projeto-img")
  leftButton.src = "/img/Slider left button.svg"
  rightButton.src = "/img/Slider right button.svg"

  leftButton.addEventListener("click", () =>{
    if(currentPosition == 0){
      sliderCurrentImage.src = sliderImages[lastIndex]
      currentPosition = lastIndex
    }
    else{
      sliderCurrentImage.src = sliderImages[currentPosition - 1]
      currentPosition = currentPosition - 1
    }
  })

  rightButton.addEventListener("click", () =>{
    if(currentPosition == lastIndex){
      sliderCurrentImage.src = sliderImages[0]
      currentPosition = 0
    }
    else{
      sliderCurrentImage.src = sliderImages[currentPosition + 1]
      currentPosition = currentPosition + 1
    }
  })

  buttonsContainer.append(leftButton,rightButton)
  sliderContainer.append(buttonsContainer,sliderCurrentImage)

  return sliderContainer
}