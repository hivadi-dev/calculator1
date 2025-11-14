const inp = document.querySelectorAll('input')
const sum = document.getElementById('sum')

let op = ''
function _op(tempOp) {
    op = tempOp
    sum.innerText = 'selected operation ' + op
}
function _sum() {
    let x = +inp[0].value
    let y = +inp[1].value

    if (x === '' || y === '') {
        alert('enter 2 numbers')
        return
    }
    if (op === '/' && y === 0) {
        alert('division by zero is not allowed')
        return
    }
    if (isNaN(x) || isNaN(y)) {
        alert('enter 2 valid numbers')
        return
    }
    if (!op) {
        alert('select an opration')
        return
    }
    switch (op) {
        case '+': x += y; break;
        case '-': x -= y; break;
        case '*': x *= y; break;
        case '/': x /= y; break;

        default: alert('please select an opration'); break;

    }
    sum.innerText = x
    inp[0].value = ''
    inp[1].value = ''
}
function _clearAll() {
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
    sum.innerText = ''
    op = ''
}