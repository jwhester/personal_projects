function intro(){
    if(document.getElementById("tvScreen").className === 'tvScreen') {
        document.getElementById("tvScreen").className = 'intro';
    } else {
        document.getElementById("tvScreen").className = 'tvScreen';
    }
}
function twilight() {
    if(document.getElementById("tvScreen").className === 'tvScreen') {
        document.getElementById("tvScreen").className = 'twilightZone';
    } else {
        document.getElementById("tvScreen").className = 'tvScreen';
    }
}