
var numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sinais = [".", "!", "#", "$", "%", "¨", "&", "*", "(", ")", "_", "+", '"', "'", "-", "=", "{", "}",
    "[", "]", "´", "`", "^", "~", "?", "/", "|", ":", ";", "º", "ª", ","]

//------------------ Verificaçao da Input NOME ------------------------

function verificarNome() {
    //Chamar a função ao sair da input.
    var nome = document.getElementById("iNome").value;
    nome = nome.trim();
    nome = nome.toUpperCase();

    for (let i = 0; i < nome.length; i++) {
        for (let j = 0; j < numeros.length; j++) {
            while (nome.includes(numeros[j])) {
                nome = nome.replace(numeros[j], "");
                document.getElementById("iNome").value = nome;
            }
        }
        for (let k = 0; k < sinais.length; k++) {
            while (nome.includes(sinais[k])) {
                nome = nome.replace(sinais[k], "");
                document.getElementById("iNome").value = nome;
            }
        }
    }

    if (nome == 0) {
        document.getElementById("msgErro").innerHTML = "Nome não pode ser vazio!";
        document.getElementById("iNome").focus();
    } else {
        if (nome.length < 6) {
            document.getElementById("msgErro").innerHTML = "Nome muito curto!";
            document.getElementById("iNome").focus();
        } else {
            if (nome.length >= 6 && !nome.includes(" ")) {
                document.getElementById("msgErro").innerHTML = "Deve haver pelo menos um nome e um sobrenome!";
                document.getElementById("iNome").focus();
            } else {
                if (!nome.includes(" ")) {
                    document.getElementById("msgErro").innerHTML = "Deve haver espaço entre os nomes!";
                    document.getElementById("iNome").focus();
                } else {
                    document.getElementById("iNome").value = nome;
                    document.getElementById("iNome").style.backgroundColor = "lightblue";
                    document.getElementById("msgErro").innerHTML = "";
                }
            }
        }
    }
}

function removerVaziosNome() {
    let nome = document.getElementById("iNome").value;
    if (nome.includes("  ")) {
        nome = nome.replace("  ", " ");
        document.getElementById("iNome").value = nome;
    }
}

//------------------ Verificaçao da Input NASCIMENTO ------------------------

function verificarData() {
    let data = document.getElementById("iData").value;
    let ultValor = data.charAt(data.length - 1);
    //Verificar se o último valor é diferente de número e remover caso sim.
    if (isNaN(ultValor)) {
        data = data.replace(ultValor, "");
        document.getElementById("iData").value = data;
    }
    //Se tiver mais que 10 numeros, copia sempre os 10 primeiros e mantém o 10° número digitado.
    if (data.length > "10") {
        data = data.substring(0, 9);
        document.getElementById("iData").value = data;
    }
    //Remover espaços vazios.
    if (data.includes(" ")) {
        data = data.replace(" ", "");
        document.getElementById("iData").value = data;
    }
    //Verificar se o dia é válido.
    if (data.length == "2") {
        let dia = data.substring(0, 2);
        if (parseInt(dia) < 1 || parseInt(dia) > 31) {
            document.getElementById("msgErro").innerHTML = "Dia " + dia + " não é válido!";
            document.getElementById("iData").value = "";
            document.getElementById("iData").focus();
        } else {
            data = data + "/";
            document.getElementById("iData").value = data;
        }
    } else {//Verificar se o mês é válido.
        if (data.length == "5") {
            let mes = data.substring(3, 5);
            if (parseInt(mes) < 1 || parseInt(mes) > 12) {
                document.getElementById("msgErro").innerHTML = "Mês " + mes + " não é válido!";
                document.getElementById("iData").value = data.substring(0, 3);
                document.getElementById("iData").focus();
            } else {
                data = data + "/";
                document.getElementById("iData").value = data;
            }
        } else {//Verificar se o ano é válido.
            if (data.length == "10") {
                let ano = data.substring(6, 10);
                if (parseInt(ano) < 1900 || parseInt(ano) > 2022) {
                    document.getElementById("msgErro").innerHTML = "Ano " + ano + " não é válido! Valor entre 1900 e 2022";
                    document.getElementById("iData").value = data.substring(0, 6);
                    document.getElementById("iData").focus();
                } else {
                    document.getElementById("msgErro").innerHTML = "";
                }
            }
        }
    }
}

