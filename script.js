var buttons = document.getElementsByClassName("button");
var displayText = document.getElementById('display-text');

var operand1 = 0;
var operand2 = null;
var operator = null;
var value;

function actionFunction(value) {
    //   if(value == "")
    //     break;
    if (value == 'AC') {
        displayText.innerHTML = "";
        operand1 = 0;
        operand2 = null;
        operator = null;
    } else if (value == '+/-') {
        if (displayText.textContent == "")
            displayText.innerText = '-';
        else if (displayText.textContent == "-") {
            displayText.innerText = "";
        }
        else {
            var x = parseFloat(displayText.textContent);
            x *= -1;
            displayText.innerText = x;
        }
    } else if (value == '%') {
        operator = '%';
        operand1 = parseFloat(displayText.textContent);
        displayText.innerText = "";
    } else if (value == '/') {
        operator = '/';
        operand1 = parseFloat(displayText.textContent);
        displayText.innerText = "";
    } else if (value == '*') {
        operator = '*';
        operand1 = parseFloat(displayText.textContent);
        displayText.innerText = "";
    } else if (value == '-') {
        operator = '-';
        operand1 = parseFloat(displayText.textContent);
        displayText.innerText = "";
    } else if (value == '+') {
        operator = '+';
        operand1 = parseFloat(displayText.textContent);
        displayText.innerText = "";
    } else if (value == '=') {
        operand2 = parseFloat(displayText.textContent);
        if (operand2 != null || operator != null)
            displayText.innerText = eval(operand1 + " " + operator + " " + operand2);
    }
    else {
        if (displayText.innerText.length == 25) {
            var saveText = displayText.innerText;
            displayText.innerText = "Limit Exceed";
            setTimeout(function () {
                displayText.innerText = saveText;
            }, 700);
        } else {
            displayText.innerText += value;
        }
    }
}

document.addEventListener('keypress', function (event) {
    value = "";
    if (event.keyCode == '37') {
        value = '%';
    }else if (event.keyCode == '13') {
        value = '=';
    }else if (event.keyCode == '8') {
        value = 'AC';
    } else if (event.keyCode == '47') {
        value = '/';
    } else if (event.keyCode == '42') {
        value = '*';
    } else if (event.keyCode == '45') {
        value = '-';
    } else if (event.keyCode == '43') {
        value = '+';
    } else if (event.keyCode == '46') {
        value = '.';
    } else if (event.keyCode == '61') {
        value = "=";
    } else if (event.keyCode >= '48' && event.keyCode <= '57') {
        value = String.fromCharCode(event.keyCode);
    }
    actionFunction(value);
});



for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        actionFunction(value);
    });
}