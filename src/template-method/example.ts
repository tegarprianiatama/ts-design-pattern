abstract class Game {
  play(): void {
    this.initialize();
    this.startPlay();
    this.endPlay();
  }

  protected abstract initialize(): void;
  protected abstract startPlay(): void;
  protected abstract endPlay(): void;
}

class Chess extends Game {
  protected initialize(): void {
    console.log('Chess Game Initialized!');
  }
  protected startPlay(): void {
    console.log('Chess Game Started. Enjoy the game!');
  }
  protected endPlay(): void {
    console.log('Chess Game Finished!');
  }
}

class Football extends Game {
  protected initialize(): void {
    console.log('Football Game Initialized!');
  }
  protected startPlay(): void {
    console.log('Football Game Started. Enjoy the game!');
  }
  protected endPlay(): void {
    console.log('Football Game Finished!');
  }
}

const chess = new Chess();
chess.play();

const football = new Football();
football.play();
