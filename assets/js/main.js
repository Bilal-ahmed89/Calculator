function add()
{
    let a = document.getElementById('txt-1').value;
    let b = document.getElementById('txt-2').value;
    let c = parseInt(a) + parseInt(b);
    document.getElementById('txt-3').value = c;
    
}
function subtract()
{
    let a = document.getElementById('txt-1').value;
    let b = document.getElementById('txt-2').value;
    let c = parseInt(a) - parseInt(b);
    document.getElementById('txt-3').value = c;
    
}
function multiply()
{
    let a = document.getElementById('txt-1').value;
    let b = document.getElementById('txt-2').value;
    let c = parseInt(a) * parseInt(b);
    document.getElementById('txt-3').value = c;
    
}
function divide()
{
    let a = document.getElementById('txt-1').value;
    let b = document.getElementById('txt-2').value;
    let c = parseInt(a) / parseInt(b);
    document.getElementById('txt-3').value = c;
    
}
function exponent()
{
    let a = document.getElementById('txt-1').value;
    let b = document.getElementById('txt-2').value;
    let c = parseInt(a) ** parseInt(b);
    document.getElementById('txt-3').value = c;
    
}
function percentage()
{
    let a = document.getElementById('txt-1').value;
    let b = document.getElementById('txt-2').value;
    let c = parseInt(a) / parseInt(b);
    let r = 100;
    let d = c * parseInt(r);
    document.getElementById('txt-3').value = d;
    
}
function average()
{
    let a = document.getElementById('txt-1').value;
    let b = document.getElementById('txt-2').value;
    let c = parseInt(a) + parseInt(b);
    let d = 2;
    let e = parseInt(c) / parseInt(d);
    document.getElementById('txt-3').value = e;
    
}
