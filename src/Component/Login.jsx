import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../App.css";
const Login = () => {
    const [valid, setvalid] = useState(false);

 
    let navigate = useNavigate(); 
    const hello = () =>{ 
      setvalid(true)
    let path = `Home`; 
    navigate(path);
  }

    
  return (
    <div className='container'>
        <div className="right center col ">
            <div className="login ">
                <header className="header ">Welcom to pretty Login</header>
                <div className="div ">Its great to have you back</div>
                <div className="inputs ">
                    <p>Email</p>
                    <input type="text" name="" id="" />
                    <p>Password</p>
                    <input type="text" name="" id="" />
                    <div className="radio ">
                        <div className='center'><input type="checkbox" name="remember" id="" />
                        <label htmlFor="remember">Remember me?</label></div>
                        <span> forgot password?</span>
                    </div>
                    <div className="buttons ">
                    <button onClick={hello}>LOGIN</button>
                        
                        <button>CREATE ACCOUNT</button>
                    </div>
                    <div className="forget">
                        <p>OR login with</p>
                        <span>Google</span>
                        <span>facebook</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="left ">
            <div className="leftinner"></div>
        </div>
    </div>
  )
}

export default Login