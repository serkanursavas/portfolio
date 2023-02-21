const LayoutCard = props => {
  return (
    <div className="flex items-center justify-between h-[100vh] bg-zinc-500">
      <div className="bg-background w-[1200px] h-[80vh] m-auto rounded-3xl p-5 shadow-xl shadow-slate-500">
        <div className="w-[1024px] mx-auto">{props.children}</div>
      </div>
    </div>
  )
}

export default LayoutCard
