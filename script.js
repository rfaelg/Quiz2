//lista de perguntas 
const questoes = [
  {
    pergunta: "1. O que é o Sistema Nervoso?",
    opcoes: ["O sistema que transporta sangue e nutrientes pelo corpo.","O sistema que coordena as ações do corpo e transmite sinais pelo organismo","O sistema que digere os alimentos e absorve os nutrientes."],
    certa: 1 //segunda opção 
  },
  {
    pergunta: "2 qual é a principal célula do sistema nervoso?",
    opcoes: ["Neurônio","Glóbulo Vermelho","Célula do Sangue"],
    certa: 0 //primeira opção ,
  },
  {
    pergunta: "3. Qual é a função dos nervos?",
    opcoes: ["Bombear o sangue","Levar mensagens entre o corpo e o cérebro","Digerir os alimentos"],
    certa: 1 
  },
  {
    pergunta: "4. Quais são as partes do Sistema Nervoso Central?",
    opcoes: ["Pulmões e Nariz","Coração e Artérias","Cérebro e Medula Espinhal"],
    certa: 2,
  },
  {
    pergunta: "5. O que protege o cérebro?",
    opcoes: ["O Crânio","A coluna","As costelas"],
    certa: 0 ,
  },
  {
    pergunta: "6. O que é o ato reflexo?",
    opcoes: ["Movimento lebto e planejado","Comando do coração","Reação rápida sem pensar"],
    certa: 2 ,
  },
  {
    pergunta: "7. Qual parte controla o equilíbrio?",
    opcoes: ["Cerebelo","Estômago","Coração"],
    certa: 0 ,
  },
  {
    pergunta: "8. O que a Medula Espinhal faz?",
    opcoes: ["Digere os alimentos","Produz sangue novo","Liga o Cérebro ao resto do corpo"],
    certa: 2 ,
  },
  {
    pergunta: "9. Como se protege o Sistema Nervoso?",
    opcoes: ["Não bebendo água","Dormindo bem, e protegendo a cabeça","Comendo só doce"],
    certa: 1,
  }
];
//variável guardando, o número da questão.
let questao = 0
function perguntar() {
  //pega o elemento pergunta 
  const encontrar_pergunta = document.getElementById("pergunta");
  //troca o texto 
  encontrar_pergunta.innerText = questoes[questao].pergunta;
  //encontra os botões 
  const botoes = document.querySelectorAll(".botao");
  //altera os botões para a sua respectiva opção 
  alterar_botoes(botoes);
}
function alterar_botoes(botoes) {
  botoes[0].innerText = questoes[questao].opcoes[0]
  botoes[1].innerText = questoes[questao].opcoes[1]
  botoes[2].innerText = questoes[questao].opcoes[2]
}
perguntar();
//definindo a resposta correta 
const resposta_certa = questoes[questao].certa;
//[extra] áudios 
const correto = new Audio("correto.mp3");
const errado = new Audio("errado.mp3");
const parabens = new Audio("parabens.mp3");
function tocar_errado() {
  errado.currentTime = 0;
  errado.play();
}
function tocar_correto() {
  correto.currentTime = 0;
  correto.play();
};
//imagens do Siqueira 
function mostrar_certo() {
  const imagemf = document.getElementById('imagem');
  imagemf.classList.remove('siqueiraf','siqueirat')
  imagemf.classList.add('siqueiraf');
  console.log(imagemf.classList);
};

function mostrar_errado() {
  const imagemt = document.getElementById('imagem');
  imagemt.classList.remove('siqueiraf','siqueirat')
  imagemt.classList.add('siqueirat');
  console.log(imagemt.classList)
};

//verificando se tá certo
 function checar_resposta(opcao_escolhida) {
  if (opcao_escolhida === questoes[questao].certa) {
    mostrar_certo();
    tocar_correto();
  } else {
    mostrar_errado();
    tocar_errado();
  }
  proxima_questao();
}
 

function proxima_questao() {
  questao++;
  if (questao < questoes.length) {
    perguntar();
  } else {
    parabens.play();
  }
};