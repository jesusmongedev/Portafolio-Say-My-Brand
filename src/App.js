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
import { RegisterModal } from "./RegisterModal";
import { RegisterModalForm } from "./RegisterModalForm";

function App() {
  const [openOpinions, setOpenOpinions] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);


  return (
    <>
      <Header
        setOpenRegister={setOpenRegister}
      />
      {openRegister && (
        <RegisterModal
          setOpenRegister={setOpenRegister}
        >
          <RegisterModalForm setOpenRegister={setOpenRegister}/>
        </RegisterModal>
      )}
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
