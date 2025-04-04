import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, projects }) {
  const { active, index } = modal;

  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container

    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    //Move cursor

    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    //Move cursor label

    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;

      xMoveContainer(pageX);

      yMoveContainer(pageY);

      xMoveCursor(pageX);

      yMoveCursor(pageY);

      xMoveCursorLabel(pageX);

      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="modalContainer h-[300px] w-[300px] rounded-lg absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="modalSlider h-full w-full absolute transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                key={`modal_${index}`}
                style={{ backgroundColor: color }}
                className="modal h-[300px] w-[300px] flex items-center justify-center rounded-lg"
              >
                <img
                  src={`/salamone/${src}`}
                  width={250}
                  height={250}
                  alt="image"
                  className="object-cover h-[300px] w-[300px]"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className="cursor w-16 h-16 rounded-full bg-[#98217E]/60 text-white absolute z-10 flex items-center justify-center text-sm font-light pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>

      <motion.div
        ref={cursorLabel}
        className="cursorLabel w-16 h-16 rounded-full text-white font-thin italic absolute z-10 flex items-center justify-center text-md pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        Ver
      </motion.div>
    </>
  );
}
