import { useNavigate } from "react-router-dom";
import { MouseImageTrail } from "../components/ui/MouseImageTrail";
import { FiImage } from "react-icons/fi";

const Galeria = () => {
  const navigate = useNavigate();

  return (
    <section
      onClick={() => navigate("/galeria")}
      className="md:min-h-screen w-full py-16 px-5 sm:px-16 lg:px-36"
    >
      <MouseImageTrail
        renderImageBuffer={80}
        rotationRange={25}
        images={[
          "/photos/1.jpeg",
          "/photos/2.jpg",
          "/photos/3.jpg",
          "/photos/4.jpg",
          "/photos/5.jpg",
          "/photos/6.jpg",
          "/photos/7.png",
          "/photos/8.jpeg",
          "/photos/9.jpg",
          "/photos/10.jpg",
          "/photos/11.jpeg",
          "/photos/12.jpeg",
          "/photos/13.jpeg",
          "/photos/14.jpg",
          "/photos/15.jpg",
        ]}
      >
        <section className="grid h-[80vh] w-full place-content-center bg-[#98217E]/30 rounded-3xl">
          <p className="flex items-center gap-2 text-6xl font-bold uppercase text-black">
            <FiImage />
            <span>Galería</span>
          </p>
        </section>
      </MouseImageTrail>
    </section>
  );
};

export default Galeria;
