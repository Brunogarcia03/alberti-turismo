import { Instagram, Mail, Phone, MapPin, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="py-10 px-6 md:px-20 w-full lg:sticky bottom-0 z-[-1]">
      <div className="container mx-auto grid md:grid-cols-3 gap-10">
        {/* Sección Oficina de Turismo */}
        <div className="flex flex-col sm:flex-row sm:items-center items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#98217E]">
              OFICINA DE TURISMO:
            </h2>
            <p className="flex items-center gap-2">
              <MapPin size={18} /> Av. Vaccarezza 181, Alberti
            </p>
            <p>Pcia. de Buenos Aires, Argentina</p>
            <p className="flex items-center gap-2">
              <Phone size={18} /> +54 9 2346-593686
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} /> +54 9 11 6405-1392
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} /> turismo@alberti.gov.ar
            </p>
            <div className="flex gap-3 mt-3">
              <Instagram
                size={24}
                className="text-gray-700 hover:text-[#98217E] cursor-pointer"
              />
              <Facebook
                size={24}
                className="text-gray-700 hover:text-[#98217E] cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col my-3 md:hidden">
            <img
              src="/qr-code.png"
              width={120}
              height={120}
              alt="QR Code Turismo Alberti"
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-[#98217E] font-semibold text-center">
              ¡Conócenos!
            </p>
          </div>
        </div>

        {/* Sección de Teléfonos Útiles */}
        <div>
          <h2 className="text-xl font-bold text-[#00ACD3]">TELÉFONOS ÚTILES</h2>
          <p>
            🏥 <strong>Hospital Municipal:</strong> +54 2346 - 470142
          </p>
          <p>
            🚔 <strong>Policía:</strong> 101
          </p>
          <p>
            🚒 <strong>Bomberos:</strong> 100
          </p>
          <p>
            🚑 <strong>SAME:</strong> 107
          </p>
        </div>

        {/*  Sección Logos */}
        <div className="flex items-center justify-center gap-3 overflow-hidden">
          <img className="w-1/3 h-20 object-contain" src="Logo.jpeg" />
          <img className="w-1/3 h-20 object-contain" src="muni_logo.jpg" />
          <img
            className="w-1/3 h-20 object-contain"
            src="logo-punto-digital.png"
          />
        </div>
      </div>

      {/* Línea divisoria */}
      <hr className="my-6 border-gray-300" />

      {/* Sección Hoteles */}
      <div className="container mx-auto">
        <h2 className="text-xl font-bold text-[#00ACD3]">HOTELES EN ALBERTI</h2>
        <div className="mt-3 grid md:grid-cols-3 gap-5">
          <div>
            <h3 className="font-semibold">AMARILIS HOTEL BOUTIQUE</h3>
            <p>Av. Pte. Juan Domingo Perón 53</p>
            <p>📞 11 - 53269007</p>
            <p className="flex items-center gap-2 hover:text-[#98217E]">
              <Instagram size={16} /> hotel.amarilis
            </p>
          </div>
          <div>
            <h3 className="font-semibold">SUEÑOS HOTEL</h3>
            <p>San Martín 146</p>
            <p>📞 2346 - 595288</p>
            <p className="flex items-center gap-2 hover:text-[#98217E]">
              <Instagram size={16} /> hotel_suenos_
            </p>
          </div>
          <div>
            <h3 className="font-semibold">HOTEL PETIT</h3>
            <p>Hipólito Yrigoyen 325</p>
            <p>📞 2346 - 599402</p>
            <p className="flex items-center gap-2 hover:text-[#98217E]">
              <Instagram size={16} /> hotelpetitalberti
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
