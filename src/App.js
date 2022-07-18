import { useState } from "react";
import Navbar from "./contexts/Navbar";
import Corpo from "./contexts/Corpo";
import FundoMobile from "./contexts/FundoMobile";

export default function App() {

  return (
      <>
      <Navbar />
      <Corpo />
      <FundoMobile />
      </>
  );
}