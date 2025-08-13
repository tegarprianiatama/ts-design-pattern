interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getName(): string;
}

class TV implements Device {
  private on = false;

  isEnabled(): boolean {
    return this.on;
  }

  enable(): void {
    this.on = true;
    console.log('TV is ON');
  }

  disable(): void {
    this.on = false;
    console.log('TV is OFF');
  }

  getName(): string {
    return 'TV';
  }
}

class Radio implements Device {
  private on = false;

  isEnabled(): boolean {
    return this.on;
  }

  enable(): void {
    this.on = true;
    console.log('Radio is ON');
  }

  disable(): void {
    this.on = false;
    console.log('Radio is OFF');
  }

  getName(): string {
    return 'Radio';
  }
}

class Remote {
  constructor(protected device: Device) {}

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }
}

class AdvancedRemote extends Remote {
  mute(): void {
    console.log(`Muting ${this.device.getName()}`);
  }
}

const tv = new TV();
const radio = new Radio();
const remote = new Remote(tv);
const advanced = new AdvancedRemote(radio);

remote.togglePower();
remote.togglePower();
advanced.togglePower();
advanced.mute();

export {};
