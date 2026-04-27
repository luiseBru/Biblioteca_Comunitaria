
const livrosEncontrados = [

    {
        id: 1,
        titulo: "A Chave do Tamanho",
        autor: "Monteiro Lobato",
        imagem: "https://tse1.mm.bing.net/th/id/OIP.VJOtHSIepSLr4Mo4pskVSwHaJX?w=202&h=256&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        disponivel: true
    },

    {
        id: 2,
        titulo: "Memórias de Emília",
        autor: "Monteiro Lobato",
        imagem: "https://tse1.mm.bing.net/th/id/OIP.jbH7Z8dKs9VmA-3ZXqBapQHaJd?w=202&h=258&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        disponivel: false
    },

    {
        id: 3,
        titulo: "Dinossauros",
        autor: "Sol Oliveira",
        imagem: "https://tse3.mm.bing.net/th/id/OIP.sds_2AHTYs8CHjsasawYlwHaJS?w=174&h=218&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        disponivel: true
    },

    {
        id: 4,
        titulo: "Sítio do Picapau Amarelo",
        autor: "Monteiro Lobato",
        imagem: "https://tse3.mm.bing.net/th/id/OIP.tfUOAt_cUPjeJ1gGk6kFrwHaKu?w=202&h=293&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        disponivel: true
    },

    {
        id: 5,
        titulo: "Histórias das Invenções",
        autor: "Monteiro Lobato",
        imagem: "https://tse3.mm.bing.net/th/id/OIP.LOFXjHtnH40pgZJCGu7MlwHaJy?w=202&h=267&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        disponivel: true
    }

];

const resultadosBusca = document.getElementById("resultadosBusca");

function exibirLivros(livros) {

    livros.forEach(function(livro) {

        
        const card = document.createElement("div"); 
        card.classList.add("livro");

        const img = document.createElement("img");
        img.setAttribute("src", livro.imagem);

        const titulo = document.createElement("h3");
        titulo.textContent = livro.titulo;

        const autor = document.createElement("p");
        autor.textContent = "Autor: " + livro.autor;

        const status = document.createElement("div");
        status.classList.add("status");

        if (livro.disponivel) {

            status.textContent = "Disponível";

        } else {

            status.textContent = "Indisponível";

        }

        const botao = document.createElement("button");
        botao.classList.add("botao");

        if (livro.disponivel) {
            botao.textContent = "Reservar";
        } else {
            botao.textContent = "Receber aviso";
            botao.disabled = true;

        }

        botao.addEventListener("click", function() {

            botao.textContent = "Reservado!";
            botao.disabled = true;

            console.log("Livro reservado: " + livro.titulo);

        });

        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(autor);
        card.appendChild(status);
        card.appendChild(botao);

        resultadosBusca.appendChild(card);

    });
    
}

exibirLivros(livrosEncontrados);
 