//Carrossel de imagens.
var i = 0;
var imagens = [];
imagens.push("_img/revisao-mecanica.jpg");
imagens.push("_img/alinhamento.jpg");
imagens.push("_img/balanceamento.jpg");
imagens.push("_img/cambagem.jpg");
imagens.push("_img/troca-oleo.png");
imagens.push("_img/higienização.jpg");

function anterior(){
    i--;
    if(i<0){
        i = (imagens.length-1);
    }
    document.getElementById("itela").src= imagens[i];

    switch(i){
        case 0:
            document.getElementById("nomeServico").innerHTML = "REVISÃO MECÂNICA & ELÉTRICA";
            break;
        case 1:
            document.getElementById("nomeServico").innerHTML = "ALINHAMENTO";
            break;
        case 2:
            document.getElementById("nomeServico").innerHTML = "CAMBAGEM";
            break;
        case 3:
            document.getElementById("nomeServico").innerHTML = "BALANCEAMENTO";
            break;
        case 4:
            document.getElementById("nomeServico").innerHTML = "TROCA DE ÓLEO";
            break;
        case 5:
            document.getElementById("nomeServico").innerHTML = "HIGIENIZAÇÃO";
            break;
    }
    
}   

function proximo(){
    i++;
    if(i>(imagens.length - 1)){
        i = 0;
    }
    document.getElementById("itela").src= imagens[i];

    switch(i){
        case 0:
            document.getElementById("nomeServico").innerHTML = "REVISÃO MECÂNICA & ELÉTRICA";
            break;
        case 1:
            document.getElementById("nomeServico").innerHTML = "ALINHAMENTO";
            break;
        case 2:
            document.getElementById("nomeServico").innerHTML = "CAMBAGEM";
            break;
        case 3:
            document.getElementById("nomeServico").innerHTML = "BALANCEAMENTO";
            break;
        case 4:
            document.getElementById("nomeServico").innerHTML = "TROCA DE ÓLEO";
            break;
        case 5:
            document.getElementById("nomeServico").innerHTML = "HIGIENIZAÇÃO";
            break;
    }
    
    
}