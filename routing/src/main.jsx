import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,Route ,createRoutesFromElements} from 'react-router-dom'
import Root from './root.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/github/Github.jsx'
//  const router=createBrowserRouter([
//   {
//      path:"/",
//      element:<Root />,

//      children:[
//       {
//         path:"about",
//         element:<About />,
//       },
//       {
//         path:"",
//         element:<Home />,
//       },
//       {
//         path:"contact",
//         element:<Contact />,
//       },
//      ]

//   },
//  ] )
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github />} />

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
