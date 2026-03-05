const postsDB = {
    "revolucao-industrial": {
        titulo: "Revolução Industrial: O Guia Completo das Transformações Globais",
        conteudo: `
            <p>A <strong>Revolução Industrial</strong> foi o processo de transição para novos processos de manufatura na Europa e nos Estados Unidos, no período de cerca de 1760 até algum momento entre 1820 e 1840.</p>
            <h2>1. O Pioneirismo Inglês</h2>
            <p>A Inglaterra foi a nação pioneira por diversos motivos. Primeiro, o acúmulo de capital vindo das colônias. Segundo, a presença massiva de carvão mineral e ferro. Terceiro, a mão de obra barata vinda do êxodo rural causado pelos cercamentos de terras.</p>
            <p>Imagine cidades que cresceram do dia para a noite, sem saneamento, onde famílias inteiras viviam em apenas um cómodo. Esse foi o cenário das primeiras cidades industriais como Manchester.</p>
            <div class="quiz-container">
                <p>Qual foi a principal fonte de energia da Primeira Revolução Industrial?</p>
                <button onclick="verificarResposta(this, 'correto')">A) Carvão Mineral</button>
                <button onclick="verificarResposta(this, 'errado')">B) Petróleo</button>
                <p class="feedback"></p>
            </div>
        `
    },
    "redacao-enem-nota-1000": {
        titulo: "Redação ENEM Nota 1000: Estrutura Passo a Passo",
        conteudo: `
            <p>Para tirar nota 1000, o aluno precisa dominar as 5 competências. A estrutura dissertativo-argumentativa é rígida e exige clareza.</p>
            <h2>Introdução</h2>
            <p>Deve conter o repertório sociocultural, o tema e a tese. A tese é o seu posicionamento crítico sobre o problema apresentado.</p>
            <h2>Desenvolvimento</h2>
            <p>É aqui que você defende sua tese usando argumentos de autoridade (filósofos, sociólogos, dados estatísticos).</p>
            <div class="quiz-container">
                <p>Quantos elementos obrigatórios deve ter a Proposta de Intervenção?</p>
                <button onclick="verificarResposta(this, 'correto')">A) 5 elementos</button>
                <button onclick="verificarResposta(this, 'errado')">B) 3 elementos</button>
                <p class="feedback"></p>
            </div>
        `
    },
    "globalizacao": {
        titulo: "Globalização: A Integração do Mundo Moderno",
        conteudo: `
            <p>A <strong>Globalização</strong> é um processo de integração económica, social, cultural e política que se intensificou após a Guerra Fria, com o avanço da tecnologia e dos transportes. Ela criou o que o geógrafo Milton Santos chamava de "meio técnico-científico-informacional".</p>
            <h2>As Facetas da Globalização</h2>
            <p>1. <strong>Económica:</strong> Surgimento de empresas transnacionais e blocos económicos (Mercosul, União Europeia).</p>
            <p>2. <strong>Cultural:</strong> A "Aldeia Global". Consumimos filmes americanos, ouvimos K-pop e comemos sushi no Brasil. Existe uma padronização do consumo.</p>
            <p>3. <strong>Informacional:</strong> A internet permite que o capital circule pelo mundo em segundos (capital especulativo).</p>
            <h2>Pontos Negativos</h2>
            <p>Embora traga tecnologia, ela gera exclusão digital e aumenta a desigualdade entre países desenvolvidos e subdesenvolvidos. Além disso, causa a perda de identidades culturais locais em favor de uma cultura de massa globalizada.</p>
            <div class="quiz-container">
                <p>O termo "Aldeia Global" refere-se a quê?</p>
                <button onclick="verificarResposta(this, 'correto')">A) Encurtamento das distâncias pela tecnologia</button>
                <button onclick="verificarResposta(this, 'errado')">B) O retorno das pessoas para viver no campo</button>
                <p class="feedback"></p>
            </div>
        `
    }
};

function carregarPost() {
    console.log("Tentando carregar o post..."); // Aparece no F12 do navegador
    const urlParams = new URLSearchParams(window.location.search);
    const idPost = urlParams.get('post');
    console.log("ID encontrado na URL:", idPost);

    const tituloElemento = document.getElementById('post-titulo');
    const conteudoElemento = document.getElementById('conteudo-principal');

    if (idPost && postsDB[idPost]) {
        const post = postsDB[idPost];
        tituloElemento.innerHTML = post.titulo;
        conteudoElemento.innerHTML = post.conteudo;
        document.title = post.titulo + " | DestravaEstudo";
    } else {
        tituloElemento.innerHTML = "Ops! Conteúdo não encontrado.";
        conteudoElemento.innerHTML = "<p>Verifique se o link está correto ou volte para a página inicial.</p><a href='index.html'>Voltar ao Início</a>";
    }
}

function verificarResposta(botao, status) {
    const feedback = botao.parentElement.querySelector('.feedback');
    if (status === 'correto') {
        feedback.innerHTML = "✅ Certíssimo! Continue assim.";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = "❌ Errado. Releia o texto!";
        feedback.style.color = "red";
    }
}

// Garante que o código roda após o HTML carregar
document.addEventListener('DOMContentLoaded', carregarPost);
