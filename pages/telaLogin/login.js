function mostrarLogin() {
  var email = document.getElementById('email').value;
  email.innerHTML = 'email';
  var senha = document.getElementById('senha').value;
  senha.innerHTML = 'senha';

  console.log(`${email}, ${senha}`);
}
