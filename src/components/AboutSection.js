import React from "react";
import home1 from "../image/home1.png";
import { About, Description, Hide, Image } from "../styles";

//Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  const container = {
    hidden: {
      x: 100,
    },
    show: {
      x: 0,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <About>
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              Your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact US</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

//styled components

export default AboutSection;
