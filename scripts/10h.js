let boxElement = document.querySelector('.textBoxJS');

let overallPrice = document.querySelector('.totalPriceJS');

function handleCostKeyDown(event){

  console.log(event.key);

  const enterEvent = event.key === 'Enter' ? shippingCalculator() : false;

  if(event.key === 'Backspace'){
    overallPrice.classList.remove('lessThanZero');
    overallPrice.innerHTML = 'Total: ';
  }

}

function shippingCalculator(){

  let cost = Number(boxElement.value);
  console.log(Math.round(((7.99+10)*100)));

  let newPrice = (`$${Math.round((cost+10)*100)/100}`);

  if(cost * 0 === 0 && cost > 0){
    overallPrice.classList.remove('lessThanZero');
    overallPrice.innerHTML = (cost < 40) ? 'Total: ' + newPrice : 'Free shipping!';
  }

  // else if(overallPrice.innerText !== 'Total:'){
  //   newPrice = '';
  // }

  else if(cost < 0){
    overallPrice.innerHTML = 'Cost cannot be less than $0';
    overallPrice.classList.add('lessThanZero');
  }
  
  else{
    overallPrice.innerHTML = 'Enter a valid number!';
  }
  
}



