const SkillsItems = props => {
  return (
    <div className="border border-grey h-fit">
      <h6 className="p-2 border-b border-grey font-medium">{props.title}</h6>
      <div className="p-2 text-grey font-light flex gap-2 flex-wrap">
        {props.skill.map((item, index) => {
          return (
            <div
              key={index}
              className="flex space-x-1 items-center"
            >
              <img
                src={item.img}
                className="w-[16px] h-[16px]"
              />
              <span>{item.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsItems
