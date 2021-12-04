import './Booking.scss';

const Booking = () => {
  return (
    <form className="booking">
      <p className="booking__title">Haga su Reservación</p>
      <div className="booking__inputs"> 
        <input type="date" id="check-in"/>
        <input type="date" id="check-out"/>
        <button type="submit">
            <a href="#" >Reservar</a>
        </button>
      </div>
    </form>
  );
};

export { Booking };
