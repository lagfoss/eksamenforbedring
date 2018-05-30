/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function Language() {
    document.getElementById("myLanguage").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.droplang')) {

    var dropdowns = document.getElementsByClassName("droplang-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Navigation responsive */
function responsiveNav() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

// Program siden popup
// When the user clicks on div, open the popup
function programpopups(a) {
  a.parentNode.getElementsByClassName("popup-info2")[0].classList.toggle("show");
}

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.popup-info')) {

    var popup = document.getElementsByClassName("popup-info2");
    var i;
    for (i = 0; i < popup.length; i++) {
      var openPopup = popup[i];
      if (openPopup.classList.contains('show')) {
        openPopup.classList.remove('show');
      }
    }
  }
}

function check() {
  //stored data
  localStorage.userName = "admin";
  localStorage.userPw = "admin";
  var storedName = localStorage.getItem('userName');
  var storedPassword = localStorage.getItem('userPw');

  //entered data from login
  var userName = document.querySelector('#userName');
  var userPassword = document.querySelector('#userPw');

  //check if stored data from signup is equal to data from loginbutton
  if(userName.value == storedName && userPw.value == storedPassword) {
    window.location = window.location.href.replace("login.html","klient.html");
  }else {
    alert('Incorrect email or password');
  }
}














/*indput felter styleguide*/
  Codeblock('block', `
    <body>
      <label>Skriv her</label><br>
      <input type="text"  required></textarea>
    </body>
  `);








/*style giude html knap 1*/
Codeblock('block1', `
  <body>
    <div class="rcorners2"> SHOW </div>
  </body>
`);







/*style giude html knap 2*/
Codeblock('block2', `
  <body>
    <div><input type="submit"
    value="Send"></div>
  </body>
`);






/*style giude html knap 3*/
Codeblock('block3', `
  <body>
    <a href="klient.html"><button type="button"
    id="loginn">Login</button></a>
  </body>
`);






/*style giude html menu*/
Codeblock('block4', `
<body>
  <div class="logo">
    <a href="index.html"><img class="banner"
      src="assets/images/logo.png"
      alt="Varde Middelalderfestival banner">
    </a>
  </div>

  <nav id="myNav">
      <a href="program.html">Program</a>
      <a href="omfestivalen.html">Om festivalen</a>
      <a href="praktiskinfo.html">Praktisk info</a>
      <a href="index.html" class="empty2"></a>
      <a href="blivaktor.html">Bliv aktør</a>
      <a href="blivfrivillig.html">Bliv frivillig</a>
      <a href="kontakt.html">Kontakt</a>
      <div class="dropdown">
      </div>
  </nav>
</body>
`);













/*layout del 1*/
Codeblock('block5', `
<body>
    <section>
      <h1>Varde Middelalderfestival</h1>
      <h2>Den 8 - 10 AUGUST 2019</h2>
    </section>


    <div class="intro">
      <h3>Middelalderlige dage for
      alle der kan lide gøgl,
      markeder, ridderkampe,
      gadeartister, brand shows,
      eventyr, vandreture,
      forelæsninger og meget mere.</h2>
    </div>
</body>
`);








/*layout del 2*/
Codeblock('block6', `
<body>
  <div class="indhold">
    <!-- praktiskinfo 1 -->
  <div class="seo_om_vmf">

  <div class="event_kasse1">
     Praktisk Info
    <p>Hele middelalderfestivalens
    weekendprogram foregår ved Varde Å.</p>
    <p> Der er indgang til Middelalderpladsen
    fra Slotsgade. Nærmeste P-plads er på
    Pramstedvej og Stålværksgrunden
    indkørsel fra Vestervold.</p>

    <p><b>Festivalens åbningstider
      for 2019:</b></p>

    <p>fredag d. 8. august kl.
    16 - 23. lørdag
    d. 9. august kl. 10 - 23.
    Børneområdet holdte
    ligeledes åben fredag d. 8. august
    kl. 9.00-13.00. Der var gratis entré
    til festivalområdet.
    </p>
</div>

    </div>
    <div class="praktiskinfo">

    </div>
    <!-- praktiskinfo 1 Slut -->

    <div class="space"></div>
    </div>
  </body>
`);







/*del 3*/
Codeblock('block7', `
<body>
  <div class='indhold'>

  <div class='program'><h4><a  href="assets/images/
  program_middelalderfestival_koebstad_575_varde.pdf"
  target="_blank">Se Program</a></h4> </div>

  <div class='kort'><h4><a href="kort1.html">Se Kort
  </a></h4> </div>

  <div class='info'><h4><a href="praktiskinfo.html">
  Praktisk Info</a></h4> </div>

  </div>
</body>
`);




