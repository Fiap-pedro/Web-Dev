import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ConteudoPrincipal from './componentes/ConteudoPrincipal'
import Servicos from './pages/Servicos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import PageNotFound from './pages/PagesNotFound'


const router = createBrowserRouter([
  // Objeto de rota
  {
    path: "/",
    element: <App />,
    // Abre a rota raiz, precisa importar o componente App
    children: [
      // Filhos da rota raiz, tudo que vem depois da barra raiz é filho
      // Ele irá renderizar o componente Sobre
      {index: true, element: <ConteudoPrincipal />},
      {path: "sobre", element: <Sobre />},
      {path: "servicos", element: <Servicos />},
      {path: "contato", element: <Contato />},
      {path: "*", element: <PageNotFound />}
    ]
    // Como crio layouts diferentes?
  }//,
  // {
  //   path: "/admin",
  //   element: <h1>Tela Login</h1>,
  //   children: [
  //     {index: true, element: <h1>Tela Login</h1>},
  //     {path: "/admin/usuarios", element: <h1>Usuários</h1>},
  //     {path: "/admin/produtos", element: <h1>Produtos</h1>},
  //   ]
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Tirando a renderização de App e adicionando o provedor de rotas*/}
    <RouterProvider router={router} />
  </React.StrictMode>,
)