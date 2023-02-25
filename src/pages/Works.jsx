import portfolioss from '../assets/portfolioss.png'

const Works = () => {
  return (
    <>
      <div className="mt-8 text-white">
        <p className="font-medium text-[36px]">
          <span className="text-primary">/</span>projects
        </p>
        <p className="mt-1 font-light">List of my projects</p>
      </div>

      <div className="mt-16 text-white">
        <h2 className="text-3xl">
          <span className="text-primary">#</span>complete-apps
        </h2>
        <div className="mt-10">
          <div className="border border-grey flex flex-col">
            <img src={portfolioss} />
            <div className="flex flex-row gap-2 p-2 border-b border-grey text-grey font-light">
              <span>Vue</span> <span>Ts</span> <span>Python</span>
            </div>
            <div className="flex flex-col p-4 gap-4">
              <p className="text-2xl">Portfolio</p>
              <p className="font-light text-grey">You're using it rn</p>

              <button className="border border-primary w-fit py-1 px-5">
                Github <span className="text-xl">≥</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Works
