let num1 = Number(prompt("Digite o primeiro número inteiro:"));
let num2 = Number(prompt("Digite o segundo número inteiro:"));

// verificando qual é o menor e o maior número digitado
let menor = num1 < num2 ? num1 : num2;
let maior = num1 > num2 ? num1 : num2;

// loop para gerar os números inteiros no intervalo compreendido
for (let i = menor; i <= maior; i++) {
  console.log(i);
}
