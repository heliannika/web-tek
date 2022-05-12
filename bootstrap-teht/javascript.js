let mouseEnter = document.getElementById("profile_pic");

mouseEnter.addEventListener("mouseenter", mouseEnterFunc);

function mouseEnterFunc() {

    mouseEnter.style.opacity = 0.5;
    
}

// kokeile liittää mouseenter johonkin toiseen elementtiin ja siten muuttaa kuva takas