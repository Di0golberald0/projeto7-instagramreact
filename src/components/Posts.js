export default function Posts() {

  const posts = [
    {
      "usuarioImg" : "assets/img/meowed.svg",
      "usuarioName" : "meowed",
      "conteudoImg" : "assets/img/gato-telefone.svg",
      "curtidasImg" : "assets/img/respondeai.svg",
      "curtidasName" : "respondeai",
      "curtidasNumero" : "outras 101.523 pessoas",
    },
    {
      "usuarioImg" : "assets/img/barked.svg",
      "usuarioName" : "barked",
      "conteudoImg" : "assets/img/dog.svg",
      "curtidasImg" : "assets/img/adorable_animals.svg",
      "curtidasName" : "adorable_animals",
      "curtidasImg" : "outras 99.159 pessoas",
    }
  ]
  return (
    <div class="posts">
      {posts.map(post =>         
    <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={post.usuarioImg} />
            {post.usuarioName}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
        
        <div class="conteudo">
          <img src={post.conteudoImg} />
        </div>
        
        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>
          
          <div class="curtidas">
            <img src={post.curtidasImg} />
            <div class="texto">
              Curtido por <strong>{post.curtidasName}</strong> e <strong>{post.curtidasNumero}</strong>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
}