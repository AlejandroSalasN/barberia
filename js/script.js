let i = document.getElementsByClassName('visible')[0].id;

document.querySelector('.derecha').addEventListener('click', ()=>{
    document.getElementById(i).classList.remove('visible');
    if (i < 3) {
        i++;
    } else {
        i = 1;
    }
    document.getElementById(i).classList.add('visible');
});
document.querySelector('.izquierda').addEventListener('click', ()=>{
    document.getElementById(i).classList.remove('visible');
    if (i > 1) {
        i--;
    } else {
        i = 3;
    }
    document.getElementById(i).classList.add('visible');
})