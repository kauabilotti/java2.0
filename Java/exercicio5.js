function inverter() {
    let numero = parseInt(prompt("Digite um número inteiro:"));

    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    if (numero % 2 === 0) {
        alert(numero + "é par, mas agora ele sera impar"); numero++;
    } else {
        alert(numero + "é ímpar, agora ele sera par"); numero--;
    }
    alert("seu numero agora é:" + numero)
}
