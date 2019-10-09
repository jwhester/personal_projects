'use strict';
function onOff(){
    if(document.getElementById("tvScreen").className === 'tvScreen') {
        document.getElementById("tvScreen").className = 'onOff';
    } else {
        document.getElementById("tvScreen").className = 'tvScreen';
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
