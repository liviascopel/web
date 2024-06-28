//-- modo escuro
// seleciona o primeiro elemento html com o respectivo seletor
const button_modo_escuro = document.querySelector('#modo-escuro');

// especifica uma função a ser executada quando o evento (click/mouseover/keydown) ocorrer
button_modo_escuro.addEventListener('click', function () {
    /*adiciona/remove uma classe de um elemento. Se a classe especificada já existir no 
      elemento, ela será removida; se não existir, ela será adicionada. */
    document.body.classList.toggle('tema-escuro');
    modal.classList.toggle('tema-escuro');
    
    if (document.body.classList.contains('tema-escuro')) {
        button_modo_escuro.textContent = 'Modo Claro';
    }
    else {
        button_modo_escuro.textContent = 'Modo Escuro';
    }
});

//-- tipografia
const aumenta = document.querySelector('#aumenta-fonte');
const diminui = document.querySelector('#diminui-fonte');
const reseta = document.querySelector('#reseta-fonte');

const body = document.querySelector('#conteudo');
const nota = document.querySelector('#nota');

var fontSize = 16;

aumenta.addEventListener('click', function () {

    if (fontSize < 16) {
        fontSize += 2;
    }
    else if (fontSize >= 16 && fontSize < 32) {
        fontSize += 4;
    }

    body.style.fontSize = fontSize + 'px';
    atualizaNota();
});

diminui.addEventListener('click', function () {

    if (fontSize <= 16 && fontSize > 12) {
        fontSize -= 2;
    }
    else if (fontSize > 16) {
        fontSize -= 4;
    }

    body.style.fontSize = fontSize + 'px';
    atualizaNota();
});

reseta.addEventListener('click', function () {

    fontSize = 16;
    body.style.fontSize = fontSize + 'px';

    atualizaNota();
});

/**
 * Função seguindo o padrão de tamanho de texto/notas do design
 */
function atualizaNota() {

    nota.innerHTML = 'Você selecionou: <b>' + fontSize + 'px</b>.';

    if (fontSize == 32) {

        nota.innerHTML = 'Você selecionou: <b>32px</b>. Este é o maior tamanho de texto disponível.';
    }
    else if (fontSize == 16) {

        nota.innerHTML = 'Você selecionou: <b>16px</b>. Este é o tamanho de texto recomendado para você.';
    }
    else if (fontSize == 12) {

        nota.innerHTML = 'Você selecionou: <b>12px</b>. Este é o menor tamanho de texto disponível.';
    }
}

//-- modal
const button_modal = document.querySelector('#modal');
const button_close_modal = document.querySelector('dialog button');
const modal = document.querySelector('dialog');

button_modal.onclick = function () {

    modal.showModal();
};

button_close_modal.onclick = function () {

    modal.close();
};