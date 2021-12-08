import './Booking.scss';

const Booking = () => {
  return (
    <form className="booking">
      <p className="booking__title">HAGA SU RESERVACIÓN</p>
      <div className="booking__inputs"> 
        <input type="date" id="check-in"  className="button" />
        <input type="date" id="check-out" className="button" />
        <button type="submit" className="button button--active">
            <a href="#" >RESERVAR</a>
        </button>
      </div>
    </form>
  );
};

export { Booking };
