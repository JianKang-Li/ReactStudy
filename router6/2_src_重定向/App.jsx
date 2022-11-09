import React from 'react'
import { NavLink, Route, Routes, Navigate } from "react-router-dom"
import About from './pages/About'
import Home from './pages/Home'
// import Demo from "./pages/Demo"

export default function App() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 原生html中靠a跳转 */}
            {/* <a className="list-group-item" href="./about.html">About</a>
          <a className="list-group-item active" href="./home.html">Home</a> */}
            <NavLink className="list-group-item" to="/home">Home</NavLink>
            <NavLink className="list-group-item" to="/about">About</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <Routes>
                <Route path="/about" element={<About />}></Route>
                {/* <Route path="/about" element={<Demo />}></Route> */}
                <Route path="/home" element={<Home />}></Route>
                <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
