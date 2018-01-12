var counter = 0;
var timeleft;
var executed;
var s;
var exec = false;
var alarm = new Audio("alarm.wav");
var ring = new Audio("ring.wav");
var x = 25;
var y = 10;
var z = 5;
alarm.volume = 0.05;
ring.volume = 0.2;

function convert(s){
   min = parseInt(s / 60);
   sec = s % 60;
  if(min >= 0 && sec >= 0 ){
  if(sec <= 9) {
    if(min <= 9){
      return '0' + min + ":" + '0' + sec;
    }
    else return min + ":" + '0' + sec;
  }
  else if(sec >= 10){
    if(min <= 9){
      return '0' + min + ":" + sec;
    }
    else return min + ":" + sec;
  }
}
else {
  alarm.play();
  clearInterval(s);
  return "END";

}
}
function timeIt(timeleft){
  $('#timer').html(convert(timeleft - counter));
  counter++;

}
function pomodoro(x){
  backgroundChange();
  alarm.pause();
  counter = 0;
  clearInterval(s);
   s = setInterval(function(){
  changeTimerColor();
  timeIt(x);
}, 1000);
}
$(document).ready(function(){
  backgroundChange();
  $('#drop').click(function(){

    if(exec == false){
    // $('#appendContainer').append("<input type='text' class='input form-control bfh-number'> <button id='submit'> Submit </button>").fadeIn(2000);
    $("<p id='text'> Choose Pomodoro Time </p> <input type='number' value=25 id='input' class='input form-control bfh-number'>  <p id='text'> Choose Break Time </p> <input type='text' value=10 id='inputTwo' class='input form-control bfh-number'> <div class='btn btn-group'><button id='submit' class='button' onclick='getVal(); pomodoro(x * 60); '> Submit </button><button id='custom' class='button' onclick='customPomodoro(); '> Custom Pomodoro </button></div>").hide().prependTo('#appendContainer').fadeIn(1000);
    exec = true;
    //$('.sign').removeClass('sign glyphicon glyphicon-arrow-down').fadeOut(600).addClass('sign glyphicon glyphicon-arrow-up').fadeIn(600);
    $('.sign').fadeOut(1000,function(){
      $(this).removeClass('sign glyphicon glyphicon-arrow-down');
    });
    $('.sign').fadeIn(1000,function(){
      $(this).addClass('sign glyphicon glyphicon-arrow-up');
    });
  }
  else {
    // $('#appendContainer').empty();
    //$("<input type='text'  class='input form-control bfh-number'> <button id='submit'> Submit </button>").show().appendTo('#appendContainer').fadeOut(1000);
    $('#appendContainer').fadeOut(1000, function(){
      $(this).empty().show();
    })
    exec = false;
    //$('.sign').removeClass('sign glyphicon glyphicon-arrow-up').fadeOut(600).addClass('sign glyphicon glyphicon-arrow-down').fadeIn(600);
    $('.sign').fadeOut(1000,function(){
      $(this).removeClass('sign glyphicon glyphicon-arrow-up');
    });
    $('.sign').fadeIn(1000,function(){
      $(this).addClass('sign glyphicon glyphicon-arrow-down');
    });
  }

});

});
function getVal(){
  x = $('#input').val();
  y = $('#inputTwo').val();
  z = $('#inputTwo').val();
}

function customPomodoro(x){
  x = $('#input').val();
  y = $('#inputTwo').val();
  pomodoro(x * 60);
  setTimeout(function(){
    ring.play();
    pomodoro(y * 60);
  }, 1000 * 60 * x + 500);


}
function backgroundChange(){
  var x = Math.floor((Math.random() * 255) + 1);
  var y = Math.floor((Math.random() * 255) + 1);
  var z = Math.floor((Math.random() * 255) + 1);
  $('body').animate({'backgroundColor': "rgb( " + x + ", " + y + ", " + z + ")"}, 1000);

};

function changeTimerColor(){
  var x = Math.floor((Math.random() * 100) + 1);
  var y = Math.floor((Math.random() * 100) + 1);
  var z = Math.floor((Math.random() * 100) + 1);
  $('#timer').css('color', "rgb( " + x + ", " + y + ", " + z)


}
