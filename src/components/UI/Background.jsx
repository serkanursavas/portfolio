import dots31 from '../../assets/dots31.png'
import dots28 from '../../assets/dots28.png'
import dots36 from '../../assets/dots36.png'

const Background = () => {
  return (
    <>
      <div className="absolute -right-9 top-[700px] w-[90px] h-[90px] border border-grey"></div>
      <img
        className="max-[375px]:hidden w-[60px] absolute -left-[30px] top-[1050px]"
        src={dots28}
        alt="dots28"
      />
      <div className="max-[375px]:hidden absolute -right-[90px] top-[1200px] w-[130px] h-[130px] border border-grey"></div>
      <div className="max-[375px]:hidden absolute -left-[55px] top-[2320px] w-[90px] h-[90px] border border-grey"></div>
      <img
        className="max-[375px]:hidden  absolute -right-2 bottom-[450px] w-[60px]"
        src={dots31}
        alt="dots31"
      />
      <img
        className="max-[375px]:hidden  absolute -left-3 bottom-12 w-[60px]"
        src={dots31}
        alt="dots31"
      />
    </>
  )
}

export default Background
