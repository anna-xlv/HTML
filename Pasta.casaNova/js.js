function mostrarImagem() {
  const tela = document.getElementById("tela-imagem");


  tela.style.display = "flex";


  setTimeout(() => {
    tela.style.display = "none";
  }, 10);
}