//console.log('ERROR');


const button = document.querySelector('.button');
const login = document.querySelector('#login');
const password = document.querySelector('#password');

button.addEventListener('click', (e) => {
  e.preventDefault();
  buttonLogic(login.value, password.value);
});

function buttonLogic(log, pass) {

  const loginPattern = /^[a-zA-Z]{1,8}$/;

  const passwordPattern = /^[A-Za-z0-9!@#$%^&*()_]{4,8}$/;

  if (!loginPattern.test(log) || !passwordPattern.test(pass)) {
    alert('Ошибка');
  }
  else {
    alert('Успешно');
  }
}
