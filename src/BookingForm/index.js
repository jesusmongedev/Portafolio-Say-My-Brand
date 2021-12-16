<form className="booking">
    
    <h2 className="booking__title">HAGA SU RESERVACIÓN</h2>

    <div className="booking__inputs"> 

        <input type="date" id="check-in"  className="button" />
        <input type="date" id="check-out" className="button" />

        <input type="number" id="adult-total" className="booking__inputs--adult-total"></input>
        <input type="number" id="kids-total" className="booking__inputs--kids-total"></input>

        <div clasName="booking__input--select-room">
            <input type="radio" id="booking__room--type" className="booking__inputs--first-class-room"></input>
            <input type="radio" id="booking__room--type" className="booking__inputs--business-class-room"></input>
            <input type="radio" id="booking__room--type" className="booking__inputs--business-woman-room"></input>
            <input type="radio" id="booking__room--type" className="booking__inputs--delux-room"></input>
            <input type="radio" id="booking__room--type" className="booking__inputs--Standard-room"></input>            
        </div>

        <button type="submit" className="button--active">
            <a href="#" >RESERVAR</a>
        </button>

    </div>
</form>