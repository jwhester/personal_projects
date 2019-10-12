'use strict';
function guideOnOff(){
    var element = document.getElementById("tvGuide");
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function twilight() {
    document.getElementById("tvScreen").className = 'twilightZone';
}

function contactMe() {
    var x = document.getElementById("contact");
    if (x.style.display === 'none') {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$("#flipbook").turn({
    width: 400,
    height: 300,
    autoCenter: true
});
