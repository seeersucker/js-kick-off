function toggling(x){

  if(!x.classList.contains('isToggled')){
    x.classList.add('isToggled');
  }
  else{
    x.classList.remove('isToggled');
  }

}