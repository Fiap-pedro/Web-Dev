import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Sobre from './pages/Sobre.jsx'
import ConteudoPrincipal from './componentes/ConteudoPrincipal.jsx'
import PageNotFound from './pages/PagesNotFound.jsx' 
import Contato from './componentes/Contato.jsx'
import Servicos from './pages/Servicos.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <ConteudoPrincipal/>},
      {path: "sobre", element: <Sobre/>},
      {path: "contato", element: <Contato/>},
      {path: "servicos", element: <Servicos/>},
      {path: "*", element: <PageNotFound/>}
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,

)
