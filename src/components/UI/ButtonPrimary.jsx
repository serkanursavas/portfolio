import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonPrimary = props => {
  function viewProjectsHandler() {
    if (props.projectBtn) {
      fetch(`${import.meta.env.VITE_API_URL}/projectviews`, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_API_KEY
        }
      })
    }
  }

  return (
    <button
      onClick={viewProjectsHandler}
      className="border text-base border-primary w-fit py-2 px-4 hover:bg-[#C778DD] hover:bg-opacity-20 transition-all duration-200"
    >
      <Link
        to={props.link}
        className="flex items-center gap-2 text-white"
      >
        {props.name}
        <span className="text-base">
          {props.icon && <FontAwesomeIcon icon={props.icon} />}
        </span>
      </Link>
    </button>
  )
}

export default ButtonPrimary
