import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Works from './pages/Works'
import About from './pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'works', element: <Works /> },
      { path: 'about', element: <About /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
