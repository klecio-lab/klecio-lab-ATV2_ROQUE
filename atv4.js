let populacaoA = 80000;
let populacaoB = 200000;
let anos = 0;

while (populacaoA < populacaoB) {
  populacaoA = populacaoA * 1.03;
  populacaoB = populacaoB * 1.015;
  anos++;
}

console.log(`A população de A ultrapassará a população de B em ${anos} anos.`);
