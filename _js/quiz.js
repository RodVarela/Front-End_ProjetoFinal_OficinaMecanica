var pontuacao = 0;

function conferirResultado() {
    var resp1 = document.getElementById("ano2").checked;
    var resp2 = document.getElementById("cidade3").checked;
    var resp3 = document.getElementById("atividade2").checked;
    var resp4 = document.getElementById("loja1").checked;
    var resp5 = document.getElementById("meta1").checked;

    if (resp1) {
        pontuacao = pontuacao + 1;
        document.getElementById("pergunta1").style.border = "3px solid green";
        document.getElementById("pergunta1").style.backgroundColor = "lightgreen";
        document.getElementById("ano1").disabled="true";
        document.getElementById("ano3").disabled="true";
    } else {
        document.getElementById("pergunta1").style.border = "3px solid red";
        document.getElementById("pergunta1").style.backgroundColor = "lightSalmon";
        document.getElementById("ano1").disabled="true";
        document.getElementById("ano2").disabled="true";
        document.getElementById("ano3").disabled="true";
        document.getElementById("anoC").style.color = "blue";
    }

    if (resp2) {
        pontuacao = pontuacao + 1;
        document.getElementById("pergunta2").style.border = "3px solid green";
        document.getElementById("pergunta2").style.backgroundColor = "lightgreen";
        document.getElementById("cidade1").disabled="true";
        document.getElementById("cidade2").disabled="true";
    } else {
        document.getElementById("pergunta2").style.border = "3px solid red";
        document.getElementById("pergunta2").style.backgroundColor = "lightSalmon";
        document.getElementById("cidade1").disabled="true";
        document.getElementById("cidade2").disabled="true";
        document.getElementById("cidade3").disabled="true";
        document.getElementById("cidadeC").style.color = "blue";
    }
    
    if (resp3) {
        pontuacao = pontuacao + 1;
        document.getElementById("pergunta3").style.border = "3px solid green";
        document.getElementById("pergunta3").style.backgroundColor = "lightgreen";
        document.getElementById("atividade1").disabled="true";
        document.getElementById("atividade3").disabled="true";
    } else {
        document.getElementById("pergunta3").style.border = "3px solid red";
        document.getElementById("pergunta3").style.backgroundColor = "lightSalmon";
        document.getElementById("atividade1").disabled="true";
        document.getElementById("atividade2").disabled="true";
        document.getElementById("atividade3").disabled="true";
        document.getElementById("servicoC").style.color = "blue";
    }
    
    if (resp4) {
        pontuacao = pontuacao + 1;
        document.getElementById("pergunta4").style.border = "3px solid green";
        document.getElementById("pergunta4").style.backgroundColor = "lightgreen";
        document.getElementById("loja2").disabled="true";
        document.getElementById("loja3").disabled="true";
    } else {
        document.getElementById("pergunta4").style.border = "3px solid red";
        document.getElementById("pergunta4").style.backgroundColor = "lightSalmon";
        document.getElementById("loja1").disabled="true";
        document.getElementById("loja2").disabled="true";
        document.getElementById("loja3").disabled="true";
        document.getElementById("lojaC").style.color = "blue";
    }
    if (resp5) {
        pontuacao = pontuacao + 1;
        document.getElementById("pergunta5").style.border = "3px solid green";
        document.getElementById("pergunta5").style.backgroundColor = "lightgreen";
        document.getElementById("meta2").disabled="true";
        document.getElementById("meta3").disabled="true";
    } else {
        document.getElementById("pergunta5").style.border = "3px solid red";
        document.getElementById("pergunta5").style.backgroundColor = "lightSalmon";
        document.getElementById("meta1").disabled="true";
        document.getElementById("meta2").disabled="true";
        document.getElementById("meta3").disabled="true";
        document.getElementById("metaC").style.color = "blue";
    }


    if (pontuacao == "5") {
        document.getElementById("resultado").innerHTML = "PARABÉNS. VOCÊ ACERTOU TODAS AS RESPOSTAS!<br>DIGITE O CÓDIGO PROMOCIONAL ABAIXO NO AGENDAMENTO DE UM SERVICO.<br><b>Y8GH77T5</b>";
        document.getElementById("resultado").style.backgroundColor = "green";
        document.getElementById("resultado").style.border = "1px solid white"


    } else {
        document.getElementById("resultado").innerHTML = "INFELIZMENTE VOCÊ NÃO GANHOU! TENTE EM UMA OUTRA OPORTUNIDADE!<br>ATÉ MAIS!";
        document.getElementById("resultado").style.backgroundColor = "red";
        document.getElementById("resultado").style.border = "1px solid white"
        document.getElementById("resultado").style.marginBottom = "10px"
    }

    document.getElementById("resultado").style.color = "white";
    document.getElementById("resultado").style.textAlign = "center";

}