function formatoData() {

    let data = document.getElementById("iData").value;
    data = data.trim();

    if(data.length >= "10") {
        if(
            !isNaN(data.charAt(0)) &&
            !isNaN(data.charAt(1)) &&
            data.charAt(2) == "/" &&
            !isNaN(data.charAt(3)) &&
            !isNaN(data.charAt(4)) &&
            data.charAt(5) == "/" &&
            !isNaN(data.charAt(6)) &&
            !isNaN(data.charAt(7)) &&
            !isNaN(data.charAt(8)) &&
            !isNaN(data.charAt(9))
        ){
            document.getElementById("iData").value = data.substring(0, 10);
            document.getElementById("iData").style.backgroundColor = "lightblue";
        }else{
            document.getElementById("msgErro").innerHTML = "Formato de data Inválido! Padrão: xx/xx/xxxx";
            document.getElementById("iData").focus();
        }
    }else {
        document.getElementById("msgErro").innerHTML = "Formato de data Inválido! Padrão: xx/xx/xxxx";
        document.getElementById("iData").focus();
    }
}

//------------------ Verificaçao da Input iENDEREÇO------------------------

function verificarEndereco() {
    //Chamar função ao sair da input.
    let endereco = document.getElementById("iEndereco").value;
    endereco = endereco.trim();
    endereco = endereco.toUpperCase();


    if (endereco == 0) {
        document.getElementById("msgErro").innerHTML = "O campo endereço não pode ser vazio!";
        //document.getElementById("iCidade").focus();
    } else {
        if (endereco.length < 5) {
            document.getElementById("msgErro").innerHTML = "Nome muito curto!";
            document.getElementById("iEndereco").focus();
        } else {
            if (!endereco.includes("1") && !endereco.includes("2") && !endereco.includes("3") &&
                !endereco.includes("4") && !endereco.includes("5") && !endereco.includes("6") &&
                !endereco.includes("7") && !endereco.includes("8") && !endereco.includes("9") &&
                !endereco.includes("0")) {
                document.getElementById("msgErro").innerHTML = "O endereço deve conter um número!";
                document.getElementById("iEndereco").focus();
            } else {
                document.getElementById("iEndereco").value = endereco;
                document.getElementById("iEndereco").style.backgroundColor = "lightblue";
                document.getElementById("msgErro").innerHTML = "";
            }
        }
    }
}

//------------------ Verificaçao da Input CIDADE & BAIRRO------------------------

function verificarLugar(idInput) {

    let lugar = document.getElementById(idInput).value;
    lugar = lugar.trim();
    lugar = lugar.toUpperCase();

    for (let i = 0; i < lugar.length; i++) {
        let valPosicao = lugar.charAt(i);
        if (numeros.includes(valPosicao) || sinais.includes(valPosicao)) {
            while (lugar.includes(valPosicao)) {
                lugar = lugar.replace(valPosicao, "");
                i--;
            }
        }
        document.getElementById(idInput).value = lugar;
    }


    if (lugar == 0) {
        document.getElementById("msgErro").innerHTML = "Não pode ser vazio!";
        //document.getElementById("iCidade").focus();
    } else {
        if (lugar.length < 3) {
            document.getElementById("msgErro").innerHTML = "Nome muito curto!";
            document.getElementById(idInput).focus();
        } else {
            document.getElementById(idInput).value = lugar;
            document.getElementById(idInput).style.backgroundColor = "lightblue";
            document.getElementById("msgErro").innerHTML = "";
        }
    }
}

function removerVaziosLugar(idInput) {
    let lugar = document.getElementById(idInput).value;
    if (lugar.includes("  ")) {
        lugar = lugar.replace("  ", " ");
        document.getElementById(idInput).value = lugar;
    }
}

//---------------------- Verificaçao da Input EMAIL------------------------

