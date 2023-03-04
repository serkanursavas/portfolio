import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

const Media = () => {
  return (
    <div className="fixed top-0 left-4 hidden lg:block">
      <div className="flex flex-col gap-2 items-center max-w-[32px]">
        <div className="w-[1px] h-48 bg-grey"></div>
        <a href="https://github.com/serkanursavas">
          <img
            className="rounded-full hover:scale-110 transition-all duration-200"
            src={github}
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/serkanursavas/">
          <img
            className="rounded-full hover:scale-110 transition-all duration-200"
            src={linkedin}
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  )
}

export default Media
