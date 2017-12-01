window.addEventListener('DOMContentLoaded', function () {
    calulator();
});

function calulator() {

    var button = document.querySelectorAll('.button');
    var result = document.getElementById('result');
    var clear = document.getElementById('clear');

    for (var i = 0; i < button.length; i++) {
        if (button[i].innerHTML === '=') {
            button[i].addEventListener('click', calculate(i));
        } else {
            button[i].addEventListener('click', addtocurrentvalue(i));
        }
    }

    function addtocurrentvalue(i) {
        return function () {
            if (button[i].innerHTML === '÷') {
                result.innerHTML += '/ ';
            } else if (button[i].innerHTML === 'x') {
                result.innerHTML += '*';
            } else if (button[i].innerHTML === 'x') {
                result.innerHTML = 'x';
            } else if (button[i].innerHTML === 'del') {
                result.innerHTML = result.innerHTML.slice(0, -1);
            } else {
                result.innerHTML += button[i].innerHTML;
            }
        };
    }

    clear.onclick = function () {
        result.innerHTML = '';
    };

    function calculate(i) {
        return function () {
            result.innerHTML = eval(result.innerHTML);
        };
    }
}
