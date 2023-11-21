import { FaEnvelope,FaRegBell, FaSearch } from 'react-icons/fa'
const Navbar = () => {

  return (
    <div className="h-[50px] flex items-center text-sm text-[#555] border-b-[0.5px] border-b-[rgb(231,228,228)] border-solid">
      <div className="w-full flex items-center justify-between p-5">
      <div className='flex items-center rounded-[5px]'>
            <input type="text" className='bg-[#f8f9fc] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search for...' />
            <div className='bg-yellow-400 h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
              <FaSearch color='white'/>
            </div>
          </div>
        <div className="flex items-center">
          <div className="flex items-center relative mr-5">
            
            English
          </div>
          <div className="flex items-center relative mr-5">
            
          </div>
          <div className="flex items-center relative mr-5">
           
          </div>
          <div className="flex items-center relative mr-5">
          <FaRegBell/>
             
            <div className="w-[10px] h-[10px] bg-[red] text-[white] flex items-center justify-center text-[10px] font-[bold] absolute top-[-5px] right-[-5px] rounded-[50%]">1</div>
          </div>
          <div className="flex items-center relative mr-5">
          <FaEnvelope/>
            <div className="w-[10px] h-[10px] bg-[red] text-[white] flex items-center justify-center text-[10px] font-[bold] absolute top-[-5px] right-[-5px] rounded-[50%]">2</div>
          </div>
          <div className="flex items-center relative mr-5">
          
          </div>
          <div className="flex items-center relative mr-5">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="w-[30px] h-[30px] rounded-[50%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
