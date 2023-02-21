import logo from '../assets/union.png'
import './Header.css'

import MainNavigation from './MainNavigation'

const Header = () => {
  return (
    <header className="flex justify-between w-full">
      <div className="flex items-center space-x-2">
        <img src={logo} />
        <span className="text-white">Serkan</span>
      </div>
      <div id="hamburger-button"></div>
    </header>
  )
}

export default Header
