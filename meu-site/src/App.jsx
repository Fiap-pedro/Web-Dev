import './App.css'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Contato from './componentes/Contato'
import MainInfo from './componentes/MainInfo'

function App() {
  return (
    <>
      <Header/>
      <div className='mainInfo'>
        <MainInfo/>
        <Contato/>
      </div>
      <Footer/>
    </>
    
  )
}

export default App
