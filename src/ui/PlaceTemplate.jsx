import { useEffect } from "react";
import Carousel from "./CarouselAnimado";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const PlaceTemplate = ({ placeImage, title, description, slug }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ir al top al cargar
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <main className="md:min-h-screen bg-white relative z-[10]">
        <nav
          onClick={() => navigate("/")}
          className="absolute top-0 right-0 border-l border-b border-black flex items-center justify-center gap-x-3"
        >
          <div className="w-24 h-24 mx-auto overflow-hidden cursor-pointer">
            <img
              src="/Logo.jpeg"
              alt="Logo ALberti"
              className="w-full h-full mx-auto transition-all duration-300 hover:scale-110"
            />
          </div>
          <h1
            onClick={() => navigate("/")}
            className="flex items-center text-4xl cursor-pointer font-bold text-[#00ACD3] h-24 text-center pr-3"
          >
            Alberti<span className="text-[#98217E]">Turismo</span>
          </h1>
        </nav>
        <section className="py-16 px-24 flex flex-col gap-5 lg:flex-row lg:justify-between ">
          <div className="lg:w-[40%] h-full sticky top-5">
            <img
              src={placeImage || "./salamone/municipalidad.jpg"}
              alt={title || ""}
              className="w-full h-full rounded-xl shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-start mx-auto w-full pt-10">
            <h1 className="text-5xl font-bold text-[#98217E]">
              {title.split(" ").map((word, index) => (
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
            <p className="mt-6 text-2xl text-gray-700 text-justify">
              {description}
            </p>
          </div>
        </section>
      </main>

      <div className="sticky z-[1] bottom-0 bg-[#98217E] shadow-lg py-6">
        <Carousel title={slug} />
      </div>
      <div className="sticky bottom-0 h-24 bg-white">
        <Footer bg="#98217E" />
      </div>
    </>
  );
};

export default PlaceTemplate;
