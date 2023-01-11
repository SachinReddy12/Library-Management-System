import { Routes,Route } from "react-router-dom";
import BooksList from "./booksList";
import UserDashbord from "./userDashbord";
import UserNavbar from "./userNavbar";
import ReadBooks from "./readBook";
const UserHomePage = () => {
    return ( 
        <div className="userHomePage">
            <UserNavbar/>
           <Routes>
            <Route path="/" element={<UserDashbord/>}/>
            <Route path="/book-list/" element={<BooksList/>}/>
            <Route path="/book-list/:id" element={<ReadBooks/>}/>
           </Routes>
        </div>
     );
}
 
export default UserHomePage;