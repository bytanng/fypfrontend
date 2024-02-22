import React from 'react'
import './footer.css';
import { Link as RouterLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="three-column-footer">
        <div className="footer-column left">
          <a href="https://www.ntu.edu.sg/index" target="_blank" rel="noopener noreferrer">NTU</a> |  <RouterLink to="/about">About Us</RouterLink> | <RouterLink to="/contact">Contact Us</RouterLink> | <RouterLink to="faq">FAQ</RouterLink>
        </div>
        <div className="footer-column center">
        Copyright &#169; 2024 | All Rights Reserved.
        </div>
        <div className="footer-column right">
          Terms & Conditions
        </div>
    </footer>
    )
}

export default Footer;