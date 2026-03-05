const posts = {
    "bhaskara": {
        titulo: "Fórmula de Bhaskara: O Guia Definitivo",
        conteudo: `
            <p>A fórmula de Bhaskara é usada para resolver equações do segundo grau.</p>
            <h2>Como calcular o Delta</h2>
            <p>O delta ($\Delta$) determina quantas raízes a equação possui.</p>
            <div class="exemplo">Fórmula: Δ = b² - 4ac</div>
            <h2>Aplicando a fórmula</h2>
            <p>Após achar o delta, usamos x = (-b ± √Δ) / 2a.</p>
        `
    },
    "regra-de-tres": {
        titulo: "Regra de Três Simples e Composta",
        conteudo: `<p>Aprenda a comparar grandezas diretamente e inversamente proporcionais...</p>`
    },
    "concordancia-verbal": {
        titulo: "Concordância Verbal: Regras Essenciais",
        conteudo: `<p>O verbo deve concordar com o sujeito em número e pessoa...</p>`
    }
};

function carregarPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const idPost = urlParams.get('post');
    const post = posts[idPost];

    if (post) {
        document.getElementById('post-titulo').innerText = post.titulo;
        document.getElementById('conteudo-principal').innerHTML = post.conteudo;
        document.title = post.titulo + " | DestravaEstudo";
    } else {
        document.getElementById('post-titulo').innerText = "Post não encontrado!";
    }
}

window.onload = carregarPost;

function carregarPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const idPost = urlParams.get('post');
    const post = postsDB[idPost]; // Puxa do database.js

    if (post) {
        document.getElementById('post-titulo').innerText = post.titulo;
        document.getElementById('conteudo-principal').innerHTML = post.conteudo;
        document.title = post.titulo + " | DestravaEstudo";
    } else {
        document.getElementById('post-titulo').innerText = "Conteúdo em breve!";
        document.getElementById('conteudo-principal').innerHTML = "<p>Estamos preparando este material para você destravar seus estudos!</p>";
    }
}

// Função para o Quiz Interativo
function verificarResposta(botao, resposta) {
    const container = botao.parentElement;
    const feedback = container.querySelector('.feedback');
    
    if (resposta === '0' || resposta === 'correto') {
        feedback.innerText = "✅ Parabéns! Você acertou.";
        feedback.style.color = "green";
        botao.style.backgroundColor = "#c8e6c9";
    } else {
        feedback.innerText = "❌ Ops! Tente revisar o conteúdo acima.";
        feedback.style.color = "red";
        botao.style.backgroundColor = "#ffcdd2";
    }
}

window.onload = carregarPost;

