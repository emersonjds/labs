function startGame() {
    // starting a new game
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath Starting a new game ...';
}

// document.getElementById('startGame').addEventListener('click', startGame);

document.getElementById('startGame').addEventListener('click', () => {
    console.log('clicado');
});