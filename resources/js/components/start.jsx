export default function Start() {
    return (<div className="z-20 sabsolute right-0 inset-y-0 bg-white w-[500px] rounded-l-3xl drop-shadow-[-26px_-28px_49px_rgba(0,0,0,0.30)]">
        <div className=" w-[500px] flex flex-col">
          <div className=" flex justify-end m-4">light mode</div>
          <h1 className="flex justify-center m-4 text-3xl font-extrabold tracking-tight text-orange">Hi, I'm Tomo!</h1>
          <div className=" flex flex-row items-center">
            <p className="m-12 text-center text-xl tracking-tighter font-semibold  "> Choose your travel destination <br/> with me!</p>
            <img src="images/tomo-green.png" alt="" className=" w-[30vh] mt-10"/>
          </div>
s
          <button className=" mt-[8vh] flex justify-center ">
            <div className=" rounded-xl font-bold px-10 py-3  bg-orange text-white text-2xl"> Start</div>
           
          </button>
          </div>
        </div>);
} 