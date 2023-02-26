const SkillsItems = props => {
  return (
    <div className="border border-grey h-fit">
      <h6 className="p-2 border-b border-grey font-medium">{props.title}</h6>
      <div className="p-2 text-grey font-light flex gap-2 flex-wrap">
        {props.skill.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default SkillsItems
