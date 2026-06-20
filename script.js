// ===============================
// CARROSSEL DE IMAGENS DO TOPO
// ===============================

const imagens = [
    "IMAGENS/acai1.png",
    "IMAGENS/polpa.jpg",
    "IMAGENS/nutella.webp",
    "IMAGENS/creme.webp"
];

let indiceAtual = 0;

const hero = document.querySelector(".hero");

function trocarImagem() {

    hero.style.backgroundImage = `
    linear-gradient(
        rgba(18,0,31,0.70),
        rgba(18,0,31,0.70)
    ),
    url('${imagens[indiceAtual]}')
    `;

    indiceAtual++;

    if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }
}

// Carrega a primeira imagem
trocarImagem();

// Troca a cada 5 segundos
setInterval(trocarImagem, 5000);


// ===============================
// EFEITO NO HEADER AO ROLAR
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#12001f";
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.4)";
    } else {
        header.style.background = "#1a002c";
        header.style.boxShadow = "none";
    }

});


// ===============================
// ANIMAÇÃO DOS CARDS
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});


// ===============================
// ANIMAÇÃO DA PROMOÇÃO
// ===============================

const promo = document.querySelector(".promo");

if (promo) {

    promo.addEventListener("mouseenter", () => {
        promo.style.transform = "scale(1.03)";
        promo.style.transition = "0.3s";
    });

    promo.addEventListener("mouseleave", () => {
        promo.style.transform = "scale(1)";
    });

}


// ===============================
// ANO AUTOMÁTICO NO FOOTER
// ===============================

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} Açaí da Jessy - Todos os direitos reservados.`;
}
// ===============================
// NOVAS AVALIAÇÕES
// ===============================

const formulario = document.getElementById("form-avaliacao");

if(formulario){

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const estrelas = document.getElementById("estrelas").value;
        const comentario = document.getElementById("comentario").value;

        const reviews = document.querySelector(".reviews");

        const novaReview = document.createElement("div");

    

        reviews.prepend(novaReview);

        formulario.reset();

        alert("Obrigado pela sua avaliação! 💜");

    });

}