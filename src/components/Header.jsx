import logo from '../assets/union.png'

import MainNavigation from './MainNavigation'

const Header = () => {
  return (
    <header className="flex justify-between items-end pb-2 pt-4 mb-16 text-grey">
      <div className="flex items-center gap-2 h-5 text-white">
        <img
          className="w-4 h-4"
          src={logo}
          alt="logo"
        />
        <span>Serkan</span>
      </div>
      <MainNavigation />
    </header>
  )
}

export default Header
