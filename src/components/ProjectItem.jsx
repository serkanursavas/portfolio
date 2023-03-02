import { faPlay } from '@fortawesome/free-solid-svg-icons'
import ButtonPrimary from '../components/UI/ButtonPrimary'

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
        <p className="text-2xl text-white">{props.title}</p>
        <p className="font-light text-grey">{props.description}</p>

        <ButtonPrimary
          link={props.link}
          name={props.title}
          icon={faPlay}
        />
      </div>
    </div>
  )
}

export default ProjectItem
