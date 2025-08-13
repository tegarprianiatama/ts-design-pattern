interface Command {
  execute(): void;
}

class Light {
  on(): void {
    console.log('Light is ON');
  }

  off(): void {
    console.log('Light is OFF');
  }
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.on();
  }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.off();
  }
}

class RemoteControl {
  executeCommand(command: Command): void {
    command.execute();
  }
}

const light = new Light();
const remote = new RemoteControl();

remote.executeCommand(new LightOnCommand(light));
remote.executeCommand(new LightOffCommand(light));

