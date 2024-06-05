function createHeader(){
  const header = document.createElement("header")
  header.innerHTML = `
  <header class="border-bottom">
  <div class="header flex space-between items-center container mx-auto px-container">
    <a href="../index.html"><img src="/img/LogoTSIW.svg"></a>
    <nav class="flex items-center gap-32">
        <ul class="header-links flex items-center gap-24">
            <li><a href="" class="hover-underline-animation text-16 text-medium">Aprender</a></li>
            <li><a href="" class="hover-underline-animation text-16 text-medium">Atividades</a></li>
            <li><a href="" class="hover-underline-animation text-16 text-medium">Projetos</a></li>
            <li><a href="" class="hover-underline-animation text-16 text-medium">Testemunhos</a></li>
            <li><a href="" class="hover-underline-animation text-16 text-medium">Sobre</a></li>
        </ul>
        <a href="/html/registo.html" class="button" id="headerButtonRegisto" role="button">Registar</a>
        <button id="buttonHamburger" class="header-hamburger flex direction-column">
          <div class="hamburger-bar"></div>
          <div class="hamburger-bar"></div>
          <div class="hamburger-bar"></div>
        </button>
    </nav>
  </div>
  <div id="sideNavBar" class="side-nav h-screen flex direction-column gap-48">
      <div class="flex space-between items-center">
          <a href="../index.html"><img src="/img/LogoTSIW Versao pequena.svg" height="30px"></a>
          <div class="flex gap-16 items-center">
              <a href="/html/registo.html" class="button" role="button">Registar</a>
              <button id="buttonSideNavClose" class="header-hamburger flex">
                <img src="/img/cross.svg" height="12px">
              </button>
          </div>
      </div>
      <div class="flex direction-column gap-16">
          <p class="text-18 text-medium text-mainGrey">Navegação</p>
          <ul class="flex direction-column gap-16">
              <li><a href="" class="hover-underline-animation text-18 text-medium">Aprender</a></li>
              <li><a href="" class="hover-underline-animation text-18 text-medium">Atividades</a></li>
              <li><a href="" class="hover-underline-animation text-18 text-medium">Projetos</a></li>
              <li><a href="" class="hover-underline-animation text-18 text-medium">Testemunhos</a></li>
              <li><a href="" class="hover-underline-animation text-18 text-medium">Sobre</a></li>
          </ul>
      </div>
      <div class="flex direction-column gap-16">
          <p class="text-18 text-medium text-mainGrey">Redes Sociais</p>
          <ul class="flex direction-column gap-16">
              <li><a href="" class="hover-underline-animation text-18 text-medium">Facebook</a></li>
              <li><a href="" class="hover-underline-animation text-18 text-medium">Instagram</a></li>
              <li><a href="" class="hover-underline-animation text-18 text-medium">Youtube</a></li>
          </ul>
      </div>
  </div>  
</header>`
  
  const mainContainer = document.getElementById("mainContainer")
  mainContainer.prepend(header) 
}

createHeader()

const buttonHamburger = document.getElementById("buttonHamburger")
const buttonSideNavClose = document.getElementById("buttonSideNavClose")
const sideNavBar = document.getElementById("sideNavBar")

buttonHamburger.addEventListener("click", () =>{
  sideNavBar.classList.add("side-nav-active")
})

buttonSideNavClose.addEventListener("click", () =>{
  sideNavBar.classList.remove("side-nav-active")
})