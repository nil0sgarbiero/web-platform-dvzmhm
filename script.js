function validateFields() {
  // verifica se email não é vazio, se email é valido
  // se email verdadeiro entao habilita recuperar senha
  //
  const emailValid = isEmailValid();
  document.getElementById('recoverpass').disable = !emailValid;
}
function isEmailValid() {
  const email = document.getElementById('email').value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return false;
  }
  return true;
}
