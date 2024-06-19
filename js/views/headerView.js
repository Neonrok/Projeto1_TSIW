import * as User from "../models/userModel.js"

function createHeader(){
  const header = document.createElement("header")
  header.className = "border-bottom"
  if(User.isLogged()){
    let loggedUser = User.getUserLogged()
    if(loggedUser.name == "admin"){
      header.innerHTML = `
      <div class="header flex space-between items-center container mx-auto px-container">
        <img src="/img/LogoTSIW.svg">
        <nav class="flex items-center gap-32">
            <ul class="header-links flex items-center gap-24">
                <li><a href="/html/admin.html" class="hover-underline-animation text-16 text-medium">Zona Admin</a></li>
                <li><a href="/html/gerirDesafios.html" class="hover-underline-animation text-16 text-medium">Desafios</a></li>
                <li><a href="/html/gerirAtividades.html" class="hover-underline-animation text-16 text-medium">Atividades</a></li>
                <li><a href="/html/gerirProjetos.html" class="hover-underline-animation text-16 text-medium">Projetos</a></li>
                <li><a href="/html/gerirTestemunhos.html" class="hover-underline-animation text-16 text-medium">Testemunhos</a></li>
            </ul>
            <a href="/index.html" class="button" id="headerButtonLogOut" role="button">Log out</a>
        </nav>
      </div>`
    }
    else{
      header.innerHTML = `
      <div class="header flex space-between items-center container mx-auto px-container">
        <a href="../index.html"><img src="/img/LogoTSIW.svg"></a>
        <nav class="flex items-center gap-32">
            <ul class="header-links flex items-center gap-24">
                <li><a href="" class="hover-underline-animation text-16 text-medium">Aprender</a></li>
                <li><a href="/html/atividades.html" class="hover-underline-animation text-16 text-medium">Atividades</a></li>
                <li><a href="/html/projetos.html" class="hover-underline-animation text-16 text-medium">Projetos</a></li>
                <li><a href="/html/testemunhos.html" class="hover-underline-animation text-16 text-medium">Testemunhos</a></li>
                <li><a href="" class="hover-underline-animation text-16 text-medium">Sobre</a></li>
            </ul>
            <div class="flex gap-24 items-center">
              <a href="/html/notificacoes.html"><img src="/img/NotificationIcon.svg" width="16px" height="18px"></a>
              <a href="/html/conta.html"><img class="header-avatar" src=${loggedUser.avatar} width="36px" height="36px"></a>
            </div>
            <a href="/index.html" class="button" id="headerButtonLogOut" role="button">Log out</a>
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
                  <a href="/index.html" class="button" id="sideNavButtonLogOut" role="button">Log out</a>
                  <button id="buttonSideNavClose" class="header-hamburger flex">
                    <img src="/img/cross.svg" height="12px">
                  </button>
              </div>
          </div>
          <div class="flex direction-column gap-16">
              <p class="text-18 text-medium text-mainGrey">Navegação</p>
              <ul class="flex direction-column gap-16">
                  <li><a href="" class="hover-underline-animation text-18 text-medium">Aprender</a></li>
                  <li><a href="/html/atividades.html" class="hover-underline-animation text-18 text-medium">Atividades</a></li>
                  <li><a href="/html/projetos.html" class="hover-underline-animation text-18 text-medium">Projetos</a></li>
                  <li><a href="/html/testemunhos.html" class="hover-underline-animation text-18 text-medium">Testemunhos</a></li>
                  <li><a href="" class="hover-underline-animation text-18 text-medium">Sobre</a></li>
              </ul>
          </div>
          <div class="flex direction-column gap-16">
              <p class="text-18 text-medium text-mainGrey">Redes Sociais</p>
              <ul class="flex direction-column gap-16">
                  <li><a href="https://www.facebook.com/LTSIW" class="hover-underline-animation text-18 text-medium">Facebook</a></li>
                  <li><a href="https://www.instagram.com/_tsiw.esmad_/" class="hover-underline-animation text-18 text-medium">Instagram</a></li>
                  <li><a href="https://www.youtube.com/channel/UCA1uYDftSXjN1Lx5E9-ByIg" class="hover-underline-animation text-18 text-medium">Youtube</a></li>
              </ul>
          </div>
      </div>`
    }
  }
  else{
    header.innerHTML = `
    <div class="header flex space-between items-center container mx-auto px-container">
      <a href="../index.html"><img src="/img/LogoTSIW.svg"></a>
      <nav class="flex items-center gap-32">
          <ul class="header-links flex items-center gap-24">
              <li><a href="" class="hover-underline-animation text-16 text-medium">Aprender</a></li>
              <li><a href="/html/atividades.html" class="hover-underline-animation text-16 text-medium">Atividades</a></li>
              <li><a href="/html/projetos.html" class="hover-underline-animation text-16 text-medium">Projetos</a></li>
              <li><a href="/html/testemunhos.html" class="hover-underline-animation text-16 text-medium">Testemunhos</a></li>
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
                <li><a href="/html/atividades.html" class="hover-underline-animation text-18 text-medium">Atividades</a></li>
                <li><a href="/html/projetos.html" class="hover-underline-animation text-18 text-medium">Projetos</a></li>
                <li><a href="/html/testemunhos.html" class="hover-underline-animation text-18 text-medium">Testemunhos</a></li>
                <li><a href="" class="hover-underline-animation text-18 text-medium">Sobre</a></li>
            </ul>
        </div>
        <div class="flex direction-column gap-16">
            <p class="text-18 text-medium text-mainGrey">Redes Sociais</p>
            <ul class="flex direction-column gap-16">
                <li><a href="https://www.facebook.com/LTSIW" class="hover-underline-animation text-18 text-medium">Facebook</a></li>
                <li><a href="https://www.instagram.com/_tsiw.esmad_/" class="hover-underline-animation text-18 text-medium">Instagram</a></li>
                <li><a href="https://www.youtube.com/channel/UCA1uYDftSXjN1Lx5E9-ByIg" class="hover-underline-animation text-18 text-medium">Youtube</a></li>
            </ul>
        </div>
    </div>`
  }
  
  const mainContainer = document.getElementById("mainContainer")
  mainContainer.prepend(header) 
}

createHeader()

const buttonHamburger = document.getElementById("buttonHamburger")
const buttonSideNavClose = document.getElementById("buttonSideNavClose")
const sideNavBar = document.getElementById("sideNavBar")
const headerButtonLogOut = document.getElementById("headerButtonLogOut")
const sideNavButtonLogOut = document.getElementById("sideNavButtonLogOut")

headerButtonLogOut.addEventListener("click", () =>{
  User.logout()
})

sideNavButtonLogOut.addEventListener("click", () =>{
  User.logout()
})

buttonHamburger.addEventListener("click", () =>{
  sideNavBar.classList.add("side-nav-active")
})

buttonSideNavClose.addEventListener("click", () =>{
  sideNavBar.classList.remove("side-nav-active")
})