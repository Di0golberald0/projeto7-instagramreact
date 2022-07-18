import Esquerda from "./Esquerda";
import Sidebar from "./Sidebar";

export default function Corpo(like, setLike) {

    return (
        <div class="corpo">
        <Esquerda like={like} setLike={setLike} />
        <Sidebar />
        </div>
    );
  }