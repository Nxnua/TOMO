export default function Header(){
    return (
        <nav className="flex justify-between items-center h-[50px] mx-auto font-Nunito ">
            <div className="float-left ms-20">
            <img src="images/Logo.png" alt="" width={80} height={10} />
            </div>
            <div className="md:static float-right absolute md:min-h-fit min-h-[60vh] left-0 top-[86px] md:w-auto w-full flex items-center">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 mx-auto">
                    <li className="text-xs hover:text-gray-500">
                        <a href="">Trips</a>
                    </li>
                    <li className="text-xs hover:text-gray-500">
                        <a href="">Travel Guides</a>
                    </li>
                    <li className="text-xs hover:text-gray-500">
                        <a href="">More</a>
                    </li>
                    
                </ul>
            </div>
            <div className="bg-white float-right mr-10" >
                <ul className="flex items-rigth gap-[1vw]">
                    <li>
                        <a href="">
                            <img src="images/Lang.png" alt="" width={25} height={25} className="mt-[5px] hover:opacity-70"/>
                        </a>
                    </li>
                    <li>
                    <button className="h-[30px] w-[80px] text-xs bg-white border-2 border-orange text-orange px-2 py-1 rounded-full hover:bg-warning hover:text-white hover:border-warning font-bold">Sign In</button>
                    <button className="h-[30px] w-[80px] text-xs ml-2 border-2 border-orange bg-orange text-white px-2 py-1 rounded-full hover:bg-warning hover:border-warning font-bold">Sign Up</button>
                    </li>
                    <li>
                        <a href=""><img src="images/darkmoon.png" alt="" width={25} height={25} className=" hover:opacity-70"/></a>
                    </li>
                </ul>
            </div>
        </nav>
       
    );
}