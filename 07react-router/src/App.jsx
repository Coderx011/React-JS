import React from 'react';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import Github ,{githubInfoloader}from './Components/Github/Github.jsx';
import User from './Components/User/User.jsx';

function App() {
  

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App;
