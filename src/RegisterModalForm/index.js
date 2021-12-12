import React from "react";
import './RegisterModalForm.scss'

const RegisterModalForm = (props) => {
  const [name,setName] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [pass,setPass] = React.useState("");

  const sendForm = (ev) => {
    props.setOpenRegister(false);

    ev.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            name: name,
            password: pass,
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response=>response.json())
    .then(json=> console.log(json))
}

  return (
    <>
      <div className="overlay" onClick={()=>props.setOpenRegister(false)}>
      </div>
      <form onSubmit={ (ev)=> sendForm(ev) } className="modalForm">
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
          <input
            id="title"
            placeholder="Nombre ..."
            className="modalForm__add-input"
            onChange={(ev) => setName(ev.target.value)}
            type="text"
            name="name"
            autoFocus
          />
          <input
            id="body"
            placeholder="Email ..."
            className="modalForm__add-input"
            onChange={(ev) => setEmail(ev.target.value)}
            type="text"
            name="mail"
          />
          <input
            id="newTodo"
            placeholder="Password ..."
            className="modalForm__add-input"
            onChange={(ev) => setPass(ev.target.value)}
            type="password"
          />
          <button
            className="button button--active"
            type="submit"
          >
            Continua
          </button>
        </div>
      </form>
    </>
  );
};

export {RegisterModalForm};