// export default function Home() {
//     return <div className="flex">
        
//     </div>
// }

import Banner from "../components/banner";
export default function Home() {
    return (
        <div>
            <div className="flex relative">
                <Banner />
                <div className="z-20 inset-y-0 bg-white w-[500px] rounded-l-2xl drop-shadow-[-26px_-28px_49px_rgba(0,0,0,0.30)]">
          <div className=" flex justify-end m-4">light mode</div>
          <h1 className="flex justify-center m-4 text-3xl font-extrabold tracking-tight text-[color:var(--orange)] ">Hi, I'm Tomo!</h1>

        </div>
            </div>
        </div>
    );
}
