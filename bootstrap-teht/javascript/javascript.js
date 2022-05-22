/** Halusin kokeilla sivuston interaktiivista sisällön muokkausta tällä kertaa etusivun
 * kuvaan. Mouseenter- ja mouseout-funktioilla halusin muuttaa kuvan läpinäkyvyyttä.
 * Hiiren osuessa kuvaan (mouseenter) kuvasta tulee läpinäkyvämpi ja taas hiiren poistuessa
 * kuvasta (mouseout), kuvan läpinäkyvyys poistuu.
 * 
 * Fetch() koodin avulla halusin hakea portfolion teemaan sopivan lainauksen eli tottakai ohjelmointiin liittyvän.
 * 
 * Teht. 3 Javascript-tekniikan hyödyntäminen:
 * 
 * Vaatimukset:

    Interaktion hyödyntäminen eli eventtien käyttö
    Sivun sisällön dynaaminen muokkaus kuten ulkoasun tai sisällön manipulointi
    REST-palvelun hyödyntäminen
 */

let mouseEnter = document.getElementById("profile_pic");

mouseEnter.addEventListener("mouseenter", mouseEnterFunc);

function mouseEnterFunc() {

    mouseEnter.style.opacity = 0.5;
    
}

let mouseOut = document.getElementById("mouseOut");

mouseOut.addEventListener("mouseout", mouseOutFunc)

function mouseOutFunc() {

    mouseEnter.style.opacity = 1;
}

fetch("https://programming-quotes-api.herokuapp.com/Quotes?count=33")
    .then(response => response.json())
    .then(data => {
        data.forEach(quotes => {
            document.getElementById("programmingQuote").innerHTML =
            quotes.en;
        });
   
    });