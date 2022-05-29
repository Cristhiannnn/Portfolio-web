function click() {
    let menumobile = document.querySelector('.menu-mobile');
    if(menumobile.classList.contains('.open')) {
        menumobile.classList.remove('.open');
    } else {
        munumobile.classList.add('.open');
    }
}