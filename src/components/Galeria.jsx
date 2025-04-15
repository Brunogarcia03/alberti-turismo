import { useNavigate } from "react-router-dom";
import { Example } from "../ui/MouseImageTrail";

const Galeria = () => {
  const navigate = useNavigate();

  return (
    <section
      onClick={() => navigate("/galeria")}
      className="md:min-h-screen w-full py-16 px-36"
    >
      <Example />
    </section>
  );
};

export default Galeria;
