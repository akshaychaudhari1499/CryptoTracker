import React, { useState } from "react";
import "./styles.css";
import Button from "../../Common/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function MainComponent() {
  
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-heading"
          initial={{ opacity: 0.3, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track
        </motion.h1>
        <motion.h1
          className="track-heading"
          initial={{ opacity: 0.3, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Crypto
        </motion.h1>
        <motion.h1
          className="realtime-heading"
          initial={{ opacity: 0.1, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Track crypto through a public API in real time . Visit the dashboard !
          
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
           <Link to='/dashboard'><Button text='Dashboard'/></Link>
           <Link to='/'><Button text="Share" outlined={true}  /></Link>
        </motion.div>
      </div>
      <div className="phone-component">
        <motion.img
          src={iphone}
          alt="iphone"
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1.2,
            repeat: Infinity,
          }}
        />
        <img src={gradient} alt="gradient" className="gradient" />
      </div>
    </div>
  );
}

export default MainComponent;
