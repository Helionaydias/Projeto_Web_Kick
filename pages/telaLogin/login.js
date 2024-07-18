document.getElementById('submit').addEventListener('click', function () {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (email === '' || senha === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  console.log('Email:', email);
  console.log('Senha:', senha);

  if (true) {
    window.location.href = '../../index.html';
  } else {
    alert('Falha no login. Por favor, tente novamente.');
  }

  document.getElementById('dados').reset();
});

document
  .getElementById('botaoEsqueceuSenha')
  .addEventListener('click', function () {
    alert('Por favor, contate o suporte para redefinir sua senha.');
  });
