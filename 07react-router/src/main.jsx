import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import Github, { githubInfoloader } from './Components/Github/Github.jsx'
import User from './Components/User/User.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children:[
//       {
//         path:"",
//         element: <Home/>,
//       },
//       {
//         path: 'contact',
//         element: <Contact/>,
//       },
//       {
//         path: 'about',
//         element: <About/>,
//       },
//       {
//         path: 'github',
//         element: <Github/>,
//       },
      
//     ]
//   }
// ])
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact/>} />
      <Route 
      path='github' 
      element={<Github/>} 
      loader={githubInfoloader}
      />
      <Route 
      path='user/:userid' 
      element={<User/>}
      
      />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
