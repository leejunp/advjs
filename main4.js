var timer = 0;
var l=0;
var w = 0;
var circle = document.createElement("div");
circle.className="circle";




for(var x = 0; x < 500; x++){

  function right(){
    l = Math.random()*30+1;
    w = Math.random()*30+1;
    circle.style.marginLeft = l +"vw";
    circle.style.marginTop = w +"vw";

    // document.getElementById("shapes").appendChild(circle);
  }

  setTimeout(function(){

    var hex = '0123456789ABCDEF';
    var color = '#';

    for (var z = 0; z < 6; z++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    circle.style.backgroundColor = color;

    document.getElementById("shapes").appendChild(circle);
  }, timer)

  timer+=100;
}
