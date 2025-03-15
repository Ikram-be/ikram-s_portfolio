import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer className="footer">
            <p>Made with  <i className='bx bxs-heart' width="14" ></i> by Ikram</p>

  
            <p className="copyright">&copy; Ikram Belhimer | All Rights Reserved</p>
         </footer>

    );
};
export default Footer;