// Animation variables -- I made this before we learned about vetors
var posX = [];
var posY = [];
var xCenter = [];
var yCenter = [];
var dx = [];
var dy = [];
var theta = [];
var maxRadiusX = [];
var maxRadiusY = [];
var numMovers = 5;

function setup()
{
   createCanvas(600, 600);
   background(0);
   sky();

   for (var i = 0; i < numMovers; i++) {
		posX.push(0);
		posY.push(0);
		dx.push(0);
		dy.push(0);

		theta.push(random(TAU));
		xCenter.push(300);
		yCenter.push(300);
		maxRadiusX.push(200);
		maxRadiusY.push(200);
		
		/* swap from above code to the below code to Randomizw
		theta.push(random(TAU));
		xCenter.push(random(200,400));
		yCenter.push(random(200,400));
		maxRadiusX.push(random(100,200));
		maxRadiusY.push(random(100,200));
		*/
	}

	for(var i = 0; i < numMovers; i++){
		increment(xCenter[i],yCenter[i],xCenter[i],yCenter[i],i);
		renderShape(posX[i],posY[i],i);
	}
}

function draw()
{
	sky();
	flower(width/2, height/2, 0, 1, color(255, 0, 0));
	butterfly(width/3, height/3, 0, 1, color(255, 255, 0));

	for(var i = 0; i < numMovers; i++){
		renderShape(posX[i],posY[i],i);
		increment(xCenter[i],yCenter[i],maxRadiusX[i],maxRadiusY[i],i);
	}
}
function petal(x, y, rot, scl, c1, dirX, dirY)
{
  push();
  	translate(x, y);
  	scale(scl);
  	rotate(rot);
  	fill(c1);
  	beginShape();
  		curveVertex(15 * dirX, 0 * dirY);
  		curveVertex(0 * dirX, 0 * dirY);
    	curveVertex(-30 * dirX, -5 * dirY);
    	curveVertex(-40 * dirX, -15 * dirY);
  		curveVertex(0-30 * dirX, -25 * dirY);
    	curveVertex(0 * dirX, 0 * dirY);
    	curveVertex(10 * dirX, 25 * dirY);
  	endShape();
  pop();

}

function flower(x, y, rot, scl, c1)
{
  push();
  	translate(x, y);
  	scale(scl);
  	rotate(rot);
  	fill(c1);
  	ellipse(0, 0, 30);
  	petal(0, 15, 0, 1, c1, 1, 1);
	petal(0, 15, 0, 1, c1, -1, 1);
	petal(0, 15, 0, .65, c1, 1, -1);
	petal(0, 15, 0, .65, c1, -1, -1);
  pop();
  stroke(c1);
  strokeWeight(3);
  line(x, y, x, height);
  noStroke();
}

function butterfly(x, y, rot, scl, c2)
{
	push();
	  translate(x, y);
	  scale(scl);
	  rotate(rot);
	  fill(c2);
	  ellipse(0, 0, 8, 15);
	  petal(-4, 0, 0, 1, c2, 1.3, .7);
	  petal(4, 0, 0, 1, c2, -1.3, .7);
	  petal(-4, 0, -PI/5, 1, color (255, 0, 0), 1, -1.6);
	  petal(4, 0, PI/5, 1, color (255, 0, 0), -1, -1.6);
	  petal(-4, 0, 0, 1, c2, .7, -1.3);
	  petal(4, 0, 0, 1, c2, -.7, -1.3);
	pop();

}

function sky()
{
   for (var y=0; y<height; y+=10)
   	// GMK -- I changed the increment from 3 to 10
   {
      for (var x=0; x<width; x+=8)
      {
         strokeWeight(10);
         // GMK -- stroke weight from 3 to 10
         stroke(200-random(-10,10), 230+random(10), 230+random(25));
         line(x, y, x+8, y);
      }
   }
}

function renderShape(x,y,index){
	// This is for each instance of an animatable creature
	push();
	translate(x,y);
	rotate(atan2(dy[index], dx[index])+PI/2);
		// triangle(0,0,3,10,-3,10);

		butterfly(0, 0, 0, 1, color(255,255,0));
	pop();
	
}

function increment(centerX,centerY,maxRadiusX,maxRadiusY,index){
	var x1, y1;
	theta[index] += 1/100;
	if(theta[index] >= TAU)
		theta[index] = 0;

	x1 = centerX+ maxRadiusX*cos(1 * theta[index] / .5) * cos(theta[index]);
	y1 = centerY+ maxRadiusY*cos(1 * theta[index] / .5) * sin(theta[index]);

	dx[index] = x1 - posX[index];
	dy[index] = y1 - posY[index];

	posX[index] += dx[index];
	posY[index] += dy[index];
}
