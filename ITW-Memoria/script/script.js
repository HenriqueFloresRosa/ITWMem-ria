document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulação de verificação de credenciais
    if (username === "admin" && password === "1234") {
        window.location.href = 'MainMenu.html';
    } else {
        alert('Usuário ou senha incorretos');
    }
});

function startNormalMode() {
    alert("Modo Normal: Tabuleiro 8x8");
}

function startGiantMode() {
    alert("Modo Gigante: Tabuleiro 12x12");
}

function startMultiplayerMode() {
    alert("Modo Multijogador");
}

function showScores() {
    let scores = JSON.parse(localStorage.getItem('scores')) || [];
    let scoreList = scores.map(score => `<li>${score.username}: ${score.points}</li>`).join('');
    document.getElementById('scoreList').innerHTML = scoreList;
}

// Carregar pontuações automaticamente na página de pontuações
if (document.getElementById('scoreList')) {
    showScores();
}

function addScore(username, points) {
    let scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.push({ username: username, points: points });
    localStorage.setItem('scores', JSON.stringify(scores));
}
