import { motion } from "framer-motion";
import React, { useState } from "react";
import { fade } from "../animation";
const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <motion.h4 variants={fade} initial="hidden" animate="show" layout>
        {title}
      </motion.h4>
      {toggle ? children : ""}
      <motion.div className="faq-line" layout></motion.div>
    </motion.div>
  );
};

export default Toggle;
