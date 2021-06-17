function login() {
  const userLogin = document.querySelector('#login').value;
  const userPassword = document.querySelector('#password').value;
  if ((userLogin === 'tryber@teste.com') && (userPassword === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const configButtonLogin = document.querySelector('#login-button');
configButtonLogin.addEventListener('click', login);
