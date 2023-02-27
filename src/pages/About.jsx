import PageTitle from '../components/PageTitle'
import dots1 from '../assets/about-dots1.png'
import dots2 from '../assets/about-dots2.png'
import aboutPic from '../assets/about.png'
import skills from '../store/about'
import SkillsItems from '../components/SkillsItems'

const About = () => {
  return (
    <>
      <PageTitle
        title="about-me"
        subtitle="Who am i?"
      />
      <div className="mt-16 flex gap-1 justify-between items-end">
        <p className="basis-3/5 leading-6 max-[330px]:text-xs text-grey font-light text-sm ">
          Hello, I'm Serkan! I'm a self-taught front-end developer based in Adana, Turkey. I can develop responsive
          websites from scratch and raise them into modern user-friendly web experiences.
        </p>
        <div className="relative max-w-[170px] basis-2/5">
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
        </div>
      </div>
      <p className="mt-4  text-grey font-light text-sm max-[330px]:text-xs">
        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been
        helping various clients to establish their presence online. I always strive to learn about the newest
        technologies and frameworks.
      </p>
      <div className="mt-16 text-white">
        <h2 className="text-2xl">
          <span className="text-primary">#</span>skills
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm font-light max-[330px]:text-xs">
          {skills.map((item, index) => (
            <SkillsItems
              key={index}
              title={item.title}
              skill={item.skills}
            />
          ))}
        </div>
      </div>
      <div className="mt-16 text-white ">
        <h2 className="text-2xl">
          <span className="text-primary">#</span>my-fun-facts
        </h2>
        <div className="mt-6 text-grey space-y-4 text-sm font-light max-[330px]:text-xs">
          <div className="border border-grey p-2">
            <p>
              I like to work more at <span className="text-white">night</span> than during the day.
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
      </div>
    </>
  )
}

export default About
