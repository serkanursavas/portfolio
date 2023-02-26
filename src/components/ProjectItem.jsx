import playIcon from '../assets/playIcon.png'

const ProjectItem = props => {
  return (
    <div className="border border-grey flex flex-col">
      <img src={props.thumbnail} />
      <div className="flex flex-row gap-2 p-2 border-b border-t border-grey text-grey font-light">
        {props.tools.map((tool, index) => (
          <span key={index}>{tool}</span>
        ))}
      </div>
      <div className="flex flex-col p-4 gap-4">
        <p className="text-2xl">{props.title}</p>
        <p className="font-light text-grey">{props.description}</p>

        <button className="border border-primary w-fit py-1 px-5 hover:bg-[#C778DD] hover:bg-opacity-20">
          <a
            href={props.link}
            className="flex items-center gap-2"
          >
            {props.status}
            <span className="text-xl">
              <img
                className="w-[16px]"
                src={playIcon}
                alt="play"
              />
            </span>
          </a>
        </button>
      </div>
    </div>
  )
}

export default ProjectItem
