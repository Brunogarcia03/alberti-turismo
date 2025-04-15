import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const images = [
  "/photos/1.jpeg",
  "/photos/2.jpg",
  "/photos/3.jpg",
  "/photos/4.jpg",
  "/photos/5.jpg",
  "/photos/6.jpg",
  "/photos/7.png",
  "/photos/8.jpeg",
  "/photos/9.jpg",
  "/photos/10.jpg",
  "/photos/11.jpeg",
  "/photos/12.jpeg",
  "/photos/13.jpeg",
  "/photos/14.jpg",
  "/photos/15.jpg",
];

function Carousel() {
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
        {images.map((itemData, index) => {
          return (
            <motion.div key={index} className="min-w-[20rem] min-h-[25rem] p-4">
              <img
                src={itemData}
                width={400}
                height={400}
                alt="img"
                className="w-full h-full object-cover pointer-events-none rounded-2xl"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
export default Carousel;
