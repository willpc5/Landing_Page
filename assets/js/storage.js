// Incluindo no LocalStorage
let salvarDados = function() {
  let nome = document.getElementById('nome').value; 
  let email = document.getElementById('email').value; 

  localStorage.setItem('nome', nome);
  localStorage.setItem('email', email);

};

document.onchange = salvarDados;