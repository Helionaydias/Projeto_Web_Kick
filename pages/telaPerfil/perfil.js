// Lida com a alteração da foto do perfil
document
  .getElementById('alterarFotoBtn')
  .addEventListener('click', function () {
    document.getElementById('inputFoto').click();
  });

document
  .getElementById('inputFoto')
  .addEventListener('change', function (event) {
    const reader = new FileReader();
    reader.onload = function () {
      const newProfileImage = reader.result;
      document.getElementById('profileImage').src = newProfileImage;
      document.getElementById('navbarProfileImage').src = newProfileImage;
    };
    reader.readAsDataURL(event.target.files[0]);
  });

document
  .getElementById('profileForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const newName = document.getElementById('new-name').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Verifica se o nome não está vazio
    if (newName.trim() === '') {
      alert('O nome não pode estar vazio!');
    } else {
      document.getElementById('navbarUserName').textContent = newName;
      alert('Nome alterado com sucesso!');
    }

    // Verifica se as senhas coincidem
    if (newPassword !== '' && confirmPassword !== '') {
      if (newPassword !== confirmPassword) {
        alert('As senhas não coincidem!');
      } else {
        alert('Senha alterada com sucesso!');
      }
    }
  });
