function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substiruir a imagem
  if (html.classList.contains("light")) {
    // se estiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //  se estiver sem ligth mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
