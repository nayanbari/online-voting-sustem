import Apple from '../Assets/Icons/apple.png'
import Facebook from '../Assets/Icons/facebook.png'
import Google from '../Assets/Icons/google.png'
import '../Styles/sign_up_options.css'

const SignUpOptions = () => {
    return (
        <div className="sign_up_options">
            <div className="option">
                <img src={Apple} alt="apple" />
            </div>
            <div className="option">
                <img src={Facebook} alt="apple" />
            </div>
            <div className="option">
                <img src={Google} alt="apple" />
            </div>
        </div>
    )
}

export default SignUpOptions
