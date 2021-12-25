import React,{useState} from 'react'
//import '../App.css'

export default function Cadastro(){
  const ListaNascimentoDia=[
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
    16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
  ]
  const diasNascimento=ListaNascimentoDia.map(
    (d)=>
      <option>{d}</option>
  )

  const ListaNascimentoMes=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]
  const mesNascimento=ListaNascimentoMes.map(
    (m)=>
      <option>{m}</option>
  )

  const ListaNascimentoMAno=[
    2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,
    2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986
  ]
  const manoNascimento=ListaNascimentoMAno.map(
    (a)=>
      <option>{a}</option>
  )
  const radioChecked=()=>{
    var btnPersonalizado=document.querySelectorAll('input[type="radio"]')
    for(let i=0; i<btnPersonalizado.length; i++){
      if(btnPersonalizado[2].checked){
        document.getElementById('per').style.display='block'
      }else if(btnPersonalizado[0].checked){
        document.getElementById('per').style.display='none'
      }else if(btnPersonalizado[1].checked){
        document.getElementById('per').style.display='none'
      }
    }
  }
  return(
    <section className='section-cadastro'>
      <div className='container-form-cadastro'>
        <div className='titulo-formulario'>
        <h1>Cadastre-se
          <div className='div-botao'>
            <span id='span1'></span>
            <span id='span2'></span>
          </div>
        </h1>
        
        <p>É rápido e fácil.</p>
        </div>
        <form>
          <div className='grupo-inputs1'>
            <input type="text" name="nome" placeholder="Nome"/>
            <input type="text" name="sobreNome" placeholder="Sobrenome"/>
          </div>
          <div className='grupo-inputs2'>
            <input type="text" name="celularEmail" placeholder="Celular ou Email"/>
            <input type="text" name="novaSenha" placeholder="Nova senha"/>
          </div>
          <div className='nascimento'>
            <label>Data de nascimento</label>
              <select>
                {diasNascimento}
              </select>
              <select>
                {mesNascimento}
              </select>
              <select>
                {manoNascimento}
              </select>
          </div>
          <div className='genero'>
            <label>Gênero</label>
            <div>
              Feminino<input type="radio" value="feminino" name="genero"
              onClick={()=>radioChecked()}/>
            </div>
            <div>
              Masculino<input type="radio" value="masculino" name="genero"
              onClick={()=>radioChecked()}/>
            </div>
            <div id="inputRadio3">
              Personalizado<input type="radio" value="personalizado" name="genero" id="btnPersonalizado" 
              onClick={()=>radioChecked()}/>
            </div>
          </div>
          <div className='personalizacao' id='per'>
            <select value='Selecione seu pronome'>
              <option disabled="1">Selecione seu pronome</option>
            </select>
            <p>Seu pronome fica visível para todos.</p>
            <input type="text" name="generoOpicional" placeholder="Gênero(opcional)"/>
          </div>
          <div className='termo-cadastro'>
            <p>Ao clicar em <a href="#">Cadastre-se</a>, você concorda com nossos <a href="#">Termos</a>, <a href="#">Política de
               Dados</a> e Política de Cookies. Você poderá receber notificações por SMS e
               cancelar isso quando quiser.</p>
          </div>
          <div className='botao-cadastro'>
            <button>Cadastre-se</button>
          </div>
        </form>
      </div>
    </section>
  )
}