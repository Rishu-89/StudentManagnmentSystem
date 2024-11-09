
import { Route, Routes } from "react-router-dom"

import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import AdminDashboard from "./pages/AdminDashboard"
import AdminRoutes from "./Routes/AdminRoutes"

import About from "./pages/About"


export default function App() {
  return (
    <>
    <Routes>
    
    {/* <Route path="*" element={<PageNotFound/>}></Route> */}
   
    <Route path="/Register" element={<Register/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>

    <Route path='/dashboard' element={<AdminRoutes/>} >
    <Route path="admin/*" element={<AdminDashboard/>} />
 
    </Route>


    </Routes>
    </>
  )
}