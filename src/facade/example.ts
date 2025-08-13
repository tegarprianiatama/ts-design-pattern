class TV {
  on(): void {
    console.log('TV is ON');
  }

  off(): void {
    console.log('TV is OFF');
  }
}

class SoundSystem {
  on(): void {
    console.log('Sound system is ON');
  }

  off(): void {
    console.log('Sound system is OFF');
  }
}

class GameConsole {
  on(): void {
    console.log('Game console is ON');
  }

  off(): void {
    console.log('Game console is OFF');
  }
}

class HomeTheaterFacade {
  constructor(
    private tv: TV,
    private sound: SoundSystem,
    private gameConsole: GameConsole
  ) {}

  watchMovie(): void {
    this.tv.on();
    this.sound.on();
    this.gameConsole.on();
    console.log('Ready to watch a movie');
  }

  endMovie(): void {
    this.gameConsole.off();
    this.sound.off();
    this.tv.off();
    console.log('Movie ended');
  }
}

const tv = new TV();
const sound = new SoundSystem();
const gameConsole = new GameConsole();
const homeTheater = new HomeTheaterFacade(tv, sound, gameConsole);

homeTheater.watchMovie();
homeTheater.endMovie();

