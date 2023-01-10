import { useState } from 'react';
import '../styles/addUsers.css'
import { useNavigate } from 'react-router-dom';
const AddUsers = () => {
    let [name, setname] = useState('');
    let [age, setage] = useState('')
    let [email, setemail] = useState('')
    let [phoneNo, setphoneNo] = useState('')

    let nav = useNavigate();

    let submit = (e) => {
        e.preventDefault();
        let data = { name, age, email, phoneNo };
        console.log(data);

        fetch('http://localhost:2050/users',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }
        )
        alert('Added Sucssfully..')
        nav('/admin/user-list/')
    }
    return (
        <div className="addUser">

            <div className="add">
                <h1>Add New Users</h1>
                <form action="" onSubmit={submit}>
                    <div className="name">
                        <input type="text" required placeholder="Enter name" value={name} onChange={(e) => setname(e.target.value)} />
                    </div>

                    <div className="age">
                        <input type="number" required placeholder="Enter age" value={age} onChange={(e) => setage(e.target.value)} />
                    </div>

                    <div className="email">
                        <input type="email" required placeholder="Enter email" value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>

                    <div className="phno">
                        <input type="number" required placeholder="Enter PhoneNumber" value={phoneNo} onChange={(e) => setphoneNo(e.target.value)} />
                    </div>
                    <button>Add</button>
                </form>
            </div>
        </div>
    );
}

export default AddUsers;