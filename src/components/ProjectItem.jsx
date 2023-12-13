import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ButtonPrimary from '../components/UI/ButtonPrimary'
import TypingEffect from './UI/TypingEffect'

const ProjectItem = props => {
  if (props.status !== 'null') {
    return (
      <div className="border border-grey flex flex-col">
        <img src={props.thumbnail} />
        <div className="flex flex-row flex-wrap items-center gap-2 p-2 border-b border-t h-[74px] border-grey text-grey font-light">
          {/* {props.tools.map((tool, index) => {
            return (
              <div
                key={index}
                className="flex space-x-1 items-center "
              >
                <img
                  className="w-[16px] h-[16px]"
                  src={tool.img}
                />
                <span>{tool.name}</span>
              </div>
            )
          })} */}
          {/* {props.tools} */}
        </div>
        <div className="flex flex-col p-4 gap-4 justify-center">
          <p className="text-2xl text-white">{props.title}</p>
          <p className="font-light text-grey">{props.description}</p>

          <ButtonPrimary
            link={props.link}
            name={props.status}
            icon={faChevronRight}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className="hidden sm:flex border border-grey flex-col justify-center items-center">
        <p className="text-primary text-3xl">
          <TypingEffect strings={['New Project', 'Coming soon..']} />
        </p>
      </div>
    )
  }
}

export default ProjectItem
