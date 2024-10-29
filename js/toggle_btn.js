const btn = document.getElementById('light-btn');

let body = document.querySelector('body')
let image = document.getElementById("image")

btn.addEventListener('click', () => {
  body.classList.toggle('light')
  if(image.src.includes("assets/personal_training.svg")){
    image.src = 'assets/personal_training_light.svg'
  }else{
    image.src = 'assets/personal_training.svg'
  }
})