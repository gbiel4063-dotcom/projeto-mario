import { Formulario, Mascaranegra, Videofundo, Button, Header, ConteinerPrincipal, CaixaMae, Logo, Mario } from './App.js'
import './App.js'
import { Globalstyle } from './styleglobal.js/globalstyle.js';
import logo from './assets/logo.png';
import video from './assets/video.mp4'
import mario from './assets/mario.png'
function App() {


  return (
    <>
      <Globalstyle />
      <Header>
        <p>sobre</p>
        <p>trabalhos</p>
        <p>entra em contado</p>
      </Header>

      <ConteinerPrincipal>

        <CaixaMae>

          <Logo src={logo} alt='logo' />
          <p>Encanadores Mario & Luigi - Resolvendo Seus Problemas Com Estilo!</p>

          <p>Você já se encontrou em uma situação de emergência com encanamento? Vazamentos inesperados, canos entupidos
            ou torneiras que não param de pingar? Não se preocupe, porque estamos aqui para salvar o dia! Apresentamos a
            vocês os encanadores mais famosos do Reino dos Cogumelos - Mario e Luigi!</p>

          <Button>fale conosco</Button>

        </CaixaMae>

        <div>
          <Mario src={mario} alt='mario' />
        </div>
      </ConteinerPrincipal>

      <Videofundo src={video} autoPlay muted loop playsInline alt="video" />
      <Mascaranegra></Mascaranegra>

      <Formulario >
        <input placeholder='seu nome' type='string'></input>
        <input placeholder='seu telefone' type='estring'></input>
        <textarea placeholder='digite trabalho desejado' type="string"></textarea>
      </Formulario >

    </>
  )
}

export default App
