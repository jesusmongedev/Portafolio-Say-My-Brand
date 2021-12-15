import { useEffect, useState } from "react";
import { Header } from "./Header";
import { HeroImg } from "./HeroImg";
import { Booking } from "./Booking";
import { Rooms } from "./Rooms";
import { Opinions } from "./Opinions";
import { Footer } from "./Footer";
import { ImageSlider } from "./ImageSlider";
import { NewOpinion } from "./NewOpinion";
import { AboutHotel } from "./AboutHotel";
import { RegisterModal } from "./RegisterModal";
import { RegisterModalForm } from "./RegisterModalForm";
import { useContentful } from "./ContentfulApi/main";


function App() {
  const [openOpinions, setOpenOpinions] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const[euroBuyers, setEuroBuyers] = useState([]);
  const { getEuroBuyers } = useContentful();

  useEffect(() => {
    getEuroBuyers().then((response) => setEuroBuyers(response));
  });

  openRegister? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal')

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
      
      {
        euroBuyers.map((buyers, index) =>  
        <p key={index}  > 
          {buyers.euroName} <br />
          {buyers.euroMail} <br />
        </p> )
      }


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
