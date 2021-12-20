import SignUpOptions from "./SignUpOptions"
import '../Styles/sign_up_form.css'
import {Link, useNavigate} from 'react-router-dom'
import { useState} from 'react'

const SignUpForm = () => {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        uid:"", pass:"" 
    });
    
    let name, value;
    const Input = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});}

    const SendData = async (e) => {
        e.preventDefault();

        const{uid, pass} = user;

        const res = await fetch("/login", {method:"POST", headers:{"Content-Type" : "application/json"}, 
        body:JSON.stringify({
            uid, pass
        })
        });

        const data = await res.json();
        if(res.status === 400 || !data){
            window.alert ("Invalid Credentials!");
            console.log("Invalid Credentials!");
            navigate("/signin");
        }else{
            navigate("/");
            window.alert ("Login Successful");
            console.log("Login Successful");
        }

    }

    return (
        <div className="form">
            <h2>Sign In</h2>
            <SignUpOptions />
            <div className="seprator">
                <div className="line"></div>
                <p>Or sign in with aadhar</p>
            </div>
            <form method='POST' >
                <div className="input_container">
                    <label htmlFor="Number">Aadhar Card Number</label>
                    <input type="number" onChange={Input} className="input" id="uid" placeholder="4444 4444 4444" 
                    value={user.uid} name="uid" />
                </div>
                <div className="input_container">
                    <label htmlFor="Password">Password</label>
                    <input type="password" onChange={Input} className="input" id="pass" placeholder="********"
                    value={user.pass} name="pass" />
                </div>
                <div className="query">
                    <p className="account">Don’t have account?<span><Link style={{textDecoration: 'none', color: '#006BFB'}} to='/signup'> Sign Up </Link></span>now </p>
                    <p className="forgot_password">Forgot Password?</p>
                </div>
                <div className="btn_container">
                    <button 
                    onClick={SendData}
                     className="btn">
                        <Link style={{textDecoration: 'none', color: '#fff'}} 
                        to={SendData}
                        >
                            <h4>Sign In</h4>
                        </Link>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
