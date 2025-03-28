//canvas draw line
const c =  document.getElementById("myCanvas");
const ctx1 = c.getContext("2d");
ctx1.moveTo(0,0);
ctx1.lineTo(200,250);
ctx1.lineWidth = 10;
ctx1.strokeStyle = "red";
ctx1.lineCap = "square";
ctx1.stroke();

// canvas fill color

 const canvas =document.getElementById("redCanvas");
 const ctx2 = canvas.getContext("2d");
 ctx2.fillStyle = "red";
 ctx2.fillRect(10,10,150,75);
 
// canvas draw circle
const myCanvas = document.getElementById("circleCanvas");
const ctx3 = myCanvas.getContext("2d");

ctx3.beginPath();
ctx3.arc(150,190,130,0,2*Math.PI);
ctx3.stroke();
// canvas strokestyle
const newLine = document.getElementById("strokeCanvas");
const ctx4  = newLine.getContext("2d");
ctx4.strokeStyle = "blue";
ctx4.lineWidth=  5;
ctx4.strokeRect(10,10,100,100);
//combining fillstroke and strokestyle
const  squareFill = document.getElementById("fillCanvas");
const ctx5 = squareFill.getContext("2d");
//filled the rectangle
ctx5.fillStyle = "red";
ctx5.fillRect(20,20, 200, 100);
ctx5.fillStyle = "rgb(0 255 0/50%)";// property to create opacity
ctx5.fillRect(30,150,230,200);
//the outline rectangle

ctx5.strokeStyle = "black";
ctx5.lineWidth = 3;
ctx5.strokeRect(20,20,200,100);
ctx5.strokeStyle = "rgb(0 0 0 255/50%)";//property to create opacity
ctx5.strokeRect(30,150,230,200);

// shapes
const shapes = document.getElementById("canvas1");
const ctx6 = shapes.getContext("2d");
ctx6.beginPath();
// set start-point
ctx6.moveTo(20,20);
//set sub point
ctx6.lineTo(20,180);
ctx6.lineTo(200,180);
ctx6.lineTo(200,20);
//set end point
ctx6.lineTo(20,20);
//define triangle
ctx6.moveTo(100,20);
ctx6.lineTo(180,100);
ctx6.lineTo(20,100);
ctx6.lineTo(100,20);
ctx6.strokeStyle="red";
ctx6.stroke();



// rectangle inside multiple rectangle
const rectangleCanvas = document.getElementById("canvas2");
const ctx7 =  rectangleCanvas.getContext("2d");
//red rectangle
ctx7.lineWidth = "6";
ctx7.strokeStyle= "red";
ctx7.strokeRect(5,5,290,150);


// green rectangle
ctx7.lineWidth = "4";
ctx7.strokeStyle = "green";
ctx7.strokeRect(30,20,60,60);

//yellow rectangle
ctx7.lineWidth ="10";
ctx7.strokeStyle = "yellow";
ctx7.strokeRect(50,50,180,80);
ctx7.clearRect(60,35,150,50);
//pink rectangle
ctx7.lineWidth ="8";
ctx7.strokeStyle = "pink";
ctx7.strokeRect(70,35,80,100);
ctx7.clearRect(20,30,67,30);