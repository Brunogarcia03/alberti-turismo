import { motion } from "framer-motion";
import Heading from "../ui/Heading";

function Museos() {
  return (
    <section className="flex flex-col lg:flex-row gap-16 items-center lg:items-start justify-center max-w-7xl mx-auto py-24 overflow-hidden">
      {/* Museo Raúl Lozza */}
      <div className="flex flex-col items-start justify-center max-w-2xl lg:w-[450px]">
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-[300px] object-cover rounded-lg shadow-md"
          src="/museos/raul_lozza.jpg"
          alt="Museo Raúl Lozza"
        />
        <h1 className="text-4xl lg:text-5xl font-bold text-[#00ACD3] mt-4 mb-3">
          <Heading title="Museo" />
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#98217E] border-b-8 border-[#98217E]"
          >
            "Raul Lozza"
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-justify mt-4 text-lg text-gray-700 leading-relaxed"
        >
          El Museo de Arte Contemporáneo Raúl Lozza alberga la mayor colección
          de obras de este icónico artista argentino, cofundador del Grupo de
          Arte Concreto Invención. Sus salas exhiben piezas representativas que
          han alcanzado renombre internacional.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-justify mt-4 text-lg text-gray-700 leading-relaxed"
        >
          Desde su inauguración en 2003, el museo se ha consolidado como un faro
          cultural de la región, promoviendo el arte contemporáneo mediante
          muestras de artistas emergentes y consolidados, tanto locales como
          nacionales.
        </motion.p>
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full h-[150px] mt-4 object-cover rounded-lg shadow-md"
          src="/museos/museo_lozza.jpg"
          alt="Museo Raúl Lozza Asociación"
        />
      </div>

      {/* Casa Histórica El Molino */}
      <div className="flex flex-col items-start justify-center max-w-2xl lg:w-[450px]">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-[300px] object-cover rounded-lg shadow-md"
          src="/museos/vaccarezza.jpg"
          alt="Casa Histórica El Molino"
        />
        <h1 className="text-4xl lg:text-5xl font-bold text-[#00ACD3] mt-4 mb-3">
          <Heading title="Casa" /> <Heading title="Histórica" delayAnim={0.4} />
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#98217E] border-b-8 border-[#98217E]"
          >
            "El Molino"
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-justify mt-4 text-lg text-gray-700 leading-relaxed"
        >
          La casa de Don Andrés Vaccarezza, erigida en 1871, es el último
          vestigio de los tiempos fundacionales de Alberti. Hoy alberga
          documentos, objetos y recuerdos que evocan la vida de su fundador y
          los primeros habitantes del distrito.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-justify mt-4 text-lg text-gray-700 leading-relaxed"
        >
          Declarado Monumento Histórico Municipal en 1993, el museo ha sido
          restaurado por la familia para preservar su esplendor original,
          convirtiéndose en un hito cultural y turístico de la ciudad.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-justify mt-4 text-lg text-gray-700 leading-relaxed"
        >
          En la actualidad, luego de algunos años de obras y trabajos de
          refacción por parte de la familia, la casa vuelve a lucir su esplendor
          y sigue siendo un atractivo tanto para visitantes como para los
          propios vecinos del distrito.
        </motion.p>
      </div>
    </section>
  );
}

export default Museos;
