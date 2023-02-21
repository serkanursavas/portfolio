import { Outlet } from 'react-router-dom'

import LayoutCard from '../components/UI/LayoutCard'
import Header from '../components/Header'

const Layout = () => {
  return (
    <LayoutCard>
      <Header />
      <Outlet />
    </LayoutCard>
  )
}

export default Layout
