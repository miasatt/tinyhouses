//navigation
function navigationUmschalten(){
    const navigationsleiste = document.getElementById("navbar");
    navigationsleiste.classList.toggle("navGeoeffnet");
};
//Bewegung Navigationselemente bei Mouseover
let liMenu = document.querySelector("#liMenu");

liMenu.addEventListener("mouseover", mouseOverMenu);

function mouseOverMenu () {
    
    //bewegung des Divs während sich die Maus bewegt
}

//Drehwurm
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("warped");
    image.style.transform = "rotate(-" + window.pageYOffset/6 + "deg)";
}

//überblick
let kasten1 = document.querySelector(".kasten1");
let bild1 = document.querySelector("#bild1");

kasten1.addEventListener("mouseover", mouseOver1);

function mouseOver1 () {
    bild1.className = "active";
};

kasten1.addEventListener("mouseout", mouseOut1);

function mouseOut1 () {
    bild1.className = "vierBilder";
};

let kasten2 = document.querySelector(".kasten2");
let bild2 = document.querySelector("#bild2");

kasten2.addEventListener("mouseover", mouseOver2);

function mouseOver2 () {
    bild2.className = "active";
};

kasten2.addEventListener("mouseout", mouseOut2);

function mouseOut2 () {
    bild2.className = "vierBilder";
};
let kasten3 = document.querySelector(".kasten3");
let bild3 = document.querySelector("#bild3");

kasten3.addEventListener("mouseover", mouseOver3);

function mouseOver3 () {
    bild3.className = "active";
};

kasten3.addEventListener("mouseout", mouseOut3);

function mouseOut3 () {
    bild3.className = "vierBilder";
};

let kasten4 = document.querySelector(".kasten4");
let bild4 = document.querySelector("#bild4");

kasten4.addEventListener("mouseover", mouseOver4);

function mouseOver4 () {
    bild4.className = "active";
};

kasten4.addEventListener("mouseout", mouseOut4);

function mouseOut4 () {
    bild4.className = "vierBilder";
};

// Preise - Accordion

$(document).ready(function(){
    $(".accordion-color").css("color", "green");

});