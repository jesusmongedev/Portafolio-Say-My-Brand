import { Header } from "./Header";
import { HeroImg } from "./HeroImg";
import { Booking } from "./Booking";
import { Rooms } from "./Rooms";
import { Opinions } from "./Opinions";
import { Footer } from "./Footer";
import { ImageSlider } from "./ImageSlider";

function App() {
  return (
    <>
      <Header/>
      <HeroImg/>
      <Booking/>
      <ImageSlider />
      <Rooms/>
      <Opinions/>
      <Footer/>
    </>
  );
}

export default App;
