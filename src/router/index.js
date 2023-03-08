import Home from '../pages/Home'
import Works from '../pages/Works'
import About from '../pages/About'
import Contacts from '../pages/Contacts'

const routes = [
  { path: '', name: 'Home', component: Home },
  { path: 'works', name: 'Works', component: Works },
  { path: 'about', name: 'About', component: About },
  { path: 'contacts', name: 'Contacts', component: Contacts }
]

export { routes }
