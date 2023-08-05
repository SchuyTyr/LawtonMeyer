//-- header.js // Schuyler Meyer - 2022 --//

let mainHeader = document.getElementById('header');

mainHeader.innerHTML = `
        <h1 class="" title="Lawton Meyer">
            <a href="index.html">
                <!--<img alt="Schuyler Meyer" class="imgLogo" src="src/img/SMSignLogo2021.png">-->
                <span>Lawton Meyer</span>
            </a>
        </h1>
        <p class="headerText"><span class="headerBorder">&nbsp;&nbsp;Cinematographer | Filmmaker&nbsp;&nbsp;</span></p>
        <hr class="rounded">

        <nav>

            <a href="index.html" class="">&nbsp;Home&nbsp;</a>
            <div class="dropdown">
                <a class="dropbtn" href="work.html">
                    &nbsp;Work&nbsp;
                </a>
                <div class="dropdown-content">
                    <a href="music.html">Music&nbsp;Video</a>
                    <a href="narrative.html">Narrative</a>
                    <a href="nature.html">Nature</a>
                    <a href="commdoc.html">Commercial | Documentary</a>
                </div>
            </div>
            <a href="gallery.html" class="">&nbsp;Gallery&nbsp;</a>
            <a href="gearlist.html" class="">&nbsp;Gear&nbsp;List&nbsp;</a>
            <a href="about.html" class="">&nbsp;About&nbsp;</a>
            <a href="contact.html" class="">&nbsp;Contact&nbsp;</a>

        </nav>

        <hr class="rounded">
`;
