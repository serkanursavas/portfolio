import logo from '../assets/union.png'
import './Header.css'
import { Link } from 'react-router-dom'
import MainNavigation from './MainNavigation'

const Header = props => {
  return (
    <header className="flex justify-between w-full">
      <Link to="">
        <div className="flex items-center space-x-2 lg:text-lg">
          <img src={logo} />
          <span className="text-white">Serkan</span>
        </div>
      </Link>
      <div>
        <MainNavigation />
      </div>
      <button
        onClick={props.toggleMenu}
        className="lg:hidden"
      >
        <div id={`${props.isOpen ? 'hamburger-close' : 'hamburger-button'}`}></div>
      </button>
    </header>
  )
}

export default Header
