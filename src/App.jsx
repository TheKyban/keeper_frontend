import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import "./styles/App.css"
import Main from "./components/Main"
import { useDispatch, useSelector } from "react-redux"
import { Toaster } from 'react-hot-toast'

function App() {
  const dispatch = useDispatch()

  const { isAuthenticated } = useSelector(state => state.auth)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isAuthenticated ? <Main /> : <Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={isAuthenticated ? <Main /> : <Login />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App

export const url = "https://keeper-backend-mzol.onrender.com"