
// aqui vai o codigo js para o menu hamburger, ele faz o toggle da classe 'open' no clique, e fecha o menu ao clicar fora, além de ajustar o atributo aria-expanded para acessibilidade

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
    });

    // fecha o menu ao clicar fora da area do menu hamburger
    document.addEventListener('click', function (e) {
        if (mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});