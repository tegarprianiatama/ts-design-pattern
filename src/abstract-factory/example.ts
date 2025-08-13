namespace AbstractFactory {
  interface Button {
    paint(): string;
  }

  class WinButton implements Button {
    paint(): string {
      return 'Render a button in Windows style';
    }
  }

  class MacButton implements Button {
    paint(): string {
      return 'Render a button in macOS style';
    }
  }

  interface Checkbox {
    paint(): string;
  }

  class WinCheckbox implements Checkbox {
    paint(): string {
      return 'Render a checkbox in Windows style';
    }
  }

  class MacCheckbox implements Checkbox {
    paint(): string {
      return 'Render a checkbox in macOS style';
    }
  }

  interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
  }

  class WinFactory implements GUIFactory {
    createButton(): Button {
      return new WinButton();
    }
    createCheckbox(): Checkbox {
      return new WinCheckbox();
    }
  }

  class MacFactory implements GUIFactory {
    createButton(): Button {
      return new MacButton();
    }
    createCheckbox(): Checkbox {
      return new MacCheckbox();
    }
  }

  class Application {
    private button: Button;
    private checkbox: Checkbox;

    constructor(factory: GUIFactory) {
      this.button = factory.createButton();
      this.checkbox = factory.createCheckbox();
    }

    public paint(): void {
      console.log(this.button.paint());
      console.log(this.checkbox.paint());
    }
  }

  function clientCode(factory: GUIFactory): void {
    const app = new Application(factory);
    app.paint();
  }

  clientCode(new WinFactory());
  clientCode(new MacFactory());
}
