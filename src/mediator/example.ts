interface Mediator {
  notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
  constructor(private component1: Component1, private component2: Component2) {
    this.component1.setMediator(this);
    this.component2.setMediator(this);
  }

  notify(sender: object, event: string): void {
    if (event === 'A') {
      console.log('Mediator reacts on A and triggers B');
      this.component2.doC();
    }
    if (event === 'D') {
      console.log('Mediator reacts on D and triggers A and C');
      this.component1.doB();
      this.component2.doC();
    }
  }
}

class BaseComponent {
  protected mediator!: Mediator;

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

class Component1 extends BaseComponent {
  doA(): void {
    console.log('Component 1 does A');
    this.mediator.notify(this, 'A');
  }

  doB(): void {
    console.log('Component 1 does B');
    this.mediator.notify(this, 'B');
  }
}

class Component2 extends BaseComponent {
  doC(): void {
    console.log('Component 2 does C');
    this.mediator.notify(this, 'C');
  }

  doD(): void {
    console.log('Component 2 does D');
    this.mediator.notify(this, 'D');
  }
}

const c1 = new Component1();
const c2 = new Component2();
const mediator = new ConcreteMediator(c1, c2);

console.log('Client triggers operation A.');
c1.doA();

console.log('\nClient triggers operation D.');
c2.doD();
