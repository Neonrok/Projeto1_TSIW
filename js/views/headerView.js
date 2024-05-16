export function createHeader(){
  const header = document.createElement("header")
  header.innerHTML = `
  <a href="index.html"><img src="./img/LogoTSIW.svg"></a>
  <nav class="navbar">
      <ul class="navbarLinks">
          <li><a href="" class="navLink text-16 text-medium">Aprender</a></li>
          <li><a href="" class="navLink text-16 text-medium">Atividades</a></li>
          <li><a href="" class="navLink text-16 text-medium">Projetos</a></li>
          <li><a href="" class="navLink text-16 text-medium">Testemunhos</a></li>
          <li><a href="" class="navLink text-16 text-medium">Sobre</a></li>
      </ul>
      <a href="" class="button" role="button">Registar</a>
  </nav>`
  const mainContainer = document.getElementById("mainContainer")
  mainContainer.prepend(header) 
}

createHeader()