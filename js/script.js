function updateLovePercentage(value) {
    document.getElementById('lovePercentage').innerText = value + '%';
}

function checkLove() {
    const loveValue = document.getElementById('loveRange').value;
    let message = '';

    if (loveValue == 100) {
        message = 'Você acertou! O amor é 100%! ❤️';
    } else {
        message = 'Quase lá! Continue tentando!';
    }

    document.getElementById('resultMessage').innerText = message;
}

function showHiddenMessage() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    hiddenMessage.style.display = 'block'; // Mostra a mensagem
}

// Adiciona um evento ao botão para mostrar a mensagem escondida
document.querySelector('.result button').addEventListener('click', showHiddenMessage);