var numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sinais = [".", "!", "#", "$", "%", "¨", "&", "*", "(", ")", "_", "+", '"', "'", "-", "=", "{", "}",
    "[", "]", "´", "`", "^", "~", "?", "/", "|", ":", ";", "º", "ª", ","]


//------------------ Verificaçao da Input NOME ------------------------

function verificarNome(idInput) {
    //Chamar a função ao sair da input.
    var nome = document.getElementById(idInput).value;
    nome = nome.trim();
    nome = nome.toUpperCase();

    for (let i = 0; i < nome.length; i++) {
        for (let j = 0; j < numeros.length; j++) {
            while (nome.includes(numeros[j])) {
                nome = nome.replace(numeros[j], "");
                document.getElementById(idInput).value = nome;
            }
        }
        for (let k = 0; k < sinais.length; k++) {
            while (nome.includes(sinais[k])) {
                nome = nome.replace(sinais[k], "");
                document.getElementById(idInput).value = nome;
            }
        }
    }

    if (nome == 0) {
        document.getElementById("msgErro").innerHTML = "Nome não pode ser vazio!";
        document.getElementById(idInput).focus();
        erro(idInput);
    } else {
        if (nome.length < 6) {
            document.getElementById("msgErro").innerHTML = "Nome muito curto!";
            document.getElementById(idInput).focus();
            erro(idInput);
        } else {
            if (nome.length >= 6 && !nome.includes(" ")) {
                document.getElementById("msgErro").innerHTML = "Deve haver pelo menos um nome e um sobrenome!";
                document.getElementById(idInput).focus();
                erro(idInput);
            } else {
                if (!nome.includes(" ")) {
                    document.getElementById("msgErro").innerHTML = "Deve haver espaço entre os nomes!";
                    document.getElementById(idInput).focus();
                    erro(idInput);
                } else {
                    document.getElementById(idInput).value = nome;
                    document.getElementById(idInput).style.backgroundColor = "lightblue";
                    document.getElementById("msgErro").innerHTML = "";
                }
            }
        }
    }
}
//Função para remover vazios ao digitar
function removerVaziosNome(idInput) {
    let nome = document.getElementById(idInput).value;
    if (nome.includes("  ")) {
        nome = nome.replace("  ", " ");
        document.getElementById(idInput).value = nome;
    }
}


//------------------ Verificaçao das Inputs de DATAS ------------------------

//Chamar função ao digitar na input.
function verificarData(idInput) {
    let data = document.getElementById(idInput).value;
    let ultValor = data.charAt(data.length - 1);
    //Verificar se o último valor é diferente de número e remover caso sim.
    if (isNaN(ultValor)) {
        data = data.replace(ultValor, "");
        document.getElementById(idInput).value = data;
    }
    //Se tiver mais que 10 numeros, copia sempre os 10 primeiros e mantém o 10° número digitado.
    if (data.length > "10") {
        data = data.substring(0, 9);
        document.getElementById(idInput).value = data;
    }
    //Remover espaços vazios.
    if (data.includes(" ")) {
        data = data.replace(" ", "");
        document.getElementById(idInput).value = data;
    }
    //Verificar se o dia é válido.
    if (data.length == "2") {
        let dia = data.substring(0, 2);
        if (parseInt(dia) < 1 || parseInt(dia) > 31) {
            document.getElementById("msgErro").innerHTML = "Dia " + dia + " não é válido!";
            document.getElementById(idInput).value = "";
            document.getElementById(idInput).focus();

        } else {
            data = data + "/";
            document.getElementById(idInput).value = data;
        }
    } else {//Verificar se o mês é válido.
        if (data.length == "5") {
            let mes = data.substring(3, 5);
            if (parseInt(mes) < 1 || parseInt(mes) > 12) {
                document.getElementById("msgErro").innerHTML = "Mês " + mes + " não é válido!";
                document.getElementById(idInput).value = data.substring(0, 3);
                document.getElementById(idInput).focus();
            } else {
                data = data + "/";
                document.getElementById(idInput).value = data;
            }
        } else {//Verificar se o ano é válido.
            if (data.length == "10") {
                let ano = data.substring(6, 10);
                if (parseInt(ano) < 1900 || parseInt(ano) > 2022) {
                    document.getElementById("msgErro").innerHTML = "Ano " + ano + " não é válido! Valor entre 1900 e 2022";
                    document.getElementById(idInput).value = data.substring(0, 6);
                    document.getElementById(idInput).focus();
                } else {
                    document.getElementsById("msgErro").innerHTML = "";
                }
            }
        }
    }
}

