import "./Booking.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Booking = () => {
  return (
    <form className="booking">
      <h2 className="booking__title">HAGA SU RESERVACIÓN</h2>
      <div className="booking__inputs">
        <label htmlFor="date" className="button">
          
          Check in <MdOutlineKeyboardArrowDown />
        </label>
        <label className="button">
          
          Check out <MdOutlineKeyboardArrowDown />
        </label>
        <input type="date" id="date" className="button button--dates" />
        {/* <input type="date" id="check-in" className="button button--dates" /> */}
        <button type="submit" className="button button--active">
          <a href="#">RESERVAR</a>
        </button>
      </div>
    </form>
  );
};

export { Booking };
