const updateLovePercentage = (value) => {
	document.querySelector('#lovePercentage').innerText = value + '%';
};

const checkLove = () => {
	const loveValue = document.querySelector('#loveRange').value;
	let message = '';
	const firework = document.querySelectorAll('.firework');

	if (loveValue == 100) {
		message = 'Você acertou! O amor é 100%! ❤️';

		for (let i = 0; i < firework.length; i++) {
			firework[i].style.display = 'block';
		}

         // 
	} else {
		for (let i = 0; i < firework.length; i++) {
			firework[i].style.display = 'none';
		}

		message = 'Quase lá! Continue tentando!';
	}

	document.querySelector('#mod').style.display = 'flex';
	document.querySelector('#resultMessage').innerText = message;
};

const showHiddenMessage = () => {
	const hiddenMessage = document.querySelector('#hiddenMessage');
	hiddenMessage.style.display = 'block'; // Mostra a mensagem
};

const closeModal = () => {
	document.querySelector('#mod').style.display = 'none';
};

// Adiciona um evento ao botão para mostrar a mensagem escondida
document.querySelector('.result button').addEventListener('click', showHiddenMessage);
