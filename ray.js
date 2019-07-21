class Ray {
	constructor() {
		this.x1;
		this.y1;
		this.x2;
		this.y2;
	}

	render(ob) {
		stroke(255);
		strokeWeight(0.5);
		line(ob.x, ob.y + gtocy(ob.height), 1000, ob.y + gtocy(ob.height));
		line(ob.x)
	}
}