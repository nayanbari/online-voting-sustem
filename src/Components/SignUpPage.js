import HeroImage from '../Assets/hero_image.png'
import '../Styles/sign_up_page.css'
import SignUpForm from './SignUpForm'

const SignUpPage = () => {
    return (
        <div className="signup_form">
            <div className="left_side">
                <img src={HeroImage} alt="Hero Image" />
            </div>
            <div className="right_side">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUpPage
