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

function onOff() {
    var contact = document.getElementById("contactWorld");
    var instructions = document.getElementById("instructionsTV");
    var workWorld= document.getElementById("workWorld");
    var gardenWorld = document.getElementById("gardenWorld");
    if (instructions.style.display === 'none') {
        instructions.style.display = 'block';
        gardenWorld.style.display = 'none';
        workWorld.style.display = 'none';
        contact.style.display = 'none';
    } else {
        instructions.style.display = 'none';
    }
}

function workWorld() {
    var contact = document.getElementById("contactWorld");
    var instructions = document.getElementById("instructionsTV");
    var workWorld= document.getElementById("workWorld");
    var gardenWorld = document.getElementById("gardenWorld");
    if (workWorld.style.display === 'none') {
        workWorld.style.display = 'block';
        gardenWorld.style.display = 'none';
        instructions.style.display = 'none';
        contact.style.display = 'none';
    } else {
        workWorld.style.display = 'none';
    }
}

function gardenWorld() {
    var contact = document.getElementById("contactWorld");
    var instructions = document.getElementById("instructionsTV");
    var workWorld= document.getElementById("workWorld");
    var gardenWorld = document.getElementById("gardenWorld");
    if (gardenWorld.style.display === 'none') {
        gardenWorld.style.display = "grid";
        workWorld.style.display = 'none';
        instructions.style.display = 'none';
        contact.style.display = 'none';
    } else {
        x.style.display = "none";
    }
}
function contactWorld() {
    var contact = document.getElementById("contactWorld");
    var instructions = document.getElementById("instructionsTV");
    var workWorld= document.getElementById("workWorld");
    var gardenWorld = document.getElementById("gardenWorld");
    if (contact.style.display === 'none') {
        contact.style.display = "block";
        workWorld.style.display = 'none';
        instructions.style.display = 'none';
        gardenWorld.style.display = 'none'
    } else {
        contact.style.display = "none";
    }
}
//-------------------TV Guide----------------------------------------
$("#flipbook").turn({
    width: 400,
    height: 300,
    autoCenter: true
});


