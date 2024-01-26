// 7g
let answer = JSON.parse(localStorage.getItem('answer')) || '';

// let answerOne = '';

// 9j
let topElement = document.querySelector('.top');
topElement.innerHTML = (answer === '') ? 0 : answer;

function updateCalculation(calculation){

  answer = answer + calculation;

  localStorage.setItem('answer', JSON.stringify(answer));

  // 9j
  topElement.innerText = answer

  console.log(answer);  
  
  return answer;

}

function endResult(){

  let outcome = eval(answer);

  console.log(outcome);
  
  topElement.innerText = outcome;

  return outcome;

}