var c = document.getElementById("canvas");
var context = c.getContext("2d");

/*ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();*/



setInterval(function(){ context.fillRect(100,100, 50,50); }, 3000/25);