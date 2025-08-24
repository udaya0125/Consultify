import React from "react";
import { motion } from "framer-motion";

const ServicesDetails = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.div
        className="relative w-64 h-32 overflow-hidden rounded-2xl bg-gray-800"
      >
        {/* Background content */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-xl">
          Flowing ✨
        </div>

        {/* Flowing gradient layer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/30 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
};

export default ServicesDetails;
