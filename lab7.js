function setup()
{
   createCanvas(600, 600);
   background(0);
   sky();
}

function draw()
{
	flower(width/2, height/2, 0, 1, color(255, 0, 0));
	butterfly(width/3, height/3, 0, 1, color(255, 255, 0));
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
   for (var y=0; y<height; y+=3)
   {
      for (var x=0; x<width; x+=8)
      {
         strokeWeight(3);
         stroke(200-random(-10,10), 230+random(10), 230+random(25));
         line(x, y, x+8, y);
      }
   }
}
