var color = document.getElementById("vi");
var cor;
function pisca(){
    setInterval(function() {
        setInterval(function(){
            color.style.color = "palevioletred";
        }, 2000);
        setInterval(function(){
            color.style.color = "aqua";
        }, 3000);
      }, 500);
}

pisca();