
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import AdminLgin from './components/adminLogin';
import UserLogin from './components/userLogin';
import AdminHomePage from './components/adminHomePage';
import UserHomePage from './components/userHomePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/admin-login' element={<AdminLgin/>}/>
          <Route path='/user-login' element={<UserLogin/>}/>
          <Route path='/admin/*' element={<AdminHomePage/>}/>
          <Route path='/user/*' element={<UserHomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
