interface Visitor {
  visitConcreteComponentA(element: ConcreteComponentA): void;
  visitConcreteComponentB(element: ConcreteComponentB): void;
}

interface Component {
  accept(visitor: Visitor): void;
}

class ConcreteComponentA implements Component {
  accept(visitor: Visitor): void {
    visitor.visitConcreteComponentA(this);
  }

  exclusiveMethodOfA(): string {
    return 'A';
  }
}

class ConcreteComponentB implements Component {
  accept(visitor: Visitor): void {
    visitor.visitConcreteComponentB(this);
  }

  specialMethodOfB(): string {
    return 'B';
  }
}

class ConcreteVisitor1 implements Visitor {
  visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log(`Visitor1: ${element.exclusiveMethodOfA()}`);
  }
  visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log(`Visitor1: ${element.specialMethodOfB()}`);
  }
}

class ConcreteVisitor2 implements Visitor {
  visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log(`Visitor2: ${element.exclusiveMethodOfA().toLowerCase()}`);
  }
  visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log(`Visitor2: ${element.specialMethodOfB().toLowerCase()}`);
  }
}

const components: Component[] = [new ConcreteComponentA(), new ConcreteComponentB()];

const visitor1 = new ConcreteVisitor1();
for (const component of components) {
  component.accept(visitor1);
}

const visitor2 = new ConcreteVisitor2();
for (const component of components) {
  component.accept(visitor2);
}
