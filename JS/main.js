
const formUm = document.getElementById('formUm');
const formDois = document.getElementById('formDois');
const tem_certeza = document.getElementById('tem_certeza');
const botao = document.getElementById('btn');
function mudarDisplay() {
    formUm.style.display = 'none';
    formDois.style.display = 'block';
    if (tem_certeza.style.display = 'block') {
        tem_certeza.style.display = 'none';
    }
    if (formDois.style.display = 'block') {
        botao.setAttribute('onclick', 'redirecionar()');
    }
}
function certeza() {
    if (tem_certeza.style.display = 'none') {
        formDois.style.display = 'none';
        tem_certeza.style.display = 'block';
        formUm.style.display = 'none';
    } else {
        formDois.style.display = 'block';
        tem_certeza.style.display = 'none';
        formUm.style.display = 'none';
    }
}
function redirecionar() {
    window.location.href = 'home.html';
}
function moveresquerda() {
    const oitavas = document.getElementById('')
}
