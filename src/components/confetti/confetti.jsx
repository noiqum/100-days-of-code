import React from "react";

import Confetti from "react-confetti";
import { motion } from "framer-motion";

function ConfettiComponent({ width, height }) {
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 2, ease: "easeIn" } }}
    >
      <Confetti width={300} height={400} />
    </motion.div>
  );
}

export default ConfettiComponent;
