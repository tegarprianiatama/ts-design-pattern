interface IBook {
  title: string;
  author: string;
  realese_date: Date;
  bill: number;
}

class Book implements IBook {
  public title: string;
  public author: string;
  public realese_date: Date;
  public bill: number;

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getAuthor(): string {
    return this.author;
  }

  public setAuthor(author: string): void {
    this.author = author;
  }

  public getRealeseDate(): Date {
    return this.realese_date;
  }

  public setRealeseDate(realese_date: Date): void {
    this.realese_date = realese_date;
  }

  public getBill(): number {
    return this.bill;
  }

  public setBill(bill: number): void {
    this.bill = bill;
  }

  constructor(title: string, author: string, realese_date: Date, bill: number) {
    this.title = title;
    this.author = author;
    this.realese_date = realese_date;
    this.bill = bill;
  }
}

export default Book;
