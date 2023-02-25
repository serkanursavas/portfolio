import projects from '../store/projects'

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

        <button className="border border-primary w-fit py-1 px-5">
          <a href={props.link}>
            {props.status} <span className="text-xl">≥</span>
          </a>
        </button>
      </div>
    </div>
  )
}

export default ProjectItem