/*del 4*/
Codeblock('block8', `
<body>
  <div class="indhold">
    <!-- 1 Event -->
    <div class="event_img_left">
    </div>

    <div class="event_img_middle">
    </div>

    <div class="event_img_right">
    </div>

    <div class="event_text_left">

    <div class="event_kasse1">
        7 kanten
    <div class="rcorners1">
        PROGRAM EVENT
    </div>
        <p>7-kanten er en af Danmarks største og
        mest aktive amatørteaterforeninger med
        cirka 500 medlemmer inklusive en
        børneafdeling på ca. 60 og en
        ungdomsafdeling på ca. 40 og en afdeling
        for pensionister "Teater om Dagen". </p>
    </div>
    </div>

    <div class="event_text_middle">

    <div class="event_kasse2">
        Lupus Tempus
    <div class="rcorners2">
        SHOW
    </div>
        <p>Lupus Tempus –et historisk selskab
        blev dannet i november 2006 og består
        i dag af 10 medlemmer.
        Vi formidler og levendegøre nordeuropæisk
        middelalder kulturarv gennem reenactment.</p>
    </div>
        </div>
        <div class="event_text_right">
        <div class="event_kasse2">
            Mikkel Langbue
        <div class="rcorners3">
              Frivillig
        </div>
              <p>Mikkel Langbue indtager markedet.
                Grin som pisket af historierne om
                Sorte Karen, De grimme kællinger
                og Laurits Låddenhals.</p>
            </div>
        </div>
        <!-- 1 Event Slut -->
    </div>

      </div>
  </body>
`);




/*style giude html foter*/
Codeblock('block9', `
<body>
  <footer><div class="footer_tekst">
  Varde Kommune  -
  Bytoften 2  -
  6800 Varde  -
  79 94 68 00  -

  vardekommune@varde.dk  -

  CVR-nr: 2918 9811  </div>

  <a href="login.html"><button class="klient"
    onclick="document.getElementById('id01')
    .style.display='block'" style="width:auto;">
    Log ind på klientside</button></a>


  <div class="socialmedier">
  <a target="_blank"
    href="https://www.facebook.com/kulturugen/">
  <img class="fb" src="assets/images/facebook.png"
  alt="Varde facebook"> </a>
  <a target="_blank"
    href="http://www.vardekommune.dk">
  <img class="vardekommune"
    src="assets/images/vk_logo.png"
    alt=""> </a> <a target="_blank"
    href="https://www.instagram.com/explore/tags/viinaturen/">
  <img class="ig"
    src="assets/images/instagram.png"
    alt="Varde Instagram"> </a>
  </div>

  </footer>
</body>
`);













