import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

import LayoutCard from '../components/UI/LayoutCard'
import Header from '../components/Header'
import MainNavigation from '../components/MainNavigation'
import Footer from '../components/Footer'
import Background from '../components/UI/Background'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative overflow-hidden">
      <LayoutCard>
        <Header
          toggleMenu={toggleMenu}
          isOpen={isOpen}
        />

        <div className="lg:hidden">
          <MainNavigation
            toggleMenu={toggleMenu}
            isOpen={isOpen}
          />
        </div>

        {!isOpen && <Outlet />}
      </LayoutCard>
      <div className="hidden lg:block">
        <Background />
      </div>
      {!isOpen && <Footer />}
    </div>
  )
}

export default Layout
