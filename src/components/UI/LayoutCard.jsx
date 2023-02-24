const LayoutCard = props => {
  return (
    <div className="bg-background min-h-[100vh] px-5 pt-5 pb-9 overflow-hidden md:bg-background md:flex md:justify-center md:items-center">
      <div className="hidden md:block md:border md:border-white md:p-10 md:text-[36px] md:text-primary">
        We back as soon as possible !
      </div>
      <div className="overflow-hidden md:hidden">{props.children}</div>
    </div>
  )
}

export default LayoutCard
