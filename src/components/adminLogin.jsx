import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminLogin.css'
const AdminLgin = () => {
let [email,updateEmail]=useState('');
let [pasword,updatePasword]=useState('');
let navigate=useNavigate();
    let submit=(e)=>{
        e.preventDefault();
        let data={email,pasword}
        if(email=='Sachin@gmail.com'&& pasword=='@231'){
            navigate('/admin/')
        }
        else{
            alert('Invalid Username or Password')
        }
    }
    return (
        <div className="adminLoginPagg">
            <div className="form">
             <h1>Login As Admin</h1>
             <form action="" onSubmit={submit}>
                <div className="email">
                <input type="email" required placeholder="Enter email id" value={email} onChange={(e)=>updateEmail(e.target.value)}/>
                </div>
                <div className="pasword">
                    <input type="password"required placeholder="Enter password" value={pasword} onChange={(e)=>updatePasword(e.target.value)}/>
                </div>
                <button>Login</button>
             </form>
            </div>
        </div>
    );
}

export default AdminLgin;