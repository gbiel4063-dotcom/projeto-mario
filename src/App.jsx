import { useState } from 'react'
import './App.js'
import logo from './assets/logo.png';
import video from './assets/video.mp4'
import mario from './assets/mario.png'
function App() {


  return (
    <>
      <Globalstyle />
      <div>
        <p>sobre</p>
        <p>trabalhos</p>
        <p>entra em contado</p>
      </div>

      <div>
        <h1>mario e luigi</h1>
        <img src={logo} alt='logo' />
        <p>Encanadores Mario & Luigi - Resolvendo Seus Problemas Com Estilo!</p>

        <p>Você já se encontrou em uma situação de emergência com encanamento? Vazamentos inesperados, canos entupidos
          ou torneiras que não param de pingar? Não se preocupe, porque estamos aqui para salvar o dia! Apresentamos a
          vocês os encanadores mais famosos do Reino dos Cogumelos - Mario e Luigi!</p>

        <button>fale conosco</button>
      </div>
      <div>
        <img src={mario} alt='mario' />
      </div>

      <form>
        <input placeholder='seu nome' type='string'></input>
        <input placeholder='seu telefone' type='estring'></input>
        <textarea placeholder='digite trabalho desejado' type="string"></textarea>
      </form>
      <video src={video} alt="video" />

    </>
  )
}

export default App
