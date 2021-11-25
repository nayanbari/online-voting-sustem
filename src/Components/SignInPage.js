import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../Styles/sign_in_form.css'

const SignInPage = () => {
    const [aadharInput, setAadharInput] = useState(); 
    const [passInput, setPassInput] = useState(); 
    const [confirmPassInput, setConfirmPassInput] = useState(); 
    const [nameInput, setNameInput] = useState(); 
    const [emailInput, setEmailInput] = useState(); 
    const [mobileInput, setMobileInput] = useState(); 
    const InputA = (e) => {
        setAadharInput(e.target.value)
    }
    const InputP = (e) => {
        setPassInput(e.target.value)
    }
    const InputCP = (e) => {
        setConfirmPassInput(e.target.value)
    }
    const InputN = (e) => {
        setNameInput(e.target.value)
    }
    const InputE = (e) => {
        setEmailInput(e.target.value)
    }
    const InputM = (e) => {
        setMobileInput(e.target.value)
    }
    return (
        <div className="form">
            <h2>Sign In</h2>
            <form>
                <div className="two_container">
                    <div className="input_container">
                        <label htmlFor="Name">Name</label>
                        <input type="text" onChange={InputN} className="input" id="name" placeholder="Nayan Bari" />
                    </div>
                    <div className="input_container">
                        <label htmlFor="Email">Email</label>
                        <input type="email" onChange={InputE} className="input" id="name" placeholder="nayan.bari20@vit.edu" />
                    </div>
                </div>
                
                <div className="two_container">
                    <div className="input_container">
                        <label htmlFor="Mobile">Mobile</label>
                        <input type="number" onChange={InputM} className="input" id="name" placeholder="8806575743" />
                    </div>
                    <div className="input_container">
                        <label htmlFor="Number">Aadhar Card Number</label>
                        <input type="number" onChange={InputA} className="input" id="aadhar_card_number" placeholder="4444 4444 4444" />
                    </div>
                </div>
                
                <div className="two_container">
                    <div className="input_container">
                        <label htmlFor="Password">Password</label>
                        <input type="password" onChange={InputP} className="input" id="password" placeholder="********" />
                    </div>
                    <div className="input_container">
                        <label htmlFor="ConfirmPassword">Confirm Password</label>
                        <input type="password" onChange={InputCP} className="input" id="password" placeholder="********" />
                    </div>
                </div>
                
                <div className="btn_container">
                    <button className="btn">
                        <Link style={{textDecoration: 'none', color: '#fff'}} to='/login'>
                            <h4>Sign In</h4>
                        </Link>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignInPage
