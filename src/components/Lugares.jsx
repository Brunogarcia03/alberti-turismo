import { motion } from "motion/react";
import Heading from "../components/ui/Heading";
import { useNavigate } from "react-router-dom";

const Lugares = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex flex-col lg:flex-row gap-16 items-center lg:items-start justify-center max-w-7xl mx-auto mt-8 pb-24 overflow-hidden">
        <article className="card flex flex-col items-start justify-center max-w-2xl lg:w-[450px]">
          <div className="w-full h-[300px] overflow-hidden rounded-lg cursor-pointer">
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              onClick={() => navigate("parroquia")}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover rounded-lg shadow-md"
              src="/museos/iglesia.jpg"
              alt="Museo Raúl Lozza"
            />
          </div>

          <h1
            onClick={() => navigate("parroquia")}
            className="text-4xl lg:text-5xl font-bold text-[#00ACD3] mt-4 mb-3 hover:translate-x-5 transition-all duration-300 cursor-pointer"
          >
            <Heading title="Parroquia" />
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-700 text-2xl lg:text-3xl"
            >
              Nuestra señora del rosario
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-justify mt-4 text-lg text-gray-700 leading-relaxed"
          >
            Inaugurada el 25 de mayo de 1941, se trata del segundo templo de la
            ciudad, habiéndose construido en el sitio donde se ubicaba el
            primero. El recurso destinado a su construc-ción, proyectada por el
            arquitecto Carlos F. Ancell, provino de donaciones de vecinos y de
            personas vinculadas a Alberti pero que residían en distintos puntos
            del país.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-justify mt-4 text-lg text-gray-700 leading-relaxed"
          >
            La piedra basal había sido colocada el 15 de abril de 1928, después
            de que en enero de ese mismo año se formara una comisión de vecinos
            encabezada por el cura párroco Juan Raspuela y José Vaccarezza, con
            el fin de "dotar a Alberti de un nuevo templo, acorde con el aumento
            de la población y las necesidades parroquiales".
          </motion.p>
        </article>
        <article className="card flex flex-col items-start justify-center max-w-2xl lg:w-[450px]">
          <div className="w-full h-[300px] overflow-hidden rounded-lg cursor-pointer">
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              onClick={() => navigate("hospital")}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
              src="/museos/hospital.jpg"
              alt="Museo Raúl Lozza"
            />
          </div>

          <h1
            onClick={() => navigate("hospital")}
            className="text-4xl lg:text-5xl font-bold text-[#00ACD3] mt-4 mb-3 hover:translate-x-5 transition-all duration-300 cursor-pointer"
          >
            <Heading title="Hospital" />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="ml-2 text-[#98217E]"
            >
              Municipal
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-2xl lg:text-3xl text-gray-700"
            >
              Nuestra Señora de la Merced
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-justify mt-4 text-lg text-gray-700 leading-relaxed"
          >
            Nuestro Hospital fue inaugurado el 24 de septiembre de 1919, sobre
            tierras donadas por el Gobernador Gral. José I. Arias. La obra
            estuvo a cargo del Ing. y Arq. Arturo Prins.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-justify mt-4 text-lg text-gray-700 leading-relaxed"
          >
            El proyecto original no contemplaba el ala derecha actual del
            nosocomio. El mismo fue construído en la década del 20 respetando el
            estilo impuesto por Prins. A partir de entonces comenzó a
            diferenciarse la sala de hombres y mujeres.
          </motion.p>
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-full h-[150px] mt-4 object-cover  rounded-lg shadow-md"
            src="/museos/hospital_viejo.jpg"
            alt="Museo Raúl Lozza Asociación"
          />
        </article>
      </section>
    </>
  );
};

export default Lugares;
