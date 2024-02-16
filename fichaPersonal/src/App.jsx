import { useState, useEffect } from 'react'
import './App.css'
import {Info} from './componentes/Info.jsx'
import {Valor} from './componentes/Valor.jsx'

function App() {
  const [persona, setPersona] = useState([]);
  const [id, setID] = useState(1);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const cambiar = (e) => setID(e.target.value);
  const leer = () => fetch(url)
  .then (datos => datos.json())
  .then (lectura => {
    setPersona(
      [lectura.id,
      lectura.name,
      lectura.username,
      lectura.email,
      lectura.address.city,
      lectura.phone
      ]);
  });
  useEffect(() => {leer()}, []);

  return (
    <>
      <section className="form_wrap">
      <Info
        email="info.contact@gmail.com"
        telefono="+034 666 999 666"
      ></Info>

      <form action="" className="form_contact">
        <div className="user_info">
          <label htmlFor="cod-id">Id</label>
          <input type="text" id="cod_id" value={id} onChange={cambiar}/>

          <Valor
            campo="Nombre"
            id="name"
            valor={persona[1]}
          ></Valor>

          <Valor
            campo="Usuario"
            id="user"
            valor={persona[2]}
          ></Valor>

          <Valor
            campo="Correo electrónico"
            id="email"
            valor={persona[3]}
          ></Valor>

          <Valor
            campo="Ciudad"
            id="city"
            valor={persona[4]}
          ></Valor>

          <Valor
            campo="Telefono / Móvil"
            id="phone"
            valor={persona[5]}
          ></Valor>

          <div>
            <input type="button" value="Leer Siguiente" id="btnSgte" />
            <input type="button" value="Leer Datos" id="btnSend" onClick={leer}/>
          </div>
        </div>
      </form>
    </section>
    </>
  )
}

export default App
