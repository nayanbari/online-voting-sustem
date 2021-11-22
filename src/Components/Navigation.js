import Logo from '../Assets/logo.png'
import '../Styles/navigation.css'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <div className="img-container">
                <img src={Logo} alt="vote india" />
            </div>
            <div className="links">
                <Link style={{textDecoration: 'none'}} to='/elections'>
                    <h3>Elections</h3>
                </Link>
                <Link style={{textDecoration: 'none'}} to='/result'>
                    <h3>Result</h3>
                </Link>
            </div>
        </nav>
    )
}

export default Navigation
