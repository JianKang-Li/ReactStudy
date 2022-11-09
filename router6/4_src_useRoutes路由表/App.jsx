import React from 'react'
import { NavLink, useRoutes } from "react-router-dom"
import routers from './routers'
// import Demo from "./pages/Demo"

export default function App() {
  // 根据路由表生成对应路由
  const element = useRoutes(routers)

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
            <NavLink className='list-group-item' to="/home">Home</NavLink>
            <NavLink className='list-group-item' to="/about">About</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
