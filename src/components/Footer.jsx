import {
  PiBehanceLogo,
  PiFacebookLogo,
  PiPinterestLogo,
  PiTiktokLogo,
  PiWhatsappLogo,
} from "react-icons/pi";

function Footer() {
  return (
    <footer className="py-8 px-6 md:px-20 sticky bottom-0 bg-gray-300 flex flex-col items-center justify-center">
      <p className="text-base md:text-lg text-gray-700 mb-6">
        © {new Date().getFullYear()} Alberti Turismo
      </p>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center justify-center gap-5"></div>

        {/* Redes sociales */}
        <ul className="flex items-center text-2xl border-y border-r border-black">
          {[
            PiBehanceLogo,
            PiFacebookLogo,
            PiTiktokLogo,
            PiWhatsappLogo,
            PiPinterestLogo,
          ].map((Icon, index) => (
            <li
              key={index}
              className="border-l border-black hover:bg-red-500 transition-all duration-300 p-2 text-black"
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
