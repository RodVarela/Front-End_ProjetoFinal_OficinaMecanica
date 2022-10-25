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
            if (nome.includes(numeros[j])) {
                nome = nome.replace(numeros[j], "");
                document.getElementById("iNome").value = nome;
            }
        }
        for (let k = 0; k < sinais.length; k++) {
            if (nome.includes(sinais[k])) {
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

//------------------ Verificaçao da Input CPF ------------------------

function verificarCPF() {
    //Chamar esta função ao digitar na input.
    let cpf = document.getElementById("icpf").value;
    let ultValor = cpf.charAt(cpf.length - 1);
    //Verificar se o último valor é diferente de número e remover caso sim.
    if (isNaN(ultValor)) {
        cpf = cpf.replace(ultValor, "");
        document.getElementById("icpf").value = cpf;
    }
    //Se tiver mais que 11 numeros, copia sempre os 10 primeiros e mantém o 11° número digitado.
    if (cpf.length > "10") {
        cpf = cpf.substring(0, 10);
        document.getElementById("icpf").value = cpf;
    }
    //Remover espaços vazios.
    if (cpf.includes(" ")) {
        cpf = cpf.replace(" ", "");
        document.getElementById("icpf").value = cpf;
    }
    //Verifica se existe os números em sequencia inválidos.
    if (
        cpf == "0000000000" ||
        cpf == "1111111111" ||
        cpf == "2222222222" ||
        cpf == "3333333333" ||
        cpf == "4444444444" ||
        cpf == "5555555555" ||
        cpf == "6666666666" ||
        cpf == "7777777777" ||
        cpf == "8888888888" ||
        cpf == "9999999999") {
        document.getElementById("msgErro").innerHTML = "CPF inválido!";
        document.getElementById("icpf").value = "";
    }
}

function formatoCPF() {
    //Chamar função ao sair da input.
    let cpf = document.getElementById("icpf").value;
    cpf = cpf.trim();

    //Verificar e não tem valor digitado.
    if (cpf.length == "0") {
        document.getElementById("msgErro").innerHTML = "CPF não pode ser vazio!";
        document.getElementById("icpf").focus();
    } else {
        //Verificar se menor que 11 digitos e remover "." sempre ao encontrar.
        if (cpf.length < "11") {
            while (cpf.includes(".")) {
                cpf = cpf.replace(".", "");
            }
            document.getElementById("icpf").value = cpf;
            document.getElementById("icpf").focus();
            document.getElementById("msgErro").innerHTML = "Digitar 11 números!";
        } else {
            //Verificar se 11 digitos e remover "." sempre ao encontrar.
            //Caso tenha 11 digitos e nenhum ponto, insere 2 "." e "-" no formato xxx.xxx.xxx-xx
            if (cpf.length == "11") {
                if (cpf.includes(".")) {
                    while (cpf.includes(".")) {
                        cpf = cpf.replace(".", "");
                    }
                    document.getElementById("icpf").value = cpf;
                    document.getElementById("icpf").focus();
                    document.getElementById("msgErro").innerHTML = "Digitar 11 números!";
                } else {
                    document.getElementById("icpf").value = cpf.substring(0, 3) + "." + cpf.substring(3, 6) + "." + cpf.substring(6, 9) + "-" + cpf.substring(9, 11);
                    document.getElementById("icpf").style.backgroundColor = "lightblue";
                    document.getElementById("msgErro").innerHTML = "";
                }
                //Verificar se for maior que 11 digitos. Neste caso já houve a inserção de "." "." "-"     
            } else {
                //Verifica se o CPF está no padrão xxx.xxx.xxx.-xx, sendo x um valor numérico.
                //Sempre que ao sair da caixa input, copiará o formato correto novamente para o valor da input.
                if (
                    cpf.length == "14" &&
                    !isNaN(cpf.charAt(0)) &&
                    !isNaN(cpf.charAt(1)) &&
                    !isNaN(cpf.charAt(2)) &&
                    cpf.charAt(3) == "." &&
                    !isNaN(cpf.charAt(4)) &&
                    !isNaN(cpf.charAt(5)) &&
                    !isNaN(cpf.charAt(6)) &&
                    cpf.charAt(7) == "." &&
                    !isNaN(cpf.charAt(8)) &&
                    !isNaN(cpf.charAt(9)) &&
                    !isNaN(cpf.charAt(10)) &&
                    cpf.charAt(11) == "-" &&
                    !isNaN(cpf.charAt(12)) &&
                    !isNaN(cpf.charAt(13))
                ) {
                    document.getElementById("icpf").value = cpf;
                    document.getElementById("icpf").style.backgroundColor = "lightblue";
                    document.getElementById("msgErro").innerHTML = "";

                } else {
                    //Verifica se tem mais que 11 digitos, porém não está no padrão correto. 
                    //Remove os pontos existentes para ser digitado apenas numeros novamente.
                    while (cpf.includes(".")) {
                        cpf = cpf.replace(".", "");
                        document.getElementById("icpf").value = cpf;
                    }
                    document.getElementById("msgErro").innerHTML = "Formato Inválido!";
                    document.getElementById("icpf").focus();
                }
            }
        }
    }
}

//------------------ Verificaçao da Input IDENTIDADE(RG) ------------------------

function verificarRG() {
    //Chamar esta função ao digitar na input.
    let rg = document.getElementById("irg").value;
    let ultValor = rg.charAt(rg.length - 1);
    //Verificar se o último valor é diferente de número e remover caso sim.
    if (isNaN(ultValor)) {
        rg = rg.replace(ultValor, "");
        document.getElementById("irg").value = rg;
    }
    //Se tiver mais que 11 numeros, copia sempre os 10 primeiros e mantém o 11° número digitado.
    if (rg.length > "8") {
        rg = rg.substring(0, 8);
        document.getElementById("irg").value = rg;
    }
    //Remover espaços vazios.
    if (rg.includes(" ")) {
        rg = rg.replace(" ", "");
        document.getElementById("irg").value = rg;
    }
    //Verifica se existe os números em sequencia inválidos.
    if (
        rg == "00000000" ||
        rg == "11111111" ||
        rg == "22222222" ||
        rg == "33333333" ||
        rg == "44444444" ||
        rg == "55555555" ||
        rg == "66666666" ||
        rg == "77777777" ||
        rg == "88888888" ||
        rg == "99999999") {
        document.getElementById("msgErro").innerHTML = "RG inválido!";
        document.getElementById("irg").value = "";
    }
}

function formatoRG() {
    //Chamar função ao sair da input.
    let rg = document.getElementById("irg").value;
    rg = rg.trim();

    //Verificar e não tem valor digitado.
    if (rg.length == "0") {
        document.getElementById("msgErro").innerHTML = "RG não pode ser vazio!";
        document.getElementById("irg").focus();
    } else {
        //Verificar se menor que 9 digitos e remover "." sempre ao encontrar.
        if (rg.length < "9") {
            while (rg.includes(".")) {
                rg = rg.replace(".", "");
            }
            document.getElementById("irg").value = rg;
            document.getElementById("irg").focus();
            document.getElementById("msgErro").innerHTML = "Digitar 9 números!";
        } else {
            //Verificar se 9 digitos e remover "." sempre ao encontrar.
            //Caso tenha 9 digitos e nenhum ponto, insere 2 "." e "-" no formato xxx.xxx.xxx-xx
            if (rg.length == "9") {
                if (rg.includes(".")) {
                    while (rg.includes(".")) {
                        rg = rg.replace(".", "");
                    }
                    document.getElementById("irg").value = rg;
                    document.getElementById("irg").focus();
                    document.getElementById("msgErro").innerHTML = "Digitar 9 números!";
                } else {
                    document.getElementById("irg").value = rg.substring(0, 2) + "." + rg.substring(2, 5) + "." + rg.substring(5, 8) + "-" + rg.substring(8);
                    document.getElementById("irg").style.backgroundColor = "lightblue";
                    document.getElementById("msgErro").innerHTML = "";
                }
                //Verificar se for maior que 9 digitos. Neste caso já houve a inserção de "." "." "-"
            } else {
                //Verifica se o RG está no padrão xx.xxx.xxx.-x, sendo x um valor numérico.
                //Sempre que ao sair da caixa input, copiará o formato correto novamente para o valor da input.
                if (
                    rg.length == "12" &&
                    !isNaN(rg.charAt(0)) &&
                    !isNaN(rg.charAt(1)) &&
                    rg.charAt(2) == "." &&
                    !isNaN(rg.charAt(3)) &&
                    !isNaN(rg.charAt(4)) &&
                    !isNaN(rg.charAt(5)) &&
                    rg.charAt(6) == "." &&
                    !isNaN(rg.charAt(7)) &&
                    !isNaN(rg.charAt(8)) &&
                    !isNaN(rg.charAt(9)) &&
                    rg.charAt(10) == "-" &&
                    !isNaN(rg.charAt(11))
                ) {
                    document.getElementById("irg").value = rg;
                    document.getElementById("irg").style.backgroundColor = "lightblue";
                    document.getElementById("msgErro").innerHTML = "";

                } else {
                    //Verifica se tem mais que 11 digitos, porém não está no padrão correto. 
                    //Remove os pontos existentes para ser digitado apenas numeros novamente.
                    while (rg.includes(".")) {
                        rg = rg.replace(".", "");
                        document.getElementById("irg").value = rg;
                    }
                    document.getElementById("msgErro").innerHTML = "Formato Inválido!";
                    document.getElementById("irg").focus();
                }
            }
        }
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
    } else {
        //Verificar se menor que 14 digitos.
        if (cel.length < "14") {
            document.getElementById("iCel").focus();
            document.getElementById("msgErro").innerHTML = "Formato inválido! Informar celular com 9 números!";
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
                }
            }
        }
    }
}

//---------------------- Verificaçao da Input EMAIL------------------------

function verificarEmail() {
    //Chamar função ao sair da input.
    var email = document.getElementById("iEmail").value;
    email = email.trim();
    document.getElementById("iEmail").value = email;

    if (email == 0) {
        document.getElementById("msgErro").innerHTML = "E-mail não pode ser vazio."
        document.getElementById("iEmail").focus();
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
