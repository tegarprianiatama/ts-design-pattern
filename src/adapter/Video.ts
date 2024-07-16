interface IVideo {
  title: string;
  artist: string;
  realese_date: Date;
  price: number;
}

class Video implements IVideo {
  public title: string;
  public artist: string;
  public realese_date: Date;
  public price: number;

  public getTitle(): string {
    return this.title;
  }

  public seTitlel(title: string): void {
    this.title = title;
  }

  public getArtist(): string {
    return this.artist;
  }

  public seTArtist(artist: string): void {
    this.artist = artist;
  }

  public getReleaseDate(): Date {
    return this.realese_date;
  }

  public setReleaseDate(realese_date: Date): void {
    this.realese_date = realese_date;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  constructor(
    title: string,
    artist: string,
    realese_date: Date,
    price: number
  ) {
    this.title = title;
    this.artist = artist;
    this.realese_date = realese_date;
    this.price = price;
  }
}

export default Video;
