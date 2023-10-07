

import background from '../assets/bg-light.png'
import google_icon from '../assets/google.png'

export const LoginSignup = () => {
  return (
    <div style={{backgroundImage: `url(${background})`,
            backgroundSize: "cover"
            
    }}>
       
    <div className='container flex flex-col m-0 mr-[915px] w-auto bg-white pb-[10px]'>
    <div className="header">
      <div className="text">Sign Up</div>
    </div>
    <div className="inputs">
      <div className="input">
        <input type="email" placeholder="  Email" />
      </div>
      <div className="input">
        <input type="password" placeholder='  Password'/>
      </div>
      <div className="input">
        <input type="Password" placeholder='  Confirm Password' />
      </div>
    </div>
    <div className="submit-container">
      <div className="submit">Sign Up</div>
      <div className="forgot-password ">Already have an account?<span>sign in</span></div>
      <div className="google">
     <img src={google_icon} alt="" /><span>Sign up with Google</span>
      </div>
    </div>
    </div>
    </div>
  )
}
