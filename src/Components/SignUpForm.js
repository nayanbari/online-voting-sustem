import SignUpOptions from "./SignUpOptions"
import '../Styles/sign_up_form.css'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

const SignUpForm = () => {
    const [routeStatus, setRouteStatus] = useState('/')
    const aadhar = 123456789123
    const pass = 'Nayan@123'
    const [aadharInput, setAadharInput] = useState(); 
    const [passInput, setPassInput] = useState(); 
    const InputA = (e) => {
        setAadharInput(e.target.value)
    }
    const InputP = (e) => {
        setPassInput(e.target.value)
    }
    const redirect = (e) => {
        if(aadhar == aadharInput && pass == passInput){
            setRouteStatus('/elections')
            console.log(routeStatus)
        }
        else {
            setRouteStatus('/')
            console.log(routeStatus)
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
            <form>
                <div className="input_container">
                    <label htmlFor="Number">Aadhar Card Number</label>
                    <input type="number" onChange={InputA} className="input" id="aadhar_card_number" placeholder="4444 4444 4444" />
                </div>
                <div className="input_container">
                    <label htmlFor="Password">Password</label>
                    <input type="password" onChange={InputP} className="input" id="password" placeholder="********" />
                </div>
                <div className="query">
                    <p className="account">Don’t have account?<span> Sign Up </span>now </p>
                    <p className="forgot_password">Forgot Password?</p>
                </div>
                <div className="btn_container">
                    <button onClick={redirect} className="btn">
                        <Link style={{textDecoration: 'none', color: '#fff'}} to={routeStatus}>
                            <h4>Sign In</h4>
                        </Link>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
