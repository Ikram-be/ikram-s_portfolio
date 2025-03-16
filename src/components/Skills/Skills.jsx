import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
    // Animation variants
    const headingVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.5, delay: 0.2 }
        }
    };

    const categoryVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.7 }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="skills" id="skills">
            <motion.h2 
                className="heading"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={headingVariants}>
                Skills
            </motion.h2>
            
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={textVariants}>
                Here are some of the technologies I've worked with this year.
            </motion.p>
            
            <motion.div 
                className="skills-category"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={categoryVariants}>
                <motion.h3 className="category-title">Frontend</motion.h3>
                <motion.div 
                    className="skills-container"
                    variants={containerVariants}>
                    <motion.div 
                        className="skill-card"
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"}}>
                            <motion.div 
                                className="skill-icon"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}>
                                <img src="/html5.svg" />
                            </motion.div>
                            <h3>HTML</h3>
                    </motion.div>
                    
                    <motion.div 
                        className="skill-card"
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"}}>
                            <motion.div 
                                className="skill-icon"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}>
                                <img src="/css.svg" />
                            </motion.div>
                            <h3>CSS</h3>
                    </motion.div>
                    
                    <motion.div 
                        className="skill-card"
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <motion.div 
                            className="skill-icon"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src="/js%20(2).svg" width="24" height="24"  />
                        </motion.div>
                        <h3>JavaScript</h3>
                    </motion.div>
                    
                    <motion.div 
                        className="skill-card"
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <motion.div 
                            className="skill-icon"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <i className="bx bxl-react"></i>
                        </motion.div>
                        <h3>React JS</h3>
                    </motion.div>
                </motion.div>
            </motion.div>
            
            {/* Data Skills Section */}
            <motion.div 
                className="skills-category"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={categoryVariants}
            >
                <motion.h3 className="category-title">Data</motion.h3>
                <motion.div 
                    className="skills-container"
                    variants={containerVariants}
                >
                    <motion.div 
                        className="skill-card"
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                        }}>
                        <motion.div 
                            className="skill-icon"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}>
                            <img src="/python.png" width="32" height="32" />
                        </motion.div>
                        <h3>Python</h3>
                    </motion.div>
                    
                    <motion.div 
                        className="skill-card"
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <motion.div 
                            className="skill-icon"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src="/mysql-logo-svgrepo-com.svg" width="32" height="32" />
                        </motion.div>
                        <h3>MYSQL</h3>
                    </motion.div>
                </motion.div>
            </motion.div>
            
            <motion.div 
                className="skills-category"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={categoryVariants}
            >
                <motion.h3 className="category-title">Tools</motion.h3>
                <motion.div 
                    className="skills-container"
                    variants={containerVariants}
                >
                    <motion.div 
                        className="skill-card"
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <motion.div 
                            className="skill-icon"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src="/git.svg" width="32" height="32" />
                        </motion.div>
                        <h3>Git</h3>
                    </motion.div>
                    
                    <motion.div 
                        className="skill-card"
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <motion.div 
                            className="skill-icon"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <i className="bx bxl-github"></i>
                        </motion.div>
                        <h3>GitHub</h3>
                    </motion.div>
                    
                    <motion.div 
                        className="skill-card"
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <motion.div 
                            className="skill-icon"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src="/vscode.svg" />
                        </motion.div>
                        <h3>VS Code</h3>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;