import React from "react";
import { motion } from "motion/react";

export const expand = {
  initial: {
    top: 0,
  },
  enter: (i) => ({
    top: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: "0", top: "0" },
  }),
  exit: (i) => ({
    height: "100vh",
    transition: {
      duration: 0.6,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const opacity = {
  initial: {
    opacity: 0.5,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5,
  },
};

export default function Layout({ children, backgroundColor = "#98217E" }) {
  const anim = (variants, custom = null) => ({
    initial: "initial",
    animate: "enter",
    exit: "exit",
    custom,
    variants,
  });

  const nbOfColumns = 5;

  return (
    <div className="relative w-full h-full" style={{ backgroundColor }}>
      {/* Background negro fijo */}
      <motion.div
        {...anim(opacity)}
        className="fixed top-0 left-0 w-full h-screen bg-[#98217E] pointer-events-none z-[1000]"
      />

      {/* Contenedor de las columnas que expanden */}
      <div className="fixed top-0 left-0 w-screen h-screen flex pointer-events-none z-[2000]">
        {[...Array(nbOfColumns)].map((_, i) => (
          <motion.div
            key={i}
            {...anim(expand, nbOfColumns - i)}
            className="relative w-full h-full bg-[#98217E]"
          />
        ))}
      </div>
      {children}
    </div>
  );
}
