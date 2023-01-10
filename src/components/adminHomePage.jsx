import AdminNavbar from "./adminNavbar";
import { Routes,Route } from "react-router-dom";
import AdminDashBord from "./adminDashbord";
import AddBooks from "./addbooks";
import AddUsers from "./addUsers";
import BooksList from "./booksList";
import UserList from "./userList";
import ReadBooks from "./readBook";
const AdminHomePage = () => {
    return ( 
        <div className="adminHome">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashBord/>}/>
                <Route path="/add-book" element={<AddBooks/>} />
                <Route path="/add-user" element={<AddUsers/>}/>
                <Route path="/book-list" element={<BooksList/>}/>
                <Route path="/user-list" element={<UserList/>}/>
                <Route path="/book-list/:id" element={<ReadBooks/>}/>
            </Routes>
        </div>
     );
}
 
export default AdminHomePage;