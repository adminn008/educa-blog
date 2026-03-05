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

    "redacao-enem-nota-1000": {
        titulo: "Redação ENEM Nota 1000: O Guia Definitivo da Estrutura Dissertativo-Argumentativa",
        categoria: "Redação",
        conteudo: `
            <p>Se você quer destravar sua nota no ENEM, precisa entender que a redação não é um dom, é um <strong>processo de engenharia</strong>. Existe uma estrutura fixa que os corretores buscam. Neste guia, vamos dissecar cada parágrafo.</p>
            
            

            <h2>1. A Introdução: O Cartão de Visitas (6 a 8 linhas)</h2>
            <p>Sua introdução deve cumprir três funções básicas: Repertório, Contextualização e Tese.</p>
            <ul>
                <li><strong>Repertório:</strong> Comece com uma citação, um fato histórico ou um filme. Ex: "No filme 'Coringa', observa-se a negligência estatal com a saúde mental..."</li>
                <li><strong>Conectivo + Tema:</strong> Ligue o filme ao tema real da redação.</li>
                <li><strong>Tese:</strong> Apresente dois problemas (Causa A e Causa B) que você vai resolver nos próximos parágrafos.</li>
            </ul>

            <div class="exemplo">
                <strong>Dica de Ouro:</strong> Nunca comece direto no tema. Use uma "alça" cultural para mostrar ao corretor que você tem bagagem.
            </div>

            <h2>2. Desenvolvimento 1 e 2: O Coração do Texto</h2>
            <p>Cada parágrafo de desenvolvimento (D1 e D2) deve focar em uma das causas que você citou na introdução.</p>
            <p><strong>Estrutura do Desenvolvimento:</strong></p>
            <ol>
                <li><strong>Tópico Frasal:</strong> Uma frase curta resumindo o argumento.</li>
                <li><strong>Repertório de Legitimação:</strong> Um dado estatístico, conceito filosófico ou geográfico.</li>
                <li><strong>Análise Crítica:</strong> Aqui é onde você "briga" com o problema. Explique POR QUE aquilo acontece.</li>
                <li><strong>Consequência:</strong> Mostre o impacto disso na sociedade.</li>
            </ol>

            <h2>3. Conclusão: A Proposta de Intervenção (PI)</h2>
            <p>Aqui você ganha ou perde 200 pontos. O ENEM exige 5 elementos obrigatórios:</p>
            <table>
                <tr>
                    <th>Elemento</th>
                    <th>Pergunta para responder</th>
                </tr>
                <tr>
                    <td><strong>Agente</strong></td>
                    <td>Quem vai fazer? (Ex: Ministério da Educação)</td>
                </tr>
                <tr>
                    <td><strong>Ação</strong></td>
                    <td>O que será feito? (Ex: Criar projetos pedagógicos)</td>
                </tr>
                <tr>
                    <td><strong>Meio/Modo</strong></td>
                    <td>Como será feito? (Ex: Por meio de verbas federais)</td>
                </tr>
                <tr>
                    <td><strong>Efeito</strong></td>
                    <td>Para que serve? (Ex: Com o fito de reduzir o preconceito)</td>
                </tr>
                <tr>
                    <td><strong>Detalhamento</strong></td>
                    <td>Explicação extra de qualquer item acima.</td>
                </tr>
            </table>

            

            <h2>Interação: Desafio dos 5 Elementos</h2>
            <div class="quiz-container">
                <p>Na frase: "O Governo Federal (1) deve investir em infraestrutura (2) através de parcerias privadas (3) para melhorar o trânsito (4), visando garantir o direito de ir e vir dos cidadãos (5)", o número <strong>(3)</strong> representa qual elemento?</p>
                <button onclick="verificarResposta(this, 'errado')">A) Agente</button>
                <button onclick="verificarResposta(this, 'correto')">B) Meio / Modo</button>
                <button onclick="verificarResposta(this, 'errado')">C) Detalhamento</button>
                <p class="feedback"></p>
            </div>

            <h2>Dicas Finais para o Sucesso</h2>
            <p>Use conectivos em todos os começos de parágrafo: "Nesse sentido", "Outrossim", "Portanto". Isso garante pontos na Competência 4.</p>
        `
    },

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

            <div class="exemplo">
                <strong>Análise Crítica:</strong> A Revolução Industrial criou a classe do <em>Proletariado</em> (quem vende sua força de trabalho) e consolidou a <em>Burguesia</em> (dona dos meios de produção).
            </div>

            <h2>4. Consequências Ambientais</h2>
            <p>Foi aqui que o impacto humano no clima começou a acelerar drasticamente. A queima de combustíveis fósseis liberou quantidades sem precedentes de CO2 na atmosfera. As cidades tornaram-se poluídas, cinzentas e insalubres, facilitando a propagação de doenças como o cólera.</p>

            <h2>Interação: Desafio de História</h2>
            <div class="quiz-container">
                <p>Qual movimento operário ficou conhecido por invadir fábricas e destruir máquinas como forma de protesto contra a precarização do trabalho?</p>
                <button onclick="verificarResposta(this, 'correto')">A) Ludismo</button>
                <button onclick="verificarResposta(this, 'errado')">B) Cartismo</button>
                <button onclick="verificarResposta(this, 'errado')">C) Fordismo</button>
                <p class="feedback"></p>
            </div>

            <h2>Resumo para Revisão</h2>
            <p>Para não esquecer: A Revolução Industrial trouxe o progresso tecnológico, mas ao custo de grande desigualdade social inicial. Ela mudou a percepção do tempo (o relógio passou a mandar no homem) e globalizou o consumo.</p>
        `
    },
