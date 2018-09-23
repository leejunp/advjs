
var snowTimer = 0; 

for (var i = 0; i < 100; i++) {
    setTimeout(function() {

        var weather = document.createElement("div");
            weather.className = "weater";

        var snow = "";

        for (var s = 0; s < 10; s++) {

            var snowOrRain = Math.random()*100;
            if (snowOrRain < 33) {
                snow += "❄️";
            }else if (snowOrRain > 33 && snowOrRain < 66){
                snow += "💧";
            }else {
                snow += " ";
            }
        }

        weather.innerHTML = snow;


        document.getElementById("wrapper").appendChild(weather)
        window.scrollTo(0,document.body.scrollHeight);

    }, snowTimer);
    snowTimer += 70;
}
