const form = document.getElementById('form');

form.addEventListener('submit', function(event){
  event.preventDefault();

  const weight = document.getElementById('peso').value;
  const height = document.getElementById('altura').value;

  const bmi = (weight/(height*height)).toFixed(2);

  const value = document.getElementById('valor');
  let description = "";

  document.getElementById('infos').classList.remove('hidden');

  if(bmi < 18.5){
    description = "Cuidado! Você está abaixo do peso!"
  }

  value.textContent = bmi;
  document.getElementById('descricao').textContent = description
})