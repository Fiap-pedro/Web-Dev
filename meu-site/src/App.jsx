import './App.css'
import InfosPessoais from './componentes/InfosPessoais'
import Header from './componentes/Header'
import Habilidades from './componentes/Habilidades'
import Footer from './componentes/Footer'
import Contato from './componentes/Contato'
import Nav from './componentes/Nav'

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <InfosPessoais/>
      <Habilidades/>
      <Contato/>
      <Footer/>
    </>
  )
}

export default App
