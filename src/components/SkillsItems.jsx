import JSConfetti from 'js-confetti'

const SkillsItems = props => {
  const jsConfetti = new JSConfetti()

  const easterEgg = () => {
    jsConfetti.addConfetti({
      emojis: ['👩🏻‍💻', '✨', '🛻'],
      confettiNumber: 20,
      emojiSize: 70
    })
  }
  return (
    <div className="border border-grey h-fit">
      <h6 className="p-2 border-b border-grey font-medium">{props.title}</h6>
      <div className="p-2 text-grey font-light flex gap-2 flex-wrap ">
        {props.skill.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                item.name === 'Javascript'
                  ? 'cursor-pointer hover:text-primary hover:text-xl'
                  : null
              } flex space-x-1 items-center`}
              onClick={item.name === 'Javascript' ? easterEgg : null}
            >
              <img
                src={item.img}
                className="w-[16px] h-[16px]"
              />
              <span className="select-none">{item.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsItems
