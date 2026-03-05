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

