class Image {
	construtor() {
		this.x;
		this.y;
		this.height;
		this.v;
	}

	render() {

		//    1        1       1
		//   ---  =   ---  -  ---       THE MIRROR FORMULA
		//    v        f       u

		let f = mirror.focalLength;
		let u = obj.x//- mirror.pole.x);

		let rec_v = (1/f) - (1/u);
		let v = 1/rec_v
		this.v = v;

		// MAGNIFICATION INDEX
		// a = -v/u

		let a = -v/u;

		// IMAGE MAGNIFICATION
		// I = a*O

		this.height = a*gtocy(obj.height);



		stroke(255, 100);
		strokeWeight(4);
		line(v, 0, v, this.height);


		// console.log("v = " + v);
		// console.log("u = " + u);

		// console.log("f = " + f);

	}
}