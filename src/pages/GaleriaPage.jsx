import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { galleryImages } from "../utils/ListAlberti";

function GaleriaPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Ir al top al cargar
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const columns = [[], [], [], []];

  galleryImages.forEach((img, index) => {
    columns[index % 4].push(img);
  });

  return (
    <>
      <section className="md:min-h-screen bg-white relative z-[10] flex flex-col items-center pt-36 pb-28">
        <nav
          onClick={() => navigate("/")}
          className="absolute top-0 left-1/2 -translate-x-1/2 border-x border-l border-b border-black flex items-center justify-center gap-x-3"
        >
          <div className="w-24 h-24 mx-auto overflow-hidden cursor-pointer">
            <img
              src="/Logo.jpeg"
              alt="Logo Alberti"
              className="w-full h-full mx-auto transition-all duration-300 hover:scale-110"
            />
          </div>
          <h1
            onClick={() => navigate("/")}
            className="flex items-center text-4xl cursor-pointer font-bold text-[#00ACD3] h-24 text-center md:pr-3"
          >
            Alberti<span className="text-[#98217E]">Turismo</span>
          </h1>
        </nav>

        <h1 className="text-5xl font-bold text-[#98217E]">
          {"Galería de fotos".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full mx-auto mt-16 px-8 md:5">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="grid gap-4">
              {col.map((img, imgIndex) => (
                <motion.div
                  initial={{
                    scale: 0.5,
                    opacity: 0.2,
                    rotate: imgIndex % 2 ? -5 : 5,
                  }}
                  whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    damping: 15,
                    stiffness: 200,
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                  key={imgIndex}
                >
                  <img
                    src={`/photos${img}`}
                    alt={`Imagen n°${imgIndex}`}
                    className="h-full w-full rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <div className="sticky bottom-0 h-24 bg-white">
        <Footer bg="#98217E" />
      </div>
    </>
  );
}

export default GaleriaPage;
