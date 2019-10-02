function popup() {
  const form = document.querySelector('.footer__container'),
      popup = document.querySelector('.popup-wrap');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll('.form-group input');
    console.log(inputs);
    // ***** arrow func *****
    inputs.forEach((search) => {
      console.log(search.value);
      search.value = '';
    });
  popup.classList.add('isSubmited');
  popup.style.display = 'none'?'block':'none';
  });
} 
popup();



function closeModalwindow() {
  const ModalClose = document.querySelector('.popup-wrap');
    ModalClose.addEventListener('click', (e) => {
    e.preventDefault(); 
    ModalClose.style.display = 'none';
    ModalClose.classList.remove('popup-wrap','isSubmited');
    location.reload();
    });
}
closeModalwindow();


