import { NavLink } from 'react-router-dom'

import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import './Header.css'

const MainNavigation = props => {
  return (
    <div
      id="mainNav"
      className={`${
        props.isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }  bg-background w-full absolute left-0 px-5 h-auto`}
    >
      <ul className="mt-16 text-4xl space-y-9 font-light text-grey">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'white' : undefined
            })}
            onClick={props.toggleMenu}
          >
            <span className="text-primary">#</span>home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/works"
            style={({ isActive }) => ({
              color: isActive ? 'white' : undefined
            })}
            onClick={props.toggleMenu}
          >
            <span className="text-primary">#</span>works
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? 'white' : undefined
            })}
            onClick={props.toggleMenu}
          >
            <span className="text-primary">#</span>about-me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            style={({ isActive }) => ({
              color: isActive ? 'white' : undefined
            })}
            onClick={props.toggleMenu}
          >
            <span className="text-primary">#</span>contacts
          </NavLink>
        </li>
      </ul>
      <div className="mt-28 flex space-x-3 justify-center">
        <a href="https://github.com/serkanursavas">
          <img
            src={github}
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/serkanursavas/">
          <img
            src={linkedin}
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  )
}

export default MainNavigation
