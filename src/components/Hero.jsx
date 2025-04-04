import { motion } from "motion/react";
import { Fragment } from "react";

import Imagen_1 from "/photos/1.jpeg";
import Imagen_2 from "/photos/2.jpg";
import Imagen_3 from "/photos/3.jpg";
import Imagen_4 from "/photos/4.jpg";
import Imagen_5 from "/photos/5.jpg";
import Imagen_6 from "/photos/6.jpg";
import Imagen_7 from "/photos/7.png";
import Imagen_8 from "/photos/8.jpeg";
import Imagen_9 from "/photos/9.jpg";
import Imagen_10 from "/photos/10.jpg";
import Imagen_11 from "/photos/11.jpeg";
import Imagen_12 from "/photos/12.jpeg";
import Imagen_13 from "/photos/13.jpeg";
import Imagen_14 from "/photos/14.jpg";
import Imagen_15 from "/photos/15.jpg";

const imagesList = [
  Imagen_1,
  Imagen_2,
  Imagen_3,
  Imagen_4,
  Imagen_5,
  Imagen_6,
  Imagen_7,
  Imagen_8,
  Imagen_9,
  Imagen_10,
  Imagen_11,
  Imagen_12,
  Imagen_13,
  Imagen_14,
  Imagen_15,
];

function shuffleImages(images) {
  return images
    .map((image) => ({ image, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ image }) => image);
}

function Hero() {
  const shuffledImages = shuffleImages(imagesList);

  return (
    <section className="flex flex-wrap items-center justify-center h-screen">
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <nav className="flex px-4 justify-center md:justify-between items-center">
            <div className="text-4xl font-bold text-[#00ACD3]">
              Alberti<span className="text-[#98217E]">Turismo</span>
            </div>
            <div className="hidden md:block">
              <img src={"/Logo.jpeg"} alt="Logo" className="size-24" />
            </div>
          </nav>
          <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-[#00ACD3]">
                Descubrí el encanto de{" "}
                <span className="text-[#98217E] border-b-8 border-[#98217E]">
                  Alberti
                </span>
              </h1>
              <p className="text-xl my-8 text-[#67666a]">
                Alberti, un rincón de Buenos Aires lleno de historia, naturaleza
                y calidez. Vení a explorar nuestras tradiciones y paisajes
                inolvidables.
              </p>
              <button className="bg-[#98217E] hover:scale-105 text-white text-2xl font-medium px-6 py-3 rounded-lg shadow-lg transition duration-300">
                Conocé más
              </button>
            </div>
          </header>
        </div>
      </div>
      <div className="w-full object-cover hidden sm:block sm:h-screen sm:w-4/12 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_15%,white_85%,transparent)]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            class="grid gap-4"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {shuffledImages.map((image, index) => (
                  <img
                    key={index}
                    className="h-auto w-full object-cover rounded-lg shadow-md"
                    src={image}
                    alt={`Imagen ${index + 1}`}
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
          <motion.div
            initial={{ y: "-50%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            class="hidden md:grid gap-4"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {shuffledImages.map((image, index) => (
                  <img
                    key={index}
                    className="h-auto w-full object-cover rounded-lg shadow-md"
                    src={image}
                    alt={`Imagen ${index + 1}`}
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="hidden lg:grid gap-4"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {shuffledImages.map((image, index) => (
                  <img
                    key={index}
                    className="h-auto w-full object-cover rounded-lg shadow-md"
                    src={image}
                    alt={`Imagen ${index + 1}`}
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
