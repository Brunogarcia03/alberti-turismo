import React from "react";
import { Route } from "react-router-dom";
import Municipalidad from "../pages/Municipalidad";

function RoutesAlb() {
  return (
    <>
      <Route path="/municipalidad" element={<Municipalidad />} />
    </>
  );
}

export default RoutesAlb;
