import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import CocktailsDetails from "./Pages/CocktailsDetails";
import Error from "./Pages/Error";
import Navebar from "./components/Navebar";
export default function App() {
  return (
    <>
      <Navebar />
      <Routes>
        <Route path="/NoumanShafi.github.io/CockTailDB" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktailsdetails/:id" element={<CocktailsDetails/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>





  )

}