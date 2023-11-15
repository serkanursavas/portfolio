import reactSVG from '../assets/react.svg'
import tailwindSVG from '../assets/tailwind.svg'
import antdesignSVG from '../assets/antdesign.svg'
import firebaseSVG from '../assets/firebase.svg'
import htmlSVG from '../assets/html.svg'
import figmasSVG from '../assets/figmas.svg'
import javaSVG from '../assets/java.svg'
import javascriptSVG from '../assets/javascript.svg'
import pythonSVG from '../assets/python.svg'
import cSVG from '../assets/c.svg'
import scssSVG from '../assets/scss.svg'
import sqlSVG from '../assets/sql.svg'
import gitSVG from '../assets/git.svg'
import vscodeSVG from '../assets/vscode.svg'
import fontawesomeSVG from '../assets/fontawesome.svg'
import linuxSVG from '../assets/linux.svg'
import cssSVG from '../assets/css.svg'
import laravelSVG from '../assets/laravel.svg'
import phpSVG from '../assets/php.svg'
import nextSVG from '../assets/next.png'

const skill = [
  { img: reactSVG, name: 'React' },
  { img: pythonSVG, name: 'Python' },
  { img: javaSVG, name: 'Java' },
  { img: cSVG, name: 'C' },
  { img: javascriptSVG, name: 'Javascript' },
  { img: htmlSVG, name: 'HTML' },
  { img: cssSVG, name: 'CSS' },
  { img: scssSVG, name: 'SCSS' },
  { img: antdesignSVG, name: 'Ant-Design' },
  { img: sqlSVG, name: 'SQL' },
  { img: gitSVG, name: 'Git' },
  { img: vscodeSVG, name: 'VsCode' },
  { img: fontawesomeSVG, name: 'Font-Awesome' },
  { img: figmasSVG, name: 'Figma' },
  { img: linuxSVG, name: 'Linux' },
  { img: firebaseSVG, name: 'Firebase' },
  { img: tailwindSVG, name: 'Tailwind' },
  { img: laravelSVG, name: 'Laravel' },
  { img: phpSVG, name: 'PHP' },
  { img: nextSVG, name: 'NextJS' }
]

const skills = [
  { title: 'Languages', skills: [skill[1], skill[2], skill[3], skill[4], skill[18]] },
  { title: 'Other', skills: [skill[5], skill[6], skill[7], skill[16]] },
  { title: 'Frameworks', skills: [skill[0], skill[8], skill[17], skill[19]] },
  { title: 'Databases', skills: [skill[9]] },
  {
    title: 'Tools',
    skills: [skill[10], skill[11], skill[12], skill[13], skill[14], skill[15]]
  }
]

export default skills
