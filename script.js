// Define a variável que armazena o índice do slide atual
let slideIndex = 0;

// Chama a função para mostrar o slide atual ao carregar a página
showSlides(slideIndex);

// Função para avançar ou retroceder nos slides
function passarSlides(n) {
    // Atualiza o índice do slide e chama a função para mostrar o slide correspondente
    showSlides(slideIndex += n);
}

// Função para mostrar o slide baseado no índice passado como argumento
function showSlides(n) {
    //  todos os elementos com a classe "slide-img"
    let slides = document.getElementsByClassName("slide-img");

    // Se o índice é maior ou igual ao número de slides, volta ao primeiro slide
    if (n >= slides.length) {
        slideIndex = 0;
    }

    // Se o índice é menor que zero, vai para o último slide
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Esconde todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Mostra o slide correspondente ao índice atual
    slides[slideIndex].style.display = "block";
}

// Inicializa o slideshow exibindo a primeira imagem quando o documento é totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
});
