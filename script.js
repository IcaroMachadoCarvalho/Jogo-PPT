let escolhaJogador;
let escolhaComputador;
let placarJ = 0;
let placarC = 0;
const placarJogador = document.getElementById("placar-jogador");
placarJogador.innerHTML = placarJ;
const placarComputador = document.getElementById("placar-computador");
placarComputador.innerHTML = placarC;
let rodadaAcabou = false;
let opcaoOne = document.getElementById("opcoes-jogador-pedra");
let opcaoTwo = document.getElementById("opcoes-jogador-papel");
let opcaoThree = document.getElementById("opcoes-jogador-tesoura");
const imagemEscolhaJogador = document.getElementById("img-jogador");
const imagemEscolhacomputador = document.getElementById("img-computador");
const ladoComputador = document.getElementById("escolha-jogador-computador");
const resultado = document.getElementById("resultado");

function selecionarOpcao(){
    switch(true){
        case opcaoOne.checked && rodadaAcabou == false:
            imagemEscolhaJogador.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspXHHtbLLELOjTr_Qf63exDbSM2nsriRTVA&usqp=CAU";
            situacaoBtn(2,"off");
            break;
        case opcaoTwo.checked && rodadaAcabou == false:
            imagemEscolhaJogador.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBKyo4QNbO_UCaTEhpSACbb6KrktofAkkhg&usqp=CAU";
            situacaoBtn(2,"off");
            break;
        case opcaoThree.checked && rodadaAcabou == false:
            imagemEscolhaJogador.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2N8YNUTuYpkK74FZS3KYZdKQ_Mmq5N8m9hA&usqp=CAU";
            situacaoBtn(2,"off");
            break;
       case opcaoOne.checked && rodadaAcabou == true:
            situacaoBtn(2,"on");
            imagemEscolhaJogador.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspXHHtbLLELOjTr_Qf63exDbSM2nsriRTVA&usqp=CAU";
            break;
        case opcaoTwo.checked && rodadaAcabou == true:
            situacaoBtn(2,"on");
            imagemEscolhaJogador.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBKyo4QNbO_UCaTEhpSACbb6KrktofAkkhg&usqp=CAU";
            break;
        case opcaoThree.checked && rodadaAcabou == true:
            situacaoBtn(2,"on");
            imagemEscolhaJogador.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2N8YNUTuYpkK74FZS3KYZdKQ_Mmq5N8m9hA&usqp=CAU";
            break;
       default:
            imagemEscolhaJogador.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921";
            break;
    }
}

function selecaoComputador(){
    if(escolhaComputador == 1){
        ladoComputador.innerHTML = "Pedra";
        imagemEscolhacomputador.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspXHHtbLLELOjTr_Qf63exDbSM2nsriRTVA&usqp=CAU";
        return "pedra";
    }else if( escolhaComputador == 2){
        ladoComputador.innerHTML = "Papel";
        imagemEscolhacomputador.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBKyo4QNbO_UCaTEhpSACbb6KrktofAkkhg&usqp=CAU";
        return "papel";
    }else if(escolhaComputador == 3){
        ladoComputador.innerHTML = "Tesoura"; 
        imagemEscolhacomputador.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2N8YNUTuYpkK74FZS3KYZdKQ_Mmq5N8m9hA&usqp=CAU";
        return "tesoura";
    }
}

function marcarPontos(j,c){
    switch(true){
        case j == c:
            resultado.innerHTML = "Empate!"
            console.log("empate");
            break;
        case j == "pedra" &&  c == "tesoura" || j == "papel" && c == "pedra" || j == "tesoura" && c == "papel":
            resultado.innerHTML = "Ganhou!"
            placarJ +=1;
            placarJogador.innerHTML = placarJ;
            console.log("ganhou");
            break;
        case j == "pedra" &&  c == "papel" || j == "papel" && c == "tesoura" || j == "tesoura" && c == "pedra":
            resultado.innerHTML = "Perdeu!"
            placarC +=1;
            placarComputador.innerHTML = placarC;
            console.log("perdeu");
            break;
        case j == 0 && c == 1:
            placarJ = 0;
            placarC = 0;
            placarJogador.innerHTML = placarJ;
            placarComputador.innerHTML = placarJ;
            break;
    }
    console.log(placarJ,placarC);
    rodadaAcabou = true;
    situacaoBtn(2,"on");
}

function situacaoBtn(btn,situacao){
    const btnIniciar = document.getElementById("botao-iniciar");
    const btnContinuar = document.querySelector('#botao-continuar');
    if( btn == 1 && situacao == "off"){
        btnIniciar.setAttribute('disabled','disabled');
    }else if(btn == 1 && situacao == "on"){
        btnIniciar.removeAttribute('disabled');
    }else if(btn == 2 && situacao == "off"){
        btnContinuar.setAttribute('disabled','disabled');
    }
    else if(btn == 2 && situacao == "on"){
        btnContinuar.removeAttribute('disabled');
    }
}

const btnIniciar = document.getElementById("botao-iniciar").onclick = function(){
    if(!opcaoOne.checked && !opcaoTwo.checked && !opcaoThree.checked){
        window.alert("Selecione pelo menos uma das opções!");  
    }else if(opcaoOne.checked){// Pedra
        escolhaJogador = "pedra";
        console.log("pedra");
        escolhaComputador = Math.floor(Math.random()*3) + 1;
        selecaoComputador();
        marcarPontos(escolhaJogador,selecaoComputador());
        situacaoBtn(1,"off");
    }else if(opcaoTwo.checked){//Papel
        escolhaJogador = "papel";
        console.log("papel");
        escolhaComputador = Math.floor(Math.random()*3) + 1;
        selecaoComputador();
        marcarPontos(escolhaJogador,selecaoComputador());
        situacaoBtn(1,"off");
    }else{// Tesoura
        escolhaJogador = "tesoura";
        console.log("tesoura");
        escolhaComputador = Math.floor(Math.random()*3) + 1;
        selecaoComputador();
        marcarPontos(escolhaJogador,selecaoComputador());
        situacaoBtn(1,"off");
    }
}

const btnReset = document.querySelector('#botao-reiniciar').onclick = function (){
    opcaoOne.checked = false;
    opcaoTwo.checked = false;
    opcaoThree.checked = false;
    ladoComputador.innerHTML = "Preparando Lance";
    marcarPontos(0,1);
    placarJogador.innerHTML = 0;
    placarComputador.innerHTML = 0;
    imagemEscolhaJogador.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921";
    imagemEscolhacomputador.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921";
    resultado.innerHTML = "Desafie!";
    situacaoBtn(1,"on");
}

const btnContinuar = document.querySelector('#botao-continuar').onclick = function (){
    rodadaAcabou = false;
    opcaoOne.checked = false;
    opcaoTwo.checked = false;
    opcaoThree.checked = false;
    ladoComputador.innerHTML = "Preparando Lance";
    imagemEscolhaJogador.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921";
    imagemEscolhacomputador.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921";
    resultado.innerHTML = "Desafie!";
    situacaoBtn(1,"on");
}