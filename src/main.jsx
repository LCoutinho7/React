import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/routes/Home/index.jsx'
import Produtos from './assets/routes/Produtos/index.jsx'
import Error from './assets/routes/Error/index.jsx'
import EditarProduto from './assets/routes/EditarProduto/index.jsx'

import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

const router = createBrowserRouter({
  path: "/",
  element: <App/>,
  errorElement: <Error/>,
  children:[
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/produtos",
      element: <Produtos/>,
    },
    {
      path: "/produtos/editar/:id",
      element: <EditarProduto/>,
    },
  ]

})