/*program*/
Codeblock('block10', `
  <body>
    <div class="program-background">

      <div id="main-program">
        <div>
          <h2>Fredag</h2>
          <div class="time-on-days">

            <div class="event-and-date">
              <div class="time-frame">
                <p>10:00<br>11:00</div>
              <div class="time-label">
                <button onclick="programpopups(this)" class="popup-info">
          MIDDELALDERGØGL I BØRNEHØJDE OG
            KØBSTADSJUBILÆUM
            <br><br>STED: Varde Torv <br>
            ARRANGØR: Varde Kommune</button>

            <span class="popup-info2">
              På Torvet møder børnene den
              gamle middelaldergøgler Mester Peder, der på
              ægte historisk vis vil underholde og fornøje
              børnene med gøgl og løjer. Derudover vil Varde
              Kommunes børnehavebørn optræde med sang,
              teater og optog iført hjemmelavede kostumer. </span>
            </div>
        </div>


        <div class="event-and-date">
          <div class="time-frame">
          <p>13:00<br>14:00</p></div>
          <div class="time-label">
            <button onclick="programpopups(this)" class="popup-info">
          Historisk Byvandring
            <br><br>STED: Varde Torv <br>
            ARRANGØR: Musik og Billdskolen</button>

            <span class="popup-info2">
              Følg med museumsinspektør
              Lars Chr. Bentsen og hør om nedrevne kirker,
              konger, borge, bondeoprør og brande. Sct.
              Jacobi Kirke er byens eneste synlige mindesmærke
              fra middelalderen, men i byens topografi,
              arkæologi og skriftlige kilder gemmer
              sig flere spændende historier.  </span>

            </div>
        </div>

        <div class="event-and-date">
          <div class="time-frame">
          <p>15:15<br>17:15</div>
          <div class="time-label">
            <button onclick="programpopups(this)" class="popup-info">
          FORM DIN EGEN JYDEPOTTE I LER
            <br><br>STED: Varde Torv <br>
            ARRANGØR: Varde Kommune</button>

            <span class="popup-info2">
            Der blev lavet og solgt
            mange jydepotter i middelalderens Varde.
            Form din egen jydepotte i ler og bliv
            inspireret af middelalderens traditioner
            v. kunstner Per Ottesen.</span>

            </div>
        </div>


        <div class="event-and-date">
          <div class="time-frame">
          <p>16:00<br>22:00</div>
          <div class="time-label">
            <button onclick="programpopups(this)" class="popup-info">
          VIRELAI OG ALMUNE
            - MIDDELALDERMUSIK
            <br><br>STED: Torv og Gågade <br>
            ARRANGØR: Varde Handel og Varde Kommune</button>

            <span class="popup-info2">
              Oplev de autentiske og folkelige
             middelalderbands med stærk og livsbekræftende
             underholdning, når de spiller på jødeharpe,
             skalmeje, drejelire og meget andet sjovt.
            </span>

            </div>
        </div>

        <div class="event-and-date">
          <div class="time-frame">
          <p>17:00<br>22:00</div>
          <div class="time-label">
            <button onclick="programpopups(this)" class="popup-info">
          STREET FOOD - ÅBENT MADTELT MED LANGBORD
            <br><br>STED: Varde Torv <br>
            ARRANGØR: Varde Handel</button>

            <span class="popup-info2">
              Kom og få en anderledes madoplevelse,
             når vi samler restauratører og cafeer
             under samme telttag og inviterer til ”Street
             Food” med boder, der sælger middelalderinspireret
             mad, drikkevarer, delikatesser og
             specialiteter til både børn og voksne.
            </span>

            </div>
        </div>

        <div class="event-and-date">
          <div class="time-frame">
          <p>18:15<br>18:15</div>
          <div class="time-label">
            <button onclick="programpopups(this)" class="popup-info">
          FOLKEDANSK
            <br><br>STED: Varde Torv <br>
            ARRANGØR: Varde Kommune</button>

            <span class="popup-info2">
              Dansen har udviklet sig hen
              over tiden. Varde Folkedanseforening viser
              et udsnit at de danse, som læner sig op af
              gamle traditioner, hvor dansen var en naturlig
              del af samværet og festen.
            </span>

            </div>
        </div>
      </div>
    </div>

    <div>
      <h2>Lørdag</h2>
      <div class="time-on-days">

        <div class="event-and-date">
          <div class="time-frame">
          <p>10:00<br>14:00</div>
          <div class="time-label">
            <button onclick="programpopups(this)" class="popup-info">
          ÅBENT KALKMALERVÆRKSTED FOR SKOLER
            <br><br>STED: museum Frello <br>
            ARRANGØR: Vardemuseerne</button>

            <span class="popup-info2">
              Hvordan arbejdede de gamle
              kalkmalere? Hvilke motiver malede de?
              Museum Frello åbner værkstedet, så
              børnehavebørn har mulighed for at arbejde
              og male som de håndværkere, der udsmykkede
              kirker i middelalderen.
            </span>

            </div>
        </div>

        <div class="event-and-date">
          <div class="time-frame">
          <p>17:00<br>17:45</div>
          <div class="time-label">
            <button onclick="programpopups(this)" class="popup-info">
          ÅBNING AF KØBSTADEN
            V. BORGMESTER ERIK BUHL
            <br><br>STED: Varde Torv <br>
            ARRANGØR: Varde Kommune</button>

            <span class="popup-info2">
              Tale v. Erik Buhl og
             overrækkelse af jubilæumsgave malet
             af kunstneren Niels Rønne Jønsson,
             som var elev af Vardes æresborger
             Otte Frello.
            </span>

            </div>
        </div>

        <div class="event-and-date">
          <div class="time-frame">
          <p>19:00<br>19:30</div>
          <div class="time-label">
            <button onclick="programpopups(this)" class="popup-info">
          MIDDELALDERANDAGT I DET FRI
            <br><br>STED: Sct. Nikolai Kirkeplads <br>
            ARRANGØR: Varde Meningsråd</button>

            <span class="popup-info2">
              Sct. Nikojai Kirke, der er viet
              til den hellige Nikolai, blev nævnt i bøgerne
              første gang i 1300-tallet.
              I forbindelse med 575 års jubilæet afholder
              Varde Menighedsråd og sognepræst Morten
              Thaysen en aftengudstjeneste i ruinerne fra
              kirken, der blev nedbrudt i 1809. Musik ved
              organist Chr. Blom Hansen og Varde Blæseorkester.
            </span>

            </div>
        </div>

        <div class="event-and-date">
          <div class="time-frame">
          <p>15:15<br>16:15</div>
          <div class="time-label">
            <button onclick="programpopups(this)" class="popup-info">
          MUSIKSKOLEELEVERNE SPILLER OP
            <br><br>STED: Varde Torv <br>
            ARRANGØR: Musik og Billdskolen</button>

            <span class="popup-info2">
              Musik & Billedskolens elever
              skaber hyggelig middelalderstemning på Torvet.
            </span>

            </div>
        </div>

      </div>
      </div>
    <div>
      <h2>Søndag</h2>
      <div class="time-on-days">

        <div class="event-and-date">
          <div class="time-frame">
          <p>14:00<br>16:00</div>
          <div class="time-label">
            <button onclick="programpopups(this)" class="popup-info">
          MIDDELALDERGØGL I BØRNEHØJDE OG
            KØBSTADSJUBILÆUM
            <br><br>STED: Opvisningspladsen <br>
            ARRANGØR: Varde Kommune</button>

            <span class="popup-info2">
              På Torvet møder børnene den
             gamle middelaldergøgler Mester Peder, der på
             ægte historisk vis vil underholde og fornøje
             børnene med gøgl og løjer. Derudover vil Varde
             Kommunes børnehavebørn optræde med sang,
             teater og optog iført hjemmelavede kostumer.
            </span>

            </div>
        </div>

        <div class="event-and-date">
          <div class="time-frame">
          <p>18:00<br>19:00</div>
          <div class="time-label">
            <button onclick="programpopups(this)" class="popup-info">
          MIDDELALDERENS ÅND
            <br><br>STED: Varde Torv ved bålet <br>
            ARRANGØR: ProVarde</button>

            <span class="popup-info2">
              Tag med 575 år tilbage i
             tiden og forestil dig, hvordan livet så ud for en
             vardenser i middelalderen, hvor Vestkysten
             var handelsvejen til resten af verden.
             Filosof Carsten Friberg vil sammen med dig
             og de andre gæster udforske middelalderens
             ånd. For hvem ved, hvordan livet var?
             Der serveres gratis suppe ved bålet.
            </span>

            </div>
        </div>

        <div class="event-and-date">
          <div class="time-frame">
          <p>19:00<br>20:00</div>
          <div class="time-label">
            <button onclick="programpopups(this)" class="popup-info">
          FOREDRAG – ”FRA BONDEOPRØR TIL
            KØBSTAD
            <br><br>STED: Den store trappe på Det Gl. Rådhus <br>
            ARRANGØR: ProVarde</button>

            <span class="popup-info2">
              Med afsæt i tiden før Varde
              blev tilkendt købstadsprivilegiet, fortæller
              historiker Gert Ravn om en by, der i strid med
              lovgivningen gav husly til oprørske borgere
              og bønder og derfor mistede sine privilegier
              for at generhverve dem tre år senere i 1442.
              Ingen tilmelding.
            </span>

            </div>
        </div>

        <div class="event-and-date">
          <div class="time-frame">
          <p>20:30<br>21:00</div>
          <div class="time-label">
            <button onclick="programpopups(this)" class="popup-info">
          VERDENS STØRSTE KÆDEDANS
            <br><br>STED: Varde Torv og Gågade <br>
            ARRANGØR: Varde Handel og Varde Kommune</button>

            <span class="popup-info2">
              Vialei sætter gang i Vardes største
              kædedans siden middelalderen. Er du frisk?
            </span>

            </div>
        </div>

        <div class="event-and-date">
          <div class="time-frame">
          <p>21:00<br>22:30</div>
          <div class="time-label">
            <button onclick="programpopups(this)" class="popup-info">
          ”5KLARINETTER”
            <br><br>STED: Varde Torv -scenen <br>
            ARRANGØR: Varde Handel</button>

            <span class="popup-info2">
              Oplev klarinetkvintettens
              repertoire af folkemusik med middelaldertema.
              Hør dem udnytte de mange klang- og variationsmuligheder,
              som klarinetten rummer.
            </span>

            </div>
        </div>

        <div class="event-and-date">
          <div class="time-frame">
          <p>21:00<br>22:30</div>
          <div class="time-label">
            <button onclick="programpopups(this)" class="popup-info">
          MORD I VARDE KØBSTAD – NATTEVANDRING
            <br><br>STED: Varde Torv <br>
            ARRANGØR: Varde Kommune</button>

            <span class="popup-info2">
              Med afsæt i middelalderen
              efter 1104 tages du med på en nattevandring.
              Der vil være udpegning og beretning om
              byens voldsomme liv med mord, gabestok,
              arrest og skanse. Hvis du er heldig, hører du
              de levende begravede sukke ved de nedlagte
              kirkegårde.
            </span>

            </div>
        </div>

      </div>
    </div>
  </div>
  <div class="space">

  </div>
  <h2 id="fleredagsop"> Flere-dags oplevelser</h2>
  <div class="top-program">

    <div class="downbox">
  <div class="downandwhite">
    <p> BARBERKIRURGEN FORTÆLLER
        – ÅBENT TELT </p>
  </div>
      <div class="downandgreen">
      <p>Hele Lørdag <br> og Søndag </p>
        </div>
      </div>

      <div class="downbox">
      <div class="downandwhite"><p> DE NORDJYSKE LEJESVENDE
        – TOTALTEATER OG FORMIDLING</p></div>
        <div class="downandgreen">
        <p>Hele Lørdag <br> og Søndag </p>
          </div>
        </div>

        <div class="downbox">
          <div class="downandwhite">
        <p> ILDSHOW OG HISTORISK HATTETEATER
          MED MESTER PEDER OG ILDKNÆGTEN </p> </div>
          <div class="downandgreen">
          <p>Hele Lørdag <br> og Søndag </p>
            </div>
        </div>

          <div class="downbox">
            <div class="downandwhite">
          <p> TOTALTEATER MED 7 KANTEN
            – HWA FATTER GJØR </p> </div>
            <div class="downandgreen">
            <p> Lørdag  KL. 11.30, 14.30 <br>
                Søndag  KL. 11.00, 13.45</p>
              </div>
            </div>

            <div class="downbox">
              <div class="downandwhite">
            <p> MODESHOW FRA MIDDELALDEREN </p></div>
            <div class="downandgreen">
            <p> Lørdag KL. 12.30 <br>
               Søndag KL. 14.15 </p>
              </div>
            </div>

              <div class="downbox">
            <div class="downandwhite">  <p> BØRNEOMRÅDE </p></div>
              <div class="downandgreen">
              <p> Hele weekenden fra <br>KL. 12:00 til KL. 15:00 </p>
                </div>
              </div>

                <div class="downbox">
                <div class="downandwhite"><p> SPORT I MIDDELALDEREN </p></div>
                <div class="downandgreen">
                <p> Hele weekenden fra <br> KL. 12:30 til KL. 17:00 </p>
                  </div>
                </div>
  </div>

    </div>
  </main>

  </body>
`);





