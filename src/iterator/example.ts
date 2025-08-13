interface MyIterator<T> {
  next(): T | null;
  rewind(): void;
}

class NumberCollection {
  private items: number[] = [];

  addItem(item: number): void {
    this.items.push(item);
  }

  getIterator(): MyIterator<number> {
    const items = this.items;
    let index = 0;
    return {
      next(): number | null {
        if (index < items.length) {
          return items[index++];
        }
        return null;
      },
      rewind(): void {
        index = 0;
      }
    };
  }
}

const collection = new NumberCollection();
collection.addItem(1);
collection.addItem(2);
collection.addItem(3);

const iterator = collection.getIterator();
let item = iterator.next();
while (item !== null) {
  console.log(item);
  item = iterator.next();
}
