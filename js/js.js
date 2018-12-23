/**
  * появление и исчезновение исчезновение 
  * с интервалом в три секунды
  */

/*
var block = document.querySelectorAll('.block');

function randomImg(obj, num) {

	var ran = Math.floor(Math.random(0, 10) * num);

	for (var i = 0; i < obj.length; i++) {
        obj[i].style.display = "none";
	}

    obj[ran].style.display = "block";
}

setInterval(randomImg, 3000, block, 31);
*/

/* -----   ----- */

/**
  * анимация исчезнавения регулируеться через css
  * в классе .active меняется время анимации
  * используется @keyframes
*/

alert("Сделай клик по карте или в данном окне.");

var map = document.getElementById('map');
var block = document.querySelectorAll('.block');
var arr = [];
var count = 1;

map.addEventListener("click", function() {

    var number = randomNumber();

    if (arr.indexOf(number) === -1) {
        checkNumber(number);
    } else {
        number = randomNumber();
        checkNumber(number);
    }

}); 

function checkNumber(number) {
    // если нет такого числа в массиве то возвращает -1 
    if (arr.indexOf(number) === -1) {
        //  добовляем число в конец массива
        arr.push(number);

        block[number].classList.add("active");

        setTimeout(timeHidden, 3000, number);   
        // когда счетчик и кол-во элементов в массиве = 6
        if (count === 6 || arr.length === 6) { 
            // удаляем класс активации всем элементам
            for (var i = 0; i < block.length; i++) {
                block[i].classList.remove("active");
            }
            // обнуляем массив и устонавливаем перменную count = 1
            count = 1;
            arr = [];
        }
        // прибовляем к счетчику 1
        count++;
      
    } else {
        number = randomNumber();
        checkNumber(number);
    }

}

function randomNumber() {
    // произвольные числа от 0 до 31
    var number = Math.floor(Math.random(0, 10) * 31);

    return number;
}

function timeHidden(number) {

    arr.pop();

    if(count > 0) {
        count--;
    }

    block[number].classList.remove("active");
}
