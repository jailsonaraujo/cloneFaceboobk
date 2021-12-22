import React from 'react'

export default function Form(props){
  return(
    <div className='div-formulario'>
      <form className='formulario'>
        <input type="text" name="emailTelefone" placeholder="Email ou Telefone"/>
        <input type="password" name="emailTelefone" placeholder="Senha"/>
        <button type="submit">Entrar</button>
        <a href="#" className='esqueceu-senha'>Esqueceu a senha?</a>
        <div className='linha'></div>
        <a href="#" className='novaConta' onClick={()=>props.setMostrarCad(!props.mostrarCad)}>Criar nova conta</a>
      </form>
    </div>
  )
}