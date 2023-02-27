import anonymous from '../assets/anony.png'
import dots from '../assets/dots.png'
import logo from '../assets/logoPrimary.png'
import aboutPic from '../assets/about.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ProjectItem from '../components/ProjectItem'
import projects from '../store/projects'
import skills from '../store/about'
import SkillsItems from '../components/SkillsItems'

const Home = () => {
  return (
    <div className="w-full">
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:mt-8 sm:items-center">
        <div className="mt-8 text-white text-[36px] font-medium">
          Serkan is a <span className="text-primary">web designer</span> and
          <span className="text-primary"> front-end developer</span>
          <p className="mt-6 text-grey text-lg">He crafts responsive websites where technologies meet creativity</p>
          <button className="hidden sm:block py-2 px-4 text-base border border-primary mt-6">Contact Me !!</button>
        </div>
        <div>
          <div className="mt-16 sm:mt-4 block relative w-full">
            <img
              className="relative top-0 w-full z-10 "
              src={anonymous}
              alt="anon"
            />
            <img
              className="absolute top-[85px] left-1 z-0 sm:w-[120px] sm:top-[150px] sm:left-4"
              src={logo}
              alt="logo"
            />
            <img
              className="absolute top-[200px] right-4 z-20 sm:w-[80px] sm:top-[250px]"
              src={dots}
              alt="dots"
            />
          </div>
          <div className="p-3 border border-grey flex space-x-3 items-center">
            <div className=" w-4 h-4 bg-primary my-3"></div>
            <p className=" text-lg text-grey">
              Currently working on <span className="text-white font-medium">Portfolio</span>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block relative z-20 text-2xl text-white mt-24 mx-auto p-8 border border-grey w-fit">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <div className="absolute -top-5 left-5 bg-background w-[39px] h-[39px] z-10">
          <p className="absolute top-6 left-0 text-[64px] text-grey ">“</p>
        </div>
        <div className="absolute -bottom-5 right-5 bg-background w-[39px] h-[39px] z-10">
          <p className="absolute top-6 left-0 text-[64px] text-grey">“</p>
        </div>
        <p className="absolute p-4 border border-grey -right-[1px] -bottom-[66px]">Anonymous</p>
      </div>

      {/* Projects */}
      <div className="hidden sm:block">
        <div className="mt-36 text-white flex items-center justify-between space-x-4">
          <div className="flex space-x-4 items-center">
            <p className="font-medium text-[36px]">
              <span className="text-primary">#</span>
              projects
            </p>
            <div className=" w-[510px] h-[1px] bg-primary"></div>
          </div>
          <Link to="/works">
            <div className="flex">
              <p>
                View All{' '}
                <FontAwesomeIcon
                  className="font-thin"
                  icon={faArrowRight}
                />
              </p>
            </div>
          </Link>
        </div>
        <div className="mt-12 w-full sm:grid grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectItem
              key={project.id}
              title={project.title}
              thumbnail={project.thumbnail}
              description={project.description}
              tools={project.tools}
              link={project.link}
              status={project.status}
            />
          ))}
        </div>
      </div>

      {/* Skilss */}
      <div className="hidden sm:block">
        <div className="mt-36 text-white flex items-center justify-between space-x-4">
          <div className="flex space-x-4 items-center">
            <p className="font-medium text-[36px]">
              <span className="text-primary">#</span>
              skills
            </p>
            <div className=" w-[240px] h-[1px] bg-primary"></div>
          </div>
        </div>
        <div className="mt-3 ml-8 flex justify-between">
          <div className="relative w-[350px] h-[280px]">
            <img
              className="w-[63px] h-[63px] absolute top-6"
              src={dots}
              alt="dots"
            />
            <img
              className="w-[63px] h-[63px] absolute left-[50%] top-[50%]"
              src={dots}
              alt="dots"
            />
            <img
              className="w-[120px] h-[120px] absolute bottom-0 left-5"
              src={logo}
              alt="logo"
            />
            <div className="w-24 h-24 border border-grey absolute top-0 right-6"></div>
            <div className="w-16 h-16 border border-grey absolute bottom-6 right-0"></div>
          </div>
          <div className="h-[280px] max-[1020px]:h-[400px] flex flex-end flex-wrap-reverse flex-col gap-5 mt-12">
            {skills.map((skill, index) => (
              <div className="w-[150px] text-white">
                <SkillsItems
                  key={index}
                  title={skill.title}
                  skill={skill.skills}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <div className="hidden sm:block mt-32">
        <div className="flex gap-32 max-[1000px]:gap-2 max-[950px]:flex-col">
          <div className="basis-2/3 mt-6">
            <div className="mt-16 text-white flex items-center justify-between space-x-4">
              <div className="flex space-x-4 items-center">
                <p className="font-medium text-[36px]">
                  <span className="text-primary">#</span>
                  about-me
                </p>
                <div className=" w-[325px] h-[1px] bg-primary"></div>
              </div>
            </div>
            <p className="mt-6 text-grey font-light text-lg leading-8">
              Hello, I'm Serkan! I'm a self-taught front-end developer based in Adana, Turkey. I can develop responsive
              websites from scratch and raise them into modern user-friendly web experiences.
            </p>
            <button className="hidden sm:block py-2 px-4 text-base border border-primary mt-6 text-white">
              Read more <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <img
            className="max-[950px]:hidden"
            src={aboutPic}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Home
