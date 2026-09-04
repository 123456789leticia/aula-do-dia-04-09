const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual das atitudes abaixo contribiu para a sustentabilidade ambiental?"
        alternativas: [
            {
                texto: "Reduzir o consumo de água",
                afirmacao: "A redução do consumo evita o desperdício e ajuda a preservar os recursos hídricos disponíveis para as futuras gerações."
            },
            {
                texto: "Utilizar fontes de energia renovável",
                afirmacao: "Fontes como energia solar e eólica reduzem a dependência de combustíveis fósseis e podem diminuir a emissão de gases de efeito estufa."
            }          
           
        ]
    },
    
        enunciado: "Quais ações ajudam a combater as mudanças climáticas?"
            {
                texto:"Utilizar mas transportes públicos"
                afirmacao:"O transporte coletivo pode diminuir a quantidade de veículos nas ruas e, consequentemente, reduzir as emissões de gases poluentes por pessoa."
            },
            {
                texto: " Substituir combustíveis fósseis por energia solar"
                afirmacao:"A energia solar produz eletricidade sem a queima direta de carvão, petróleo ou gás, contribuindo para a redução das emissões de carbono."
            }
        ]
    
    {
        enunciado: "Quais atitudes ajudam a diminuir a produção de resíduos?"
            {
                texto:"Reutilizar objetos antes de descartá-los."
                afirmacao:"A reutilização aumenta a vida útil dos produtos e reduz a necessidade de fabricar novos objetos, economizando matéria-prima e energia."

            
            },
            {
                texto:"Escolher produtos com menos embalagens"
                afirmacao:" Menos embalagens significam menor quantidade de resíduos gerados e menor consumo de recursos utilizados na fabricação desses materiais."
            }
           
    },
    {
        enunciado: "Por que preservar as florestas é importante?"
        alternativas: [
            
                texto:"As florestas são habitats de diversas espécies."
            {
                texto:"A destruição das florestas pode causar perda de habitats e ameaçar animais e plantas que dependem desses ambientes."
                afirmacao:"As florestas ajudam a armazenar ct caixaPrincipal = document.querySelector(".caixa-principal");
                const caixaPerguntas = document.querySelector(".caixa-perguntas");
                const caixaAlternativas = document.querySelector(".caixa-alternativas");
                const caixaResultado = document.querySelector(".caixa-resultado");
                const textoResultado = document.querySelector(".texto-resultado");
                
                const perguntas = [
                    {
                        enunciado: "Qual das atitudes abaixo contribiu para a sustentabilidade ambiental?"
                        alternativas: [
                            {
                                texto: "Reduzir o consumo de água",
                                afirmacao: "A redução do consumo evita o desperdício e ajuda a preservar os recursos hídricos disponíveis para as futuras gerações."
                            },
                            {
                                texto: "Utilizar fontes de energia renovável",
                                afirmacao: "Fontes como energia solar e eólica reduzem a dependência de combustíveis fósseis e podem diminuir a emissão de gases de efeito estufa."
                            }          
                           
                        ]
                    },
                    
                        enunciado: "Quais ações ajudam a combater as mudanças climáticas?"
                            {
                                texto:"Utilizar mas transportes públicos"
                                afirmacao:"O transporte coletivo pode diminuir a quantidade de veículos nas ruas e, consequentemente, reduzir as emissões de gases poluentes por pessoa."
                            },
                            {
                                texto: " Substituir combustíveis fósseis por energia solar"
                                afirmacao:"A energia solar produz eletricidade sem a queima direta de carvão, petróleo ou gás, contribuindo para a redução das emissões de carbono."
                            }
                        ]
                    
                    {
                        enunciado: "Quais atitudes ajudam a diminuir a produção de resíduos?"
                            {
                                texto:"Reutilizar objetos antes de descartá-los."
                                afirmacao:"A reutilização aumenta a vida útil dos produtos e reduz a necessidade de fabricar novos objetos, economizando matéria-prima e energia."
                
                            
                            },
                            {arbono."
            }
           
        ]
    }
    {
        enunciado: " As árvores absorvem dióxido de carbono durante a fotossíntese e armazenam parte desse carbono em sua biomassa, contribuindo para a regulação do clima."


        alternativas: [
            {
                texto: "Utilizar os recursos naturais de maneira responsável."
                afirmacao:" O uso consciente dos recursos evita o desperdício e ajuda a garantir que eles continuem disponíveis no futuro."
            },
            {
                texto: "Considerar aspectos ambientais, sociais e econômicos nas decisões."
                afirmacao:"A sustentabilidade não envolve apenas o meio ambiente; também busca equilibrar desenvolvimento econômico, qualidade de vida e preservação ambiental."



            
            }
           
           
        ]
    },
;

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
    const afirmaco    },

}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
