import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [chiste, setChiste] = useState("");
  const url = "https://api.chucknorris.io/jokes/random";
  const actualizar = () => {
    const peticion = fetch(url)
      .then(datos => datos.json())
      .then(respuesta => setChiste(respuesta.value))
      .catch(e => console.log("Error", e))
  }
  useEffect(actualizar, [])

  return (
    <>
      <div>
        {chiste}
      </div>
      <button onClick={actualizar}>Siguiente Chiste</button>
    </>
  )
}

export default App
