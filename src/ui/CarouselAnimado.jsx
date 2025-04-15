import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const images = [
  {
    url: "/salamone/municipalidad.jpg",
    slug: "municipalidad",
  },
  {
    url: "/salamone/parque.jpg",
    slug: "parque",
  },
  {
    url: "/museos/vaccarezza.jpg",
    slug: "vaccarezza",
  },
  {
    url: "/museos/iglesia.jpg",
    slug: "parroquia",
  },
  {
    url: "/museos/hospital.jpg",
    slug: "hospital",
  },
  {
    url: "/salamone/secundaria.jpg",
    slug: "escuela",
  },
  {
    url: "/salamone/monumento.jpg",
    slug: "plaza",
  },
  {
    url: "/salamone/cementerio.jpg",
    slug: "cementerio",
  },
  {
    url: "/museos/museo_lozza.jpg",
    slug: "museo",
  },
  {
    url: "/photos/9.jpg",
    slug: "estacion",
  },
];

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
        {images.map((item, index) => {
          if (item.slug !== title) {
            return (
              <motion.div
                key={index}
                className="min-w-[20rem] min-h-[25rem] p-4"
              >
                <img
                  src={item.url}
                  width={400}
                  height={400}
                  alt={item.slug}
                  className="w-full h-full object-cover pointer-events-none rounded-2xl"
                />
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
