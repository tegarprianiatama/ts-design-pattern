interface IMusic {
  title: string;
  singer: string;
  realese_date: Date;
  bill: number;
}

class Music implements IMusic {
  public title: string;
  public singer: string;
  public realese_date: Date;
  public bill: number;

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getSinger(): string {
    return this.singer;
  }

  public setSinger(singer: string): void {
    this.singer = singer;
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

  constructor(title: string, singer: string, realese_date: Date, bill: number) {
    this.title = title;
    this.singer = singer;
    this.realese_date = realese_date;
    this.bill = bill;
  }
}

export default Music;
