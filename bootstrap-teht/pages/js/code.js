/** Tehtävä 3: Javascript
 * 
 * Sivun sisällön dynaaminen muokkaus kuten ulkoasun tai sisällön manipulointi
 * 
 * Muutin HTML-luokan nimeltä "quotes" tekstisisältöä Javascriptillä.
 */


let quotes = document.getElementsByClassName("quotes");

for (let i = 0; i < quotes.length; i++) {
    quotes[i].textContent = "Changed this text content with Javascript!";
  }