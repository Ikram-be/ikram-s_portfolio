import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    // Animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const imgVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                duration: 0.8,
                delay: 0.3
            }
        }
    };

    const headingVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="about" id="about">
            <motion.div 
                className="about-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} >
                <motion.h2 
                    className="heading"
                    variants={headingVariants}>
                    About <span>Me</span>
                </motion.h2>
                
                <motion.h3 
                    className="text-animation"
                    variants={textVariants}>
                    <span></span>
                </motion.h3>
                
                <motion.p
                    variants={textVariants}
                    transition={{ delay: 0.2 }}>
                    Hi, I'm Ikram Belhimer, a passionate and driven 1st-year Computer
                    Engineering and Artificial Intelligence student at the National School
                    of Applied Science Safi. I am fascinated by the intersection of
                    hardware and software, and I am eager to explore how technology can
                    solve real-world problems and shape the future.
                </motion.p>
            </motion.div>
            
            <motion.div 
                className="about-img"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={imgVariants}>
                <motion.img 
                    src="iiii.jpg" 
                    whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                    }}
                />
            </motion.div>
        </section>
    );
};
export default About;