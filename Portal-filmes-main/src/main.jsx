import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import MovieByGenrePage from './pages/MoviesByGenrePage.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MovieListPage from './pages/MovieListPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import GenreListPage from "./pages/GenreListPage.jsx"
import Contato from './pages/Contato.jsx'
import Favoritos from './components/Favoritos.jsx'

const router = createBrowserRouter([
  {
  path: "/",
  element: <App/>,

  children: [
    {index: true, element: <Home/>},
    {path: "movies", element: <MovieListPage/>},
    {path: "movies/:id", element: <MovieDetailPage/>},
    {path: "genre", element: <MovieByGenrePage/>},
    {path: "contato", element: <Contato/>},
    {path: "genre/:id", element: <GenreListPage/>},
    {path: "favorites", element: <Favoritos/>},
    {path: "*", element: <PageNotFound/>}
    
  ]

}
  

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