/*login*/
Codeblock('block11', `
  <body>
    <button onclick="document.getElementById('id01').style.display='block'"
       style="width:auto;">Log ind så du kan tilføje artikkel</button>

    <div id="id01" class="modal">

      <form class="modal-content animate" action="/action_page.php">
        <div class="imgcontainer">
          <span onclick="document.getElementById('id01').style.display='none'"
            class="close" title="Close Modal">&times;</span>
          <img src="assets/images/logo.png" alt="Avatar" class="avatar">
        </div>

        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required>

          <a href="klient.html"><button type="button">Login</button></a>
          <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
        </div>

        <div class="container" style="background-color:#f1f1f1">
          <a href="index.html"><button type="button" onclick="document.
            getElementById('id01').style.display='none'" class="cancelbtn">
            Gå tilbage</button></a>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>

    <script>
      // Get the modal
      var modal = document.getElementById('id01');

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    </script>

  </body>
`);






// Denne funktion tager 2 parametre som jeg ses herunder.
// - elementId (string)
// - codeString (string)
// Funktionen finder et element på siden med det id som matcher det angivede elementId.
// Derefter erstatter den indholdet af det fundne element, med den angivede codeString.
function Codeblock(elementId, codeString) {
  document.getElementById(elementId).innerHTML = escapeHtml(codeString);
}

// Denne funktion tager 1 parameter af typen "string" som jeg angiver herunder.
// - htmlString (string)
// Funktionen tager den angivede string og erstatter alle specialtegn
// med deres respektive "html entities" og returnerer den nye string.
function escapeHtml(htmlString) {
  return htmlString
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/^\n|\n$/g, '');
}
