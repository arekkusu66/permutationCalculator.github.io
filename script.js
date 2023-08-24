const resultPlace = document.querySelector('#result');
let isRepetitionAllowed = true;
let isOrderImportant = true;

function repetitionToggle() {
    const rep_btn = document.querySelector('#rep-btn');
    
    if (isRepetitionAllowed) {
        rep_btn.textContent = 'no';
        rep_btn.style.backgroundColor = '#f00';
        isRepetitionAllowed = false;
    } else {
        rep_btn.textContent = 'yes';
        rep_btn.style.backgroundColor = '#0f0';
        isRepetitionAllowed = true;
    }
}

function orderToggle() {
    const ord_btn = document.querySelector('#ord-btn');

    if (isOrderImportant) {
        ord_btn.textContent = 'no';
        ord_btn.style.backgroundColor = '#f00';
        isOrderImportant = false;
    } else {
        ord_btn.textContent = 'yes';
        ord_btn.style.backgroundColor = '#0f0';
        isOrderImportant = true;
    }
}

function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    
    return num * factorial(num - 1);
}  

function permutations() {
    const n = parseInt(document.querySelector("#n-input").value);
    const r = parseInt(document.querySelector("#r-input").value);

    let result;
  
    if (isRepetitionAllowed && isOrderImportant) {
        result = Math.pow(n, r);
    } else if (!isRepetitionAllowed && isOrderImportant && n > r && n != 0 && r != 0) {
        result = factorial(n) / factorial(n - r);
    } else if (isRepetitionAllowed && !isOrderImportant && r != 0 && n != 0) {
        result = factorial(r + n - 1) / (factorial(r) * factorial(n - 1));
    } else if (!isRepetitionAllowed && !isOrderImportant && r != 0 && n != 0 && n > r) {
        result = factorial(n) / (factorial(r) * factorial(n - r));
    }
    
    else if (!isRepetitionAllowed && isOrderImportant && n === r) {
        result = factorial(n) / factorial(n - r);
    }
    else if (!isRepetitionAllowed && !isOrderImportant && n === r) {
        result = 1;
    }
    else if (!isRepetitionAllowed && !isOrderImportant && r > n) {
        result = 'r > n';
    }
    else if (isOrderImportant && !isRepetitionAllowed && r > n) {
        result = 'r > n';
    }   
    
    
    else {
        console.log('error');
        return;
    }

    if (result.toString().length > 9) {
        result = result.toExponential(7);
    }
  
    resultPlace.textContent = result;
}