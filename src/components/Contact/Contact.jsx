import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        console.log('Form submitted:', formData);
        
        // For actual form submission to formsubmit.co
        const form = e.target;
        form.submit();
    };

    // Animation variants
    const headingVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.7 }
        }
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.6, delay: 0.2 }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.8,
                delay: 0.3
            }
        }
    };

    const inputVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.5 }
        },
        focus: { 
            scale: 1.01,
            borderColor: "var(--main-color)",
            boxShadow: "0 0 8px rgba(var(--main-color-rgb), 0.4)"
        }
    };

    const socialVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.8
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: { 
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        },
        hover: { 
            scale: 1.2,
            rotate: 5,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section className="contact" id="contact">
            <motion.h2 
                className="heading"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={headingVariants}
            >
                Contact <span>Me</span>
            </motion.h2>
            
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={textVariants}
            >
                If you have any questions or would like to collaborate, feel free to reach out to me. I am always open to new opportunities and connections!!
            </motion.p>
            
            <motion.div 
                className="contact-form"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={formVariants}
            >
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Send Me a Message
                </motion.h3>
                
                <form action="https://formsubmit.co/ikrambelhimer@gmail.com" method="POST" onSubmit={handleSubmit}>
                    <motion.div 
                        className="form-group"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={inputVariants}
                        custom={0}
                    >
                        <label htmlFor="name">Name</label>
                        <motion.input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            whileFocus="focus"
                        />
                    </motion.div>
                    
                    <motion.div 
                        className="form-group"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={inputVariants}
                        custom={1}
                        transition={{ delay: 0.1 }}
                    >
                        <label htmlFor="email">Email</label>
                        <motion.input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            whileFocus="focus"
                        />
                    </motion.div>
                    
                    <motion.div 
                        className="form-group"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={inputVariants}
                        custom={2}
                        transition={{ delay: 0.2 }}
                    >
                        <label htmlFor="message">Message</label>
                        <motion.textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            whileFocus="focus"
                        />
                    </motion.div>
                    
                    <motion.input 
                        type="submit" 
                        value="Send message" 
                        className="btn"
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "transparent",
                            color: "var(--main-color)",
                            border: "2px solid var(--main-color)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    />
                </form>
            </motion.div>
            
            <motion.div 
                className="social"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={socialVariants}
            >
                <motion.a 
                    href="https://www.linkedin.com/in/ikrambelhimer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={iconVariants}
                    whileHover="hover"
                >
                    <i className="bx bxl-linkedin"></i>
                </motion.a>
                
                <motion.a 
                    href="https://github.com/Ikram-be" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={iconVariants}
                    whileHover="hover"
                >
                    <i className="bx bxl-github"></i>
                </motion.a>
                
                <motion.a 
                    href="mailto:ikrambelhimer@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={iconVariants}
                    whileHover="hover"
                >
                    <i className="bx bxl-gmail"></i>
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Contact;