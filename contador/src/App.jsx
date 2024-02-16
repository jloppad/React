import { useState } from 'react'
import './App.css'

function App(){
  
  const [dolares, setDolares] = useState(0);
  const [libras, setLibras] = useState(0);
  const [pesetas, setPesetas] = useState(0);
  const [yenes, setYenes] = useState(0);
  const [rupias, setRupias] = useState(0);
  
  function convertirPesetas() {
    let cantidad = document.querySelector("#cantidad");
    setPesetas(cantidad.value*166.386);
  }

  function pesetasEuros() {
    let cantidad = document.querySelector("#pesetas");
    let euros = document.querySelector("#cantidad");
    euros.value = (cantidad.value/166.386);
  }

  function convertirDolares() {
    let cantidad = document.querySelector("#cantidad");
    setDolares(cantidad.value*1.08);
  }

  function dolaresEuros() {
    let cantidad = document.querySelector("#dolares");
    let euros = document.querySelector("#cantidad");
    euros.value = (cantidad.value/1.08);
  }
  
  function convertirLibras() {
    let cantidad = document.querySelector("#cantidad");
    setLibras(cantidad.value*0.85);
  }

  function librasEuros() {
    let cantidad = document.querySelector("#libras");
    let euros = document.querySelector("#cantidad");
    euros.value = (cantidad.value/0.85);
  }
  
  function convertirYenes() {
    let cantidad = document.querySelector("#cantidad");
    setYenes(cantidad.value*160.4687);
  }

  function yenesEuros() {
    let cantidad = document.querySelector("#yenes");
    let euros = document.querySelector("#cantidad");
    euros.value = (cantidad.value/160.4687);
  }

  function convertirRupias() {
    let cantidad = document.querySelector("#cantidad");
    setRupias(cantidad.value*89.409716);
  }

  function rupiasEuros() {
    let cantidad = document.querySelector("#rupias");
    let euros = document.querySelector("#cantidad");
    euros.value = (cantidad.value/89.409716);
  }

  function convertirTodo(){
    convertirPesetas();
    convertirDolares();
    convertirLibras();
    convertirYenes();
    convertirRupias();
  }


  return (
    <>
      <h3>Euros:</h3>
      <input type="number" id='cantidad'/>
      <h3>Convertir:</h3>
      <button onClick={convertirTodo} className='todo'>Todo</button>
      <div className="cantidades">
        <button onClick={convertirPesetas}>🇪🇸 Pesetas 🇪🇸</button>
        <input type="number" id='pesetas' readOnly value={pesetas}/>
        <button onClick={pesetasEuros}>🇪🇺 Euros 🇪🇺</button>
        <button onClick={convertirDolares}>🇺🇸 Dolares 🇺🇸</button>
        <input type="number" id='dolares' readOnly value={dolares}/>
        <button onClick={dolaresEuros}>🇪🇺 Euros 🇪🇺</button>
        <button onClick={convertirLibras}>🇬🇧 Libras 🇬🇧</button>
        <input type="number" id='libras' readOnly value={libras}/>
        <button onClick={librasEuros}>🇪🇺 Euros 🇪🇺</button>
        <button onClick={convertirYenes}>🇯🇵 Yenes 🇯🇵</button>
        <input type="number" id='yenes' readOnly value={yenes}/>
        <button onClick={yenesEuros}>🇪🇺 Euros 🇪🇺</button>
        <button onClick={convertirRupias}>🇮🇳 Rupias 🇮🇳</button>
        <input type="number" id='rupias' readOnly value={rupias}/>
        <button onClick={rupiasEuros}>🇪🇺 Euros 🇪🇺</button>
      </div>

    </>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 2)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
