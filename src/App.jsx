import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";

import PlaceTemplate from "./pages/PlaceTemplate";

// Lugares Alberti
import { lugaresDeAlberti } from "./utils/ListAlberti";
import Transition from "./pages/Transition";
import GaleriaPage from "./pages/GaleriaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Transition>
              <Main />
            </Transition>
          }
        />

        <Route
          path="/galeria"
          element={
            <Transition>
              <GaleriaPage />
            </Transition>
          }
        />

        {/* Lugares Alberti */}
        {lugaresDeAlberti.map((item, index) => (
          <Route
            key={index}
            path={`/${item.slug}`}
            element={
              <Transition>
                <PlaceTemplate
                  title={item.titulo}
                  description={item.descripcion}
                  placeImage={item.url}
                  slug={item.slug}
                />
              </Transition>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
