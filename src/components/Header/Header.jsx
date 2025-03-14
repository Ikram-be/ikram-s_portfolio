import React, { useState, useEffect } from 'react';
import './Header.css';
import { motion, AnimatePresence } from 'framer-motion'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {

        if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
          
          const sections = document.querySelectorAll('section');
          const navLinks = document.querySelectorAll('header nav a');
        
          sections.forEach((sec) => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');
    
            if (top >= offset && top < offset + height) {
              navLinks.forEach((link) => {
                link.classList.remove('active');
              });
              const activeNavLink = document.querySelector(`header nav a[href*=${id}]`);
              if (activeNavLink) {
                activeNavLink.classList.add('active');
                setActiveLink(id);
              }
            }
          });
        };
        
        window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const logoVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  const navItemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (custom) => ({
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.3, delay: 0.3 + (custom * 0.1) }
    }),
    hover: { y: -5, transition: { duration: 0.2 } }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } }
  };



  return (
    <motion.header className={`header ${scrolled ? 'sticky' : ''}`}
      variants={headerVariants}
      initial="initial"
      animate="animate">

      <motion.a href="#home" className="logo" variants={logoVariants}
        initial="initial"
        animate="animate"
        whileHover="hover">Ikram <span>Belhimer</span></motion.a>

      <motion.i className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        whileTap={{ scale: 0.9 }}></motion.i>

       <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
            <motion.a 
              key={item} 
              href={`#${item}`} 
              className={activeLink === item ? 'active' : ''}
              variants={navItemVariants}
              custom={index}
              initial="initial"
              animate="animate"
              whileHover="hover" >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </nav>

      {/* Menu mobile avec animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed">
            {/* Contenu du menu mobile si nécessaire */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;