import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

import { GiClick } from "react-icons/gi";

import { lugaresDeAlberti } from "../utils/ListAlberti";

function Carousel({ title }) {
  const navigation = useNavigate();
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel]);
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={carousel}
        drag="x"
        whileDrag={{ scale: 0.95 }}
        dragElastic={0.2}
        dragConstraints={{ right: 0, left: -width }}
        dragTransition={{ bounceDamping: 30 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="flex will-change-transform cursor-grab active:cursor-grabbing w-full"
      >
        {lugaresDeAlberti.map((item, index) => {
          if (item.slug !== title) {
            return (
              <motion.div
                key={index}
                className="min-w-[20rem] min-h-[25rem] p-4 group flex flex-col items-center justify-center overflow-hidden relative"
                onDoubleClick={() => navigation(`/${item.slug}`)}
              >
                <img
                  src={item.url}
                  width={400}
                  height={400}
                  alt={item.slug}
                  className="w-full h-full object-cover pointer-events-none rounded-2xl border-2 border-black"
                />
                <GiClick className="absolute scale-0 group-hover:scale-100 transition-all duration-300 text-white text-5xl" />
                <GiClick className="absolute translate-x-2 -translate-y-2 scale-0 group-hover:scale-100 transition-all duration-300 text-[#00ACD3] text-5xl" />
              </motion.div>
            );
          }
          return null;
        })}
      </motion.div>
    </div>
  );
}
export default Carousel;
