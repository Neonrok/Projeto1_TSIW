export function createHeader(){
  const header = document.createElement("header")
  header.innerHTML = `
  <header class="header flex items-center w-100 px-container">
    <a href="index.html"><img src="./img/LogoTSIW.svg"></a>
    <nav class="flex items-center gap-32">
        <ul class="flex items-center gap-24">
            <li><a href="" class="hover-underline-animation text-16 text-medium">Aprender</a></li>
            <li><a href="" class="hover-underline-animation text-16 text-medium">Atividades</a></li>
            <li><a href="" class="hover-underline-animation text-16 text-medium">Projetos</a></li>
            <li><a href="" class="hover-underline-animation text-16 text-medium">Testemunhos</a></li>
            <li><a href="" class="hover-underline-animation text-16 text-medium">Sobre</a></li>
        </ul>
        <a href="" class="button" role="button">Registar</a>
    </nav>
  </header>`
  const mainContainer = document.getElementById("mainContainer")
  mainContainer.prepend(header) 
}

createHeader()