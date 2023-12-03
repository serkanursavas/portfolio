import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const LayoutCard = props => {
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()
  useEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="min-h-[100vh] sm:min-h-[80vh] px-5 pt-5 pb-9 sm:p-16 sm:pt-12 relative overflow-hidden lg:max-w-[1200px] lg:mx-auto">
      {props.children}
      <button
        onClick={scrollToTop}
        className={`${
          isVisible ? 'block opacity-100' : 'hidden opacity-0'
        } z-30 border border-primary bg-background text-white px-4 py-2 cursor-pointer transition-all duration-300 hover:bg-primary hover:border-white fixed bottom-4 right-5`}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  )
}

export default LayoutCard
