import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonPrimary = props => {
  return (
    <button className="border text-base border-primary w-fit py-2 px-4 hover:bg-[#C778DD] hover:bg-opacity-20">
      <Link
        to={props.link}
        className="flex items-center gap-2  text-white"
      >
        {props.name}
        <span className="text-xl">{props.icon && <FontAwesomeIcon icon={props.icon} />}</span>
      </Link>
    </button>
  )
}

export default ButtonPrimary
