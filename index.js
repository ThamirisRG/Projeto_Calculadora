function somar () {
    var tn1 = document.getElementById('txtn1');
    var tn2 = document.querySelector('input#txtn2');
    var res = document.getElementById('res');
    // nesta parte a gente tem que especificar qual o tipo primitivo queremos usar se não ira acontecer uma concatenação.
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 + n2;
    res.innerHTML = ` A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong> !`;


}
function diferenca() {
    var td1 = document.getElementById('tdtn1');
    var td2 = document.querySelector('input#tdtn2');
    var resto = document.querySelector('div#resto');

    var d1 = Number(td1.value);
    var d2 = Number(td2.value);
    var d = d1 - d2;
    resto.innerHTML = ` A diferença entre ${d1} e ${d2} é igual <strong>${d}</strong> !`;
}
function multiplicar() {
    var tm1 = document.getElementById('tmtn1');
    var tm2 = document.querySelector('input#tmtn2');
    var vezes = document.querySelector('div#vezes');

    var m1 = Number(tm1.value);
    var m2 = Number(tm2.value);
    var m = m1 * m2;
    vezes.innerHTML = ` A multiplicação entre ${m1} e ${m2} é igual a <strong> ${m} </strong> !`;
}
function dividir() {
    var dvt1 = document.getElementById('dvtn1');
    var dvt2 = document.querySelector('input#dvtn2');
    var divisao = document.querySelector('div#divisao');

    var dv1 = Number(dvt1.value);
    var dv2 = Number(dvt2.value);
    var d = dv1 / dv2;
    divisao.innerHTML = ` A divisão entre ${dv1} e ${dv2} é igua a <strong> ${d} </strong> ! `;
}
function modulo() {
    var mdt1 = document.getElementById('mdtn1');
    var mdt2 = document.querySelector('input#mdtn2');
    var mode = document.querySelector('div#mode');

    var md1 = Number(mdt1.value);
    var md2 = Number(mdt2.value);
    var md = md1 % md2;
    mode.innerHTML = ` A modulação entre ${md1} e ${md2} é igual a <strong> ${md} </strong> !`;
}
function potencia() {
    var expt1 = document.getElementById('exptn1');
    var expt2 = document.querySelector('input#exptn2');
    var potencia = document.querySelector('div#potencia');

    var exp1 = Number(expt1.value);
    var exp2 = Number(expt2.value);
    var exp = exp1 ** exp2;
    potencia.innerHTML = ` A potenciação entre ${exp1} e ${exp2} é igual a <strong> ${exp} </strong> ! `;
}
function send() {
    var mensagem = document.getElementById('saudacao').value;
    var envio = document.querySelector('div#envio');

   envio.innerHTML = ` Calculadora criada por <strong> ${mensagem} </strong> com sucesso !`;
}