import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
import Landing from "./pages/landingPage/Landing";
import Blog from "./pages/blog/Blog"
import Profile from "./pages/profile/profile"
import Navbar from "./pages/landingPage/Navbar";
// import Consultation from './pages/consultations/consultation'
import Findhelp from './pages/findHelp/findhelp';


function App() {
  const { authUser } = useAuthContext();
  const location = useLocation();

  return (
    <div className={`h-screen`}>
      {location.pathname !== '/login' && location.pathname !== '/profile' && location.pathname !== '/signup' && <Navbar className="fixed top-0 left-0 w-screen z-50 shadow-md"/>}

      <div className=''>
        <Routes>

          <Route path='/' element={authUser ? <Navigate to="/landing" /> : <Navigate to="/login" />} />
          <Route path='/login' element={authUser ? <Navigate to='/landing' /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to='/landing' /> : <SignUp />} />
          <Route path='/landing' element={authUser ? <Landing /> : <Navigate to="/login" />} />
          <Route path='/home' element={authUser ? <Home /> : <Navigate to="/login" />} />
          <Route path='/blog' element={authUser ? <Blog /> : <Navigate to="/login" />} />
          <Route path='/profile' element={authUser ? <Profile /> : <Navigate to="/login" />} />
          {/* <Route path='/consultation' element={authUser ? <Consultation /> : <Navigate to="/login" />} /> */}
          <Route path='/findhelp' element={authUser ? <Findhelp /> : <Navigate to="/login" />} />
          {/* <Route path="/consultation" element={<Consultation />} /> */}

        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App


{/* <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} /> */}
{/* <Route path='/login' element={<Login />}/> */ }
{/* <Route path='/signup' element={<SignUp />}/> */ }
{/* <Route path='/landing' element={authUser ? <Landing /> : <Navigate to={"/login"} />} /> */ }