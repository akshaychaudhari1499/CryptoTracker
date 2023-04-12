import React from "react";
import "./styles.css";
import Button from "../../Common/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";
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
          Track crypto thorugh a public API in real time . Visit the dashboard
          to do so.
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Button text="Dashboard" onClick={()=>window.location='/dashboard'}/>
          <Button text="Share" outlined={true}  />
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
