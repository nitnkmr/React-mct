import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { create } from "../store/slice"
import "../App.css";
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [valid, setvalid] = useState(false);
    const [inputs, setInputs] = useState([]);
    const [inputs2, setInput2] = useState("");
    const [inputs1, setInputs1] = useState("");
    const data = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    console.log(inputs1);
    console.log(data);
    useEffect(() => {

    }, [inputs1])

    let navigate = useNavigate();
    const hello = () => {
        if(data.length>0){
        data[data.length-1].map((e)=>{
        
        if(e.name===(inputs1) && e.password===(inputs2)){
            setvalid(true)
        }
       
       }
        )
        let path = `Home`;
        if(valid){
            navigate(path)
            console.log("if");
        }
        else{
            console.log("else");
        }
    }
}
    const hello1 = () => {
        
        let path = `/createAccount`;
        navigate(path);
        
    }
    function handleInputs(str) {
        setInputs([...inputs, {
            name: inputs1,
            password: inputs2

        }])
        dispatch(create(str))
        navigate("/")
    }


    return (
        <div className='container'>
            <div className="right center col ">
                <div className="login ">
                    <header className="header ">Welcome to pretty LogIn</header>
                    <div className="div ">Its great to have you back</div>
                    <Routes>
                        <Route path='/createAccount' element={<div className="inputs ">
                            <h3>Create Acoount</h3>
                        <p>Email</p>
                        <input type="text" name="" id="" value={inputs1} onChange={(e) => (setInputs1(e.target.value))} />
                        <p>Password</p>
                        <input type="text" name="" id="" value={inputs2} onChange={(e) => (setInput2(e.target.value))} />
                        
                        <div className="buttons ">
                            

                            <button onClick={() => handleInputs(inputs)}>Done</button>
                        </div>
                        <div className="forget">
                            <p>OR login with</p>
                            <span>Google</span>
                            <span>facebook</span>
                        </div>
                    </div>}/>
                        <Route path='/' element={<div className="inputs ">
                        <p>Email</p>
                        <input type="text" name="" id="" value={inputs1} onChange={(e) => (setInputs1(e.target.value))} />
                        <p>Password</p>
                        <input type="text" name="" id="" value={inputs2} onChange={(e) => (setInput2(e.target.value))} />
                        <div className="radio ">
                            <div className='center'><input type="checkbox" name="remember" id="" />
                                <label htmlFor="remember">Remember me?</label></div>
                            <span> forgot password?</span>
                        </div>
                        <div className="buttons ">
                            <button onClick={hello}>LOGIN</button>

                            <button onClick={() => hello1()}>CREATE ACCOUNT</button>
                        </div>
                        <div className="forget">
                            <p>OR login with</p>
                            <span>Google</span>
                            <span>facebook</span>
                        </div>
                    </div>}/>

                    </Routes>
                </div>
            </div>
            <div className="left ">
                <div className="leftinner"></div>
            </div>
        </div>
    )
}

export default Login