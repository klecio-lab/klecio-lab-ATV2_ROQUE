let populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB;

do {
  populacaoA = parseInt(prompt("Informe a população do país A:"));
  populacaoB = parseInt(prompt("Informe a população do país B:"));
  taxaCrescimentoA = parseFloat(prompt("Informe a taxa de crescimento anual da população do país A (em porcentagem):")) / 100;
  taxaCrescimentoB = parseFloat(prompt("Informe a taxa de crescimento anual da população do país B (em porcentagem):")) / 100;

  if (populacaoA <= 0 || populacaoB <= 0 || taxaCrescimentoA <= 0 || taxaCrescimentoB <= 0) {
    alert("Erro: as populações e as taxas de crescimento devem ser valores positivos. Tente novamente.");
  } else {
    let anos = 0;

    while (populacaoA < populacaoB) {
      populacaoA = populacaoA * (1 + taxaCrescimentoA);
      populacaoB = populacaoB * (1 + taxaCrescimentoB);
      anos++;
    }

    alert(`A população de A ultrapassará a população de B em ${anos} anos.`);
  }

} while (populacaoA <= 0 || populacaoB <= 0 || taxaCrescimentoA <= 0 || taxaCrescimentoB <= 0);
