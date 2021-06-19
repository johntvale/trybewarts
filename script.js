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

// função habilitar / desabilitar botão Submit

function enableButton() {
  const agreementButton = document.getElementById('agreement');
  const submitButton = document.getElementById('submit-btn');
  if (agreementButton.value === 'disagree') {
    agreementButton.value = 'agree';
    submitButton.disabled = false;
  } else if (agreementButton.value === 'agree') {
    agreementButton.value = 'disagree';
    submitButton.disabled = true;
  }
}

const configCheckBoxAgreement = document.getElementById('agreement');
configCheckBoxAgreement.addEventListener('click', enableButton);
