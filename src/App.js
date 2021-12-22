import React,{useState} from 'react'
import Formulario from './componentes/Form'
import Informacoes from './componentes/Informacoes'
import Cadastro from './componentes/Cadastro'
import './App.css'

export default function App(){
  const [mostrarCad, setMostrarCad]=useState(false)
  return(
    <div className="container">
      <section className="container-section">
        <Informacoes/>
        <Formulario
          mostrarCad={mostrarCad}
          setMostrarCad={setMostrarCad}
        />
      </section>
      {mostrarCad?<Cadastro/>:<div/>}
    </div>
  )
}