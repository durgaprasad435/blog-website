import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/Register"
import Login from '../pages/Login';
import Blogs from '../pages/Blogs';
function AllRoutes() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Register/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default AllRoutes;