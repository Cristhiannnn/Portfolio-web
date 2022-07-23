
function openNav(){
    let mob = document.querySelector('.mob'); /* manipulando o menu mobile através do DOM*/

    if (mob.classList.contains('open')) {
        mob.classList.remove('open');
    } else {
        mob.classList.add ('open');
    } /* estrutura condicional para verificar , remover ou adicioanar a classe (.open) */
} 
