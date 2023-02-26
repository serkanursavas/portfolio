import PageTitle from '../components/PageTitle'
import dots1 from '../assets/about-dots1.png'
import dots2 from '../assets/about-dots2.png'
import aboutPic from '../assets/about.png'

const About = () => {
  return (
    <>
      <PageTitle
        title="about-me"
        subtitle="Who am i?"
      />
      <div className="mt-16 flex gap-1 justify-between items-end">
        <p className="basis-3/5 leading-6 text-grey font-light text-sm ">
          Hello, i'm Elias! I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
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
      <p className="mt-4  text-grey font-light text-sm">
        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been
        helping various clients to establish their presence online. I always strive to learn about the newest
        technologies and frameworks.
      </p>
      <div className="mt-16 text-white">
        <h2 className="text-2xl">
          <span className="text-primary">#</span>skills
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="border border-grey">
            <h6 className="p-2 border-b border-grey font-medium">Languages</h6>
            <div className="p-2 text-grey font-light flex gap-2 flex-wrap">
              <span>Typescript</span>
              <span>Lua</span>
              <span>Python</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 text-white">
        <h2 className="text-2xl">
          <span className="text-primary">#</span>my-fun-facts
        </h2>
        <div className="mt-6 text-grey space-y-4">
          <div className="border border-grey p-2">
            <p>I like winter more than summer</p>
          </div>
          <div className="border border-grey p-2">
            <p>
              I like <span>pizza</span> and <span>pasta</span>
            </p>
          </div>
          <div className="border border-grey p-2">
            <p>
              I was in <span>Poland</span> and <span>Turkey</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
