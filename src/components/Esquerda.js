import Stories from "./Stories";
import Posts from "./Posts";

export default function Esquerda(like, setLike) {

    return (
        <div class="esquerda">
        <Stories />
        <Posts like={like} setLike={setLike} />
        </div>
    );
  }