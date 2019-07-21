class Obj {
	constructor(oh) {
		this.height = oh;
		this.x;
		this.y = mirror.pole.y;

	}

	render() {

		this.x = u - poleX;


		stroke(255);
		strokeWeight(4);
		line(this.x, this.y, this.x, this.y + gtocy(this.height));
	}
}