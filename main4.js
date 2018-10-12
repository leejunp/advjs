var timer = 0;
var l=0;
var w = 0;
var rad = 0;
var count = 0;
var up = 0;

for(var x = 0; x < 1000; x++){

  setTimeout(function(){

    var circle = document.createElement("div");
    circle.className="circle";

    var hex = '0123456789ABCDEF';
    var color = '#';

    for (var z = 0; z < 6; z++) {
      color += hex[Math.floor(Math.random() * 16)];
    }

    circle.style.backgroundColor = color;


    document.getElementById("shapes").onclick = function(){ right()};
    document.getElementById("shapes").onmouseover = function() {hov()};

    function hov(){
      a = Math.random()*30+1;
      circle.style.width = a+"vw";
      circle.style.height = a+"vw";
    }

    function right(){
      l = Math.random()*60+1;
      w = Math.random()*30+1;
      o = Math.random()*1;
      r = Math.random()*5;
      circle.style.marginLeft = l +"vw";
      circle.style.marginTop = w +"vw";
      circle.style.opacity = o;
      circle.style.borderRadius = r + "vw";
    }


    document.getElementById("shapes").appendChild(circle);
  }, timer)

timer+=300;
}
