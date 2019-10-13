'use strict';
//-----------Button functions-----------------------
function guideOnOff(){
    var element = document.getElementById("tvGuide");
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function intro() {
    var instructions = document.getElementById("instructions");
    var element= document.getElementById("intro");
    var x = document.getElementById("gardenWorld");
    if (element.style.display === 'none') {
        element.style.display = 'block';
        x.style.display = 'none';
        instructions.style.display = 'none';
    } else {
        element.style.display = 'none';
    }
}

function gardenWorld() {
    var instructions = document.getElementById("instructions");
    var x = document.getElementById("gardenWorld");
    var element= document.getElementById("intro");
    if (x.style.display === 'none') {
        x.style.display = "grid";
        element.style.display = 'none'
        instructions.style.display = 'none';
    } else {
        x.style.display = "none";
    }
}
//-------------------TV Guide------------------------
$("#flipbook").turn({
    width: 400,
    height: 300,
    autoCenter: true
});
