let gamingBtnElement = document.querySelector('.gamingBtn');

let musicBtnElement = document.querySelector('.musicBtn');

let techBtnElement = document.querySelector('.techBtn');


function toggling(x){

  turnOffPreviousButton();

  if(!x.classList.contains('isToggled')){
    x.classList.add('isToggled');
  }

  else{
    x.classList.remove('isToggled');
  }

}


function turnOffPreviousButton(){

  gamingBtnElement.classList.remove('isToggled');
  musicBtnElement.classList.remove('isToggled');
  techBtnElement.classList.remove('isToggled');

}
