
import { Outlet } from 'react-router-dom'; 
import Header from './componentes/Header';
import Footer from './componentes/Footer';
// Importando o Outlet do react-router-dom, uma janela de saída para renderizar o conteúdo da rota
// import logo from "./assets/jeep.jpg";

function App() {
 
  return (
    <>
      <Header />
      {/* <img src={logo} alt="Jeep" />  */}
      {/* Imagem adicionada */}
      <Outlet /> 
      <Footer />
    </>
  )
}

export default App