import Post from "./Post";
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
      "curtidasNumero" : "outras 99.159 pessoas",
    }
  ]

  return (
    <div class="posts">
      {posts.map(post =>
        <Post 
        usuarioImg={post.usuarioImg}
        usuarioName={post.usuarioName}
        conteudoImg={post.conteudoImg}
        curtidasImg={post.curtidasImg}
        curtidasName={post.curtidasName}
        curtidasNumero={post.curtidasNumero}
        />)
      }
    </div>
  );
}