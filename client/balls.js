context = document.getElementById("canvas").getContext("2d");

var context;
var x=100;
var y=200;
var dx=5;
var dy=5;
var maxWidth = canvas.width;
var maxHeight = canvas.height;



socket.on('newPos', function(data){


    for(var i = 0 ; i < data.length; i++)
    context.beginPath();


    context.arc(x,y,20,0,Math.PI*2,true);
    context.fill();
    context.closePath();

    if( x<0 || x>maxWidth) dx=-dx;
    if( y<0 || y>maxHeight) dy=-dy;
    x+=dx;
    y+=dy;
});
