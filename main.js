var menu = document.getElementById('floatMenu')
var estado = 'close'
menu.addEventListener('click', function(){
    var menu = document.getElementById('menu')
    if(estado=='close'){
        menu.style.display='block'
        estado = 'open'
    } else if(estado=='open'){
        menu.style.display='none'
        estado = 'close'
    }
})