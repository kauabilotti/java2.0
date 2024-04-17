function vogalConsoante(letra) {
    //letra para minúscula 
    letra = letra.toLowerCase();

    //etra é uma vogal
    if (letra === 'a' | letra === 'e' | letra === 'i' | letra === 'o' | letra === 'u') {
        console.log(`A letra "${letra}" é uma vogal.`);
    } else {
        console.log(`A letra "${letra}" é uma consoante.`);
    }
}

let letraDigitada = prompt("Digite uma letra:");

// Verifica se foi digitado apenas uma letra
if (letraDigitada.length === 1 && letraDigitada.match(/[a-zA-Z]/)) {
    vogalConsoante(letraDigitada);
} else {
    console.log("Por favor, digite apenas uma letra válida.");
}