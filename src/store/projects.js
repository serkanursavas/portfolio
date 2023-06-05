import portfolioss from '../assets/portfolioss.png'
import bachira from '../assets/bachira.png'
import yourChat from '../assets/your-chat.png'
import surveymaster from '../assets/surveymaster.png'

import reactSVG from '../assets/react.svg'
import tailwindSVG from '../assets/tailwind.svg'
import antdesignSVG from '../assets/antdesign.svg'
import firebaseSVG from '../assets/firebase.svg'
import phpSVG from '../assets/php.svg'
import laravelSVG from '../assets/laravel.svg'

const tool = [
  { img: reactSVG, name: 'React' },
  { img: tailwindSVG, name: 'Tailwindcss' },
  { img: antdesignSVG, name: 'Ant Design' },
  { img: firebaseSVG, name: 'Firebase' },
  { img: phpSVG, name: 'PHP' },
  { img: laravelSVG, name: 'Laravel' }
]

const projects = [
  {
    id: 1,
    title: 'Portfolio',
    thumbnail: portfolioss,
    tools: [tool[0], tool[1]],
    description: "You're using it",
    link: 'https://serkanursavas.info/',
    status: 'Live'
  },
  {
    id: 2,
    title: 'Bachira Online Shop',
    thumbnail: bachira,
    tools: [tool[0], tool[1]],
    description: 'Best place to buy everything',
    link: 'https://github.com/serkanursavas?tab=repositories',
    status: 'Github'
  },
  {
    id: 3,
    title: 'Your Chat',
    thumbnail: yourChat,
    tools: [tool[0], tool[1], tool[2], tool[3]],
    description: 'Real-Time chat application',
    link: 'https://your-chat-pearl.vercel.app/',
    status: 'Live'
  },
  {
    id: 4,
    title: 'Survey Master',
    thumbnail: surveymaster,
    tools: [tool[4], tool[5], tool[0], tool[1]],
    description: 'Create surveys easily, analyze data effectively.',
    link: 'https://surveymaster.online/',
    status: 'Live'
  }
]

export default projects
