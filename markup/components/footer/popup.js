const form = document.querySelector('.footer__container'),
      popup = document.querySelector('.popup-wrap');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputs = form.querySelectorAll('.form-group input');
  console.log(inputs);
  inputs.forEach(function (search) {
    console.log(search.value);
  });
popup.classList.add('isSubmited');
popup.style.display = 'none'?'block':'none';
});
const ModalCloseWrapper = document.querySelector('.popup-wrap');
    ModalCloseWrapper.addEventListener('click', function(e) {
    e.preventDefault();
    // ModalCloseWrapper.classList.remove('popup-wrap');  
    ModalCloseWrapper.style.display = 'none';
    ModalCloseWrapper.classList.remove('popup-wrap','isSubmited');
    
    });


