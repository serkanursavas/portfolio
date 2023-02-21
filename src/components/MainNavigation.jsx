import { NavLink } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <ul className="flex items-start gap-8">
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? 'white' : undefined
          })}
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
        >
          <span className="text-primary">#</span>works
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutme"
          style={({ isActive }) => ({
            color: isActive ? 'white' : undefined
          })}
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
        >
          <span className="text-primary">#</span>contacts
        </NavLink>
      </li>
    </ul>
  )
}

export default MainNavigation
