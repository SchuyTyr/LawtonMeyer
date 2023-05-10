// footer-main.js //


// -----------------------------------------------------------------------------------------------------

let template = document.getElementById('footer');

var curYear = new Date().getFullYear();

template.innerHTML = `
  <hr class="rounded">

  <div class="socialBar">

      <div class="socialProps">
        <a class="link4" href="https://www.instagram.com/lawton_meyer/" title="Instagram &#64;lawton_meyer">
            <img class="socialHover" src="src/icons/Instagram_3.png" alt="instagram.com/lawton_meyer">
        </a>
      </div>

      <div class="socialProps">
        <a class="link4" href="https://www.youtube.com/@LawtonMeyer" title="YouTube &#64;LawtonMeyer">
            <img class="socialHover" src="" alt="www.youtube.com/@LawtonMeyer" >
        </a>
      </div>

      <div class="socialProps">
        <a class="link4" href="https://vimeo.com/264872148" title="Vimeo &#64; Lawton Meyer">
            <img class="socialHover" src="" alt="vimeo.com/264872148">
        </a>
      </div>

      <div class="socialProps">
        <a class="link4" href="mailto:lawtonmeyer@gmail.com" title="Email &#64; lawtonmeyer@gmail.com">
            <img class="socialHover" src="src/icons/Email.png" alt="Email: lawtonmeyer@gmail.com">
        </a>
      </div>
  </div>

  <hr class="rounded">
  <br>
  <br>
  <div class="h4">
    <img alt="Lawton Meyer" src="src/img/Logo.png" width="250">
  </div>

  <p id="p01">
    &#169;&nbsp;2014 &mdash;
    `+curYear+`
    &nbsp;Lawton Meyer | Cinematography &ndash; Videography &ndash; Filmmaking
    <br>
    <a class="link4" href="mailto:lawtonmeyer@gmail.com" title="Email &#64; lawtonmeyer@gmail.com">lawtonmeyer@gmail.com</a> 
    | (845)&nbsp;249&ndash;6161
    <br>
    <a class="link3" href="https://www.schuylermeyer.com/" target="_self" title="SchuyTyr">Powered by SchuyTyr</a>
    &nbsp;|&nbsp;
    <a class="link3" href="sitemap.html" target="_self" title="Sitemap"> Site Map </a>
    &nbsp;|&nbsp;
    <a class="link3" href="readmeText.html" target="_self" title="Readme"> <u>README</u> </a>
  </p>
`;

