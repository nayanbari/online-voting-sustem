import {Link} from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import { useState} from 'react';
import '../Styles/sign_in_form.css';

const SignInPage = () => {
    
    const [routeStatus, setRouteStatus] = useState('/')
    // let history = useHistory();

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
        if(res.status === 422 || !data){
            window.alert ("Regisrtration Failed");
            console.log("Registration failed 110");
            setRouteStatus('/signup');
        }else{
            window.alert ("Regisrtration Successful");
            console.log("Registration Successful");
            setRouteStatus('/signin');
            // history.push("/signin");
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
                        <Link style={{textDecoration: 'none', color: '#fff'}} to={routeStatus} > 
                            <h4>Sign Up</h4>
                        </Link>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignInPage
