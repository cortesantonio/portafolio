function hiddenContainer() {
    container.style.display = 'none'
}
function hiddenContainer() {
    container.style.display = 'grid'
}


var menu = document.getElementById('floatMenu')
var estado = 'close'
menu.addEventListener('click', function () {
    var menu = document.getElementById('menu')
    var opc = document.getElementById('opc')
    if (estado == 'close') {
        menu.style.width = '350px'
        setTimeout(function showOpc() {
            opc.style.display = 'flex'
        }, 150)
        estado = 'open'
    } else if (estado == 'open') {
        menu.style.width = '0px';
        menu.style.height = '51px';
        opc.style.display = 'none';
        estado = 'close';
    }
});

var estadoSkill = 'close';
function showSkills() {
    if (estadoSkill == 'close') {
        var container = document.getElementById('container');
        container.style.width = '0px'
        setTimeout(hiddenContainer(), 85)
        estadoSkill = 'open'
    } else if (estadoSkill == 'open') {
        var container = document.getElementById('container');
        container.style.width = '60%'
        estadoSkill = 'close'

    }
};


var smileFaceStats = 0

setInterval(function faceChange() {
    var smileFace = document.getElementById('smileFace');
    if (smileFaceStats == 0) {
        smileFace.innerHTML = ':)';
        smileFaceStats = 1;
    } else if (smileFaceStats = 1) {
        smileFace.innerHTML = ';)';
        smileFaceStats = 0;

    }
}, 1000)

function oneCard() {
    var container = document.getElementById('gridProyects');
    container.style.gridTemplateColumns = '1fr';
}
function twoCard() {
    var container = document.getElementById('gridProyects');
    container.style.gridTemplateColumns = '1fr 1fr';
}