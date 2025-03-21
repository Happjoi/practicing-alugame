//preciso puxar os elementos que eu vou mexer, nesse caso, preciso mexer no botão, na imagem e no texto do botão
//nesse estou definindo a função já presente no html, criando ela, dentro dela, selecionamento o ID referente ao 'game-1' e as outras variaveis puxam as classes referente ao ID apresentado no começo da função, assim tenho todos os elemetos que eu preciso, para alterar os status dele.
// Eu preciso que quando a pessoa clique no botão, ela puxará o ID do jogo selecionado, assim a função vai rodar, mudando o status do jogo de "Alugar", para "Devolver" e támbem adicionar um sombreamento na imagem, referente ao status de "alugado"
function alterarStatus(id){
    let idDoJogo = document.getElementById(`game-${id}`);
    let imagemDoJogo = idDoJogo.querySelector(".dashboard__item__img");
    let botaoDoJogo = idDoJogo.querySelector(".dashboard__item__button");
    let nomeDoJogo = idDoJogo.querySelector(".dashboard__item__name");
    //ele tá puxando a class dashboard__item__button--return, criando a condição, se ela estiver presente na class, ele irá remover essa classe e remover a classe da imagem e alterando o texto, então basicamente ele tá mudando o status do botão e da imagem, removendo a classe extra presente no html e no caso oposto, ele tá adicionando a classe, caso ela não esteja presente
    if (botaoDoJogo.classList.contains("dashboard__item__button--return")) {
        // Se o jogo está alugado, devolve
        botaoDoJogo.textContent = "Alugar";
        botaoDoJogo.classList.remove("dashboard__item__button--return");
        imagemDoJogo.classList.remove("dashboard__item__img--rented"); // Remove o destaque de alugado
        alert(`Você acaba de devolver ${nomeDoJogo.textContent}`)
    } else {
        // Se o jogo está disponível, aluga
        botaoDoJogo.textContent = "Devolver";
        botaoDoJogo.classList.add("dashboard__item__button--return");
        imagemDoJogo.classList.add("dashboard__item__img--rented"); // Adiciona destaque de alugado
        alert(`Você acaba de alugar ${nomeDoJogo.textContent}`)
    }

}
