import Music from "./Music";
import IProduct from "./ProductAdapter";

class MusicProductAdapter implements IProduct {
  name: string;
  price: number;
  artist: string;
  realese_date: Date;

  constructor(music: Music) {
    this.name = music.getTitle();
    this.price = music.getBill();
    this.artist = music.getSinger();
    this.realese_date = music.getRealeseDate();
  }

  build = () => {
    return { ...this };
  };
}

export default MusicProductAdapter;
