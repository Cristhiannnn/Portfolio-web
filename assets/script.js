
function openNav(){
    let mob = document.querySelector('.caixamob'); /* manipulando o menu mobile através do DOM*/

    if (mob.classList.contains('open')) {
        mob.classList.remove('open');
    } else {
        mob.classList.add ('open');
    } /* estrutura condicional para verificar , remover ou adicioanar a classe (.open) */
} 

const efeito = document.querySelector('.wellcome>p');

function digito(elemento){

    const textoArray = elemento.innerHTML.split('');

    elemento.innerHTML = '';
    textoArray.foreach((letra,i)=>{

    });


}



