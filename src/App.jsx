import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";

import PlaceTemplate from "./ui/PlaceTemplate";

// Lugares Alberti
import { lugaresDeAlberti } from "./utils/ListAlberti";
import Transition from "./pages/Transition";

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
