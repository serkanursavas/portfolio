const LayoutCard = props => {
  return (
    <div className="bg-background min-h-[100vh] px-5 pt-5 pb-9 ">
      <div className="overflow-hidden">{props.children}</div>
    </div>
  )
}

export default LayoutCard
