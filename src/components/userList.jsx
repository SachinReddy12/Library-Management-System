import { useState,useEffect } from "react";
import '../styles/userList.css'
const UserList = () => {
    let [users,setUsers]=useState([]);

    useEffect(()=>{
       let fetchData=async()=>{
        let responce= await fetch('http://localhost:2050/users');
        let data= await responce.json();
        setUsers(data);
        }
        fetchData();
    },[])

    let removes=(id,name)=>{
        setUsers(users.filter(y=>y.id!=id))
        alert(`user ${name} is deleted`)
    }
    return ( 
        <div className="userList">
            <h1>User List</h1>
            <div className="users_data">
                {users.map((x)=>(
                    <div className="user_list">
                        <h1>Name: {x.name}</h1>
                        <h2>Age: {x.age}</h2>
                        <h3>Email: {x.email}</h3>
                        <h4>PhoneNo: {x.phoneNo}</h4>
                        <button onClick={()=>removes(x.id,x.name)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default UserList;