import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Items from './components/Items'

function App() {
  return (
    <>
      <h3>Bienvenido a</h3>
      <h1>PLEYACRAFT</h1>
      {/* <h3>El mod donde el cielo no es un límite</h3> */}
      <Items />
      <a href="../assets/pleyacraft-1.0.jar" download="pleyacraft-1.0.jar">
        <button>Descargar</button>
      </a>
      <br />
      <a href='https://leomartinez.dev.ar' target='_blank' className='credits'>Desarrollado por LM Software</a>
    </>
  )
}

export default App
