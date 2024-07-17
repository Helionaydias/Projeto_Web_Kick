// login.js

// Função para manipular o clique do botão de entrar
document.getElementById('submit').addEventListener('click', function () {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Exemplo de validação básica
  if (email === '' || senha === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Simulação de envio de dados (substituir com lógica real de autenticação)
  console.log('Email:', email);
  console.log('Senha:', senha);
  alert('Login realizado com sucesso!');

  // Limpa os campos após o login
  document.getElementById('dados').reset();
});

// Função para manipular o clique do botão de "Esqueceu a Senha"
document
  .getElementById('botaoEsqueceuSenha')
  .addEventListener('click', function () {
    alert('Por favor, contate o suporte para redefinir sua senha.');
  });
