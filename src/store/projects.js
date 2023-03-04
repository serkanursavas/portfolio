import portfolioss from '../assets/portfolioss.png'
import bachira from '../assets/bachira.png'

const projects = [
  {
    id: 1,
    title: 'Portfolio',
    thumbnail: portfolioss,
    tools: ['Html', 'Css', 'React'],
    description: "You're using it",
    link: 'https://serkanursavas.info/',
    status: 'Live'
  },
  {
    id: 2,
    title: 'Bachira Online Shop',
    thumbnail: bachira,
    tools: ['Html', 'Css', 'React'],
    description: 'Best place to buy everything',
    link: 'https://github.com/serkanursavas?tab=repositories',
    status: 'Github'
  },
  {
    id: 3,
    title: 'Coming Soon',
    thumbnail: null,
    tools: ['Null'],
    description: '',
    link: '',
    status: 'null'
  }
]

export default projects
