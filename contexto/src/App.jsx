import { useState } from 'react'

import "./App.css";
import Parent from "./Parent";
import EjemploContentProvider from './contexto/Contexto';

function App() {


  return (
    <EjemploContentProvider>
      <div className="App">
        <Parent />
      </div>
    </EjemploContentProvider>
      
  )
}

export default App
