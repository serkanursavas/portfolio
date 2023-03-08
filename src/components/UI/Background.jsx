import dots31 from '../../assets/dots31.png'

const Background = () => {
  return (
    <div className="hidden sm:block">
      <div className="absolute -right-9 lg:-right-4 top-[700px] lg:top-[400px] w-[90px] h-[90px] border border-grey"></div>

      <div className="max-[375px]:hidden absolute -right-[90px] top-[1200px] lg:top-[950px] lg:w-[140px] w-[130px] h-[130px] border border-grey"></div>
      <div className="max-[375px]:hidden absolute -left-[55px] lg:-left-[30px] top-[2320px] lg:top-[2170px] w-[90px] lg:h-[150px] h-[90px] border border-grey"></div>
      <img
        className="max-[375px]:hidden absolute -right-2 bottom-[450px] lg:bottom-[750px] w-[60px] lg:w-[80px]"
        src={dots31}
        alt="dots31"
      />
      <img
        className="max-[375px]:hidden  absolute -left-5 bottom-12 lg:bottom-72 w-[60px] lg:w-[80px]"
        src={dots31}
        alt="dots31"
      />
    </div>
  )
}

export default Background
