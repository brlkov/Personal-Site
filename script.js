let langN = 1;

document.querySelector('#lang').addEventListener('click', () => {
    if (langN === 1) {
        document.querySelector('.center h1').innerHTML = "Сергей Бурлаков<br>Личный сайт";
        document.querySelector('.center p').innerHTML = "Давайте знакомиться";
        document.querySelector('.main-button a').innerHTML = "Посмотреть проекты и резюме";
        langN = 2;
    }
    else if (langN === 2) {
        document.querySelector('.center h1').innerHTML = "Sergey Burlakov<br>Personal site";
        document.querySelector('.center p').innerHTML = "let's get acquainted";
        document.querySelector('.main-button a').innerHTML = "See projects and resume";
        langN = 1;
    }
});