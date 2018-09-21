for(var x = 0; x < 400; x++){

  var hex = '0123456789ABCDEF';
  var color = '#';

  for (var z = 0; z < 6; z++) {
    color += hex[Math.floor(Math.random() * 16)];
  }


  $('#re1').append('<p>I will change color!</p>').css('color', color);
  $('#re2').append('<p>Will I change color?</p>').css('color', color);
  $('#re3').append('<p>I will change color!</p>').css('color', color);
  $('#re4').append('<p>Will I change color?</p>').css('color', color);
  $('#re5').append('<p>I will change color!</p>').css('color', color);
  $('#re6').append('<p>Will I change color?</p>').css('color', color);
  $('#re7').append('<p>I will change color!</p>').css('color', color);
  $('#re8').append('<p>Will I change color?</p>').css('color', color);
}
