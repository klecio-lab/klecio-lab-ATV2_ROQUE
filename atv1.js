let nota;

do {
  nota = parseFloat(prompt("Digite uma nota de 0 a 10:"));

  if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Valor inválido. Digite uma nota entre 0 e 10.");
  }

} while (isNaN(nota) || nota < 0 || nota > 10);

alert("Nota digitada: " + nota);
