interface Graphic {
  move(x: number, y: number): void;
  draw(): void;
}

class Dot implements Graphic {
  constructor(private x: number, private y: number) {}

  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
  }

  draw(): void {
    console.log(`Dot at (${this.x}, ${this.y})`);
  }
}

class Circle extends Dot {
  constructor(x: number, y: number, private radius: number) {
    super(x, y);
  }

  draw(): void {
    console.log(`Circle with radius ${this.radius}`);
  }
}

class CompoundGraphic implements Graphic {
  private children: Graphic[] = [];

  add(child: Graphic): void {
    this.children.push(child);
  }

  move(x: number, y: number): void {
    for (const child of this.children) {
      child.move(x, y);
    }
  }

  draw(): void {
    for (const child of this.children) {
      child.draw();
    }
  }
}

const all = new CompoundGraphic();
all.add(new Dot(1, 2));
all.add(new Circle(5, 3, 10));

all.draw();
all.move(10, 10);
all.draw();

export {};
