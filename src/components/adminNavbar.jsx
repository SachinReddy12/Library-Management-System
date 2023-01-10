import { Link } from "react-router-dom";
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
    return ( 
        <div className="navbar">
            <div className="portal">

            <img height='100px' src="/images/profile.png" alt="" />
            </div>
            <div className="lin">
                <ul>
                    <Link to="/admin/">Home</Link>
                    <Link to="/admin/add-book">Add Books</Link>
                    <Link to="/admin/add-user">Add User</Link>
                    <Link to="/admin/book-list">Books List</Link>
                    <Link to="/admin/user-list">User List</Link>
                    <Link to="/">Logout</Link>
                </ul>
            </div>
        </div>
     );
}
 
export default AdminNavbar;