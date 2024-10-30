document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            alert('Por favor, preencha todos os campos');
            return;
        }

        // Simular processo de login
        simulateLogin(email, password);
    });
});

function simulateLogin(email, password) {
    // Mostrar um loader ou mensagem de "Entrando..."
    document.querySelector('button[type="submit"]').textContent = 'Entrando...';

    // Simular um atraso de rede
    setTimeout(() => {
        // URL da página inicial do repositório GitHub
    
        const homePageUrl = 'URL_DO_REPOSITORIO';
        
        // Redirecionar para a página inicial
        window.location.href = '../../index.html';
    }, 500); // 0.5 segundos de atraso
}