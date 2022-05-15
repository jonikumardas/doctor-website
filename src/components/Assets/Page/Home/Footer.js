import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-white text-neutral-content lg:justify-around ">
  <div>
    <span className="footer-title">Services</span> 
    <Link to='/' className="link link-hover">Emergency Checkup</Link>
    <Link to='/' className="link link-hover">Monthly Checkup</Link>
    <Link to='/' className="link link-hover">Weekly Checkup</Link>
    <Link to='/' className="link link-hover">Deep Checkup</Link>
  </div> 
  <div>
    <span className="footer-title">ORAL HEALTH</span> 
    <Link to='/' className="link link-hover">Fluoride Treatment</Link>
    <Link to='/' className="link link-hover">Cavity Filling</Link>
    <Link to='/' className="link link-hover">Teath Whitening</Link>
  </div> 
  <div>
    <span className="footer-title">OUR ADDRESS</span> 
    <Link to='/' className="link link-hover">New York - 101010 Hudson</Link>
    
    </div>
            
            </footer>
            <div>
            <p className='text-center text-black'>Copyright © 2022 - All right reserved</p>
            </div>
            </div>
       
    );
};

export default Footer;