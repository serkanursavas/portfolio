import anonymous from '../assets/anony.png'
import dots from '../assets/dots.png'
import logo from '../assets/logoPrimary.png'

const Home = () => {
  return (
    <div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:mt-8 sm:items-center">
        <div className="mt-8 text-white text-[36px] font-medium">
          Serkan is a <span className="text-primary">web designer</span> and
          <span className="text-primary"> front-end developer</span>
          <p className="mt-6 text-grey text-lg">He crafts responsive websites where technologies meet creativity</p>
          <button className="hidden sm:block py-2 px-4 text-base border border-primary mt-6">Contact Me !!</button>
        </div>
        <div>
          <div className="mt-16 sm:mt-4 block relative w-full">
            <img
              className="relative top-0 w-full z-10 "
              src={anonymous}
              alt="anon"
            />
            <img
              className="absolute top-[85px] left-1 z-0 sm:w-[120px] sm:top-[150px] sm:left-4"
              src={logo}
              alt="logo"
            />
            <img
              className="absolute top-[200px] right-4 z-20 sm:w-[80px] sm:top-[250px]"
              src={dots}
              alt="dots"
            />
          </div>
          <div className="p-3 border border-grey flex space-x-3 items-center">
            <div className=" w-4 h-4 bg-primary my-3"></div>
            <p className=" text-lg text-grey">
              Currently working on <span className="text-white font-medium">Portfolio</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
