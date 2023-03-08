import React from "react";
import { useState } from "react";
import Card from "./Card";
function Form() {
  const [name, setName] = useState("");
  const [comidaFav, setComidaFav] = useState("");
  const [visible, setVisible]=useState(false);

  const validateName = (name) => {
    if (name.length >= 3) {
      return true;
    } else {
      return false;
    }
  };

  const validateComidaFav = (comidaFav) => {
    if (comidaFav.length >= 6) {
      return true;
    } else {
      return false;
    }
  };

  function signUser(e) {
    e.preventDefault();

    if (!validateName(name) || !validateComidaFav(comidaFav)) {
      setVisible(false);
      alert("Por favor chequea que la información sea correcta");
      
     
    }else{ setVisible(true)}
   
  }

  const cambioNombre = (e) => {
    setName(e.target.value);
  };
  const cambioComidaFav = (e) => {
    setComidaFav(e.target.value);
  };

  return (
    <div >
      <h1>Ingresa tu comida preferida</h1>
      <form onSubmit={signUser}>
        <div>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            value={name}
            onChange={cambioNombre}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Ingrese su comida preferida"
            value={comidaFav}
            onChange={cambioComidaFav}
          />
        </div>
        <div>
          <button type="submit">
            ENVIAR
          </button>
        </div>
     
      </form>
      {visible?<Card name={name} comidaFav={comidaFav}/>:null}
    </div>
  );
}

export default Form;

