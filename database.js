const postsDB = {
    "bhaskara": {
        titulo: "Fórmula de Bhaskara: O Guia Definitivo e Completo",
        categoria: "Matemática",
        conteudo: `
            <p>A <strong>Fórmula de Bhaskara</strong> é, sem dúvida, um dos pilares da matemática do ensino médio. Ela permite encontrar as raízes de uma equação do segundo grau, ou seja, os valores de x que tornam a sentença verdadeira.</p>
            
            <h2>O que é uma Equação do 2º Grau?</h2>
            <p>Antes de aplicar a fórmula, você precisa garantir que sua equação está no formato padrão: <strong>ax² + bx + c = 0</strong>. Onde 'a' nunca pode ser zero.</p>
            
            <h3>Passo 1: Identificar os Coeficientes</h3>
            <p>Este é o erro mais comum. Se a equação for x² - 5x + 6 = 0, os coeficientes são: a=1, b=-5 e c=6. Sempre leve o sinal junto com o número!</p>

            <h3>Passo 2: O Cálculo do Delta (Δ)</h3>
            <p>O discriminante (Delta) nos diz o futuro da conta. A fórmula é: <strong>Δ = b² - 4ac</strong>.</p>
            <div class="exemplo">
                <strong>Exemplo Real:</strong><br>
                Se Δ > 0, teremos dois resultados diferentes.<br>
                Se Δ = 0, teremos dois resultados iguais.<br>
                Se Δ < 0, a conta para por aqui (no conjunto dos Reais).
            </div>

            <h2>Interação: Teste seu conhecimento</h2>
            <div class="quiz-container">
                <p>Na equação 2x² - 4x + 2 = 0, qual o valor de Delta?</p>
                <button onclick="verificarResposta(this, '0')">A) 0</button>
                <button onclick="verificarResposta(this, '16')">B) 16</button>
                <button onclick="verificarResposta(this, '8')">C) 8</button>
                <p class="feedback"></p>
            </div>
        `
    },
    "concordancia-nominal": {
        titulo: "Concordância Nominal: Regras, Exceções e Exemplos",
        categoria: "Português",
        conteudo: `
            <p>A concordância nominal é a relação que estabelece entre o substantivo e as palavras que o acompanham (artigos, adjetivos, numerais).</p>
            <h2>A Regra Geral</h2>
            <p>O adjetivo deve concordar em gênero e número com o substantivo. "Menino bonito", "Meninas bonitas". Parece óbvio, mas complica nas exceções!</p>
            
            <h3>Casos Especiais: "Anexo", "Obrigado" e "Incluso"</h3>
            <p>Essas palavras concordam com o substantivo a que se referem.</p>
            <ul>
                <li>A foto segue <strong>anexa</strong>.</li>
                <li>O documento segue <strong>anexo</strong>.</li>
                <li>Os papéis seguem <strong>anexos</strong>.</li>
            </ul>

            <div class="exemplo">
                <strong>Cuidado:</strong> A expressão "em anexo" é invariável. <br>
                Ex: "As fotos seguem em anexo" (Sempre igual).
            </div>

            <h2>Interação: Qual o correto?</h2>
            <div class="quiz-container">
                <p>Escolha a frase gramaticalmente correta:</p>
                <button onclick="verificarResposta(this, 'errado')">A) Segue anexo as faturas.</button>
                <button onclick="verificarResposta(this, 'correto')">B) Seguem anexas as faturas.</button>
                <p class="feedback"></p>
            </div>
        `
    }
    // Adicione mais posts aqui seguindo o mesmo padrão
};
