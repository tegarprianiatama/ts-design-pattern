import Video from "./Video";
import IProduct from "./ProductAdapter";

class VideoProductAdapater implements IProduct {
  name: string;
  price: number;
  artist: string;
  realese_date: Date;

  constructor(video: Video) {
    this.name = video.title;
    this.price = video.price;
    this.artist = video.artist;
    this.realese_date = video.realese_date;
  }
  build = () => {
    return { ...this };
  };
}
export default VideoProductAdapater;