function formatoData(idInput) {
    //Chamar a função ao sair da input.
    let data = document.getElementById(idInput).value;
    data = data.trim();

    if (data.length >= "10") {
        if (
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
        ) {
            document.getElementById(idInput).value = data.substring(0, 10);
            document.getElementById(idInput).style.backgroundColor = "lightblue";
        }else{
            document.getElementById("msgErro").innerHTML = "Formato de data Inválido! Padrão: xx/xx/xxxx";
            document.getElementById(idInput).focus();
            erro(idInput);
        }
    } else {
        document.getElementById("msgErro").innerHTML = "Formato de data Inválido! Padrão: xx/xx/xxxx";
        document.getElementById(idInput).focus();
        erro(idInput);

    }
}

//---------------------- Verificaçao da Input EMAIL------------------------

function verificarEmail() {

    var email = document.getElementById("iEmail").value;
    email = email.trim();
    document.getElementById("iEmail").value = email;

    if (email == 0) {
        document.getElementById("msgErro").innerHTML = "E-mail não pode ser vazio."
        document.getElementById("iEmail").focus();
        erro('iEmail');
    } else {
        if (!email.includes("@")) {
            document.getElementById("msgErro").innerHTML = "Email sem '@'";
            document.getElementById("iEmail").focus();
            erro('iEmail');
        } else {
            if (email.indexOf("@") != email.lastIndexOf("@")) {
                document.getElementById("msgErro").innerHTML = "Email com mais de um '@'"
                document.getElementById("iEmail").focus();
                erro('iEmail');
            } else {
                if (email.charAt(0) == "@" || email.charAt((email.length - 1)) == "@") {
                    document.getElementById("msgErro").innerHTML = "Não pode iniciar ou finalizar'@'"
                    document.getElementById("iEmail").focus();
                    erro('iEmail');
                } else {
                    if (!isNaN(email.charAt(0)) || !isNaN(email.charAt((email.length - 1)))) {
                        document.getElementById("msgErro").innerHTML = "Não pode iniciar ou finalizar com número."
                        document.getElementById("iEmail").focus();
                        erro('iEmail');
                    } else {
                        if (email.indexOf("@") && email.charAt(email.indexOf("@") + 1) == "." || email.indexOf("@") && email.charAt(email.indexOf("@") - 1) == ".") {
                            document.getElementById("msgErro").innerHTML = "Não pode ter '.' antes ou após '@'.";
                            document.getElementById("iEmail").focus();
                            erro('iEmail');
                        } else {
                            if (email.includes(" ")) {
                                document.getElementById("msgErro").innerHTML = "Não pode conter espaços vazios no e-mail."
                                document.getElementById("iEmail").focus();
                                erro('iEmail');
                            } else {
                                let inicio = email.charAt(0);
                                let fim = email.charAt(email.length - 1);
                                if (verificarInicioFim(inicio, fim)) {
                                    document.getElementById("msgErro").innerHTML = "Não pode iniciar ou finalizar com caracteres!";
                                    document.getElementById("iEmail").focus();
                                    erro('iEmail');
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
//Função é chamada dentro da função verificar e-mail.
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

//------------------ Verificaçao da Input CELULAR ------------------------

function verificarCel() {
    //Chamar esta função ao digitar na input.
    let cel = document.getElementById("iCel").value;
    let ultValor = cel.charAt(cel.length - 1);
    //Verificar se o último valor é diferente de número e remover caso sim.
    if (isNaN(ultValor)) {
        cel = cel.replace(ultValor, "");
        document.getElementById("iCel").value = cel;
    }

    if (cel.length == "2") {
        cel = "(" + cel.substring(0, 2) + ")";
        document.getElementById("iCel").value = cel;
    }

    if (cel.length == "9") {
        cel = cel.substring(0, 9) + "-";
        document.getElementById("iCel").value = cel;
    }

    //Se tiver mais que 11 numeros, copia sempre os 10 primeiros e mantém o 11° número digitado.
    if (cel.length > "13") {
        cel = cel.substring(0, 13);
        document.getElementById("iCel").value = cel;
    }
    //Remover espaços vazios.
    if (cel.includes(" ")) {
        cel = cel.replace(" ", "");
        document.getElementById("iCel").value = cel;
    }
    //Verifica se existe os números em sequencia inválidos.
    if (
        cel == "(00)00000-000" ||
        cel == "(11)11111-111" ||
        cel == "(22)22222-222" ||
        cel == "(33)33333-333" ||
        cel == "(44)44444-444" ||
        cel == "(55)55555-555" ||
        cel == "(66)66666-666" ||
        cel == "(77)77777-777" ||
        cel == "(88)88888-888" ||
        cel == "(99)99999-999") {
        document.getElementById("msgErro").innerHTML = "Celular inválido!";
        document.getElementById("iCel").value = "";
    }
}


function formatoCel() {
    //Chamar função ao sair da input.
    let cel = document.getElementById("iCel").value;
    cel = cel.trim();

    //Verificar e não tem valor digitado.
    if (cel.length == "0") {
        document.getElementById("msgErro").innerHTML = "Este campo não pode ser vazio!";
        document.getElementById("iCel").focus();
        erro('iCel');
    } else {
        //Verificar se menor que 14 digitos.
        if (cel.length < "14") {
            document.getElementById("iCel").focus();
            document.getElementById("msgErro").innerHTML = "Formato inválido! Informar celular com 9 números!";
            erro('iCel');
        } else {
            //Verificar se possui 14 digitos e no formato (xx)xxxxx-xxxx sendo x números.
            if (cel.length = "14") {
                if (
                    cel.charAt(0) == "(" &&
                    !isNaN(cel.charAt(1)) &&
                    !isNaN(cel.charAt(2)) &&
                    cel.charAt(3) == ")" &&
                    !isNaN(cel.charAt(4)) &&
                    !isNaN(cel.charAt(5)) &&
                    !isNaN(cel.charAt(6)) &&
                    !isNaN(cel.charAt(7)) &&
                    !isNaN(cel.charAt(8)) &&
                    cel.charAt(9) == "-" &&
                    !isNaN(cel.charAt(10)) &&
                    !isNaN(cel.charAt(11)) &&
                    !isNaN(cel.charAt(12)) &&
                    !isNaN(cel.charAt(13))
                ) {
                    document.getElementById("iCel").value = cel;
                    document.getElementById("iCel").style.backgroundColor = "lightblue";
                    document.getElementById("msgErro").innerHTML = "";
                } else {
                    //Verifica se tem 14 digitos, porém não está no padrão correto. 
                    document.getElementById("msgErro").innerHTML = "Formato Inválido! Seguir modelo: (21)98465-8765";
                    document.getElementById("iCel").focus();
                    erro('iCel');
                }
            }
        }
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
        document.getElementById("iEndereco").focus();
        erro('iEndereco');
    } else {
        if (endereco.length < 5) {
            document.getElementById("msgErro").innerHTML = "Nome muito curto!";
            document.getElementById("iEndereco").focus();
            erro('iEndereco');
        } else {
            if (!endereco.includes("1") && !endereco.includes("2") && !endereco.includes("3") &&
                !endereco.includes("4") && !endereco.includes("5") && !endereco.includes("6") &&
                !endereco.includes("7") && !endereco.includes("8") && !endereco.includes("9") &&
                !endereco.includes("0")) {
                document.getElementById("msgErro").innerHTML = "O endereço deve conter um número!";
                document.getElementById("iEndereco").focus();
                erro('iEndereco');
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
        document.getElementById("iCidade").focus();
        erro(idInput);
    } else {
        if (lugar.length < 3) {
            document.getElementById("msgErro").innerHTML = "Nome muito curto!";
            document.getElementById(idInput).focus();
            erro(idInput);
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

//------------------ Verificaçao da Input DESCRIÇÃO ATIVIDADES------------------------

function descAtividades(idInput) {
    let atividades = document.getElementById(idInput).value;
    atividades = atividades.trim();
    if (atividades == 0) {
        document.getElementById("msgErro").innerHTML = "Favor descrever as atividades exercidas.";
        document.getElementById(idInput).focus();
    } else {
        if (atividades.length < 50) {
            document.getElementById("msgErro").innerHTML = "O texto deve conter pelo menos 50 caracteres.";
            document.getElementById(idInput).focus();
        }
    }

}

function erro(idInput) {
    document.getElementById(idInput).style.backgroundColor = "yellow";
}