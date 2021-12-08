import { Header } from "./Header";
import { HeroImg } from "./HeroImg";
import { Booking } from "./Booking";
import { Rooms } from "./Rooms";
import { Opinions } from "./Opinions";
import { Footer } from "./Footer";
import { ImageSlider } from "./ImageSlider";
import { NewOpinion } from "./NewOpinion";
import { useState } from "react";
import { AboutHotel } from "./AboutHotel";

function App() {
  const [openOpinions, setOpenOpinions] = useState(false);

  return (
    <>
      <Header/>
      <HeroImg/>
      <Booking/>
      <AboutHotel/>
      <ImageSlider />
      <Rooms/>
      <Opinions 
        setOpenOpinions={setOpenOpinions}
        />
      <Footer/>
      {openOpinions && (
        <NewOpinion setOpenOpinions={setOpenOpinions}>
          <p>Prueba</p>
        </NewOpinion>
      )}
    </>
  );
}

export default App;
