//navigation
function navigationUmschalten(){
    const navigationsleiste = document.getElementById("navbar");
    navigationsleiste.classList.toggle("navGeoeffnet");
};

//Drehwurm
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("warped");
    image.style.transform = "rotate(-" + window.pageYOffset/6 + "deg)";
}

