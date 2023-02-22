import logo from '../assets/union.png'
import './Header.css'

const Header = props => {
  return (
    <header className="flex justify-between w-full">
      <div className="flex items-center space-x-2">
        <img src={logo} />
        <span className="text-white">Serkan</span>
      </div>
      <button onClick={props.toggleMenu}>
        <div id={`${props.isOpen ? 'hamburger-close' : 'hamburger-button'}`}></div>
      </button>
    </header>
  )
}

export default Header
