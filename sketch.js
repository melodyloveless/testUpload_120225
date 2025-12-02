/* Bouncing Balls with blendMode()

Exploring color

An extended example from a previous class

*/

var s = 50; // size of ellipse
var x = [];
var y = [];
var ySpeed = [];
var numCircles = 100;
var c = []; // for colors

function setup() {
  createCanvas(400, 400);
  noStroke();
  
    for (i = 0; i < numCircles; i++) {
      x[i] = random(width);
      y[i] = random(height);
      ySpeed[i] = random(1,4);
      
      // for color
      // random number generator
      let r = random(1); 
      if (r < 0.33) {
        c[i] = [0,0,255]; // blue
      } else if (r > 0.66) {
        c[i] = [0,255,0]; // green
      } else {
        c[i] = [255,0,0]; // red
      }
      
    }
}

function draw() {
  clear();
  background(0,0,0);
  // Try different blend modes, see what happens
  blendMode(ADD); 

  for (i = 0; i < numCircles; i++) {
        
    // random colors
    fill(c[i]);
    
    // add ySpeed to y
    y[i] = y[i] + ySpeed[i];
    
    ellipse(x[i], y[i], s);
    
    // switch directions when shape is at edge
    if (y[i] >= height || y[i] <= 0) {
      ySpeed[i] = ySpeed[i] * -1;
    }
    
  }
  
}


/*

For adding:
// red   [255,000,000]
// green [000,255,000]
// blue  [000,000,255]

// red + green = yellow
//.      [255,255,000]
// green + blue = cyan
//.      [000,255,255]
// red + blue = fuschia
//.      [255,000,255]
// red + green + blue = white
//.      [255,255,255]


*/

