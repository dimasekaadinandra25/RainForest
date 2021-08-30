window.addEventListener('scroll', function(){
    const parallax = document.querySelector('.parallax')
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .6 + 'px)';
})