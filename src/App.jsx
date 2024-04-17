import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthContextProvider from './contexts/AuthContext';
import Home from './components/Home'
import LinkedinAuth from "./components/LinkedinAuth"
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {


  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LinkedinAuth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App