// footer-main.js //


// -----------------------------------------------------------------------------------------------------

let template = document.getElementById('footer');

var curYear = new Date().getFullYear();

template.innerHTML = `
  <hr class="rounded">

  <div class="socialBar">

      <div class="socialProps">
        <a class="link4" href="https://www.instagram.com/lawton_meyer/" target="_blank" title="Instagram &#64;lawton_meyer">
            <img class="socialHover" src="src/icons/Instagram_3.png" alt="instagram.com/lawton_meyer">
        </a>
      </div>

      <div class="socialProps">
        <a class="link4" href="https://www.youtube.com/@LawtonMeyer" target="_blank" title="YouTube &#64;LawtonMeyer">
            <img class="socialHover" src="src/icons/YouTube.png" alt="www.youtube.com/@LawtonMeyer" >
        </a>
      </div>
      
      <div class="socialProps">
        <a class="link4" href="https://www.imdb.com/name/nm7786207/" target="_blank" title="IMDb &#64; Lawton Meyer">
            <img class="socialHover" src="src/icons/IMDb-2.png" alt="www.imdb.com/name/nm7786207/" >
        </a>
      </div>

      <div class="socialProps">
        <a class="link4" href="https://vimeo.com/user6921025" target="_blank" title="Vimeo &#64; Lawton Meyer">
            <img class="socialHover" src="src/icons/Vimeo.png" alt="vimeo.com/264872148">
        </a>
      </div>

      <div class="socialProps">
        <a class="link4" href="mailto:lawtonmeyer@gmail.com" target="_blank" title="Email &#64; lawtonmeyer@gmail.com">
            <img class="socialHover" src="src/icons/Email.png" alt="Email: lawtonmeyer@gmail.com">
        </a>
      </div>
  </div>

  <hr class="rounded">
  <br>
  <!--<div class="h4">
    <img alt="Lawton Meyer" src="src/img/Logo.png" width="250">
  </div>-->

  <p id="p01">
    &#169;&nbsp;2014 &mdash;
    `+curYear+`
    &nbsp;Lawton Meyer | Cinematography &ndash; Videography &ndash; Filmmaking
    <br>
    <a class="link1" href="mailto:lawtonmeyer@gmail.com" title="Email &#64; lawtonmeyer@gmail.com">lawtonmeyer@gmail.com</a> 
    | <a class="link1" href="tel:8452496161" title="Phone &#64; (845) 249-6161">(845)&nbsp;249&ndash;6161</a>
    <br>
    <a class="link1" href="https://www.schuylermeyer.com/" target="_self" title="SchuyTyr">Powered by SchuyTyr</a>
    &nbsp;|&nbsp;
    <a class="link1" href="readme.html" target="_self" title="README">README</a>
  </p>
`;

