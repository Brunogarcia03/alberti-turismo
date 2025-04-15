import { motion, AnimatePresence } from "motion/react";
import Heading from "../ui/Heading";

import Hero from "../components/Hero";
import Lugares from "../components/Lugares";
import Mapa from "../components/Mapa";
import Museos from "../components/Museos";
import Salamone from "../components/Salamone";
import Galeria from "../components/Galeria";

import {
  PiBehanceLogo,
  PiFacebookLogo,
  PiPinterestLogo,
  PiTiktokLogo,
  PiWhatsappLogo,
} from "react-icons/pi";
import Footer from "../components/Footer";

function Main() {
  return (
    <>
      <main className="bg-white relative z-[10]">
        <Hero />
        <Salamone />
        <Galeria />
        <div className="flex items-center justify-center text-4xl lg:text-6xl mx-auto text-center font-bold text-[#00ACD3] mt-24">
          <Heading title="Lugares" />
          <motion.span
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: 0.3,
              ease: "easeInOut",
            }}
            className="ml-2"
          >
            de
          </motion.span>
          <h1 className="ml-2">
            {"Alberti".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.4 + index * 0.1,
                  ease: "easeInOut",
                }}
                className="inline-block text-[#98217E]"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>
        <Museos />
        <Lugares />
        <Mapa />
      </main>
      <Footer />
    </>
  );
}

export default Main;
