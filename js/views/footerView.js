function createFooter(){
  const footer = document.createElement("footer")
  footer.innerHTML = `
        <div class="flex space-between px-container container mx-auto footer-container">
        <div class="flex direction-column space-between">
          <a href="../index.html"><img src="/img/LogoTSIW.svg" width="223px" height="84px"></a>
          <div>
            <p class="footer-slogan font-inherit">A Tua Carreira Em</p>
            <p class="footer-slogan font-inherit text-yellow">Desenvolvimento Web</p>
            <p class="footer-slogan font-inherit">Começa Aqui</p>
          </div>
        </div>
        <div class="flex gap-64">
          <div class="flex direction-column gap-24 footer-nav">
            <p class="text-18 text-medium text-mainGrey">Navegação</p>
            <ul class="flex direction-column gap-24">
                <li><a href="" class="hover-underline-animation text-18 text-medium">Aprender</a></li>
                <li><a href="/html/atividades.html" class="hover-underline-animation text-18 text-medium">Atividades</a></li>
                <li><a href="/html/projetos.html" class="hover-underline-animation text-18 text-medium">Projetos</a></li>
                <li><a href="/html/testemunhos.html" class="hover-underline-animation text-18 text-medium">Testemunhos</a></li>
                <li><a href="" class="hover-underline-animation text-18 text-medium">Sobre</a></li>
            </ul>
          </div>
          <div class="flex direction-column gap-24">
            <p class="text-18 text-medium text-mainGrey">Redes Sociais</p>
            <ul class="flex direction-column gap-24">
                <li><a href="https://www.facebook.com/LTSIW" class="hover-underline-animation text-18 text-medium">Facebook</a></li>
                <li><a href="https://www.instagram.com/_tsiw.esmad_/" class="hover-underline-animation text-18 text-medium">Instagram</a></li>
                <li><a href="https://www.youtube.com/channel/UCA1uYDftSXjN1Lx5E9-ByIg" class="hover-underline-animation text-18 text-medium">Youtube</a></li>
            </ul>
          </div>
        </div>
      </div>`
  
  const mainContainer = document.getElementById("mainContainer")
  mainContainer.append(footer) 
}

createFooter()