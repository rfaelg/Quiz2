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
}
//verificando se tá certo
 function checar_resposta(opcao_escolhida) {
  if (opcao_escolhida === questoes[questao].certa) {
    tocar_correto()
    mostrarMensagem('🎉 Parabéns! Correto!', '#27ae60');
  } else {
    tocar_errado();
    mostrarMensagem('😯 Ops! Tente de novo!', '#e74c3c');
  }
  proxima_questao();
}
 

function proxima_questao() {
  questao++;
  if (questao < questoes.length) {
    perguntar();
  } else {
    parabens.play();
    mostrarMensagem('🎊 Parabéns! Você terminou!', '#3498db');
  }
}


function mostrarMensagem(texto, cor) {
  const msg = document.getElementById('msg');
  msg.textContent = texto;
  msg.style.display = 'block';
  msg.style.backgroundColor = cor;
  msg.style.color = 'white';
  msg.style.padding = '12px';
  msg.style.borderRadius = '8px';
  msg.style.textAlign = 'center';
  msg.style.fontSize = '20px';
  msg.style.fontWeight = 'bold';
  msg.style.marginTop = '20px';
  setTimeout(() => {
    msg.style.display = 'none';
  }, 2500);
}
