import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Home /> }]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
