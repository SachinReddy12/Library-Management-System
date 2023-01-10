import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css'
const UserLogin = () => {
let navigate=useNavigate();
    let submit=(e)=>{
        e.preventDefault();
        navigate('/user/')
    }
    return ( 
        <div className="userLoginPage">
              <div className="form">
             <h1>User Login</h1>
             <form action="" onSubmit={submit}>
                <div className="email">
                <input type="email" required placeholder="Enter email id" />
                </div>
                <div className="pasword">
                    <input type="password"required placeholder="Enter password" />
                </div>
                <button>Login</button>
             </form>
            </div>
        </div>
     );
}
 
export default UserLogin;