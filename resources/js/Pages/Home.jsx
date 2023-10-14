export default function Home() {
    const heading = "Laravel 9 Vite  with React JS";
    return <div className="flex">
        <div className="relative  h-screen">
          <img src="/images/background.png" alt="" srcset="" className=" h-screen" />
          <img src="" className=" absolute bottom-50 left-[200px]"/>
        </div>
        <div className=" inset-y-0 right-0 bg-black w-[500px] rounded-l-2xl drop-shadow-[-26px_-28px_49px_rgba(0,0,0,0.30)] ">
          <div className=" flex justify-end m-4">light mode</div>
          <h1 className="flex justify-center m-4 text-3xl font-extrabold tracking-tight text-[color:var(--orange)] ">Hi, I'm Tomo!</h1>
          
         
          
        </div>
    </div>
}