function verificarEmail() {

    var email = document.getElementById("iEmail").value;
    email = email.trim();
    document.getElementById("iEmail").value = email;

    if (email == 0) {
        document.getElementById("msgErro").innerHTML = "E-mail não pode ser vazio."
    } else {
        if (!email.includes("@")) {
            document.getElementById("msgErro").innerHTML = "Email sem '@'";
            document.getElementById("iEmail").focus();
        } else {
            if (email.indexOf("@") != email.lastIndexOf("@")) {
                document.getElementById("msgErro").innerHTML = "Email com mais de um '@'"
                document.getElementById("iEmail").focus();
            } else {
                if (email.charAt(0) == "@" || email.charAt((email.length - 1)) == "@") {
                    document.getElementById("msgErro").innerHTML = "Não pode iniciar ou finalizar'@'"
                    document.getElementById("iEmail").focus();
                } else {
                    if (!isNaN(email.charAt(0)) || !isNaN(email.charAt((email.length - 1)))) {
                        document.getElementById("msgErro").innerHTML = "Não pode iniciar ou finalizar com número."
                        document.getElementById("iEmail").focus();
                    } else {
                        if (email.indexOf("@") && email.charAt(email.indexOf("@") + 1) == "." || email.indexOf("@") && email.charAt(email.indexOf("@") - 1) == ".") {
                            document.getElementById("msgErro").innerHTML = "Não pode ter '.' antes ou após '@'.";
                            document.getElementById("iEmail").focus();
                        } else {
                            if (email.includes(" ")) {
                                document.getElementById("msgErro").innerHTML = "Não pode conter espaços vazios no e-mail."
                                document.getElementById("iEmail").focus();
                            } else {
                                let inicio = email.charAt(0);
                                let fim = email.charAt(email.length - 1);
                                if (verificarInicioFim(inicio, fim)) {
                                    document.getElementById("msgErro").innerHTML = "Não pode iniciar ou finalizar com caracteres!";
                                    document.getElementById("iEmail").focus();
                                } else {
                                    document.getElementById("iEmail").style.backgroundColor = "lightblue";
                                    document.getElementById("msgErro").innerHTML = "";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function verificarInicioFim(pCaractere, uCaractere) {

    switch (pCaractere) {
        case ".":
        case "!":
        case "#":
        case "$":
        case "%":
        case "¨":
        case "&":
        case "*":
        case "(":
        case ")":
        case "_":
        case "+":
        case '"':
        case "'":
        case "-":
        case "=":
        case "{":
        case "}":
        case "[":
        case "]":
        case "´":
        case "`":
        case "^":
        case "~":
        case "?":
        case "/":
        case "|":
        case ":":
        case ";":
        case "º":
        case "ª":
            return true;
            break;
        default:
    }

    switch (uCaractere) {
        case ".":
        case "!":
        case "#":
        case "$":
        case "%":
        case "¨":
        case "&":
        case "*":
        case "(":
        case ")":
        case "_":
        case "+":
        case '"':
        case "'":
        case "-":
        case "=":
        case "{":
        case "}":
        case "[":
        case "]":
        case "´":
        case "`":
        case "^":
        case "~":
        case "?":
        case "/":
        case "|":
        case ":":
        case ";":
        case "º":
        case "ª":
            return true;
            break;
        default:
    }
}

//-------------Botão ENVIAR (verificar se existe inputs vazias)--------------

function verificarInputsVazias() {
    if (
        document.getElementById("iNome").value == 0
        //document.getElementById("iData").value == 0 || 
        //document.getElementById("iEndereco").value == 0 || 
        //document.getElementById("iBairro").value == 0 || 
        //document.getElementById("iCidade").value == 0 || 
        //document.getElementById("iEmail").value == 0 || 
        //document.getElementById("iMensagem").value == 0  
        //document.getElementsByName("iGenero").value == 0 
    ) {

        document.getElementById("msgErro2").innerHTML = "Existe um ou mais campos vazios!";
    } else {
        //document.getElementById("formularioContato").action="contatoRecebido.html";
        //document.getElementById("formularioContato").method="POST";
    }

}

//---------------------------------------------------------------------------
//--------------------------FUNÇAO para mudar Estilo(CSS)--------------------
function corDeFundo(box) {

    switch (box) {
        case "1":
            document.getElementById("iNome").style.backgroundColor = "white";
            break;
        case "2":
            document.getElementById("iData").style.backgroundColor = "white";
            break;
        case "3":
            document.getElementById("iEndereco").style.backgroundColor = "white";
            break;
        case "4":
            document.getElementById("iBairro").style.backgroundColor = "white";
            break;
        case "5":
            document.getElementById("iCidade").style.backgroundColor = "white";
            break;
        case "6":
            document.getElementById("iEmail").style.backgroundColor = "white";
            break;
        default:
    }
}


