import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [sticky,setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll',() =>{
      window.scrollY > 350 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className = {`container ${sticky? 'dark-nav': ''}`}>
        <ul className='navbar-brand'>
            <li>AMEXLearn</li>
        </ul>
        <ul className='navbar-links'>
            <li>Learn</li>
            <li>Get In Touch</li>
            <li>Contribute</li>
        </ul>
        <ul className='navbar-auth'>
            <li><button className='btn'>Login/Sign Up</button></li>
        </ul>

    </nav>
  );
};

export default Navbar;
