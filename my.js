function square() {
    var a = parseFloat(document.getElementById('A').value);
    var b = parseFloat(document.getElementById('B').value);
    var c = parseFloat(document.getElementById('C').value);
    var box = document.getElementById('korni');

    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                box.innerHTML = 'Уравнение верно при любом x';
            } else {
                box.innerHTML = 'Решений нет';
            }
        } else {
            box.innerHTML = 'Линейное уравнение: x = ' + (-c / b);
        }
        return;
    }

    var D = b * b - 4 * a * c;
    var s = Math.sqrt(D);

    if (D > 0) {
        var x1 = (-b + s) / (2 * a);
        var x2 = (-b - s) / (2 * a);
        box.innerHTML = 'D = ' + D + ' (D > 0) — два корня<br>x1 = ' + x1 + '<br>x2 = ' + x2;
    } else if (D === 0) {
        var x = -b / (2 * a);
        box.innerHTML = 'D = 0 — один корень x = ' + x;
    } else {
        box.innerHTML = 'D = ' + D + ' (D < 0) — корней нет';
    }
}

function calculate() {

    var initial = Number(form.money.value);
    var interest = Number(form.stavka.value) / 100;
    var years = Number(form.months.value) / 12;

    var result = Math.round(initial * (1 + interest) ** years);

    document.getElementById('mon-before').innerHTML = initial;
    document.getElementById('mon-after').innerHTML  = result;

    var gist = document.getElementById('gist');
    if (initial > 0) {
        gist.style.height = Math.round((result / initial) * 100) + 'px';
    } else {
        gist.style.height = '0px';
    }
}

var form = document.forms.calculator;
form.money.oninput = calculate;
form.stavka.oninput = calculate;
form.months.onchange = calculate;