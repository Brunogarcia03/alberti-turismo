import { motion } from "framer-motion";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Heading from "../ui/Heading";

function Mapa() {
  return (
    <section className="md:min-h-screen overflow-x-hidden w-full py-16 bg-white">
      {/* Título animado */}
      <div className="flex items-center justify-center text-4xl lg:text-6xl mx-auto text-center font-bold text-[#00ACD3] mb-10">
        <Heading title="Mapa" />
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

      {/* Imagen con Zoom */}
      <div className="flex items-center justify-center max-w-5xl rounded-lg mx-auto text-center">
        <Zoom zoomMargin={40} transitionDuration={300}>
          <img
            className="md:h-[80vh] object-cover rounded-lg zoom-image"
            src="/Mapa_Alberti.jpg"
            alt="Mapa Alberti"
          />
        </Zoom>
      </div>

      {/* Estilos personalizados */}
      <style jsx global>{`
        .react-medium-zoom-overlay {
          background: rgba(0, 0, 0, 0.8) !important;
        }
        .zoom-image {
          transform-origin: center center;
          transition: transform 0.3s ease-in-out;
        }
        .react-medium-zoom-image--zoomed {
          transform: scale(3.5) !important; /* Aumenta el zoom */
        }
      `}</style>
    </section>
  );
}

export default Mapa;
