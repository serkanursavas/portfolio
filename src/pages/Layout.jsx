import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

import LayoutCard from '../components/UI/LayoutCard'
import Header from '../components/Header'
import MainNavigation from '../components/MainNavigation'
import Footer from '../components/Footer'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <LayoutCard>
        <Header
          toggleMenu={toggleMenu}
          isOpen={isOpen}
        />

        <MainNavigation
          toggleMenu={toggleMenu}
          isOpen={isOpen}
        />

        {!isOpen && <Outlet />}
      </LayoutCard>

      <Footer />
    </>
  )
}

export default Layout
