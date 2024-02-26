function sum() {
    let L1 = document.getElementById('liczba1').value;
    L1 = parseInt(L1); 
    let L2 = parseInt(document.getElementById('liczba2').value);
    let s = document.getElementById('suma'); 
    s.value = L1 + L2;
}
function division() {
    let L1 = document.getElementById('liczba1').value;
    L1 = parseInt(L1); 
    let L2 = parseInt(document.getElementById('liczba2').value);
    let s = document.getElementById('suma'); 
    s.value = L1 - L2;
}
function multiply() {
    let L1 = document.getElementById('liczba1').value;
    L1 = parseInt(L1); 
    let L2 = parseInt(document.getElementById('liczba2').value);
    let s = document.getElementById('suma'); 
    s.value = L1 * L2;
}
function divide() {
    let L1 = document.getElementById('liczba1').value;
    L1 = parseInt(L1); 
    let L2 = parseInt(document.getElementById('liczba2').value);
    let s = document.getElementById('suma'); 
    s.value = L1 / L2;
}

function oblicz() {
    let L1 = document.getElementById('kwota').value;
    L1 = parseInt(L1); 
    let L2 = parseInt(document.getElementById('oprocent').value);
    let L3 = parseInt(document.getElementById('rat').value);
    
}
