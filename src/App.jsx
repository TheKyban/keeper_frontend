import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import "./styles/App.css"
import Main from "./components/Main"

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/main" element={<Main/>} />
      </Routes>
    </Router>
  )
}

export default App
