import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer class="footer">
            <p>Made with   <FontAwesomeIcon icon={faHeart} style={{ color: 'red', fontSize: '24px' }} /> by Ikram</p>

  
            <p class="copyright">&copy; Ikram Belhimer | All Rights Reserved</p>
         </footer>

    );
};
export default Footer;