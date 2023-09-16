import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Home1_About from '../../components/Home1_About';
import Home2_Houses from '../../components/Home2_Houses';

const Home = () => {
  return (
    <>
    <NavBar></NavBar>
    <Home1_About />
    <Home2_Houses/>

    </>
  )
}

export default Home