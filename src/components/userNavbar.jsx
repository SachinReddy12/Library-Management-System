import '../styles/userNavbar.css'
import { Link } from 'react-router-dom';
const UserNavbar = () => {
    return (
        <div className="userNavbar">
            <div className="portal">

                <img height='100px' src="/images/programmer.png" alt="" />
            </div>
            <div className="lin">
                <ul>
                    <Link to="/user/">Home</Link>
                    <Link to="/user/book-list">Books List</Link>
                    <Link to="/">Logout</Link>
                </ul>
            </div>
        </div>
    );
}

export default UserNavbar;