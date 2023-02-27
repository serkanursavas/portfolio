import githubLogo from '../assets/github.png'
import linkedinLogo from '../assets/linkedin.png'
import union from '../assets/union.png'

const Footer = () => {
  return (
    <div className="hidden sm:block border-t-[1px] border-grey w-full">
      <div className="px-40 py-8 text-white">
        <div className="flex justify-between">
          <div>
            <div className="flex space-x-4">
              <div className="flex space-x-2 items-center">
                <img
                  className="object-fit"
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
            <div className="flex mt-3 gap-2">
              <img
                className="w-[45px] h-[45px]"
                src={githubLogo}
                alt="logo"
              />
              <img
                className="w-[45px] h-[45px]"
                src={linkedinLogo}
                alt="logo"
              />
            </div>
          </div>
        </div>
        <p className="mt-12 text-center text-grey">© Copyright 2023. Made by Serkan</p>
      </div>
    </div>
  )
}

export default Footer
