const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual das atitudes abaixo contribuiu para sustentabilidade ambiental?",
        alternativas: [
            {
                texto: "Reduzir o consumo de água",
                afirmacao: "A redução do consumo evita o desperdicio e ajuda a preservar os recursos hifricos disponiveis para as futuras gerções"
            },
            {
                texto: "utilizar fontes de energia renóval",
                afirmacao: "Fontes como energia solar e eólica reduzem a dependência de combustiveis fósseis e podem diminuir a emissão de gases de efeito estufa"
            }          
           
        ]
    },
    {
        enunciado: "Quais ações ajudam a combater as mudanças climáticas?",
        alternativas: [
            {
                texto:"Utilizar mas transportes públicos",
                afirmacao:"O transporte coletivo pode diminuir a quantidade de veículos nas ruas e, consequentemente, reduzir as emissões de gases poluentes por pessoa."
            },
            {
                texto: "Substituir combustíveis fósseis por energia solar",
                afirmacao:"A energia solar produz eletricidade sem a queima direta de carvão, petróleo ou gás, contribuindo para a redução das emissões de carbono."
            }
        ]
    },
    {
        enunciado: "Quais atitudes ajudam a diminuir a produção de resíduos?",
        alternativas: [
            {
                texto:"Reutilizar objetos antes de descartá-los.",
                afirmacao:"A reutilização aumenta a vida útil dos produtos e reduz a necessidade de fabricar novos objetos, economizando matéria-prima e energia."
            },
            {
                texto:"Escolher produtos com menos embalagens",
                afirmacao:"Menos embalagens significam menor quantidade de resíduos gerados e menor consumo de recursos utilizados na fabricação desses materiais."
            }
           
        ]
    },
    {
        enunciado: "Por que preservar as florestas é importante?",
        alternativas: [
            {
                texto:"As florestas são habitats de diversas espécies.",
                afirmacao:"A floresta é importante porque oferece alimento e abrigo para os animais."
            },
            {
                texto:"As florestas são importantes, porque ajudam a manter o equilíbrio da natureza",
                afirmacao:"As florestas são essenciais para o equilíbrio do meio ambiente, pois fornecem ar, água e abrigo para diversas formas de vida."
            }
           
        ]
    },
    {
        enunciado: "Porque as florestas são essenciais para a vida?",
        alternativas: [
            {
                texto: "As florestas ajudam a limpar o ar.",
                afirmacao:"porque as árvores absorvem gás carbônico."
            },
            {
                texto: "As árvores protegem o solo.",
                afirmacao:"porque suas raízes ajudam a evitar a erosão"
            }
           
           
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
