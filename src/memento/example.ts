class Memento {
  constructor(private state: string) {}
  getState(): string {
    return this.state;
  }
}

class Editor {
  private content = '';

  type(words: string): void {
    this.content += words;
  }

  save(): Memento {
    return new Memento(this.content);
  }

  restore(memento: Memento): void {
    this.content = memento.getState();
  }

  getContent(): string {
    return this.content;
  }
}

const editor = new Editor();
editor.type('Hello, ');
editor.type('world!');
const saved = editor.save();
editor.type(' This will be removed.');

console.log(editor.getContent());
editor.restore(saved);
console.log(editor.getContent());
