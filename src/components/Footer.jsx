import {
  PiBehanceLogo,
  PiFacebookLogo,
  PiPinterestLogo,
  PiTiktokLogo,
  PiWhatsappLogo,
} from "react-icons/pi";
import { lugaresDeAlberti } from "../utils/ListAlberti";
import { useNavigate } from "react-router-dom";

function Footer({ bg = "#000" }) {
  const navigate = useNavigate();

  return (
    <footer
      className="py-8 px-6 md:px-20 sticky bottom-0 flex flex-col items-center justify-center"
      style={{ backgroundColor: bg }}
    >
      <p className="text-base md:text-lg text-white mb-6">
        © {new Date().getFullYear()} Alberti Turismo
      </p>
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
        <ul className="flex items-center gap-5">
          <li
            className="hover:scale-110 transition-all duration-300"
            onClick={() => navigate(`/municipalidad`)}
          >
            <span className="capitalize text-white">Municipalidad</span>
          </li>
          <li
            className="hover:scale-110 transition-all duration-300"
            onClick={() => navigate(`/parroquia`)}
          >
            <span className="capitalize text-white">parroquia</span>
          </li>
          <li
            className="hover:scale-110 transition-all duration-300"
            onClick={() => navigate(`/plaza`)}
          >
            <span className="capitalize text-white">plaza</span>
          </li>
          <li
            className="hover:scale-110 transition-all duration-300"
            onClick={() => navigate(`/museo`)}
          >
            <span className="capitalize text-white">museo</span>
          </li>
        </ul>

        {/* Redes sociales */}
        <ul className="flex items-center text-2xl border-y border-r border-white">
          {[
            PiBehanceLogo,
            PiFacebookLogo,
            PiTiktokLogo,
            PiWhatsappLogo,
            PiPinterestLogo,
          ].map((Icon, index) => (
            <li
              key={index}
              className="border-l border-white hover:bg-red-500 transition-all duration-300 p-2 text-white"
            >
              <Icon />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
