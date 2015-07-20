$(document).ready(function() {

  function randomDog() {
    var myDogs = ['dog','dog1','dog2','dog3','dog4'];
    var randomNum = Math.ceil((Math.random() * myDogs.length) - 1);
    var currentDog = myDogs[randomNum];
    return currentDog;
  };

  $('button').click(function() {
    console.log(randomDog());
    $('#dogs').toggleClass(randomDog);
    });

  function socialEvent(event) {
    event.stopPropagation();
    $(this).find('img').toggleClass('focus');
  };

  // need to refactor for DRY standard
  $('.social').on('mouseenter','li',socialEvent);
  $('.social').on('mouseleave','li',socialEvent);
  $('#slide1').find('p').slideDown(2000);
});
