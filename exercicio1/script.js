// seleciona o primeiro elemento html com o respectivo seletor
const button = document.querySelector('button');

// especifica uma função a ser executada quando o evento (click/mouseover/keydown) ocorrer
button.addEventListener('click', function () {

  /*
   * adiciona/remove uma classe de um elemento. Se a classe especificada já existir no 
   * elemento, ela será removida; se não existir, ela será adicionada. 
   */
  document.body.classList.toggle('tema-escuro');

  if (document.body.classList.contains('tema-escuro')) {
    button.textContent = 'Modo Claro';
  }
  else {
    button.textContent = 'Modo Escuro';
  }
})