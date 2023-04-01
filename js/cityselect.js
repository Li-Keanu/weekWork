const lis = document.querySelectorAll('.content .nav li');

for(let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function() {
        document.querySelector('.content .nav .select').classList.remove('select');
        this.classList.add('select');
    })
}