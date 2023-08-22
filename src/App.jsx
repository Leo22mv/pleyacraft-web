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
      <div className='description'>
      <p>Pleyacraft es un mod para Minecraft forge 1.19, que añade un nuevo mineral llamado "Pleyarita", generado de forma natural en el mundo y que al picarlo con un pico de hierro o mejor soltará un lingote de pleyarita, con el cual podrás construir una espada o cualquiera de las otras herramientas usando las recetas tradicionales. Estas herramientas son igual de efectivas y duraderas que las de netherita, excepto por la espada, siendo mas dañina la de pleyarita.</p>
      </div>
      <a href="../assets/pleyacraft-1.0.jar" download="pleyacraft-1.0.jar">
        <button className='btn btn-dark btn-lg'>Descargar</button>
      </a>
      <br />
      <a href='https://leomartinez.dev.ar' target='_blank' className='credits'>Desarrollado por LM Software</a>
    </>
  )
}

export default App
