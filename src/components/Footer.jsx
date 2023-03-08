import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import union from '../assets/union.png'
import AnimatedPage from './UI/AnimatedPage'

const Footer = () => {
  return (
    <AnimatedPage>
      <div className="hidden sm:block border-t-[1px] border-grey w-full z-20 relative bg-background">
        <div className="px-40 py-8 text-white">
          <div className="flex justify-between">
            <div>
              <div className="flex space-x-4">
                <div className="flex space-x-2 items-center">
                  <img
                    className="object-fit w-4"
                    src={union}
                    alt="logo"
                  />
                  <p>Serkan</p>
                </div>
                <p className="text-grey">serkan.ursavas@icloud.com</p>
              </div>
              <p className="mt-4">Web designer and front-end developer</p>
            </div>
            <div className="text-center">
              <p className="text-2xl">Media</p>
              <div className="flex mt-3 gap-2 items-center">
                <a href="https://github.com/serkanursavas">
                  <img
                    className="rounded-full  hover:opacity-50 transition-all duration-200"
                    src={github}
                    alt="github"
                  />
                </a>
                <a href="https://www.linkedin.com/in/serkanursavas/">
                  <img
                    className="max-w-[26px] rounded-full  hover:opacity-50 transition-all duration-200 "
                    src={linkedin}
                    alt="linkedin"
                  />
                </a>
              </div>
            </div>
          </div>
          <p className="mt-12 text-center text-grey">© Copyright 2023. Made by Serkan</p>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Footer
