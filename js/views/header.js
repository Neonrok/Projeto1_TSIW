export function createHeader(){
  const header = document.createElement("header")
  header.innerHTML = `
  <a href="index.html"><img src="./img/LogoTSIW.svg"></a>
  <nav class="navbar">
      <ul class="navbarLinks">
          <li><a href="" class="navLink">Aprender</a></li>
          <li><a href="" class="navLink">Atividades</a></li>
          <li><a href="" class="navLink">Projetos</a></li>
          <li><a href="" class="navLink">Testemunhos</a></li>
          <li><a href="" class="navLink">Sobre</a></li>
      </ul>
      <a href="" class="button" role="button">Registar</a>
  </nav>`
  const mainContainer = document.getElementById("mainContainer")
  mainContainer.prepend(header) 
}

createHeader()