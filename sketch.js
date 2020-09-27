const step = 90;
let mapDist = 199;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
}

function draw() {
	colorMode(RGB);
  	background(240);  	
	for(let x = 0; x < windowWidth+step; x+=step*0.8){
	  	for(let y = 0; y < windowHeight+step; y+=step/2){
	  		colorMode(HSB);
	  		fill(35,map(dist(mouseX+step*0.7,mouseY+step*0.7,x,y), 0, mapDist%1000, 50, 0),100, 1);
	  		stroke(35,map(dist(mouseX+step*0.7,mouseY+step*0.7,x,y), 0, mapDist%1000, 0, 10),100, 1);
	  		polygon(x,y,step,6);
	  	}
	}
}

function mouseClicked(){
	mapDist += 200;
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}