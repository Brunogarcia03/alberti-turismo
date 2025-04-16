import { useState } from "react";
import { motion } from "motion/react";
import Modal from "../components/ui/Modal";
import Heading from "../components/ui/Heading";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Parque Municipal",
    slug: "parque",
    subtitle: "Final Av. Vaccarezza",
    src: "parque.jpg",
    color: "#000000",
  },
  {
    title: "Cementerio Municipal",
    slug: "cementerio",
    subtitle: "Final Av. Libertador Gral. San Martin",
    src: "cementerio.jpg",
    color: "#EFE8D3",
  },
  {
    title: "Monumento a la bandera",
    slug: "plaza",
    subtitle: "Plaza Gral. Arias",
    src: "monumento.jpg",
    color: "#8C8C8C",
  },
  {
    title: "Palacio Municipal",
    slug: "municipalidad",
    subtitle: "Alem y 9 de Julio",
    src: "municipalidad.jpg",
    color: "#706D63",
  },
  {
    title: "Escuela secundaria n°2 Pablo Pizzurno",
    slug: "secundaria",
    subtitle: "Fachada",
    src: "secundaria.jpg",
    color: "#EFE8D3",
  },
];

const Salamone = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const navigate = useNavigate();

  return (
    <section className="flex flex-col pt-20 items-center justify-center">
      <div className="flex text-4xl lg:text-6xl font-bold text-[#00ACD3] mb-5">
        <Heading title="Circuito" />
        <h1 className="ml-2">
          {"Salamone".split("").map((word, index) => (
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
              {word}
            </motion.span>
          ))}
        </h1>
      </div>
      <div className="w-full flex flex-col items-center justify-center overflow-x-clip">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onClick={() => navigate(`/${project.slug}`)}
              onMouseEnter={() => setModal({ active: true, index })}
              onMouseLeave={() => setModal({ active: false, index })}
              className="flex w-full justify-between items-center px-[5%] md:px-20 py-8 border-t border-[#98217E] cursor-pointer transition-all duration-200 hover:opacity-50 group"
            >
              <div className="max-w-4xl mx-auto flex w-full justify-between items-center">
                <h2 className="text-3xl m-0 font-semibold text-[#00ACD3] transition-all duration-[0.4s] group-hover:-translate-x-[10px]">
                  {project.title}
                </h2>
                <p className="transition-all duration-[0.4s] font-light group-hover:translate-x-[10px]">
                  {project.subtitle}
                </p>
              </div>
            </div>
          );
        })}

        <Modal modal={modal} projects={projects} />
      </div>
    </section>
  );
};

export default Salamone;
