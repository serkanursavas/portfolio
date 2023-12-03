import PageTitle from '../components/PageTitle'
import dots1 from '../assets/dots36.svg'
import dots2 from '../assets/dots.svg'
import aboutPic from '../assets/about.png'
import skills from '../store/about'
import SkillsItems from '../components/SkillsItems'
import AnimatedPage from '../components/UI/AnimatedPage'

import { useEffect } from 'react'
const About = () => {
  useEffect(() => {
    document.title = 'About'
  }, [])

  return (
    <AnimatedPage>
      <PageTitle
        title="about-me"
        subtitle="Who am i?"
      />
      <section className="sm:grid sm:grid-cols-2 sm:gap-36 sm:mt-10 lg:mt-8">
        <div className="sm:flex sm:flex-col sm:justify-center  ">
          <div className="mt-16 sm:mt-0 flex gap-1 justify-between items-end">
            <p className="basis-3/5 sm:basis-auto leading-6 max-[330px]:text-xs text-grey sm:text-base sm:leading-7">
              Hello, I'm Serkan! I'm a self-taught front-end developer based in Adana,
              Turkey. I can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <div className="relative max-w-[170px] basis-2/5 sm:hidden">
              <img
                className="absolute right-2 top-28 max-w-[52px]"
                src={dots1}
                alt="Dots"
              />
              <img
                className="absolute -left-2 top-8 max-w-[42px]"
                src={dots2}
                alt="Dots"
              />
              <img
                className=""
                src={aboutPic}
                alt="About-Me"
              />
              <div className="w-32 h-[1px] bg-primary absolute bottom-0 left-4"></div>
            </div>
          </div>
          <p className="mt-4  text-grey text-sm max-[330px]:text-xs sm:text-base sm:leading-7">
            Transforming my creativity and knowledge into a websites has been my passion
            for over a year. I have been helping various clients to establish their
            presence online. I always strive to learn about the newest technologies and
            frameworks.
          </p>
        </div>
        <div className="relative ">
          <div className="hidden sm:block relative w-full lg:flex lg:justify-center">
            <img
              className="absolute right-32 top-72 max-w-[95px] lg:right-24"
              src={dots1}
              alt="Dots"
            />
            <img
              className="absolute -left-2 top-16 max-w-[90px] lg:left-12"
              src={dots2}
              alt="Dots"
            />
            <img
              className=""
              src={aboutPic}
              alt="About-Me"
            />
            <div className="w-72 h-[1px] bg-primary absolute bottom-0 left-10 lg:left-24 "></div>
          </div>
        </div>
      </section>

      <section className="mt-16 text-white">
        <h2 className="text-2xl">
          <span className="text-primary">#</span>skills
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm font-light max-[330px]:text-xs sm:grid-cols-5">
          {skills.map((item, index) => (
            <SkillsItems
              key={index}
              title={item.title}
              skill={item.skills}
            />
          ))}
        </div>
      </section>

      <section className="mt-16 text-white ">
        <h2 className="text-2xl">
          <span className="text-primary">#</span>my-fun-facts
        </h2>
        <div className="mt-6 text-grey space-y-4 text-sm font-light max-[330px]:text-xs sm:flex sm:space-y-0 sm:flex-wrap sm:gap-5">
          <div className="border border-grey p-2 sm:w-fit">
            <p>
              I like to work more at <span className="text-white">night</span> than during
              the day.
            </p>
          </div>
          <div className="border border-grey p-2">
            <p>
              I have only been to <span className="text-white">Adana</span> and{' '}
              <span className="text-white">Istanbul</span> so far.
            </p>
          </div>
          <div className="border border-grey p-2">
            <p>I am still in university.</p>
          </div>
        </div>
      </section>
    </AnimatedPage>
  )
}

export default About
