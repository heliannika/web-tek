// a
elem = document.querySelector("#content");
console.log(elem.tagName);

// b
elem = document.querySelector(".basic");
console.log(elem.tagName);

// c

let liElems = document.querySelectorAll("li");
liElems = document.getElementsByTagName("li");

for(elem of liElems) {
    console.log(elem.textContent);
}

// d
let bodyDesc = document.querySelectorAll("body *");
for(elem of bodyDesc) {
    console.log(elem.nodeName);
}

// e

let articleDesc = document.querySelectorAll("article p");
for (elem of articleDesc) {
    console.log(elem.textContent);
}

// f

for(elem of liElems) {
    elem.textContent = "John Doe";
}