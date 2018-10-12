var timer = 0;
var l=0;
var w = 0;

for(var x = 0; x < 500; x++){

  setTimeout(function(){

    var circle = document.createElement("div");
    circle.className="circle";

    var hex = '0123456789ABCDEF';
    var color = '#';

    // document.getElementById("myButton").addEventListener("click", right());
    document.getElementById("myButton").onclick = function(){ right()};

    function right(){
      l = Math.random()*30+1;
      w = Math.random()*30+1;
      o = Math.random()*1;
      circle.style.marginLeft = l +"vw";
      circle.style.marginTop = w +"vw";
      circle.style.opacity = o;
    }

    for (var z = 0; z < 6; z++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    circle.style.backgroundColor = color;

    document.getElementById("shapes").appendChild(circle);
  }, timer)

timer+=100;
}
