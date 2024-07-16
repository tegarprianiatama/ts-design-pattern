import Music from "./Music";
import MusicProductAdapter from "./MusicProductAdapter";
import IProduct from "./ProductAdapter";
import Video from "./Video";
import VideoProductAdapater from "./VideoProductAdapter";

const Avengers = new Video(
  "Avengers",
  "Tony Stark Dan Steve Roger",
  new Date(),
  240000
);
const LinkinPark = new Music("In The End", "Linkin Park", new Date(), 250000);

const videoAdapter = new VideoProductAdapater(Avengers);
const linkinParkAdapter = new MusicProductAdapter(LinkinPark);

const data: IProduct[] = [];

data.push(videoAdapter);
data.push(linkinParkAdapter);

console.log("🚀 ~ data:", data);
