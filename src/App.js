import Navbar from "./components/Navbar";
import Corpo from "./components/Corpo";
import FundoMobile from "./components/FundoMobile";
import { useState } from "react";

export default function App() {

  const [like, setLike] = useState(false);

  return (
      <>
      <Navbar />
      <Corpo like={like} setLike={setLike} />
      <FundoMobile />
      </>
  );
}