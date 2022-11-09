import { Navigate } from "react-router-dom"
import About from "../pages/About"
import Home from "../pages/Home"

const element = [
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/home',
    element: <Home></Home>
  }, {
    path: "/",
    element: <Navigate to="/home"></Navigate>
  }
]

export default element