let usuario, senha;

do {
  usuario = prompt("Digite o seu nome de usuário:");
  senha = prompt("Digite a sua senha:");

  if (usuario === senha) {
    alert("Erro: a senha não pode ser igual ao nome de usuário. Tente novamente.");
  }

} while (usuario === senha);

alert("Login realizado com sucesso!");