// BANCO DE DADOS DE CONTEÚDO (MUITO TEXTO PARA SEO)
const postsDB = {
    "revolucao-industrial": {
        titulo: "Revolução Industrial: O Guia Completo das Transformações Globais",
        categoria: "História",
        conteudo: `
            <p>A <strong>Revolução Industrial</strong> não foi apenas um evento isolado, mas um processo contínuo que alterou permanentemente a forma como a humanidade produz, consome e se organiza socialmente. Iniciada na Inglaterra em meados do século XVIII, ela marca a transição da manufatura para a maquinofatura.</p>

            <h2>1. O Pioneirismo Inglês: Por que a Inglaterra?</h2>
            <p>Muitos alunos se perguntam por que a revolução começou na ilha britânica e não na França ou na China. Existem quatro pilares fundamentais para o pioneirismo inglês:</p>
            <ul>
                <li><strong>Acúmulo de Capital:</strong> Séculos de comércio marítimo e pirataria oficial (corsários) deram à burguesia inglesa o dinheiro necessário para investir em fábricas.</li>
                <li><strong>Recursos Naturais:</strong> O solo inglês era rico em <strong>carvão mineral</strong> (combustível) e <strong>minério de ferro</strong> (matéria-prima).</li>
                <li><strong>Cercamentos (Enclosures):</strong> As terras comunais foram cercadas para a criação de ovelhas (lã). Isso expulsou os camponeses para as cidades, criando uma massa de mão de obra barata e desesperada.</li>
                <li><strong>Estabilidade Política:</strong> A Revolução Gloriosa de 1688 deu o poder ao Parlamento, permitindo leis que favoreciam o livre comércio.</li>
            </ul>

            <div class="exemplo">
                <strong>Importante para o ENEM:</strong> O cercamento dos campos é a raiz do êxodo rural maciço que inchou as cidades inglesas como Londres e Manchester.
            </div>

            <h2>2. As Fases da Revolução</h2>
            <p>A industrialização é dividida em etapas, cada uma com sua tecnologia dominante:</p>
            
            <h3>Primeira Revolução (1760 - 1860)</h3>
            <p>O foco era o carvão, o ferro e o vapor. A principal indústria era a <strong>têxtil</strong>. James Watt aperfeiçoou a máquina a vapor, que passou a mover teares, barcos e as primeiras locomotivas (a "Maria Fumaça").</p>

            <h3>Segunda Revolução (1860 - 1945)</h3>
            <p>O cenário muda para o <strong>aço, o petróleo e a eletricidade</strong>. Surgem os motores a combustão, o automóvel de Henry Ford e os métodos de produção em massa (Fordismo). A química industrial e a invenção da lâmpada e do telefone transformam o cotidiano.</p>

            <h2>3. Impactos Sociais e o Movimento Operário</h2>
            <p>As condições nas fábricas eram desumanas. A jornada de trabalho chegava a 16 horas por dia. Crianças de 5 anos eram usadas para limpar chaminés e máquinas por serem pequenas. Não havia férias, aposentadoria ou segurança.</p>
            
            <p>Dessa exploração surgiram os primeiros movimentos:</p>
            <ul>
                <li><strong>Ludismo:</strong> Os "quebradores de máquinas". Eles acreditavam que as máquinas roubavam os empregos e as destruíam como protesto.</li>
                <li><strong>Cartismo:</strong> Um movimento mais político que exigia o voto universal e direitos para os trabalhadores através da "Carta do Povo".</li>
                <li><strong>Sindicatos (Trade Unions):</strong> Organizações de trabalhadores para negociar melhores salários e condições.</li>
            </ul>

            <h2>Interação: Desafio de História</h2>
            <div class="quiz-container">
                <p>Qual movimento operário ficou conhecido por invadir fábricas e destruir máquinas como forma de protesto?</p>
                <button onclick="verificarResposta(this, 'correto')">A) Ludismo</button>
                <button onclick="verificarResposta(this, 'errado')">B) Cartismo</button>
                <button onclick="verificarResposta(this, 'errado')">C) Fordismo</button>
                <p class="feedback"></p>
            </div>
        `
    },
    "redacao-enem-nota-1000": {
        titulo: "Redação ENEM Nota 1000: O Guia Definitivo da Estrutura",
        categoria: "Redação",
        conteudo: `
            <p>Se você quer destravar sua nota no ENEM, precisa entender que a redação não é um dom, é um <strong>processo de engenharia</strong>. Existe uma estrutura fixa que os corretores buscam.</p>
            
            <h2>1. A Introdução: Repertório, Tema e Tese</h2>
            <p>Sua introdução deve ter entre 6 a 8 linhas. Comece com um repertório (um filme, uma citação filosófica ou um fato histórico). Depois, apresente o tema e, por fim, a sua <strong>tese</strong> (os dois problemas que você vai resolver no texto).</p>

            <h2>2. Desenvolvimento: Argumentação Crítica</h2>
            <p>Cada parágrafo de desenvolvimento deve focar em um argumento. Use conectivos como "Além disso", "Em primeira análise" e "Por outro lado". Lembre-se: não basta citar, você precisa <strong>analisar</strong> o problema.</p>

            <h2>3. Conclusão: A Proposta de Intervenção</h2>
            <p>O ENEM exige 5 elementos: Agente, Ação, Meio/Modo, Efeito e Detalhamento. Se faltar um, você perde 40 pontos na Competência 5!</p>

            <div class="quiz-container">
                <p>Qual destes elementos NÃO é obrigatório na conclusão do ENEM?</p>
                <button onclick="verificarResposta(this, 'errado')">A) Agente</button>
                <button onclick="verificarResposta(this, 'correto')">B) Título Chamativo</button>
                <button onclick="verificarResposta(this, 'errado')">C) Detalhamento</button>
                <p class="feedback"></p>
            </div>
        `
    }
};

// Lógica para carregar o conteúdo na tela
function carregarPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const idPost = urlParams.get('post');
    const post = postsDB[idPost];

    const tituloElemento = document.getElementById('post-titulo');
    const conteudoElemento = document.getElementById('conteudo-principal');

    if (post) {
        tituloElemento.innerText = post.titulo;
        conteudoElemento.innerHTML = post.conteudo;
        document.title = post.titulo + " | DestravaEstudo";
    } else {
        if(tituloElemento) tituloElemento.innerText = "Conteúdo não encontrado!";
    }
}

// Função para o Quiz
function verificarResposta(botao, status) {
    const feedback = botao.parentElement.querySelector('.feedback');
    if (status === 'correto') {
        feedback.innerHTML = "✅ <strong>Correto!</strong> Excelente conhecimento.";
        feedback.style.color = "#27ae60";
        botao.style.background = "#d4efdf";
    } else {
        feedback.innerHTML = "❌ <strong>Errado.</strong> Releia o texto acima e tente novamente.";
        feedback.style.color = "#c0392b";
        botao.style.background = "#f2d7d5";
    }
}

// Executa assim que a página abre
window.onload = carregarPost;
