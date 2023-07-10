// declaration of variable
let a = Number(document.getElementById('num1').value);
let b = Number(document.getElementById('num2').value);
let c = document.getElementById('signn');
let d = document.getElementById('anser');

let plusss = document.getElementById('plus');
let minusss = document.getElementById('minus');
let divideee = document.getElementById('divide');
let multiplyy = document.getElementById('multiply');

// function to add number when you press the + button
function addNum(){
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    let c = document.getElementById('signn');
    let d = document.getElementById('anser');

    totalNum = a + b;
    c.innerHTML = '+'
    d.innerHTML = `= ${totalNum}`;
}
plusss.addEventListener('click', addNum);

// function to minus number when you press the - button
function minusNum(){
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    let c = document.getElementById('signn');
    let d = document.getElementById('anser');
    totalNum = a - b;
    c.innerHTML = '-'
    d.innerHTML = `= ${totalNum}`;
}
minusss.addEventListener('click', minusNum);

// function to divide number when you press the / button
function divideNum(){
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    let c = document.getElementById('signn');
    let d = document.getElementById('anser');
    totalNum = a / b;
    c.innerHTML = '/'
    d.innerHTML = `= ${totalNum}`;
}
divideee.addEventListener('click', divideNum);

// function to multiply number when you press the * button
function multiplyNum(){
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    let c = document.getElementById('signn');
    let d = document.getElementById('anser');
    totalNum = a * b;
    c.innerHTML = '*'
    d.innerHTML = `= ${totalNum}`;
}
multiplyy.addEventListener('click', multiplyNum);

