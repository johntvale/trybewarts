// função requisito 3
const loginButtonClick = document.querySelector('#login-button');
loginButtonClick.addEventListener('click', login);

function login() {
  let userLogin = document.querySelector('#login').value;
  let userPassword = document.querySelector('#password').value;
  if ((userLogin === 'tryber@teste.com') && (userPassword === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}