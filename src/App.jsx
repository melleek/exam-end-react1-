import React from 'react'
import "./App.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'
import Layout from './Layout/Layout'
import Rasrochka from './pages/Rasrochka/Rasrochka'
import Programmer from './pages/Programmer/Programmer'
import Arenda from './pages/Arenda/Arenda'
import Question from './pages/Question/Question'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "rasrochka",
          element: <Rasrochka />
        },
        {
          path: "programmer",
          element: <Programmer/>
        },
        {
          path: "arenda",
          element: <Arenda/>
        },
        {
          path: "question",
          element: <Question/>
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
