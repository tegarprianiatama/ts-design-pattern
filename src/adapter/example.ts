class RoundPeg {
  constructor(private radius: number) {}

  getRadius(): number {
    return this.radius;
  }
}

class RoundHole {
  constructor(private radius: number) {}

  fits(peg: RoundPeg): boolean {
    return this.radius >= peg.getRadius();
  }
}

class SquarePeg {
  constructor(private width: number) {}

  getWidth(): number {
    return this.width;
  }
}

class SquarePegAdapter extends RoundPeg {
  constructor(private squarePeg: SquarePeg) {
    super((squarePeg.getWidth() * Math.sqrt(2)) / 2);
  }
}

const hole = new RoundHole(5);
const smallSquarePeg = new SquarePeg(5);
const largeSquarePeg = new SquarePeg(10);

const smallAdapter = new SquarePegAdapter(smallSquarePeg);
const largeAdapter = new SquarePegAdapter(largeSquarePeg);

console.log('Small square peg fits:', hole.fits(smallAdapter));
console.log('Large square peg fits:', hole.fits(largeAdapter));


export {};
