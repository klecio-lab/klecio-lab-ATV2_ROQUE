let nome, idade, salario, sexo, estadoCivil;

do {
  nome = prompt("Digite o seu nome:");
  idade = parseInt(prompt("Digite a sua idade:"));
  salario = parseFloat(prompt("Digite o seu salário:"));
  sexo = prompt("Digite o seu sexo (f ou m):").toLowerCase();
  estadoCivil = prompt("Digite o seu estado civil (s, c, v ou d):").toLowerCase();

  if (nome.length <= 3) {
    alert("Erro: o nome deve ter mais de 3 caracteres. Tente novamente.");
  } else if (idade < 0 || idade > 150) {
    alert("Erro: a idade deve estar entre 0 e 150. Tente novamente.");
  } else if (salario <= 0) {
    alert("Erro: o salário deve ser maior do que zero. Tente novamente.");
  } else if (sexo !== 'f' && sexo !== 'm') {
    alert("Erro: o sexo deve ser f ou m. Tente novamente.");
  } else if (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd') {
    alert("Erro: o estado civil deve ser s, c, v ou d. Tente novamente.");
  }

} while (nome.length <= 3 || idade < 0 || idade > 150 || salario <= 0 || sexo !== 'f' && sexo !== 'm' || estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd');

alert("Informações válidas. Cadastro realizado com sucesso!");
