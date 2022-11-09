import { Navigate } from "react-router-dom"
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"

const element = [
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/home',
    element: <Home></Home>,
    children: [
      {
        path: 'news',
        element: <News></News>
      },
      {
        path: "message",
        element: <Message></Message>
      }
    ]
  }, {
    path: "/",
    element: <Navigate to="/home"></Navigate>
  }
]

export default element