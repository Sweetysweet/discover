document.querySelector('.menu-toggle').addEventListener('click', function(e){
    e.preventDefault();
    this.classList.toggle('open');
    document.querySelector('.menu-wrap').classList.toggle('open');
})