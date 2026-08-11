function soma() {

    var numero01 = Number(prompt("Digite o primeiro número da soma:"));

    var numero02 = Number(prompt("Digite o segundo número da soma:"));

    var resultado = numero01 + numero02;

    console.log("Resultado da soma é: " + resultado);

    document.querySelector("#resultado").innerText =
        "Resultado da SOMA: " + resultado;
}


function subtracao() {

    var numero01 = Number(prompt("Digite o primeiro número da subtração:"));

    var numero02 = Number(prompt("Digite o segundo número da subtração:"));

    var resultado = numero01 - numero02;

    console.log("Resultado da subtração é: " + resultado);

    document.querySelector("#resultado").innerText =
        "Resultado da SUBTRAÇÃO: " + resultado;
}


function multiplicacao() {

    var numero01 = Number(prompt("Digite o primeiro número da multiplicação:"));

    var numero02 = Number(prompt("Digite o segundo número para multiplicar por " + numero01 + ":"));

    var resultado = numero01 * numero02;

    console.log("Resultado da multiplicação é: " + resultado);

    document.querySelector("#resultado").innerText =
        "Resultado da MULTIPLICAÇÃO: " + resultado;
}


function divisao() {

    var numero01 = Number(prompt("Digite o primeiro número da divisão:"));

    var numero02 = Number(prompt("Digite o segundo número para dividir " + numero01 + ":"));

    if (numero02 == 0) {

        console.log("Não é possível dividir por zero.");

        document.querySelector("#resultado").innerText =
            "Não é possível dividir por zero.";

    } else {

        var resultado = numero01 / numero02;

        console.log("Resultado da divisão é: " + resultado);

        document.querySelector("#resultado").innerText =
            "Resultado da DIVISÃO: " + resultado;
    }
}