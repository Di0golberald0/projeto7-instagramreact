import { useState } from "react";

export default function Post( { usuarioImg, usuarioName, conteudoImg, curtidasImg, curtidasName, curtidasNumero } ) {

  const [like, setLike] = useState("heart-outline");

  function likebuttom() {
    if(like === "heart-outline") { 
      setLike("heart")
    }
    else{
      setLike("heart-outline")
    }
  }

  function likepost() {
    if(like === "heart-outline") { 
      setLike("heart")
    }
  }

  return (        
    <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={usuarioImg} />
            {usuarioName}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
        
        <div onClick={likepost} class="conteudo">
          <img src={conteudoImg} />
        </div>
        
        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name={like} onClick={likebuttom} className={(like === "heart") ? 'selecionado' : ''}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>
          
          <div class="curtidas">
            <img src={curtidasImg} />
            <div class="texto">
              Curtido por <strong>{curtidasName}</strong> e <strong>{curtidasNumero}</strong>
            </div>
          </div>
        </div>
    </div>
  );
}