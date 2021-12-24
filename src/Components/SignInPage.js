import {Link, useNavigate} from 'react-router-dom';
import { useState} from 'react';
import '../Styles/sign_in_form.css';

const SignInPage = () => {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        name:"", email:"", phone:"", uid:"", pass:"", cpass:"" 
    });

    let name, value;
    const Input = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});}

    const SendData = async (e) => {
        e.preventDefault();

        const{name, email, phone, uid, pass, cpass} = user;

        const res = await fetch("/register", {method:"POST", headers:{"Content-Type" : "application/json"}, 
        body:JSON.stringify({
            name, email, phone, uid, pass, cpass
        })
        });

        const data = await res.json();
        if(!data){
            window.alert ("Regisrtration Failed");
            console.log("Registration failed");
            navigate("/signup");
        }else if(res.status === 420){
            window.alert ("Enter all details");
            console.log("Enter all details");
            navigate("/signup");
        }else if(res.status === 421){
            window.alert ("User already exists");
            console.log("User already exists");
            navigate("/signup");
        }else if(res.status === 422){
            window.alert ("Passwords are not matching");
            console.log("Passwords are not matching");
            navigate("/signup");
        }else if(res.status === 423){
            window.alert ("Password >= 6 characters, Aadhar no. = 12 digits, Phone no. = 10 digits, valid email id");
            console.log("Password >= 6 characters, Aadhar no. = 12 digits, Phone no. = 10 digits, valid email id");
            navigate("/signup");
        }else{
            window.alert ("Regisrtration Successful");
            console.log("Registration Successful");
            navigate("/signin");
        }

    }

    return (
        <div className="form">
            <h2>Sign Up</h2>
            <form method="POST">
                <div className="two_container">
                    <div className="input_container">
                        <label htmlFor="Name">Name</label>
                        <input type="text" onChange={Input} className="input" id="name" placeholder="Your Name" 
                        value={user.name} name="name"/>
                    </div>
                    <div className="input_container">
                        <label htmlFor="Email">Email</label>
                        <input type="email" onChange={Input} className="input" id="email" placeholder="example@abc.com" 
                        value={user.email} name="email"/>
                    </div>
                </div>
                
                <div className="two_container">
                    <div className="input_container">
                        <label htmlFor="Mobile">Mobile</label>
                        <input type="number" onChange={Input} className="input" id="phone" placeholder="55555 55555" 
                        value={user.phone} name="phone"/>
                    </div>
                    <div className="input_container">
                        <label htmlFor="Number">Aadhar Card Number</label>
                        <input type="number" onChange={Input} className="input" id="uid" placeholder="4444 4444 4444" 
                        value={user.uid} name="uid"/>
                    </div>
                </div>
                
                <div className="two_container">
                    <div className="input_container">
                        <label htmlFor="Password">Password</label>
                        <input type="password" onChange={Input} className="input" id="pass" placeholder="********"
                        value={user.pass} name="pass"/>
                    </div>
                    <div className="input_container">
                        <label htmlFor="ConfirmPassword">Confirm Password</label>
                        <input type="password" onChange={Input} className="input" id="cpass" placeholder="********" 
                        value={user.cpass} name="cpass"/>
                    </div>
                </div>
                
                <div className="btn_container">
                    <button className="btn" onClick={SendData}>
                        <Link style={{textDecoration: 'none', color: '#fff'}} to={SendData}> 
                            <h4>Sign Up</h4>
                        </Link>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignInPage
