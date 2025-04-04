import { motion } from "framer-motion";

function Heading({ title = "Prueba", delayAnim = 0 }) {
  return (
    <>
      {title.split("").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: delayAnim + index * 0.1,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

export default Heading;
