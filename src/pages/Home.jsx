import anonymous from '../assets/anony.png'
import dots from '../assets/dots.png'
import logo from '../assets/logoPrimary.png'
import aboutPic from '../assets/about.png'
import discordLogo from '../assets/discord.png'
import mailLogo from '../assets/mail.png'
import dots1 from '../assets/dots36.png'
import dots2 from '../assets/dots.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ProjectItem from '../components/ProjectItem'
import projects from '../store/projects'
import skills from '../store/about'
import SkillsItems from '../components/SkillsItems'
import ButtonPrimary from '../components/UI/ButtonPrimary'
import Background from '../components/UI/Background'

const Home = () => {
  return (
    <div className="w-full">
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:mt-8 sm:items-center lg:gap-24">
        <div className="mt-8 text-white text-[36px] space-y-6 font-medium">
          Serkan is a <span className="text-primary">web designer</span> and
          <span className="text-primary"> front-end developer</span>
          <p className=" text-grey text-lg">He crafts responsive websites where technologies meet creativity</p>
          <div className="hidden sm:block">
            <ButtonPrimary
              name="Contact me!!"
              link="/contacts"
              icon=""
            />
          </div>
        </div>
        <div>
          <div className="mt-16 sm:mt-4 block relative w-full  lg:px-12">
            <img
              className="relative top-0 w-full z-10 "
              src={anonymous}
              alt="anon"
            />
            <img
              className="absolute top-[85px] left-1 z-0 sm:w-[120px] sm:top-[150px] sm:left-4 lg:top-[110px]"
              src={logo}
              alt="logo"
            />
            <img
              className="absolute top-[200px] right-4 z-20 sm:w-[80px] sm:top-[250px] lg:top-[200px] lg:right-[80px]"
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

      <div className="hidden sm:block relative z-20 text-2xl lg:text-xl text-white mt-24 mx-auto p-8 border border-grey w-fit">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <div className="absolute -top-5 left-5 bg-background w-[39px] h-[39px] z-10">
          <p className="absolute top-6 left-0 text-[64px] text-grey ">“</p>
        </div>
        <div className="absolute -bottom-5 right-5 bg-background w-[39px] h-[39px] z-10">
          <p className="absolute top-6 left-0 text-[64px] text-grey">“</p>
        </div>
        <p className="absolute p-4 border border-grey -right-[1px] -bottom-[66px] lg:-bottom-[62px] font-light">
          Anonymous
        </p>
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
                <span>
                  <FontAwesomeIcon
                    className="font-thin"
                    icon={faArrowRight}
                  />
                </span>
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
          <div className="h-[320px] max-[1020px]:h-[400px] flex flex-end flex-wrap-reverse flex-col gap-5 mt-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-[170px] text-white text-lg"
              >
                <SkillsItems
                  title={skill.title}
                  skill={skill.skills}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <div className="hidden sm:block mt-20">
        <div className="flex gap-32 max-[1000px]:gap-2 max-[950px]:flex-col">
          <div className="basis-2/3 mt-6 space-y-6">
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

            <ButtonPrimary
              name="Read More"
              link="/about"
              icon={faArrowRight}
            />
          </div>
          <div className="relative">
            <img
              className="max-[950px]:hidden"
              src={aboutPic}
              alt=""
            />
            <img
              className="absolute right-12 top-48 max-w-[52px] rotate-[90deg]"
              src={dots1}
              alt="Dots"
            />
            <img
              className="absolute -left-2 top-8 w-[60px]"
              src={dots2}
              alt="Dots"
            />
            <div className="w-64 h-[1px] bg-primary absolute bottom-0 left-8"></div>
          </div>
        </div>
      </div>

      {/* Contacts */}
      <div className="hidden sm:block">
        <div className="mt-36 text-white flex items-center justify-between space-x-4">
          <div className="flex space-x-4 items-center">
            <p className="font-medium text-[36px]">
              <span className="text-primary">#</span>
              contacts
            </p>
            <div className=" w-[125px] h-[1px] bg-primary"></div>
          </div>
        </div>
        <div className="flex text-grey gap-24 mt-6">
          <p className="text-lg w-[500px] ">
            I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to
            contact me
          </p>
          <div className="border border-grey p-4 space-y-2 w-fit mt-12">
            <h6 className="text-white font-normal">Message me here</h6>
            <div className="flex space-x-2 max-[400px]:text-sm max-[350px]:text-[11px]">
              <img
                className="object-contain"
                src={discordLogo}
                alt="discord"
              />
              <p>Serkan#2792</p>
            </div>
            <div className="flex space-x-2 max-[400px]:text-sm max-[350px]:text-[11px] min-w-[265px] h-fit">
              <img
                className="object-contain"
                src={mailLogo}
                alt="mail"
              />
              <p>serkan.ursavas@icloud.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Background />
      </div>
    </div>
  )
}

export default Home
