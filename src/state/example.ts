class Context {
  private state!: State;

  constructor(state: State) {
    this.transitionTo(state);
  }

  transitionTo(state: State): void {
    this.state = state;
    this.state.setContext(this);
  }

  request(): void {
    this.state.handle();
  }
}

interface State {
  setContext(context: Context): void;
  handle(): void;
}

class ConcreteStateA implements State {
  private context!: Context;

  setContext(context: Context): void {
    this.context = context;
  }

  handle(): void {
    console.log('State A handles request and switches to B');
    this.context.transitionTo(new ConcreteStateB());
  }
}

class ConcreteStateB implements State {
  private context!: Context;

  setContext(context: Context): void {
    this.context = context;
  }

  handle(): void {
    console.log('State B handles request and switches to A');
    this.context.transitionTo(new ConcreteStateA());
  }
}

const context = new Context(new ConcreteStateA());
context.request();
context.request();
