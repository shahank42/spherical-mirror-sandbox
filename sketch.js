//import Math;

let mirror;
let obj;
let image;
let ray;
let flSlider;
let ohSlider;
let scSlider;

let isConcave;
let isConvex;

let poleX = 400;
let poleY = 200;
let objHeight = 70;
let focalLength;
let u = 175;

function setup() {
  let canv = createCanvas(700, 400);
  canv.position(50, 50);
  flSlider = createSlider(-100, 100, -80, 1);

  scSlider = createSlider(0, 4, 1, 0.01);
  //scSlider = select('#scSlider');
  scSlider.position(600, 470);
  //flSlider = select('#flSlider');
  flSlider.position(990, 50);
  
  mirror = new Mirror(0, 0, flSlider.value());
  obj = new Obj(objHeight);
  image = new Image();
  ray = new Ray();

}

function draw() {
  background(0);

  mirror.focalLength = flSlider.value();
  mirror.rc = 2 * flSlider.value();

  let title = select('#title');
  title.position(50, 430);
  let subt = select('#subt');
  subt.position(50, 470);
  let subsubt = select('#subsubt');
  subsubt.position(210, 488);

  let fll = select('#fll');
  fll.html("Focal Length ( <i>f</i> ): " + (flSlider.value()*2.54/96).toFixed(1) + " cm");
  fll.position(800, 50);
  let scl = select('#scl');
  scl.html("Zoom: " + scSlider.value());
  scl.position(510, 470);
  let mrinfo = select('#mrinfo');
  if (mirror.isConcave) {
  	mrinfo.html("Mirror is currently concave");
  } else if (mirror.isConvex) {
  	mrinfo.html("Mirror is currently convex");
  }
  mrinfo.position(510, 500);
  let obhl = select('#obhl');
  obhl.html("Object Height ( <i>h<sub>O</sub></i> ): " + (obj.height*2.54/96).toFixed(1) + " cm");
  obhl.position(800, 80);
  let imhl = select('#imhl');
  imhl.html("Image Height ( <i>h<sub>I</sub></i> ): "+ (image.height*2.54/96).toFixed(1) + " cm");
  imhl.position(800, 110);
  let ud = select('#ud');
  ud.html("Object Distance ( <i>u</i> ): " + (obj.x*2.54/96).toFixed(1) + " cm");
  ud.position(800, 140);
  let vd = select('#vd');
  vd.html("Image Distance ( <i>v</i> ): " + (image.v*2.54/96).toFixed(1) + " cm");
  vd.position(800, 170);
  let a = select('#a');
  a.html("Magnification Index ( <i>a</i> ): " + ((-image.height/obj.height)).toFixed(1));
  a.position(800, 200);

  let pole = select('#pole');
  pole.html("Pole (P): (" + poleX + ", " + poleY + ") [computer graphics coordinates]");
  pole.position(800, 240);
  let f = select('#f');
  f.html("Principal Focus (F): (" + -(mirror.focus.x - poleX).toFixed(1) + ", " + poleY + ") [computer graphics coordinates]");
  f.position(800, 280);
  let cc = select('#cc');
  cc.html("Center of Curvature (C): " + -(mirror.cc.x*2.54/96).toFixed(1) + " cm");
  cc.position(800, 320);



  //	obj.height = 50;
  if (keyIsDown(UP_ARROW)) {
		obj.height += 1;
	} else if (keyIsDown(DOWN_ARROW)) {
		obj.height -= 1;
	}



  //obj.height = ohSlider.value();

  

  //translate(-mirror.cc.x, mirror.cc.y);

  push();

  //translate(mirror.cc.x, mirror.cc.y)



  translate(poleX, poleY);

  // /translate(-mirror.cc.x, mirror.cc.y);





	//translate(250-mirror.cc.x, mirror.cc.y);
	strokeWeight(50);

    scale(scSlider.value());
  obj.render();
  image.render();
  renderRays();
  	point(0,0);

  mirror.render();

  //circle(mouseX, mouseY, 20);

  	if (keyIsDown(LEFT_ARROW)) {
		u -= 1;
	} else if (keyIsDown(RIGHT_ARROW)) {
		u += 1;
	}

	pop();


}

function gtocy(y) {
	a = -y;
	return a;
}

function renderRays() {

	push();
	translate(-mirror.cc.x, mirror.cc.y);




	//strokeWeight(50);
	// /point(0,0);

	let theta = asin((obj.y + gtocy(obj.height))/mirror.rc);
	let rayLen = mirror.cc.x * cos(theta);


	stroke(200, 100, 0);
	strokeWeight(0.5);
	//line(obj.x, obj.y + gtocy(obj.height), 1000, obj.y + gtocy(obj.height));
	line(obj.x -mirror.rc, obj.y + gtocy(obj.height), rayLen, obj.y + gtocy(obj.height));
	// line(rayLen, obj.y + gtocy(obj.height), mirror.focus.x, mirror.focus.y);	

	line(rayLen, obj.y + gtocy(obj.height), mirror.cc.x + image.v, -gtocy(image.height));
	//line(rayLen, obj.y + gtocy(obj.height), mirror.focus.x, mirror.focus.y);

	
	//line(mirror.focus.x, mirror.focus.y, mirror.cc.x + image.v, -gtocy(image.height));





	line(obj.x -mirror.rc, obj.y + gtocy(obj.height), mirror.cc.x + mirror.pole.x, mirror.pole.y);
	line(mirror.cc.x + mirror.pole.x, mirror.pole.y, mirror.cc.x + image.v, -gtocy(image.height));



	pop();
}