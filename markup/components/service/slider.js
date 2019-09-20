// autoslider();
// let left = 0;
// var timer;

// function autoslider(){
//     timer = setTimeout(function(){
//         var polosa = document.getElementById('slider__line')
//         left = left - 350;
//         if (left < -100){
//             left = 0;
//             clearTimeout(timer);
//         }
//         polosa.style.left = left + 'px';
//         autoslider();
//     }, 2000);
// }
autoslider();
let left = 0;
var timer;

function autoslider(){
    timer = setTimeout(function(){
        var polosa = document.getElementById('slider__line');
        left = left - 574; //на сколько px сдвиг влево
        if(left < -2280){ // предел сдвига - кол-во картинок * на ширину одной картинки
            left = 0;// вернуть до 0 значения слева
            clearTimeout(timer);
        }
        polosa.style.left = left + 'px';
        autoslider();
    }, 2100);
}
