import { Link } from "react-router-dom";
import '../styles/landingPage.css'
const LandingPage=()=>{
    return(
        <div className="landingPage">
            <div className="selectLoginType">
                <h1>Library Manegment  System</h1>
                <img height='150px' src="images/profile.png" alt="" />
                <img height='150px' src="images/programmer.png" alt="" />
                <div className="link">
                <Link to='/admin-login'>Admin Login</Link>
                <Link to='/user-login'>User Login</Link>
            </div>
            </div>
        </div>
    )
}

export default LandingPage;