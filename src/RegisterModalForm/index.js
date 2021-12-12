import React from "react";
import './RegisterModalForm.scss'

const RegisterModalForm = (props) => {
  return (
    <>
      <div className="overlay">
      </div>
      <form className="modalForm">
        <div className="modalForm__info">
            <span
              className="modalForm--closeModal"
              onClick={()=> props.setOpenRegister(false)}
            >
              x
            </span>
            <p> 
                Iniciar sesión o registrarse
            </p>
        </div>
        <h3>Te damos la bienvenida a EuroBuilding Caracas</h3>
        {/* <label htmlFor="newTodo" className="modalForm__label">
          Digite su nombre:
        </label> */}
        <div className="modalForm__add">
          <textarea
            id="newTodo"
            placeholder="Nombre ..."
            className="modalForm__add-input"
            autoFocus
          />
          <textarea
            id="newTodo"
            placeholder="Email ..."
            className="modalForm__add-input"
            autoFocus
          />
          <textarea
            id="newTodo"
            placeholder="Password ..."
            className="modalForm__add-input"
            autoFocus
          />
          <button
            className="modal-button"
            type="submit"
            disabled
          >
            Continua
          </button>
        </div>
      </form>
    </>
  );
};

export {RegisterModalForm};