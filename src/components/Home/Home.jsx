import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';


const slideFromBottom = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};


const socialIconsAnimation = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2 
    }
  }
};


const slideFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const iconVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

    const Home = () => {
        return (
            <motion.section className="home" id="home" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3}} >
                <motion.div className="home-img" variants={slideFromLeft}>
                    <img src="/iiii.jpg" />
                </motion.div>
            <motion.div className="home-content" variants={slideFromRight}>
                    <motion.h1 initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.3 }}>
                        Hi, I'm <span> Ikram</span>
                    </motion.h1>
                    <motion.h3 className="text-animation" initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.5 }}>
                        I'm a <span> </span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.7 }}>
                        Passionate about building intelligent systems and solving real-world
                        problems. I specialize in machine learning, software development, and
                        embedded systems, creating innovative solutions that combine hardware
                        and software. Explore my work and let’s collaborate!
                    </motion.p>

                    <motion.div className="social-icons" variants={socialIconsAnimation}>
                        <motion.a href="https://www.linkedin.com/in/ikrambelhimer" target="_blank" variants={iconVariant}><i className="bx bxl-linkedin"></i></motion.a>
                        <motion.a href="https://github.com/Ikram-be" target="_blank" variants={iconVariant}><i className="bx bxl-github"></i></motion.a>
                        <motion.a href="mailto:ikrambelhimer@gmail.com" target="_blank"variants={iconVariant} ><i className="bx bxl-gmail"></i></motion.a>
                    </motion.div>

                    <motion.div className="btn-group" 
                    initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}>
                        <a href="resume_ikram.pdf" download="CV_ikram_belhimer" className="btn">Download CV</a>
                    </motion.div>
                </motion.div>
            </motion.section>
        );
    };
export default Home;  