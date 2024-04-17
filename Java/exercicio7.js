function mostrarPreco() {
   
    var select = document.getElementById("saborPicoles");
    var saborSelecionado = select.options[select.selectedIndex].value;
 
    // Definir o preço de cada sabor
    var precos = {
      chocolate: 1.50,
      morango: 2.50,
      creme: 2.50,
      manga: 3.20,
      melancia: 3.40,
      vanillaIce: 3.00,
      ceuAzul: 3.60,
      brownie: 4.00,
      hawaiano: 5.00
    };
 
   
    var precoSelecionado = precos[saborSelecionado];
 

    document.getElementById("precoPicolé").innerHTML = "Preço do picolé: R$ " + precoSelecionado.toFixed(2);
  }
