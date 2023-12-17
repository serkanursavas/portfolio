import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ButtonPrimary from '../components/UI/ButtonPrimary'
import TypingEffect from './UI/TypingEffect'
import LoadingSpinner from './UI/LoadingSpinner/LoadingSpinner'

const ProjectItem = props => {
  const parsedTools = JSON.parse(props.tools)

  if (props.status !== 'null') {
    return (
      <div className="border border-grey flex flex-col">
        <div className="max-w-[600px] max-h-[265px]">
          {props.thumbnail ? (
            <img
              width={600}
              height={365}
              src={props.thumbnail}
            />
          ) : (
            <LoadingSpinner height="h-[265px]" />
          )}
        </div>
        <div className="flex flex-row flex-wrap items-center gap-2 p-2 border-b border-t h-[74px] border-grey text-grey font-light">
          {parsedTools.map((tool, index) => {
            return (
              <div
                key={index}
                className="flex space-x-1 items-center "
              >
                <img
                  className="w-[16px] h-[16px]"
                  src={tool.icon}
                />
                <span>{tool.skill}</span>
              </div>
            )
          })}
        </div>
        <div className="flex flex-col p-4 gap-4 justify-between">
          <p className="text-2xl text-white">{props.title}</p>
          <p className="font-light text-grey min-h-[50px] ">{props.description}</p>

          <div>
            <ButtonPrimary
              link={props.link}
              name={props.status}
              icon={faChevronRight}
              projectBtn
            />
          </div>
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
