
const formUm = document.getElementById('formUm');
const formDois = document.getElementById('formDois');
const tem_certeza = document.getElementById('tem_certeza');
const botao = document.getElementById('btn');
const quartas = document.getElementById('quartas');
const oitavas = document.getElementById('oitavas');
const semi = document.getElementById("semi");
const final = document.getElementById("final");
const botao_avancar = document.getElementById("avancar");
const botao_voltar = document.getElementById("voltar");
const tamanho = document.getElementById('results');
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
function moverdireita() {
    oitavas.style.display = 'none'
    quartas.style.display = 'flex'
    botao_avancar.setAttribute('onclick', 'mover_quartas_a()')
    botao_voltar.setAttribute('onclick', 'mover_quartas_v()')
    tamanho.style.height = '300px'
}

function moveresquerda() {
    oitavas.style.display = 'flex'
}
function mover_quartas_a() {
    quartas.style.display = 'none'
    semi.style.display = 'flex'
    botao_avancar.setAttribute('onclick', 'mover_semi_a()')
    botao_voltar.setAttribute('onclick', 'mover_semi_v()')
}

function mover_semi_a() {
    semi.style.display = 'none'
    final.style.display = 'flex'
    botao_voltar.setAttribute('onclick', 'mover_final_v()')
}
function mover_quartas_v() {
    quartas.style.display = 'none'
    oitavas.style.display = 'flex'
    botao_avancar.setAttribute('onclick', 'moverdireita()')
    tamanho.style.height = '500px'
}
function mover_semi_v() {
    semi.style.display = 'none'
    quartas.style.display = 'flex'
    botao_avancar.setAttribute('onclick', 'mover_quartas_a()')
    botao_voltar.setAttribute('onclick', 'mover_quartas_v()')
}
function mover_final_v() {
    final.style.display = 'none'
    semi.style.display = 'flex'
    botao_voltar.setAttribute('onclick', 'mover_semi_v()')
    botao_avancar.setAttribute('onclick', 'mover_semi_a()')
}