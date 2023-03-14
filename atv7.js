let numeros = []; // criando um array vazio para armazenar os números

// loop para ler 5 números
for (let i = 1; i <= 5; i++) {
  let numero = parseFloat(prompt(`Digite o ${i}º número:`));
  numeros.push(numero);
}

// encontrando o maior número
let maior = numeros[0]; // supondo que o primeiro número é o maior
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}

// exibindo o resultado
console.log(`O maior número é ${maior}.`);
