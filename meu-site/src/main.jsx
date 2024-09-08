import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ConteudoPrincipal from './componentes/ConteudoPrincipal/index.jsx'
import Sobre from './pages/Sobre/index.jsx'
import Contato from './componentes/Contato/index.jsx'
import Servicos from './pages/Servicos/index.jsx'
import PageNotFound from './pages/PagesNotFound/index.jsx'






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
