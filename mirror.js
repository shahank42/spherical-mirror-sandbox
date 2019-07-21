class Mirror {
	constructor(px, py, fo) {
		//this.f = fo;
		this.rc = 2 * fo;
		this.pole = createVector(px, py);
		this.focalLength = fo;

		this.focus = createVector(this.pole.x - this.focalLength, py);
		this.cc = createVector(this.pole.x - this.rc, py); 

		this.isConcave = this.rc < 0;
		this.isConvex = this.rc > 0;

	}

	render() {

		this.focalLength = this.rc / 2;
		this.cc = createVector(this.pole.x - this.rc, this.pole.py); 
		this.focus = createVector(this.pole.x - this.focalLength, this.pole.py);

		this.isConcave = this.rc < 0;
		this.isConvex = this.rc > 0;


		// stroke(255);
		// let x = 0;
		// let len = 100
		// while(x < len) {
		// 	point(-x, -(x*x/len));
		// 	point(x, -(x*x/len));
		// 	x++;
		// }


		push();
		

		// Draw the principal axis
		stroke(255, 255);
		strokeWeight(0.5);
		line(-1000, this.pole.y, 1000, this.pole.y);

		// Draw the concave mirror
		stroke(255, 100);
		strokeWeight(5);
		noFill();
		if (this.isConcave) {
	  		arc(this.pole.x + this.rc, this.pole.y, this.rc*2, this.rc*2, -PI/3, -5*PI/3, OPEN);
		} else {
			arc(this.pole.x + this.rc, this.pole.y, this.rc*2, this.rc*2, 2*PI/3, 4*PI/3, OPEN);

		}

		//let sw = 7 * scSlider.value();

		let sw = map(scSlider.value(), 0, 4, 20, 3);

  		// Draw the center of curvature  GREEN
		stroke(0, 200, 0);
		strokeWeight(sw);
		point(this.pole.x - this.cc.x, this.pole.y);

		// Draw the focus  RED
		stroke(200, 0, 0);
		strokeWeight(sw);
		point(this.pole.x - this.focus.x, this.focus.y);

		// Draw the pole  BLUE
		stroke(0, 0, 200);
		strokeWeight(sw);
		point(this.pole.x, this.pole.y);


  		pop();

  		//Draw hair
		//Point on circle = (r*cos(theta), r*sin(theta))
		push();

		//translate(-poleX + this.rc, 0);

		// for (let theta = -PI/3; theta < PI/3 + 0.1; theta += 0.1) {
			
		// 	let len = 20;
		// 	let x1 = this.rc * cos(theta);
		// 	let y1 = this.rc * sin(theta);
		// 	let x2 = (this.rc + len) * cos(theta);
		// 	let y2 = (this.rc + len) * sin(theta);
		// 	line(x1, y1, x2, y2);

		// }


	
		 pop();

	}
}