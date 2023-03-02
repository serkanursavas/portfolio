import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Works from './pages/Works'
import About from './pages/About'
import Contacts from './pages/Contacts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'works', element: <Works /> },
      { path: 'about', element: <About /> },
      { path: 'contacts', element: <Contacts /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
