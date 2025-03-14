import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    // Animation variants
    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.5, delay: 0.2 }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.4
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="projects" id="projects">
            <motion.div 
                className="projects-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={titleVariants}>
                <h2 className="titre"> My <span> Projects</span></h2>
            </motion.div>
            
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={textVariants}>
                Discover some of the projects I've worked on.
            </motion.p>
            
            <motion.div 
                className="projects-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}>
                <motion.div 
                    className="project-card"
                    variants={cardVariants}
                    whileHover={{ 
                        y: -10, 
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                        transition: { duration: 0.3 } 
                    }}>
                        <motion.div 
                            className="project-header"
                             whileHover={{ scale: 1.02 }}>
                            <h3>Safari Website</h3>
                            <motion.a 
                                 href="https://github.com/Ikram-be/Project-C" 
                                target="_blank"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ duration: 0.2 }}>
                                <i className="fab fa-github"></i>
                            </motion.a>
                        </motion.div>
                        <p className="project-date">April 2024 - May 2024</p>
                        <p className="project-tech">C Language</p>
                        <p className="project-description">
                            Creation of a Safari Discovery and Booking Website with Special Offers and Discounts for African Safaris. The website allows users to book safaris, view safari details, and access special offers and discounts. The website also includes a user-friendly interface and a secure payment system.
                        </p>
                </motion.div>
                
                <motion.div 
                    className="project-card"
                    variants={cardVariants}
                    whileHover={{ 
                        y: -10, 
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                        transition: { duration: 0.3 }
                    }}>
                    <motion.div 
                        className="project-header"
                        whileHover={{ scale: 1.02 }}>
                        <h3>Personal Website</h3>
                        <motion.a 
                            href="https://github.com/Ikram-be/porfolio" 
                            target="_blank"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ duration: 0.2 }}>
                            <i className="fab fa-github"></i>
                        </motion.a>
                    </motion.div>
                    <p className="project-date">February 2025 - March 2025</p>
                    <p className="project-tech">HTML, CSS, JavaScript, React</p>
                    <p className="project-description">
                        Designed and developed a Personal Portfolio Website using HTML, CSS, JavaScript and React. The site features a responsive design, smooth navigation, and interactive elements, showcasing my ability to create modern and user-friendly web applications. It includes sections for projects, skills, and contact information.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;