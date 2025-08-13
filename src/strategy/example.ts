interface Strategy {
  execute(a: number, b: number): number;
}

class AdditionStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class SubtractionStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

class MultiplicationStrategy implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

class Calculator {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  calculate(a: number, b: number): number {
    return this.strategy.execute(a, b);
  }
}

const calculator = new Calculator(new AdditionStrategy());
console.log('10 + 5 =', calculator.calculate(10, 5));

calculator.setStrategy(new SubtractionStrategy());
console.log('10 - 5 =', calculator.calculate(10, 5));

calculator.setStrategy(new MultiplicationStrategy());
console.log('10 * 5 =', calculator.calculate(10, 5));
