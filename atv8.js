let numeros = []; // criando um array vazio para armazenar os números

// loop para ler 5 números
for (let i = 0; i < 5; i++) {
  let num = Number(prompt(`Digite o ${i+1}º número:`));
  numeros.push(num);
}

// calculando a soma dos números
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

// calculando a média dos números
let media = soma / numeros.length;

// exibindo a soma e a média dos números
console.log(`A soma dos números é: ${soma}`);
console.log(`A média dos números é: ${media}`);
