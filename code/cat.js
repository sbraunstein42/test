export class Cat {

	prevRect = null;

	constructor() {
		console.log("Made cat.");
	}

	meow = () => {
		console.log("Meow!");
	}

	render = (x, y) => {
		const canvas = document.getElementById("gameCanvas");
		var context = canvas.getContext("2d");
		context.lineTo(x + 0, x + 0);
		context.lineTo(x + 10, x + 0);
		context.lineTo(x + 10, y +  20);
		context.lineTo(x + 15, y +  20);
		context.lineTo(x + 15, y +  0);
		context.lineTo(x + 25, y +  0);
		context.lineTo(x + 25, y +  60);
		context.lineTo(x + 0,  y + 60);
		context.lineTo(x + 0,  y + 0);
		context.stroke();
	}


}