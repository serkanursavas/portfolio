import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const LayoutCard = props => {
  const location = useLocation()
  useEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-[100vh] sm:min-h-[80vh] px-5 pt-5 pb-9 sm:p-16 sm:pt-12 relative overflow-hidden">
      {props.children}
    </div>
  )
}

export default LayoutCard
