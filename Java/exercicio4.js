function Ordem() {
    let valores = [];
    for (let i = 1; i <= 4; i++) {
        let valor = parseInt(prompt("Digite o " + i + "º valor inteiro:"));
        valores.push(valor);
    }

    valores.sort(function(a, b) {
        return b - a;
    });

    console.log("Valores em ordem decrescente:");
    for (let i = 0; i < valores.length; i++) {
        console.log(valores[i]);
    }
}