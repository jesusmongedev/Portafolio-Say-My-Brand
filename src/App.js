import "./App.css";
import { Header } from "./Header";
import { HeroImg } from "./HeroImg";
import { Booking } from "./Booking";
import { Rooms } from "./Rooms";
import { Opinions } from "./Opinions";
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <Header/>
      <HeroImg/>
      <Booking/>
      <Rooms/>
      <Opinions/>
      <Footer/>
    </>
  );
}

export default App;
