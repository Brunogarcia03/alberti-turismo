import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import Main from "./pages/Main";
import Galeria from "./pages/GaleriaPage";

import PlaceTemplate from "./ui/PlaceTemplate";

// Lugares Alberti
import { lugaresDeAlberti } from "./utils/ListAlberti";

function App() {
  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/galeria" element={<Galeria />} />

          {/* Lugares Alberti */}
          {lugaresDeAlberti.map((item, index) => (
            <Route
              key={index}
              path={`/${item.slug}`}
              element={
                <PlaceTemplate
                  title={item.titulo}
                  description={item.descripcion}
                  placeImage={item.url}
                  slug={item.slug}
                />
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
