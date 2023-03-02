import TypingEffect from '../components/UI/TypingEffect'

const PageTitle = props => {
  return (
    <div className="mt-8 text-white">
      <p className="font-medium text-[36px]">
        <span className="text-primary">/</span>
        {props.title}
      </p>
      <p className="mt-1 font-light">
        <TypingEffect strings={[props.subtitle]} />
      </p>
    </div>
  )
}

export default PageTitle
