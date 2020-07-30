var drawing= []
var currentPath = []

function setup() {
  createCanvas(400,400);
 canvas.mousePressed (startPath);
}

function startPath(){
  currentPath= []
  drawing.push(currentPath)
}
function draw() {
  background(0);  

if(mouseIsPressed){
  var point={
    x: mouseX,
    y: mouseY
  }
  drawing.push(point)
}
stroke(255)
strokeWeight(4)
noFill()
for(var i=0;i<drawing.length; i++){
var path = drawing[i]
}
beginShape()
for(var j=0;j<drawing.length; j++){
  vertex(drawing[j].x,drawing[j].y)
  }
endShape()
}
