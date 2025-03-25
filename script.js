//canvas line
const c =  document.getElementById("myCanvas");
const ctx1 = c.getContext("2d");
ctx1.moveTo(0,0);
ctx1.lineTo(300,400);
ctx1.stroke();

// canvas

 const canvas =document.getElementById("redCanvas");
 const ctx2 = canvas.getContext("2d");
 ctx2.fillStyle = "red";
 ctx2.fillRect(0,0,300,400);
