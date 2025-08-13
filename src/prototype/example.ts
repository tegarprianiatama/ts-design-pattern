namespace PrototypePattern {
  abstract class Shape {
    x: number;
    y: number;
    color: string;

    constructor(source?: Shape) {
      this.x = source?.x ?? 0;
      this.y = source?.y ?? 0;
      this.color = source?.color ?? 'white';
    }

    abstract clone(): Shape;
  }

  class Circle extends Shape {
    radius: number;

    constructor(source?: Circle) {
      super(source);
      this.radius = source?.radius ?? 0;
    }

    clone(): Circle {
      return new Circle(this);
    }
  }

  class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(source?: Rectangle) {
      super(source);
      this.width = source?.width ?? 0;
      this.height = source?.height ?? 0;
    }

    clone(): Rectangle {
      return new Rectangle(this);
    }
  }

  const circle1 = new Circle();
  circle1.x = 10;
  circle1.y = 20;
  circle1.radius = 15;
  circle1.color = 'red';

  const circle2 = circle1.clone();

  console.log('Circle1', circle1);
  console.log('Circle2', circle2);
  console.log('Are circles equal?', circle1 === circle2);

  const rectangle1 = new Rectangle();
  rectangle1.width = 10;
  rectangle1.height = 20;
  rectangle1.color = 'blue';

  const rectangle2 = rectangle1.clone();
  console.log('Rectangle2', rectangle2);
}
