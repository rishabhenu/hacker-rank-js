// JavaScript source code

document.body.append(renderCalculator());
function renderCalculator() {
    let calculator = document.createElement('div');
    calculator.id = 'calculator';
    // render result section
    let res = document.createElement('button');
    res.id = 'res';
    calculator.appendChild(res);

    // render buttons
    let btns = document.createElement('div');
    btns.id = 'btns';

    for (let i = 0; i < 4; i++) {
        if (i < 2) {
            let btn = document.createElement('button');
            btn.id = 'btn' + i;
            btn.innerText = i;
            btn.className = 'input-buttons button';
            btn.onclick = function () {
                addEvents(btn.id);
            }
            btns.append(btn);
        } else {
            let btn = document.createElement('button');
            switch (i) {
                case 2:
                    btn.id = 'btnClr';
                    btn.className = 'button clearequal';
                    btn.innerText = 'C';
                    btn.onclick = function () {
                        addEvents(btn.id);
                    }
                    btns.append(btn);
                    break;
                case 3:
                    btn = document.createElement('button');
                    btn.id = 'btnEql';
                    btn.className = 'button clearequal';
                    btn.innerText = '=';
                    btn.onclick = function () {
                        addEvents(btn.id);
                    }
                    btns.append(btn);
            }
        }
    }

    for (let i = 0; i < 4; i++) {
        let btn = document.createElement('button');
        btn.className = 'operators button';
        switch (i) {
            case 0:
                btn.id = 'btnSum';
                btn.innerText = '+';
                btns.append(btn);
                btn.onclick = function () {
                    addEvents(btn.id);
                }
                break;
            case 1:
                btn.id = 'btnSub';
                btn.innerText = '-';
                btns.append(btn);
                btn.onclick = function () {
                    addEvents(btn.id);
                }
                break;
            case 2:
                btn.id = 'btnMul';
                btn.innerText = '*';
                btns.append(btn);
                btn.onclick = function () {
                    addEvents(btn.id);
                }
                break;
            case 3:
                btn.id = 'btnDiv';
                btn.innerText = '/';
                btns.append(btn);
                btn.onclick = function () {
                    addEvents(btn.id);
                }
                break;
        }
    }
    calculator.append(btns);
    return calculator;
}

function addEvents(id) {
    switch (id) {
        case 'btn0':
        case 'btn1':
        case 'btnSum':
        case 'btnSub':
        case 'btnMul':
        case 'btnDiv':
            let text = document.getElementById('res').innerText;
            text += document.getElementById(id).innerText;
            document.getElementById('res').innerText = text;
            break;
        case 'btnClr':
            document.getElementById('res').innerText = "";
            break;
        case 'btnEql':
            document.getElementById('res').innerText = doEqualOpr(document.getElementById('res').innerText);
            break;
    }
}

function doEqualOpr(resText) {
    let operator = '';
    switch (true) {
        case resText.includes('+'):
            operator = '+';
            break;
        case resText.includes('-'):
            operator = '-';
            break;
        case resText.includes('*'):
            operator = '*';
            break;
        case resText.includes('/'):
            operator = '/';
            break;
    }
    return doCalculation(resText, operator);
}

function doCalculation(text, operator) {
    text = text.split(operator);
    let val1 = parseInt(text[0], 2);
    let val2 = parseInt(text[1], 2);
    switch (operator) {
        case '+':
            return (val1 + val2).toString(2);
        case '-':
            return (val1 - val2).toString(2);
        case '*':
            return (val1 * val2).toString(2);
        case '/':
            return (val1 * val2).toString(2);
    }
}