const rolelis = document.querySelectorAll('.content .box .role li');
const lihui = document.querySelectorAll('.content .box .introduce .lihui li');
const info = document.querySelectorAll('.content .box .introduce .info li');
const yuansu = document.querySelectorAll('.content .box .introduce .yuansu li');
const intro = document.querySelectorAll('.content .box .introduce .intro li');

for(let i = 0; i < rolelis.length; i++) {
    rolelis[i].addEventListener('click', function() {
        document.querySelector('.content .box .role .select').classList.remove('select');
        this.classList.add('select');
        for(let j = 0; j < lihui.length; j++) {
            lihui[j].classList.add('select');
            info[j].classList.add('select');
            yuansu[j].classList.add('select');
            intro[j].classList.add('select');
        }
        lihui[i].classList.remove('select');
        info[i].classList.remove('select');
        yuansu[i].classList.remove('select');
        intro[i].classList.remove('select');
    })
}