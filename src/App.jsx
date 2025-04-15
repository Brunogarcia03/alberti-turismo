import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Galeria from "./pages/GaleriaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
