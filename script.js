// VARIÁVEIS GLOBAIS

const configButtonLogin = document.querySelector('#login-button');
const configCheckBoxAgreement = document.getElementById('agreement');
const sendButtonSubmit = document.getElementById('submit-btn');

const returnName = document.createElement('p');
const returnEmail = document.createElement('p');
const returnHouse = document.createElement('p');
let formFamily = '';
const returnFamily = document.createElement('p');
const formContents = [];
const returnContents = document.createElement('p');
let formEvaluator = '';
const returnEvaluator = document.createElement('p');
const returnComments = document.createElement('p');

const mainForm = document.getElementById('evaluation-form');

// AUTENTICAR O LOGIN
function login() {
  const userLogin = document.querySelector('#login').value;
  const userPassword = document.querySelector('#password').value;
  if ((userLogin === 'tryber@teste.com') && (userPassword === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
configButtonLogin.addEventListener('click', login);

// HABILITAR/DESABILITAR O BOTÃO SUBMIT
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
configCheckBoxAgreement.addEventListener('click', enableButton);

// COLETAR INFO DA FAMÍLIA ESCOLHIDA
function collectDataFamily() {
  const formFamilyOption = document.getElementsByName('family');
  for (let index = 0; index < formFamilyOption.length; index += 1) {
    if (formFamilyOption[index].checked) {
      formFamily = formFamilyOption[index].value;
    }
  }
  return formFamily;
}

// COLETAR INFO DOS CONTEÚDOS ESCOLHIDOS
function collectDataContents() {
  const formContentsOptions = document.getElementsByName('content');
  for (let index = 0; index < formContentsOptions.length; index += 1) {
    if (formContentsOptions[index].checked) {
      formContents.push(` ${formContentsOptions[index].value}`);
    }
  }
  return formContents;
}

// COLETAR INFO DA NOTA DE AVALIAÇÃO
function collectDataEvaluator() {
  const formEvaluatorOption = document.getElementsByName('rate');
  for (let index = 0; index < formEvaluatorOption.length; index += 1) {
    if (formEvaluatorOption[index].checked) {
      formEvaluator = formEvaluatorOption[index].value;
    }
  }
  return formEvaluator;
}

// APAGANDO O FORM PREENCHIDO
function removeForm() {
  const formOld1 = document.getElementById('container1-form');
  formOld1.remove();
  const formOld2 = document.getElementById('container2-form');
  formOld2.remove();
  const formOld3 = document.getElementById('container3-form');
  formOld3.remove();
  const formOld4 = document.getElementById('container4-form');
  formOld4.remove();
  const formOld5 = document.getElementsByClassName('container5-form')[0];
  formOld5.remove();
  const removeLine0 = document.getElementsByClassName('lines')[1];
  removeLine0.remove();
  const removeLine1 = document.getElementsByClassName('lines')[0];
  removeLine1.remove();
}

// COLETAR E ARMAZENAR INFORMAÇÕES DO FORM
function collectData() {
  const formName = document.getElementById('input-name').value;
  const formLastName = document.getElementById('input-lastname').value;
  const formEmail = document.getElementById('input-email').value;
  const formHouse = document.getElementById('house').value;
  collectDataFamily();
  collectDataContents();
  collectDataEvaluator();
  const formComments = document.getElementById('textarea').value;

  returnName.innerText = `Nome: ${formName} ${formLastName} `;
  returnEmail.innerText = `Email: ${formEmail}`;
  returnHouse.innerText = `Casa: ${formHouse}`;
  returnFamily.innerText = `Família: ${formFamily}`;
  returnContents.innerText = `Matérias: ${formContents}`;
  returnEvaluator.innerText = `Avaliação: ${formEvaluator}`;
  returnComments.innerText = `Observações: ${formComments}`;
}

// CONFIRMAR OS DADOS COLETADOS DO FORM AO CLICAR EM ENVIAR
function showInformation() {
  collectData();
  removeForm();
  mainForm.appendChild(returnName);
  mainForm.appendChild(returnEmail);
  mainForm.appendChild(returnHouse);
  mainForm.appendChild(returnFamily);
  mainForm.appendChild(returnContents);
  mainForm.appendChild(returnEvaluator);
  mainForm.appendChild(returnComments);
}

// BLOQUEAR O RESET DO FORM QUANDO CLICAR EM ENVIAR
// Refer: Colaboração da Leticia Turma 13B via dúvida no slack
function blockFormReset(event) {
  event.preventDefault();
  showInformation();
}
sendButtonSubmit.addEventListener('click', blockFormReset);
