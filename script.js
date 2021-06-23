// Autenticação de Login

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

// Habilitar/desabilitar botão Submit

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

// Confirmação do cadastro ao clicar no botão submit

// // capturar informações dos inputs
// const collectData1 = () => {
//   const formName = document.getElementById('input-name').value;
//   const formLastName = document.getElementById('input-lastname').value;
//   const formEmail = document.getElementById('input-email').value;
//   const formHouse = document.getElementById('house').value;
//   const formFamilyOption = document.getElementsByName('family');
//   let formFamily = '';
//   const formContentsOptions = document.getElementsByName('content');
//   const formContents = [];
//   const formEvaluatorOption = document.getElementsByName('rate');
//   let formEvaluator = '';
//   const formComments = document.getElementById('textarea').value;
// }

// capturar informações Family
// const collectDataFamily = (formFamilyOption, formFamily) => {
//   for (let index = 0; index < formFamilyOption.length; index += 1) {
//     if (formFamilyOption[index].checked) {
//       formFamily = formFamilyOption[index].value;
//     }
//   }
//   return formFamily;
// }
// const collectDataContents = (formContentsOptions, formContents) => {
//   for (let index = 0; index < formContentsOptions.length; index += 1) {
//     if (formContentsOptions[index].checked) {
//       formContents.push(` ${formContentsOptions[index].value}`);
//     }
//   }
//   return formContents;
// }
// const collectDataEvaluator = (formEvaluatorOption, formEvaluator) => {
//   for (let index = 0; index < formEvaluatorOption.length; index += 1) {
//     if (formEvaluatorOption[index].checked) {
//       formEvaluator = formEvaluatorOption[index].value;
//     }
//   }
//   return formEvaluator;
// }

// function showInformation(sendButtonSubmit) {

//   const formName = document.getElementById('input-name').value;
//   const formLastName = document.getElementById('input-lastname').value;
//   const formEmail = document.getElementById('input-email').value;
//   const formHouse = document.getElementById('house').value;
//   const formFamilyOption = document.getElementsByName('family');
//   let formFamily = '';
//   const formContentsOptions = document.getElementsByName('content');
//   const formContents = [];
//   const formEvaluatorOption = document.getElementsByName('rate');
//   let formEvaluator = '';
//   const formComments = document.getElementById('textarea').value;

//   collectDataFamily();
//   collectDataContents();
//   collectDataEvaluator();

//   // identifica opção selecionada do formFamily;

//   // identifica opção selecionada do Conteúdos que quer aprender.

//   // identifica opção selecionada do formFamily;

//   // Remove o conteúdo do Form, e substitui pelas informações geradas (dentro de parágrafos).

//   const newDiv = document.createElement('div');

//   // const variavelMain = document.getElementById('main');
//   // variavelMain.appendChild(newDiv);
//   const mainForm = document.getElementById('evaluation-form');
//   mainForm.appendChild(newDiv);

//   console.log(mainForm.children);

//   const returnName = document.createTextNode(`Nome: ${formName} ${formLastName} `);
//   newDiv.appendChild(returnName);
//   const breakLine1 = document.createElement('br');
//   newDiv.appendChild(breakLine1);

//   const returnEmail = document.createTextNode(`Email: ${formEmail}`);
//   newDiv.appendChild(returnEmail);
//   const breakLine2 = document.createElement('br');
//   newDiv.appendChild(breakLine2);

//   const returnHouse = document.createTextNode(`Casa: ${formHouse}`);
//   newDiv.appendChild(returnHouse);
//   const breakLine3 = document.createElement('br');
//   newDiv.appendChild(breakLine3);

//   const returnFamily = document.createTextNode(`Família: ${formFamily}`);
//   newDiv.appendChild(returnFamily);
//   const breakLine4 = document.createElement('br');
//   newDiv.appendChild(breakLine4);

//   const returnContents = document.createTextNode(`Matérias: ${formContents}`);
//   newDiv.appendChild(returnContents);
//   const breakLine5 = document.createElement('br');
//   newDiv.appendChild(breakLine5);

//   const returnEvaluator = document.createTextNode(`Avaliação: ${formEvaluator}`);
//   newDiv.appendChild(returnEvaluator);
//   const breakLine6 = document.createElement('br');
//   newDiv.appendChild(breakLine6);

//   const returnComments = document.createTextNode(`Observações: ${formComments}`);
//   newDiv.appendChild(returnComments);
//   const breakLine7 = document.createElement('br');
//   newDiv.appendChild(breakLine7);

//   // removendo form antigo
//   const formOld1 = document.getElementById('container1-form');
//   formOld1.remove();
//   const formOld2 = document.getElementById('container2-form');
//   formOld2.remove();
//   const formOld3 = document.getElementById('container3-form');
//   formOld3.remove();
//   const formOld4 = document.getElementById('container4-form');
//   formOld4.remove();
//   const formOld5 = document.getElementsByClassName('container5-form')[0];
//   formOld5.remove();
//   const removeLine0 = document.getElementsByClassName('lines')[1];
//   removeLine0.remove();
//   const removeLine1 = document.getElementsByClassName('lines')[0];
//   removeLine1.remove();
// }

// const sendButtonSubmit = document.getElementById('submit-btn');
// sendButtonSubmit.addEventListener('click', showInformation);
