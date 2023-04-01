const as = document.querySelectorAll('.header .nav a');

for(let i = 0; i < as.length; i++) {
    as[i].addEventListener('click', function() {
        document.querySelector('.header .nav .active').classList.remove('active');
        this.classList.add('active');
    })
}