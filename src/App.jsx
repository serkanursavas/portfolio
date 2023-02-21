import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Works from './pages/Works'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'works', element: <Works /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
