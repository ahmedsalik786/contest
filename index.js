document.querySelector('.div-container-1').addEventListener('mouseover', function(){
    document.querySelector('.item-1-img').style.backgroundSize = '214%';
  });
  document.querySelector('.div-container-1').addEventListener('mouseout', function(){
    document.querySelector('.item-1-img').style.backgroundSize = '204%';
  });

// For Div 2

document.querySelector('.div-container-2').addEventListener('mouseover', function(){
    document.querySelector('.div-container-2-right').style.backgroundSize = '114%';
  });
  document.querySelector('.div-container-2').addEventListener('mouseout', function(){
    document.querySelector('.div-container-2-right').style.backgroundSize = '104%';
  });

// For Div 3


document.querySelector('.div-container-3').addEventListener('mouseover', function(){
    document.querySelector('.image-div-container-3').style.backgroundSize = '95%';
  });
  document.querySelector('.div-container-3').addEventListener('mouseout', function(){
    document.querySelector('.image-div-container-3').style.backgroundSize = '85%';
  });

//For Div 4
  document.querySelector('.div-container-4').addEventListener('mouseover', function(){
    document.querySelector('.profile-image').style.backgroundSize = '110%';
  });
  document.querySelector('.div-container-4').addEventListener('mouseout', function(){
    document.querySelector('.profile-image').style.backgroundSize = '100%';
  });

  document.querySelector('.div-container-3').addEventListener('mouseover', function(){
    document.querySelector('.div-name').classList.add('div-nameee');
  });
  document.querySelector('.div-container-3').addEventListener('mouseout', function(){
    document.querySelector('.div-name').removeClass.removeClass('div-nameee');
  });

