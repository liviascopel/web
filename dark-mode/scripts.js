const checkbox = document.getElementById('dark-mode-toggle');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
})

var body = document.querySelector(".texto");
var increaseFont = document.getElementById('aumenta-fonte');
var resetFont = document.getElementById('reseta-fonte');
var decreaseFont = document.getElementById('diminui-fonte');

var fontSize = 100;
var increaseDecrease = 25;

increaseFont.addEventListener('click', function (event) {
    fontSize = fontSize + increaseDecrease;
    body.style.fontSize = fontSize + '%';
});

resetFont.addEventListener('click', function (event) {
    fontSize = 100;
    body.style.fontSize = 100 + '%';
});

decreaseFont.addEventListener('click', function (event) {
    fontSize = fontSize - increaseDecrease;
    body.style.fontSize = fontSize + '%';
});

