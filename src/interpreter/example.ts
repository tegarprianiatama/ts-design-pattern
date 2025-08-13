interface Expression {
  interpret(): number;
}

class NumberExpression implements Expression {
  constructor(private value: number) {}
  interpret(): number {
    return this.value;
  }
}

class AddExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}
  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}

class SubtractExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}
  interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}

// (5 + 10) - 2
const expression: Expression = new SubtractExpression(
  new AddExpression(new NumberExpression(5), new NumberExpression(10)),
  new NumberExpression(2)
);

console.log(expression.interpret()); // 13
