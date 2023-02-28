// Convert the UML diagram to Typescript class.

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getArea() {
    return (Math.PI * this.radius * this.radius).toFixed(2);
  }
  getCircumference() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }
}
var cir1 = new Circle(3, "blue");
console.log(cir1.getArea(), cir1.getCircumference());
