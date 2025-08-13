class TreeType {
  constructor(
    private name: string,
    private color: string,
    private texture: string
  ) {}

  draw(x: number, y: number): void {
    console.log(`Drawing ${this.name} tree at (${x}, ${y}) with color ${this.color}`);
  }
}

class TreeFactory {
  private static types: { [key: string]: TreeType } = {};

  static getTreeType(name: string, color: string, texture: string): TreeType {
    const key = `${name}_${color}_${texture}`;
    if (!this.types[key]) {
      this.types[key] = new TreeType(name, color, texture);
    }
    return this.types[key];
  }
}

class Tree {
  constructor(
    private x: number,
    private y: number,
    private type: TreeType
  ) {}

  draw(): void {
    this.type.draw(this.x, this.y);
  }
}

class Forest {
  private trees: Tree[] = [];

  plantTree(x: number, y: number, name: string, color: string, texture: string): void {
    const type = TreeFactory.getTreeType(name, color, texture);
    this.trees.push(new Tree(x, y, type));
  }

  draw(): void {
    for (const tree of this.trees) {
      tree.draw();
    }
  }
}

const forest = new Forest();
forest.plantTree(1, 1, 'Oak', 'green', 'rough');
forest.plantTree(2, 3, 'Oak', 'green', 'rough');
forest.plantTree(5, 2, 'Pine', 'dark green', 'smooth');

forest.draw();

export {};
