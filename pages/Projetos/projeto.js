document.addEventListener('DOMContentLoaded', function() {
    const projetos = [
        { id: 1, titulo: 'Site Apple', imagem: 'images/apple.png', icone: 'fab fa-apple', tecnologias: ['Swift', 'Objective-C', 'JavaScript'], descricao: 'Redesign do site oficial da Apple, focando em uma experiência de usuário intuitiva e moderna.', detalhes: 'Implementamos uma interface de usuário totalmente responsiva, otimizada para diversos dispositivos Apple. O projeto incluiu uma reformulação completa da arquitetura de informações e a integração de recursos avançados de acessibilidade.' },
        { id: 2, titulo: 'Plataforma Pisca Pisca', imagem: 'images/pisca.png', icone: 'fas fa-bolt', tecnologias: ['React', 'Node.js', 'MongoDB'], descricao: 'Desenvolvimento de uma plataforma de e-commerce para a Pisca com recursos avançados de personalização.', detalhes: 'Criamos um sistema de recomendação baseado em IA para melhorar a experiência de compra. A plataforma inclui um painel de administração robusto e integração com múltiplos gateways de pagamento.' },
        { id: 3, titulo: 'App Starbucks', imagem: 'images/starbucks.png', icone: 'fas fa-coffee', tecnologias: ['Vue.js', 'Express', 'PostgreSQL'], descricao: 'Criação de um aplicativo web para o programa de fidelidade do Starbucks, integrando pedidos online.', detalhes: 'O aplicativo permite aos usuários acumular e resgatar pontos, fazer pedidos antecipados e personalizar suas bebidas. Implementamos um sistema de geolocalização para encontrar lojas próximas e estimativas de tempo de espera em tempo real.' },
        { id: 4, titulo: 'Plataforma Steam', imagem: 'images/steam.png', icone: 'fab fa-steam', tecnologias: ['C++', 'DirectX', 'Electron'], descricao: 'Atualização da interface do cliente Steam, melhorando a performance e adicionando novos recursos sociais.', detalhes: 'Redesenhamos a interface do usuário para uma navegação mais intuitiva e implementamos um novo sistema de chat com suporte a voz e vídeo. Otimizamos o processo de download e atualização de jogos para reduzir o uso de largura de banda.' },
        { id: 5, titulo: 'App Uber Eats', imagem: 'images/uber_eats.png', icone: 'fas fa-utensils', tecnologias: ['React Native', 'GraphQL', 'Firebase'], descricao: 'Desenvolvimento do aplicativo Uber Eats para iOS e Android, com foco em uma experiência de usuário fluida.', detalhes: 'Implementamos um sistema de rastreamento em tempo real para pedidos, integração com diversos métodos de pagamento e um algoritmo de recomendação baseado nos hábitos alimentares do usuário. O aplicativo também inclui um modo offline para visualização de menus.' }
    ];

    const depoimentos = [
        { nome: 'Paulo Figueiredo', cargo: 'CEO', empresa: 'Pisca', texto: 'A PandaKut transformou nossa visão em realidade digital!', imagem: 'images/ceo_pisca.png' },
        { nome: 'Brian Niccol', cargo: 'CEO', empresa: 'Starbucks', texto: 'Nosso app de fidelidade superou todas as expectativas graças à PandaKut.', imagem: 'images/nicco_starbucks.png' },
        { nome: 'Steve Jobs', cargo: 'Ex-CEO', empresa: 'Apple', texto: 'A PandaKut capturou perfeitamente a essência da Apple em seu design.', imagem: 'images/jobs_apple.png' },
        { nome: 'Gabe Newell', cargo: 'Presidente', empresa: 'Valve', texto: 'A nova interface do Steam é um sucesso entre nossos usuários.', imagem: 'images/gabe_steam.png' },
        { nome: 'Dara Khosrowshahi', cargo: 'CEO', empresa: 'Uber', texto: 'O app Uber Eats da PandaKut revolucionou nossa entrega de comida.', imagem: 'images/dara_ubereats.png' }
    ];

    const projetosContainer = document.getElementById('projetos');
    const depoimentosContainer = document.querySelector('#depoimentosCarousel .carousel-inner');

    // Renderiza os projetos realizados por nós
    projetos.forEach(projeto => {
        const card = criarCardProjeto(projeto);
        projetosContainer.appendChild(card);
    });

    // Renderiza os depoimentos dos usuários
    depoimentos.forEach((depoimento, index) => {
        const slide = criarSlideDepoimento(depoimento, index === 0);
        depoimentosContainer.appendChild(slide);
    });

    // Implementa a funcionalidade de pesquisa das ferramentas que usamos nos sites/apps
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', realizarPesquisa);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            realizarPesquisa();
        }
    });
});

function criarCardProjeto(projeto) {
    const card = document.createElement('div');
    card.className = 'col-md-4 projeto-card';
    card.innerHTML = `
        <div class="card">
            <img src="${projeto.imagem}" class="card-img-top" alt="${projeto.titulo}">
            <div class="card-body">
                <h5 class="card-title"><i class="${projeto.icone}"></i>${projeto.titulo}</h5>
                <div class="accordion" id="accordionProjeto${projeto.id}">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${projeto.id}" aria-expanded="false" aria-controls="collapse${projeto.id}">
                                Detalhes do Projeto
                            </button>
                        </h2>
                        <div id="collapse${projeto.id}" class="accordion-collapse collapse" data-bs-parent="#accordionProjeto${projeto.id}">
                            <div class="accordion-body">
                                <p>${projeto.descricao}</p>
                                <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(', ')}</p>
                                <p>${projeto.detalhes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return card;
}

function criarSlideDepoimento(depoimento, isActive) {
    const slide = document.createElement('div');
    slide.className = `carousel-item ${isActive ? 'active' : ''}`;
    slide.innerHTML = `
        <img src="${depoimento.imagem}" class="depoimento-imagem" alt="${depoimento.nome}">
        <blockquote class="blockquote">
            <p class="mb-0">${depoimento.texto}</p>
            <footer class="blockquote-footer mt-3">
                <strong>${depoimento.nome}</strong><br>
                ${depoimento.cargo} em <cite title="${depoimento.empresa}">${depoimento.empresa}</cite>
            </footer>
        </blockquote>
    `;
    return slide;
}

function realizarPesquisa() {
    const searchTerm = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.projeto-card');

    cards.forEach(card => {
        const titulo = card.querySelector('.card-title').textContent.toLowerCase();
        const descricao = card.querySelector('.accordion-body').textContent.toLowerCase();

        if (titulo.includes(searchTerm) || descricao.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}