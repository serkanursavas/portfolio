const PageTitle = props => {
  return (
    <div className="mt-8 text-white">
      <p className="font-medium text-[36px]">
        <span className="text-primary">/</span>
        {props.title}
      </p>
      <p className="mt-1 font-light">{props.subtitle}</p>
    </div>
  )
}

export default PageTitle
