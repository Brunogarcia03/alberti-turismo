import { AnimatePresence, motion, useMotionValue } from "motion/react";
import React, { Fragment, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/ui/Stairs";

export default function Transition({ children }) {
  const location = useLocation();

  const anim = (variants, custom = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  return (
    <AnimatePresence mode="wait">
      <Fragment key={location.pathname}>
        <Layout>{children}</Layout>
      </Fragment>
    </AnimatePresence>
  );
}
