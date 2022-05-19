/** Halusin kokeilla sivuston interaktiivista sisällön muokkausta tällä kertaa etusivun
 * kuvaan. Mouseenter- ja mouseout-funktioilla halusin muuttaa kuvan läpinäkyvyyttä.
 * Hiiren osuessa kuvaan (mouseenter) kuvasta tulee läpinäkyvämpi ja taas hiiren poistuessa
 * kuvasta (mouseout), kuvan läpinäkyvyys poistuu.
 * 
 * Teht. 3 Javascript-tekniikan hyödyntäminen:
 * 
 * Vaatimukset:

    Interaktion hyödyntäminen eli eventtien käyttö
    Sivun sisällön dynaaminen muokkaus kuten ulkoasun tai sisällön manipulointi
    REST-palvelun hyödyntäminen (jokin muu kuin tunneilla käytetty esimerkki)
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

fetch("https://programming-quotes-api.herokuapp.com/Quotes?count=23")
    .then(response => response.json())
    .then(data => {
        data.forEach(quotes => {
            document.getElementById("programmingQuote").innerHTML =
            quotes.en;
        });
   
    });