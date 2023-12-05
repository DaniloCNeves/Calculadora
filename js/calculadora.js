//Variáveis Globais
var visor = document.getElementById("visor");
var historico = document.getElementById("historico");

var tagValor = "<span class='valor'>";
var tagSimbol = "<span class='simbolos'>";
var tagTotal = "<span class='resultado'>";
var fechaSpan = "</span>";

var operador;
var valor1;

//Botões ----------------------------------------

function btn(valor){
    visor.value += valor;
}

function btnOp(op){
    valor1 = getVisor();
    historico.innerHTML += tagValor + visor.value + fechaSpan +
                          " "+ tagSimbol + op + fechaSpan +
                          " ";
    setVisor("");
    operador = op;
}

function btnIgual(){
        
    calcula(getVisor(),operador);
    $(".operador").removeClass("clicado")

}

function btnVirgula(){
    if(visor.value.indexOf(",") < 0){
        visor.value += ",";
    }
}

//===========================================

//Calculos----------------------------------
function calcula(valor2,operador){

    let total = 0;
    switch(operador){
        case "+":
            total = soma(valor1,valor2);
            break;//interrompe o case
        case "-":
            total = subtrai(valor1,valor2);
            break;
        case "*":
            total = multiplica(valor1, valor2);
            break;
        case "/":
            total = divide(valor1,valor2);
    }
    let v = visor.value;
    
    setVisor(total);
    historico.innerHTML += tagValor + v + fechaSpan + 
                           tagSimbol + " = " + fechaSpan +
                           tagTotal + visor.value + fechaSpan +
                          "<br><hr>";
}
function soma(v1, v2){
    return v1 + v2;
}
function subtrai(v1, v2){
    return v1 - v2;
}
function multiplica(v1, v2){
    return v1 * v2;
}
function divide(v1, v2){
    if(v2 == "0")
        return 0;

    return v1 / v2;
}
function inverteSinal(){
    setVisor(getVisor() * (-1));
}
function btnPorcento(){
    let total = valor1 * getVisor() /100;
    setVisor(total);
}
function btnPotencia(){
    //setVisor(getVisor()*getVisor());
    setVisor(Math.pow(getVisor(),2));
}
function btnRaiz(){
    setVisor(Math.sqrt(getVisor()));
}
//==========================================

//Manipular VISOR--------------------------
function getVisor(){//pega o valor do visor como número
    let valor = visor.value.replace(",",".");
    return Number(valor);
}

function setVisor(valor){//envia para o visor como texto
    visor.value = valor;
    visor.value = visor.value.replace(".",",");
}

function btnApaga(){
    let v = visor.value;
    visor.value = v.slice(0,-1);
}
//=======================================

//Operações da Calculadora---------------
function btnC(){
    setVisor("");
    operador = "";
    valor1 = 0;
    historico.innerHTML = "";
}

function btnCE(){
    setVisor("");
}
//========================================